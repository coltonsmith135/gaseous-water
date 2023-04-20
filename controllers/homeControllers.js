const router = require("express").Router();
const { User, Game } = require("../models")
const axios = require("axios");
require("dotenv").config();

router.get("/", async (req, res) => {
  try {
    const games = await axios.get(
      `https://rawg-video-games-database.p.rapidapi.com/games?&key=${process.env.apiKey}`,

      {
        headers: {
          "x-rapidapi-key":
            "e6ef05302emsh9c46dd59d7ac5d1p13a2d8jsneb37aae7d452",
          "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        },
      }
    );

    console.log(games.data.results[0].platforms[0].platform.slug)
    const platform = games.data.results[0].platforms[0].platform.slug
    

    res.render("homepage", {
      games: games.data.results,
      platform: platform,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/game", async (req, res) => {
  try {
    const gameData = await Game.create({ 
     user_id: req.session.user_id,
     game_url: req.body.game_url || null,
     gameName: req.body.gameName,
     background_image: req.body.gameImage,
     rating: req.body.gameRating,
     platform: req.body.platform || null,
     release_date: req.body.gameReleased,
     description: req.body.details,
    });
   res.status(200).json(gameData)
    
  } catch (err) {
    console.log("CREATE USER ERROR: ", err)
    res.status(400).json(err);
  }
});

router.get("/game", async (req, res) => {
  console.log(req.query.search);

  try {
    const gameName = req.query.search;

    const game = await axios.get(
      `https://api.rawg.io/api/games?search=${gameName}&key=${process.env.apiKey}`
    );

    console.log(game.data.results[0]);

    const id = game.data.results[0].id;

    console.log("GAME ID: ", id);
    const gameDetails = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=${process.env.apiKey}`
    );

    console.log("GAME DETAILS: ", gameDetails);

    res.render("gamepage", {
      game: game.data.results[0],
      gameDetails: gameDetails.data,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/profile", async (req, res) => {
  console.log("REQ.SESSION: ", req.session);
  try {
    console.log("Session ID User: ", req.session.user_id)
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });
    
    const user = userData.get({ plain: true });

    const gameData = await Game.findAll({
     include: [{model: User, attributes: ['id', 'userName']}],
     where: {user_id: req.session.user_id}

    })

    console.log('GAMEDATA: ', gameData)
    
    const games = gameData.map((game) =>
      game.get({ plain: true }))

    console.log('GAMES: ', games)

    res.render("profile", {
      ...user,
      games, 
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }
  res.render("login");
});

module.exports = router;
