# 1. Go uygulaması için temel bir imaj kullanıyoruz
FROM golang:1.23-alpine

# 2. Çalışma dizinini belirliyoruz
WORKDIR /app

# 3. Go modül dosyasını (go.mod) kopyalayıp bağımlılıkları yüklüyoruz
COPY go.mod go.sum ./
RUN go mod tidy

# 4. Uygulama kaynak kodlarını kopyalıyoruz
COPY . .

# 5. Uygulamayı derliyoruz
RUN go build -o myapp .

# 6. Uygulamayı çalıştırıyoruz
CMD ["./myapp"]
