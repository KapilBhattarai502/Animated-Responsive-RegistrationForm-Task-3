import express from "express";
import { userValidation } from "./uservalidation.js";
import bcrypt from "bcrypt";
const router = express();

//get request 
router.get("/", (req, res) => {
  res.sendFile("public/index.html", { root: __dirname });
});

//post request 
router.post("/submit",async(req,res,next)=>{
const newUser=req.body;


//hashing a password using bcrypt 

const hashedPassword=await bcrypt.hash(newUser.Password,10);
newUser.Password=hashedPassword;
console.log(newUser);
try{
  await userValidation.validate(newUser);
}catch(error){
  return res.status(404).send(error.message);
}
next();




}, (req, res) => {

  
  

  return res
    .status(200)
    .send(`${req.body.FirstName} your form is submitted Sucessfully`);
});
export default router;

