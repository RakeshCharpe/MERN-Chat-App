const express = require('express');
const dotenv = require("dotenv"); 
const  chats  = require("./data/data");
const connectDB = require('./config/db');
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const {notFound , errorHandler} = require("./middlewares/errorMiddleware")

dotenv.config();

connectDB();
const app = express();

app.use(express.json()); //to accept JSON Data


app.get('/', (req, res) => {
    res.send("API IS RUNNING SUCCESSFULLY!!!");
});

//end point for user
app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);

//error handling
app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000

app.listen(PORT , console.log(`server is started at ${PORT}`.yellow.bold))