const express = require('express');
require('dotenv').config();
const cors = require('cors');
const userRoute = require('./routes/user');
const serviceRoute = require('./routes/service');
const db = require('./models');

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define route here
app.use('/api/users', userRoute);
app.use('/api/services', serviceRoute);


db.sequelize.sync().then((req) => {
    app.listen(port, ()=> {
        console.log(`server running on http://localhost:${port}`);
    });
})
