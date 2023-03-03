const router = require("express").Router();
const { User, WishList } = require("../models");
const { withAuth, isAuthorized } = require("../utils/auth");
const axios = require("axios");
require("dotenv").config();

router.get("/", withAuth, async (req, res) => {
  try {
    const games = await axios.get(
      `https://rawg-video-games-database.p.rapidapi.com/games?key=${process.env.apiKey}`,

      {
        headers: {
          "x-rapidapi-key":
            "e6ef05302emsh9c46dd59d7ac5d1p13a2d8jsneb37aae7d452",
          "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        },
      }
    );

    res.render("homepage", {
      games: games.data.results,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/game", async (req, res) => {
  console.log(req.query.search);

  try {
  const gameName = req.query.search;
  const game = await axios.get(
    `https://api.rawg.io/api/games?search=${gameName}&key=${process.env.apiKey}`)



   console.log(game.data.results[0])
const id = game.data.results[0].id
console.log(id)
   const gameDetails = await axios.get(
    `https://api.rawg.io/api/games/${id}?key=${process.env.apiKey}`)
    console.log(gameDetails)

  res.render('gamepage', {
    game: game.data.results[0],
    gameDetails: gameDetails.data,
    logged_in: req.session.logged_in,
  }) 
} catch (err) {
  res.status(500).json(err)
}
});

router.get("/profile/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const userData = await User.findByPk(req.params.id, {
      attributes: { exclude: ["password"] },
    });

    const user = userData.get({ plain: true });
    console.log(user);

    res.render("profile", {
      ...user,
      logged_id: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_id) {
    res.redirect("/profile");
    return;
  }
  res.render("login");
});

module.exports = router;
