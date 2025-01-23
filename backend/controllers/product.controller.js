import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({success: true, data: products})
    } catch (error) {
        console.log("Error in fetching Products", error)
        res.status(500).json({success: false, message: 'Internal Server Error while Fetching Products'})
    }}

export const createProduct = async (req, res) => {
    const product = req.body;

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({success: false, message: 'Please fill all fields'})
    }
    const newProduct = new Product(product)
    try {
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct})
    }
    catch (error) {
        console.log("Error in saving Product", error)
        res.status(500).json({success: false, message: 'Internal Server Error while Saving Product'})
    }
}

export const updateProduct = async (req, res) => {
    const {id} = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        console.log("Invalid Product ID")
        return res.status(404).json({success: false, message: 'Invalid Product ID'})
    }

    try {
        const updatedProducted = await Product.findByIdAndUpdate(id, product, {new: true})
        res.status(200).json({success: true, data: updatedProducted});
    } catch (error) {
        console.log("Error in updating Product", error)
        res.status(500).json({success: false, message: 'Internal Server Error while Updating Product'})
    }
}

export const deleteProduct = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        console.log("Invalid Product ID")
        return res.status(404).json({success: false, message: 'Invalid Product ID'})
    }
    
    try {
        await Product.findByIdAndDelete(id)
        res.status(200).json({success: true, message: 'Product Deleted Successfully'})
    }
    catch (error) {
        console.log("Error in deleting Product", error)
        res.status(500).json({success: false, message: 'Internal Server Error while Deleting Product'})
    }
}