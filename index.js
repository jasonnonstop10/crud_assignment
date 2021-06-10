const express = require('express');
const {
  addMovie,
  findMovieByName,
  updateMovieById,
  deleteMovieById,
} = require("./src/functions/index");

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
  //find Movie
  app.get("/movie/:name", async (req, res) => {
    try {
      const movie = await findMovieByName(req.params.name);
      res.status(200).json({movie:movie});
    } catch (err) {
      console.log("err: ", err);
      res.status(404).send(err);
    }
  });
  
  //create Movie
  app.post("/add/movie", async (req, res) => {
    try {
      console.log("req: ", req.body);
      const movie = await addMovie(req.body);
      res.status(200).json({movie:movie});
    } catch (err) {
      console.log("err: ", err);
      res.status(400).send(err);
    }
  });
  
  //update Movie
  app.put("/edit/:_id", async (req, res) => {
    try {
      const movie = await updateMovieById(req.params._id);
      res.status(200).json({movie:movie});
    } catch (err) {
      console.log("err: ", err);
      res.status(400).send(err);
    }
  });
  
  //delete Movie
  app.delete("/delete/:_id", async (req, res) => {
    try {
      console.log("req: ", req.body);
      const movie = await deleteMovieById(req.params._id);
      res.status(200).json({movie:movie});
    } catch (err) {
      console.log("err: ", err);
      res.status(500).send(err);
    }
  });


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})