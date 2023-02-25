FROM golang:1.18.6

WORKDIR /app

COPY go.mod .
RUN go mod tidy

COPY . .

RUN go build -o ./bin/server ./cmd/main.go

EXPOSE 8080
CMD [ "./bin/server" ]