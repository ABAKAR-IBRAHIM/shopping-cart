import mongoose from "mongoose";

const { Schema } = mongoose;
const ImageSchema = new Schema({ image: String });
const dealsSchema = new Schema({
  name: String,
  imageSrc: String,
  discription: String,
  price: Number,
  off: Number,
  review: Number,
  rating: Number,
  images: [ImageSchema],
});

const Deals = mongoose.models["deal"] || mongoose.model("deal", dealsSchema);
export default Deals;
