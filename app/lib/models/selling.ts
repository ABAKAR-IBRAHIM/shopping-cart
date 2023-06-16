import mongoose from "mongoose";

const { Schema } = mongoose;
const ImageSchema = new Schema({ image: String });
const mostSellingSchema = new Schema({
  name: String,
  imageSrc: String,
  discription: String,
  price: Number,
  review: Number,
  rating: Number,
  images: [ImageSchema],
});

const MostSelling =
  mongoose.models["most-selling"] ||
  mongoose.model("most-selling", mostSellingSchema);
export default MostSelling;
