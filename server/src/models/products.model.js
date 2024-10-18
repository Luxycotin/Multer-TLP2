import { products } from "../db/db.js";

export const createProduct = (product) =>{
    const generarId = new Date().getTime()
    const { name, description, price, imageUrl } = product;

    products.push({
        id: generarId,
        name,
        description,
        price,
        imageUrl
    });

    return { id: generarId, name, description, price, imageUrl };
}