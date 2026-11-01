const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT ||5000;
const productRoutes = require("./routes/productRoutes");

app.use("/api/products", productRoutes);
mongoose.connect(process.env.MONGO_URI)

.then(()=>{
    console.log("Mongo connected");

    app.listen(PORT,()=>{
        console.log(`server running on port${PORT}`);
        
    });
})

.catch((error) => {
    console.log("mongodb Connection error:", error.message);

        });