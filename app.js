const express = require('express');
const mongoose = require('mongoose');
const Trip = require('./models/tripModel');  // Import model Trip
const path  = require('path');  
const tripRoutes = require('./routes/tripRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

app.use('/api', tripRoutes);
app.use('/api/users', userRoutes); 

// Cấu hình đường dẫn tới thư mục chứa tài nguyên tĩnh (images, css, js,...)
app.use('/resource/images', express.static(path.join(__dirname,"resource", 'images')));
// Kết nối MongoDB
mongoose.connect('mongodb://localhost:27017/ltdd')
    .then(() => {
        console.log('Connected to MongoDB');
        processDatabase();  // Gọi hàm sau khi kết nối thành công
    })
    .catch((err) => {
        console.error('Lỗi kết nối:', err);
        process.exit(1);
    });

// Hàm xử lý dữ liệu
const processDatabase = async () => {
    try {
        const trips = await Trip.find();  // Sử dụng model Trip để lấy dữ liệu
        console.log('Kết nối thành công');
    } catch (err) {
        console.error('Lỗi khi xử lý dữ liệu:', err);
    }
};

// Lắng nghe cổng
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server đang chạy trên cổng ${PORT}`);
});
