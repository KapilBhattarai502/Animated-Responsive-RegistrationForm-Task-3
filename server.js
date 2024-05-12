import express from "express";
import { fileURLToPath } from "url";

import * as path from "path";
import { dirname } from "path";
import userRoutes from "./Routes/route.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
//get request
app.use(userRoutes);




//routing

//creating a server
const port = 8000;

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
