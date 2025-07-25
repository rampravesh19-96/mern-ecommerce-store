import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  _id: String, // Clerk user ID
  name: String,
  email: String,
  imageUrl: String,
  cartItems: {
    type: Object,
    default: {},
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user', // Default is user
  }
});

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
