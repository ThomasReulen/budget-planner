package main

import (
	"crypto/md5"
	"encoding/csv"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"os/signal"
	"regexp"
	"strings"
	"syscall"
	"time"

	"github.com/gorilla/mux"

	"github.com/saintfish/chardet"
)

var API_PORT string

var DB_HOST string
var DB_PORT string

type Transaction struct {
	Identifier  string `json:"identifier"`
	Booked      string `json:"booked"`
	Valuta      string `json:"valuta"`
	Transtype   string `json:"type"`
	Transtext   string `json:"transtext"`
	Name        string `json:"name"`
	Bookingtext string `json:"bookingtext"`
	Refnr       string `json:"refnr"`
	Value       string `json:"value"`
}

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func GetMD5Hash(text string) string {
	hash := md5.Sum([]byte(text))
	return hex.EncodeToString(hash[:])
}

func DefaultRoute(w http.ResponseWriter, r *http.Request) {
	http.Error(w, "not implemented", http.StatusNotFound)
}

func uploadCsv(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	// Parse our multipart form, 10 << 20 specifies a maximum
	// upload of 10 MB files.
	r.ParseMultipartForm(10 << 20)

	// FormFile returns the first file for the given key `myFile`
	// it also returns the FileHeader so we can get the Filename,
	// the Header and the size of the file
	file, handler, err := r.FormFile("transfile")
	if err != nil {
		fmt.Println("Error Retrieving the File")
		fmt.Println(err)
		return
	}
	defer file.Close()
	fmt.Printf("Uploaded File: %+v\n", handler.Filename)
	fmt.Printf("File Size: %+v\n", handler.Size)
	fmt.Printf("MIME Header: %+v\n", handler.Header)

	// Create a temporary file within our temp-images directory that follows
	// a particular naming pattern
	tempFile, err := ioutil.TempFile("/tmp/", "upload-*.csv")
	if err != nil {
		fmt.Println(err)
	}
	defer tempFile.Close()

	// read all of the contents of our uploaded file into a
	// byte array
	fileBytes, err := ioutil.ReadAll(file)
	if err != nil {
		fmt.Println(err)
	}
	// write this byte array to our temporary file
	tempFile.Write(fileBytes)
	// return that we have successfully uploaded our file!

	fmt.Fprintf(w, "Successfully Uploaded File\n")
	fmt.Printf("%s", tempFile.Name())

	makeJsonData(tempFile.Name())

}

func makeJsonData(filename string) {

	fmt.Println("reading file " + filename)

	dat, err := os.ReadFile(filename)
	check(err)
	detector := chardet.NewTextDetector()
	result, err := detector.DetectBest(dat)
	if err == nil {
		fmt.Printf("Detected charset is %s\n", result.Charset)
	}

	csvFile, err := os.Open(filename)
	if err != nil {
		log.Fatal("Error while reading the file", err)
	}
	defer csvFile.Close()

	transactions := []*Transaction{}

	csvReader := csv.NewReader(strings.NewReader(string(dat)))
	csvReader.Comma = ';'
	csvReader.Comment = '#'
	csvReader.FieldsPerRecord = -1

	for {
		record, err := csvReader.Read()
		if err == io.EOF {
			break
		}
		check(err)
		re := regexp.MustCompile(`Auftraggeber:\s(.+?)\sBuchungstext:\s(.+?)\sRef\.\s(.+?)$`)
		res := re.FindStringSubmatch(record[3])
		t := Transaction{}
		if len(res) == 4 {
			t.Booked = record[0]
			t.Valuta = record[1]
			t.Transtype = record[2]
			t.Transtext = record[3]
			t.Value = record[4]
			t.Name = res[1]
			t.Bookingtext = res[2]
			t.Refnr = res[3]
			t.Identifier = GetMD5Hash(t.Booked + "|" + t.Refnr + "|" + t.Value)
			transactions = append(transactions, &t)
		}
	}

	jsonTransactions, err := json.Marshal(transactions)
	check(err)
	fmt.Println(string(jsonTransactions))

	err = ioutil.WriteFile(filename+".json", jsonTransactions, 0644)
	check(err)
	fmt.Println("finished writing " + filename + ".json")

}

func ping(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "pong")
}

func main() {

	makeJsonData("/tmp/upload-1906315998.csv")

	// var err error
	DB_HOST = os.Getenv("DB_HOST")
	DB_PORT = os.Getenv("DB_PORT")
	API_PORT = os.Getenv("API_PORT")

	if len(DB_HOST) == 0 {
		DB_HOST = "127.0.0.1"
	}

	if len(DB_PORT) == 0 {
		DB_PORT = "3306"
	}

	if len(API_PORT) == 0 {
		API_PORT = "8080"
	}

	time.Sleep(2 * time.Second)

	// capture syscalls
	c := make(chan os.Signal)
	signal.Notify(c, os.Interrupt, syscall.SIGTERM)
	go func() {
		<-c
		fmt.Fprintf(os.Stdout, "%s\n", "Syscall Exit(1)")
		os.Exit(1)
	}()

	myRouter := mux.NewRouter().StrictSlash(true)

	// user api

	// get transactions
	myRouter.HandleFunc("/v1//transactions/", ping).Methods("GET")
	myRouter.HandleFunc("/v1/transactions/", ping).Methods("POST")
	myRouter.HandleFunc("/v1/transactions/csv/", uploadCsv).Methods("POST")
	myRouter.HandleFunc("/v1/transactions/{id}", ping).Methods("PUT")

	// tags
	myRouter.HandleFunc("/v1/tags/", ping).Methods("GET")
	myRouter.HandleFunc("/v1/tags/", ping).Methods("POST")
	myRouter.HandleFunc("/v1/tags/{id}", ping).Methods("PUT")

	// ping
	myRouter.HandleFunc("/ping", ping).Methods("GET")

	// default
	myRouter.HandleFunc("/", DefaultRoute).Methods("GET")

	log.Fatal(http.ListenAndServe(":"+API_PORT, myRouter))

}
