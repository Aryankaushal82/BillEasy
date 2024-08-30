const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Database connection
const dbConnect = require('./middlewares/db');
dbConnect();

// Routes
app.get('/', (req, res) => {
    res.send('Hello Aryan');
});

app.get('/home', (req, res) => {
    res.send('helloooo');
});

// Use the routes defined in the routes folder
const adminRoutes = require('./routes/adminRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const branchRoutes = require('./routes/branchRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/admin', adminRoutes);
app.use('/inventory', inventoryRoutes);
app.use('/branches', branchRoutes);
app.use('/user', userRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
