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

  app.get("/movie/:name", async (req, res) => {
    try {
      const movie = await findMovieByName(req.params.name);
      res.send(movie);
    } catch (err) {
      console.log("err: ", err);
      res.send(err);
    }
  });
  
  //create book
  app.post("/add/movie", async (req, res) => {
    try {
      console.log("req: ", req.body);
      const movie = await addMovie(req.body);
      res.send(movie);
    } catch (err) {
      console.log("err: ", err);
      res.send(err);
    }
  });
  
  //update book
  app.put("/edit/:_id", async (req, res) => {
    try {
      const movie = await updateMovieById(req.params._id);
      res.send(movie);
    } catch (err) {
      console.log("err: ", err);
      res.send(err);
    }
  });
  
  //delete book
  app.delete("/delete/:_id", async (req, res) => {
    try {
      console.log("req: ", req.body);
      const movie = await deleteMovieById(req.params._id);
      res.send(movie);
    } catch (err) {
      console.log("err: ", err);
      res.send(err);
    }
  });


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})