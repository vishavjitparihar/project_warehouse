//use this to bring express app
const express = require('express');

//to connect to our mongoDB database
const mongoose = require('mongoose');

//to connect frontend with backend
const cors = require('cors');

//used to start an app
const app = express();
app.use(express.json());  //we will use .json data to send out data
app.use(cors()); //this enables CORS middleware and will allow my server to take request from other domains

//to read information from the .env file, as this will load the content from .env to the Node enviroment
require('dotenv').config();

//routes
const productRouter = require('./routes/product.route.js');
app.use('/product', productRouter); //any request to product will be handeled by productRouter
app.use('/warehouse', require('./routes/warehouse.route.js'))

//connecting to our MongoDB, and using .then and .catch to make sure it actually does connect to the database
//if we do not connect to the database we will kill the database
const connectToMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB!');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

connectToMongo();

//to start the app
app.listen(process.env.PORT || 8080, () => {
    //this callback function will run when the app will start
    //this will verify that we are using the right port
    console.log(`Listening on port ${process.env.PORT || 8080}`);
})