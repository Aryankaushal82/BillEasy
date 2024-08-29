const express = require('express')
const app = express();
const PORT = 3000;
app.use(express.json())
const dbConnect = require('./middlewares/dB');
const admincontroller = require('./controllers/adminController')
dbConnect();
app.get('/', (req, res) => {
    res.send('Hello Aryan')
})
app.get('/home', (req, res) => {
    res.send('helloooo')
})
app.get('/user-list', admincontroller.getUsers)

app.post('/register', admincontroller.register)
app.post('/send', admincontroller.sendEmail)

app.get('/sms', admincontroller.sendMessage)
app.get('/whatsapp', admincontroller.sendWhatsapp)

app.post('/update/:_id', admincontroller.updateUser)
app.post('/delete/:_id', admincontroller.deleteUser)


app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
})