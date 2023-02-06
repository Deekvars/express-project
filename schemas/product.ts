import {IProduct} from "../types/Product";
import { Schema, model } from 'mongoose';

const productSchema = new Schema<IProduct>({
    title: { type: String, required: true },
    id: { type: Number, required: true },
    price: Number,
    discounted_price: { type: Number, required: true },
    image: [String],
    handle:  String
});

const Product = model<IProduct>('Product', productSchema);

export default Product;
