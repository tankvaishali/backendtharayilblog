import mongoose from "mongoose";

const MongoDB = () => {
  // mongoose.connect("mongodb+srv://surbhipansuriya772:nfaqgq0qu2dbEtmp@solardb.3lyp9.mongodb.net/solardb?retryWrites=true&w=majority");
  mongoose.connect("mongodb+srv://vaishalitank28603:vaishalitank312@cluster0.qzxy1.mongodb.net/solardb");
  console.log("Connected to MongoDB!");
};

export default MongoDB;