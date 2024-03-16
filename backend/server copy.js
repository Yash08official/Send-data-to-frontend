//require all packages
const express = require("express");
const mongoose = require("mongoose");
const port = 5000;
const {Studentmodel} = require ("./Models/stdSchema");
const { MongoClient, ServerApiVersion } = require("mongodb");
// const cors = require("cors");
const app = express();

app.use(express.json());


//Create a route
app.get("/StudentInfoPage", async (req, res, next) => {
  try {
    const sInfo = await Studentmodel.find();
    return res.json({ message: "Hello from /user route" });
  } catch (error) {
    return res.json({error});
  }
});

//for listening
app.listen(port, () => {
  try {
    mongoose.connect(
      "mongodb+srv://yashwasankar008:yashwasankar@cluster0.zusbvs8.mongodb.net/test"
    );
    console.log(`server running on http://localhost:${port}`);
  } catch (error) {
    console.error(error);
  }
});
