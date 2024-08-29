const express = require('express');
const app = express();
const PORT = 3000;
const dbConnect = require('./middlewares/dB');
const adminController = require('./controllers/adminController');
const inventoryController = require('./controllers/inventory.controller');

app.use(express.json());
dbConnect();

// Admin routes

// app.use("api/v1/admin",adminRoute);
// app.get('/user-list', adminController.getUsers);
app.post('/register', adminController.register);
// app.post('/send', adminController.sendEmail);
// app.get('/sms', adminController.sendMessage);
// app.get('/whatsapp', adminController.sendWhatsapp);
// app.post('/update/:_id', adminController.updateUser);
// app.post('/delete/:_id', adminController.deleteUser);

// // Inventory routes
// app.post('/add-item', inventoryController.addProduct); 
// app.get('/items', inventoryController.getAllItems);
// app.get('/item/:id', inventoryController.getItemById);
// app.put('/item/:id', inventoryController.updateItemById);
// app.delete('/item/:id', inventoryController.deleteItemById);

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
