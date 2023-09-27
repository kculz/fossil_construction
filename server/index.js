const express = require('express');
require('dotenv').config();
const cors = require('cors');
const userRoute = require('./routes/user');
const serviceRoute = require('./routes/service');
const db = require('./models');
const {PORT, allowedDomain} = require('./config');

const requestRoute = require("./routes/request");

const app = express();
const port = process.env.PORT || 9000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: allowedDomain,
    credentials: true,
    methods: ["POST", "GET", "PATCH", "DELETE", "PUT"]
}))



// Define route here
app.use('/api/users', userRoute);
app.use('/api/services', serviceRoute);
app.use('/api/rfq', requestRoute);


db.sequelize.sync().then((req) => {
    app.listen(PORT, ()=> {
        console.log(`server running on http://localhost:${port}`);
    });
})
