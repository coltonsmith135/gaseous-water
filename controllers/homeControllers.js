const router = require("express").Router();
const { Game, User, Review, WishList } = require("../models");
const { withAuth, isAuthorized } = require("../utils/auth");
const axios = require("axios");
require('dotenv').config()

router.get("/", async (req, res) => {
  try {
    const games = await axios.get(
      "https://rawg-video-games-database.p.rapidapi.com/games?key=f86e8f2f434b42848cfbc09988c0872a",

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
// to get game by search from name of game. similar to this one.
router.get("/game/:id", async (req, res) => {
  try {
    const gameData = await Game.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const game = gameData.get({ plain: true });

    res.render("game", {
      ...game,
      logged_id: req.session.logged_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/game', async (req, res) => {
  console.log(req.query)

  const gameName = req.query.name;

  const gameData = await axios.get(`https://api.rawg.io/api/games?search=${gameName}&key=${process.env.apiKey}`)

  res.status(200).json(gameData.data.results)
})

router.get("/profile/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const userData = await User.findByPk(req.params.id, {
      attributes: { exclude: ["password"] }
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
