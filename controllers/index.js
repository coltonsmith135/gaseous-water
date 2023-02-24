var rawgAPIKey = "f86e8f2f434b42848cfbc09988c0872a";

let test = document.querySelector(".test");

test.addEventListener("click", async function () {
    getGames()
})

const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://rawg-video-games-database.p.rapidapi.com/games?key=f86e8f2f434b42848cfbc09988c0872a",
    "method": "GET",
    "headers": {
    "x-rapidapi-key": "e6ef05302emsh9c46dd59d7ac5d1p13a2d8jsneb37aae7d452",
    "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
    }
    };
    $.ajax(settings).done(function (response) {
    console.log(response);
    });