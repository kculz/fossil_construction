const express = require('express');
require('dotenv').config();
const cors = require('cors');
const userRoute = require('./routes/user');

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define route here
app.use('/users', userRoute);

app.listen(port, ()=> {
    console.log(`server running on http://localhost:${port}`);
});