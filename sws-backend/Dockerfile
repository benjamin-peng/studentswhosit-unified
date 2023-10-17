FROM golang:1.21.3-bookworm

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download && go mod verify

COPY *.go ./

RUN CGO_ENABLED=0 GOOS=linux go build -o /go-api

EXPOSE 5000

CMD ["/go-api"]