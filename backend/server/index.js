const express = require('express')
const app = express()
const port = 8080
const userRoutes = require('./routes/routes')
const cors = require("cors");
const bodyParser = require('body-parser');

const mongoose = require("mongoose");
const dotenv = require("dotenv");

app.use(cors());

dotenv.config();

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use('/members', userRoutes)

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})



const mongoAtlasUri = process.env.ATLAS_URI

try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    mongoAtlasUri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'members_data',
    },
    () => console.log(" Mongoose is connected")
  );
  
} catch (e) {
  console.log("could not connect");
}

