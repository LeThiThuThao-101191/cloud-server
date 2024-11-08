# Sử dụng Node.js base image
FROM node:16

# Cài đặt MongoDB
RUN apt-get update && apt-get install -y mongodb

# Thiết lập thư mục làm việc trong container
WORKDIR /usr/src/app

# Copy mã nguồn vào container
COPY . .

# Cài đặt các dependency của ứng dụng
RUN npm install

# Expose cổng MongoDB và Node.js
EXPOSE 27017
EXPOSE 3000

# Khởi chạy MongoDB và ứng dụng Node.js
CMD service mongodb start && node app.js
