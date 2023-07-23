package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/gorilla/mux"
)

var API_PORT string

var DB_HOST string
var DB_PORT string

func DefaultRoute(w http.ResponseWriter, r *http.Request) {
	http.Error(w, "not implemented", http.StatusNotFound)
}

func ping(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "pong")
}

func main() {
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

	// get user by id
	myRouter.HandleFunc("/transactions/", ping).Methods("GET")
	myRouter.HandleFunc("/transaction/{id}", ping).Methods("GET")
	myRouter.HandleFunc("/transaction/", ping).Methods("POST")

	// ping
	myRouter.HandleFunc("/ping", ping).Methods("GET")

	// default
	myRouter.HandleFunc("/", DefaultRoute).Methods("GET")

	log.Fatal(http.ListenAndServe(":"+API_PORT, myRouter))
}
