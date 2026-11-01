const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/", async(req,res)=>{

    try{
        const products = await Product.find();
        
            res.json(products);

        }catch(error){
            res.status(500).json({message:error.message});
        }
    
   
});

router.post("/",async(req,res)=>{
    try{
        const newProduct = await Product.create(req.body);
        res.status(201).json(newProduct);
    }catch(error){
        res.status(500).json({ message: error.message });
    }
});

router.put("/:id",async(req,res)=>{
    try{
        const updatedProduct= await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true, runValidators:true}
        );
        if(!updatedProduct){
            return res.status(404).json({message:"Product not foud"});

        }
        res.json(updatedProduct);
    }catch(error){
        res.status(500).json({message:error.message});
    }
});

router.delete("/:id", async(req, res)=>{
    try{
        const deletedProduct = await Product.findByIdAndDelete(
            req.params.id
        );
        if(!deletedProduct){
            return res.status(404).json({
                message: "Product not found"
            });
        }
        res.json({
            message:"product deleted successfully"
        });
    }catch(error){
        res.status(500).json({message:error.message});
    }
});

 module.exports = router;