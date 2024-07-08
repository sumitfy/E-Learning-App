require('dotenv').config()
const express = require('express')
const router = require('../server/routes/first_routes')
const serviceRouter = require('./routes/service-route')
const adminRouter = require('./routes/admin-routes')
const errorMiddleware = require('./middleware/error-middleware')
const connectDB = require('../server/utils/db')
const cors = require("cors");
const app = express();

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json())
app.use('/api/',router)
app.use('/api/data' , serviceRouter)
app.use('/admin' , adminRouter)
app.use(errorMiddleware)
connectDB().then(()=>
    app.listen(5000,()=>{
        console.log(`app is running on port ${PORT}`)
    })
)

const PORT = 5000;
