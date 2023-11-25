const express = require("express");

const app = express();

const port = 5000;

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});

// affichage du message

app.get("/", (req, res) => {
  res.send("Welcome to my favourite movie list");
});

//affichage du tableau complet (tous les movies)

app.get("/api/movies", (req, res) => {
  res.json(movies);
});

// recherche avec ID

app.get("/api/movies/:id", (req, res) => {
  const element = movies.find((e) => e.id == req.params.id);

  if (element != null) {
    res.status(200).json(element);
  } else {
    res.status(404).send("Not found");
  }
});
