import mongoose, { Mongoose } from "mongoose";

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        require:  [true, "plis send a string"]
    },
    price:{
        type: Number,
    },
    description:{
        type: String,
    },
    image:{
        type: String,   
    },
    available:{
        type: Boolean,
    }
})

export default mongoose.models.Product || mongoose.model("Product", ProductSchema)