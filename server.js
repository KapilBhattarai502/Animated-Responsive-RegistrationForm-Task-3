import express from "express";
import { fileURLToPath } from 'url';
import path from "path";
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.get("/",(req,res)=>{
    res.sendFile("public/index.html",{root:__dirname});
})

//routing 
app.post("/submit",(req,res)=>{
    console.log(req.body);
    return res.status(200).send(`${req.body.FirstName} your form is submitted Sucessfully`); 
})
//creating a server 
const port = 8000;

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
