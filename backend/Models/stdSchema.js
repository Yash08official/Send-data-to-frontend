const mongoose = require("mongoose");

//we are creating schema

const userSchema = new mongoose.Schema({
  SN: {
    type: Number,
    req: true,
  },
  College_ID: {
    type: Number,
    req: true,
  },
  Enrollment_Number: {
    type: Number,
    req: true,
  },
  Full_Name: {
    type: String,
    req: true,
  },
  Gender: {
    type: String,
    req: true,
  },
  Date_of_Birth: {
    type: String,
    req: true,
  },
  Branch: {
    type: String,
    req: true,
  },
  College: {
    type: String,
    req: true,
  },
  Year_Of_Passing: {
    type: Number,
    req: true,
  },
  SSC_Percentage: {
    type: Number,
    req: true,
  },
  SSC_Year_Of_Passing: {
    type: Number,
    req: true,
  },
  SSC_Board: {
    type: String,
    req: true,
  },
  HSC_Percentage: {
    type: Number,
    req: true,
  },
  HSC_Year_Of_Passing: {
    type: Number,
    req: true,
  },
  HSC_Board: {
    type: String,
    req: true,
  },
  Diploma_Branch: {
    type: String,
    req: false,
  },
  Diploma_Percentage: {
    type: Number,
    req: false,
  },
  Diploma_Year_Of_Passing: {
    type: Number,
    req: false,
  },
  Diploma_Board: {
    type: String,
    req: false,
  },
  I_Semester_Percentage: {
    type: Number,
    req: true,
  },
  II_Semester_Percentage: {
    type: Number,
    req: true,
  },
  III_Semester_Percentage: {
    type: Number,
    req: true,
  },
  IV_Semester_Percentage: {
    type: Number,
    req: true,
  },
  BE_AGGREGATE: {
    type: Number,
    req: true,
  },
  I_Semester_PTR: {
    type: Number,
    req: true,
  },
  II_Semester_PTR: {
    type: Number,
    req: true,
  },
  III_Semester_PTR: {
    type: Number,
    req: true,
  },
  IV_Semester_PTR: {
    type: Number,
    req: true,
  },
  BE_SGPA: {
    type: Number,
    req: true,
  },
  Current_Backlog: {
    type: Number,
    req: true,
  },
  History_Of_Backlog: {
    type: Number,
    req: true,
  },
  Year_down: {
    type: Number,
    req: true,
  },
  Mobile_Number: {
    type: Number,
    req: true,
  },
  Email_ID: {
    type: String,
    req: true,
  },
  Local_Address: {
    type: String,
    req: true,
  },
  Permanent_Address: {
    type: String,
    req: true,
  },
  University: {
    type: String,
    req: true,
  },
  Skill_Set: {
    type: String,
    req: true,
  },
  Aadhar_Number: {
    type: String,
    req: true,
  },
  University_Roll_Number: {
    type: Number,
    req: true,
  },
});

//we have to aatach it to the project with the help of "Models"

//Creating models means creating collections

//Now we are creating our new collections {In one collections , there are multiple documents }

//creating "models" now

//collection ch nav lastla
const Studentmodel = mongoose.model("Student", userSchema, "Sinfo");

module.exports = Studentmodel;
