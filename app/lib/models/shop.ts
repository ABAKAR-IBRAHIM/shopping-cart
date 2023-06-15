import mongoose from "mongoose";

const { Schema } = mongoose;
const ImageSchema = new Schema({ image: String });
const shopSchema = new Schema({
  name: String,
  imageSrc: String,
  discription: String,
  price: Number,
  review: Number,
  rating: Number,
  images: [ImageSchema],
});

const Shop = mongoose.models["shop"] || mongoose.model("shop", shopSchema);
export default Shop;
