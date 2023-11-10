import mongoose, { connect } from "mongoose";

/** 
Source : 
https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/utils/dbConnect.js 
**/

const MONGODB_URI = process.env.MONGODB_URI;

const conn = {
  isConnected: false,
};

async function connectDB() {
  if (conn.isConnected || !MONGODB_URI) return;

  const db = await connect(MONGODB_URI);
  conn.isConnected = !!db.connections[0].readyState;
}
export default connectDB;
