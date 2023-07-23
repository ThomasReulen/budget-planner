FROM golang:1.20 AS builder
RUN apt update && apt install git
#WORKDIR $GOPATH/src/api 
WORKDIR /home/tom/api 
COPY . .
#RUN go get -d -v
#RUN go build -o /go/bin/api

#FROM alpine
#ENV API_PORT = 8080 
# Copy our static executable.
#COPY --from=builder /go/bin/api /go/bin/api
#ENTRYPOINT ["/go/bin/api"]