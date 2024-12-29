# Pet Tracking System Projesi

Bu proje, **Go**, **Node.js** ve **Docker** kullanarak oluşturulmuş bir **Pet Tracking System** (Evcil Hayvan Takip Sistemi) uygulamasıdır. Bu uygulama, evcil hayvanların takibini yapacak ve her bir evcil hayvanın bilgilerini güncellemeye olanak tanıyacaktır.

## Teknolojiler

- **Go (Golang)**: Sunucu tarafı uygulama geliştirme için kullanıldı.
- **Node.js**: Uygulamanın frontend kısmı ve API'leri için kullanıldı.
- **Docker**: Projenin konteynerleştirilmesi ve taşınabilirliğinin sağlanması için kullanıldı.
- **Docker Compose**: Docker konteynerlerini bir arada çalıştırmak için kullanıldı.

## Özetle:
Node.js, burada frontend sunucusu olarak çalışabilir ve kullanıcılara statik dosyaları sunabilir.
Ayrıca, API Gateway olarak Go backend'ine gelen istekleri yönlendirebilir.
Go backend ise veri işleme, veritabanı bağlantıları gibi ağır işleri üstlenir.
Bu mimari, özellikle frontend ve backend'in ayrı tutulduğu projelerde yaygın bir yaklaşımdır. Yani Node.js frontend'i yönetirken, Go backend'i yüksek performans gerektiren işlemleri yapar. Front-end ve back-end docker-compose.yml ile bağlanır.




## Proje Yapısı

Aşağıdaki gibi bir proje dizin yapısı vardır:


Pet-Tracking-System/
├── go-app/
│   ├── Dockerfile
│   ├── go.mod
│   ├── go.sum
│   ├── main.go
├── node-app/
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   ├── index.js
├── docker-compose.yml
└── README.md


### **go-app (Go Uygulaması)**

- **`Dockerfile`**: Go uygulamasının Docker konteyneri için yapılandırma dosyasıdır. Bu dosya, Go uygulamasının nasıl çalıştırılacağına dair talimatları içerir.
- **`go.mod`**: Go modül yönetimi için kullanılan dosyadır. Projede kullanılan bağımlılıkları ve sürümleri tanımlar.
- **`go.sum`**: Go modül yönetiminin bağımlılıkları doğrulamak için kullandığı dosyadır. Güvenlik için bağımlılıkların hash'lerini içerir.
- **`main.go`**: Go uygulamanızın ana dosyasıdır. Uygulamanın backend kısmını burada yazarsınız.

### **node-app (Node.js Uygulaması)**

- **`Dockerfile`**: Node.js uygulamanızın Docker konteyneri için yapılandırma dosyasıdır. Bu dosya, Node.js uygulamasının nasıl çalıştırılacağına dair talimatları içerir.
- **`package.json`**: Node.js uygulamanızın bağımlılıklarını ve proje bilgilerini tanımlar.
- **`package-lock.json`**: Projeye eklenen bağımlılıkların sürüm bilgilerini içerir.
- **`index.js`**: Node.js uygulamanızın ana dosyasıdır. API'leri ve frontend kısmını burada yazarsınız.

### **docker-compose.yml**

Bu dosya, Docker konteynerlerinin bir arada çalışmasını sağlayan bir yapılandırma dosyasıdır. Docker Compose, birden fazla Docker konteynerini aynı anda başlatmanıza ve yönetmenize olanak tanır.

```yaml
version: '3'
services:
  go-app:
    build:
      context: ./go-app
    ports:
      - "8080:8080"
    networks:
      - pet-tracking-network

  node-app:
    build:
      context: ./node-app
    ports:
      - "3000:3000"
    networks:
      - pet-tracking-network

networks:
  pet-tracking-network:
    driver: bridge
