var mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema(
  {
    email: String,
    password: String,
  },
  { autoCreate: false, autoIndex: false }
);
const User = mongoose.models["User"] || mongoose.model("User", userSchema);
export default User;
