const express = require('express');
const connectToDatabase = require("./utils/db");
const app = express();
const port = 3000;

const connectMongo = async (req, res, next) => {
  await connectToDatabase();
  next();
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(connectMongo);

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})