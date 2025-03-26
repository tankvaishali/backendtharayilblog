import mongoose from "mongoose";

const MongoDB = () => {
  mongoose.connect("mongodb+srv://surbhipansuriya772:nfaqgq0qu2dbEtmp@solardb.3lyp9.mongodb.net/solardb?retryWrites=true&w=majority");
  console.log("Connected to MongoDB!");

};

export default MongoDB;