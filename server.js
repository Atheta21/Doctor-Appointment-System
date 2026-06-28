const express = require('express')
const colors = require('colors')
const morgan =require('morgan')
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
dotenv.config();
 
connectDB();
const app = express()



//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
//routes
app.use('/api/v1/user', require("./routes/userRoutes"));
app.use('/api/v1/doctor', require("./routes/doctorRoutes"))
app.use('/api/v1/appointment', require("./routes/appointmentRoutes"))


const port= process.env.PORT || 8080
app.listen(port,()=>{
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.bgCyan.white);
});
