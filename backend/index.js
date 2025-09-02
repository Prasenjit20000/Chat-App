// // const express = require('express');
// // after adding type = module in package.json
// import express from  "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import cors from 'cors';
// import connectDB from "./config/database.js";
// import userRoute from "./routes/userRoute.js"
// import messageRoute from "./routes/messageRoute.js"



// dotenv.config({});

// const app = express();
// const PORT = process.env.PORT || 8080;

// // middleware
// app.use(express.json()); // for JSON body
// app.use(express.urlencoded({ extended: true })); // for form-data/urlencoded
// app.use(cookieParser()); // for reading cookies from request frontend to backend
// const corsOptions = {
//     origin: 
//     'http://localhost:5173',
//     credentials : true
// }
// app.use(cors(corsOptions));


// // http://localhost:8080/api/v1/user/register
// // routes
// app.use('/api/v1/user',userRoute);
// app.use('/api/v1/message',messageRoute);


// app.listen(PORT,()=>{
//     connectDB();
//     console.log(`Server listening at ${PORT}`)
// })


// index.js
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors';
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js";
import http from 'http';
import { initSocket } from "./socket/socket.js"; // Import socket initialization

dotenv.config({});
connectDB();
const app = express();
const PORT = process.env.PORT || 8080;

// Create HTTP server
const server = http.createServer(app);

// Initialize socket.io
initSocket(server);

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true
};
app.use(cors(corsOptions));

// routes
app.use('/api/v1/user', userRoute);
app.use('/api/v1/message', messageRoute);

// Start the server
server.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});

export { app };