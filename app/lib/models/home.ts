import mongoose from "mongoose";

const { Schema } = mongoose;
const ImageSchema = new Schema({ image: String });
const homeSchema = new Schema({
  name: String,
  imageSrc: String,
  discription: String,
  price: Number,
  review: Number,
  rating: Number,
  images: [ImageSchema],
});

const Home =
  mongoose.models["homeproducts"] || mongoose.model("homeproducts", homeSchema);
export default Home;
