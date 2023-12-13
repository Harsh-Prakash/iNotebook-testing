const mongoose=require('mongoose')
const mongoURI="mongodb://0.0.0.0:27017/iNoteBook"
const express = require('express')
const cors = require('cors');
const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

async function connectToMongo() {
    await mongoose.connect(mongoURI).then(()=> console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
  }

module.exports=connectToMongo;