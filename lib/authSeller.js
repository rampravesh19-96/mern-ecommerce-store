import connectDB from "@/config/db";
import User from "@/models/User";

export default async function authSeller(userId) {
  await connectDB();

  const user = await User.findById(userId);
  if (!user) return false;

  return user.role === 'admin';
}
