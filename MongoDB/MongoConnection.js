import mongoose from "mongoose";

const MongoDB = () => {
  // mongoose.connect("mongodb+srv://surbhipansuriya772:nfaqgq0qu2dbEtmp@solardb.3lyp9.mongodb.net/solardb?retryWrites=true&w=majority");
  mongoose.connect("mongodb+srv://vaishalitank28603:v1a2i3s4h5a6l7i8@cluster0.qzxy1.mongodb.net/solardb?retryWrites=true&w=majority");
  console.log("Connected to MongoDB!");
};

export default MongoDB;