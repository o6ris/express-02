const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    colors: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    colors: true,
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

const database = require("./database");

const getMovies = (req, res) => {
  database
    .query("select * from movies")
    .then(([movies]) => {
      res.status(200).json(movies);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const getMovieById = (req, res) => {
  const movieid = parseInt(req.params.id);

  // const movie = movies.find((movie) => movie.id === id);

  database
    .query("select * from movies where id = ?", [movieid])
    .then(([movie]) => {
      if(movie.length>0){
        res.status(200).json(movie);
        console.log(movie)
      } else {
        res.status(404).send("Not found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const getUsers = (req, res) => {
  database
    .query("select * from users")
    .then(([user]) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const getUsersById = (req, res) => {
  const usersId = parseInt(req.params.id);

  // const users = users.find((user) => user.id === id);

  database
    .query("select * from users where id = ?", [usersId])
    .then(([user]) => {
      if(user.length>0){
        res.status(200).json(user);
      } else {
        res.status(404).send("Not found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

module.exports = {
  getMovies,
  getMovieById,
  getUsers,
  getUsersById
};
