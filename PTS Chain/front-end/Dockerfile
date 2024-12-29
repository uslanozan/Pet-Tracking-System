# Node.js için temel imajı kullanıyoruz
FROM node:22-alpine

# Çalışma dizini belirliyoruz
WORKDIR /app

# Node.js bağımlılıklarını kopyalayıp yüklüyoruz
COPY package.json package-lock.json ./
RUN npm install

# Uygulama kaynak kodlarını kopyalıyoruz
COPY . .

# Uygulamayı çalıştırıyoruz
CMD ["node", "index.js"]
