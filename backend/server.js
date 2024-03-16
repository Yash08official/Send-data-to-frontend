//require all packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const port = 4000;
const Studentmodel = require("./Models/stdSchema");
// const { MongoClient, ServerApiVersion } = require("mongodb");
// const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors({
  origin:["http://localhost:5173"]
}))

//Create a route
app.get("/StudentInfoPage", async (req, res, next) => {
  try {
    const sInfo = await Studentmodel.find();
    return res.json(sInfo);
  } catch (error) {
    return res.json({ error });
  }
});

//for listening
app.listen(port, () => {
  try {
    //database ch nav last la
    mongoose.connect("mongodb://localhost:27017/StudentInfo");
    console.log(`server running on http://localhost:${port}`);
  } catch (error) {
    console.error(error);
  }
});
