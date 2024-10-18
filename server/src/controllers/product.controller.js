import { createProduct } from "../models/products.model.js";

export const createrProductControl = (req,res) => {
try {
    
    const { name, description, price } = req.body;

    const imageUrl = `http://localhost:3000/${req.file.filename}`
    
    const product = createProduct({name, description, price, imageUrl});

    res.status(201).json(product);
} catch (error) {
    res.status(500).json(error)
}
}