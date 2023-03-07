# __GASEIUS WATER__ ⛽️🌊


## __Table of Contents__ 
- [Overview](#overview-🕷👨)
 - [The Challenge](#the-challenge)
 - [Screenshots](#screenshots)
 - [Links](#links)
 - [Our Process](#our-process)
 - [Built With](#built-with)
 - [What We Learned](#what-we-learned)
 - [Continued Development](#continued-development)
 - [Useful Resources](#useful-resources)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)

<br>
<hr>
<br>

## __Overview__ 
GASEOUS WATER allows the user to search for games by title and once that information is obtained the user can then save the game into a wishlist for themselves.
<br>
<hr>
<br>

### __The Challenge__ 
​
___Users should be able to___:
​
- Type a game title they would like to view and the information will appear before them on their screen.

- Also, users can save that game into a wishlist if they so choose.
<br>
<hr>
<br>

### __Screenshots__ 🖐🏼🌀🧛🏻‍♂️
<br>

![searched-movie](./public/images/Gaseous%20Water.png)

<br>
<hr>
<br>

![main-page](./public/images/Screenshot%202023-03-05%2023.14.35.png)

<br>
<hr>
<br>

![character-page](./public/images/Gaseous%20Water%20gif.gif)

<br>
<hr>
<br>

### __Links__ 

- Our Repository: [Github Repo](https://github.com/coltonsmith135/gaseous-water)
- Published URL: [STILL IN PROGRESS. WILL BE AVAILABLE SOON.]()

<br>
​<hr>
<br>

## __Our Process__ 

* Started off using Excalidraw to create a wireframe.
![wireframe](./public/images/Gaseous%20Water.png)

* Once the wire framing was done, we split up the work that needed to be done.

* Templates were made using HTML and then put into Handlebars. All of the Javascript code was created as well. 

* Worked on trying to correct CSS styling and Javascript code.


<br>
<hr>
<br>

### __Built with__ 🦅👁

- Semantic HTML5 markup
- CSS Custom Properties
- Boostrap
- Javascript
- Mobile-first workflow
- [RAWG API](https://rawg.io/apidocs)
- AXIOS
- Sequelize
- BCRYPT
- Express
- Handlebars
- Nodemon
- MYSQL
- DOTENV

<br>
<hr>
<br>

### __What We learned__
​
The following are examples within our code that we learned from doing this project.
​
​
```html
{{#each games as |game|}}
          <div class="card mainpage">
            <img
              src="{{game.background_image}}"
              class="card-img-top image"
              alt="placeholder"
            />
            <div class="card-body content">
              <h5 class="card-title">{{game.name}}</h5>
              <div class="card-text">
                <p>{{game.platform}}</p>
                <p>{{game.release_date}}</p>
                <p>{{game.rating}}</p>
              </div>
            </div>
          </div>
          {{/each}}
```
​
```css
  nav {
    background: linear-gradient(
      90deg,
      rgb(56, 59, 61) 0%,
      rgba(69, 71, 92, 0.871) 100%
    );
  }
  
```
​
```js
router.get("/game", async (req, res) => {
  console.log(req.query.search);
  try {
    const gameName = req.query.search;
    const game = await axios.get(
      `https://api.rawg.io/api/games?search=${gameName}&key=${process.env.apiKey}`
    );
    console.log(game.data.results[0]);
    const id = game.data.results[0].id;
    console.log(id);
    const gameDetails = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=${process.env.apiKey}`
    );
    console.log(gameDetails);
    res.render("gamepage", {
      game: game.data.results[0],
      gameDetails: gameDetails.data,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
```

<br>
<hr>
<br>

### __Continued Development__ 
​
After finishing our project, we understand things more clearly now. We also understand Handlebars well enough now to be able to use it without too much of an issue. We also understand the MVC better as well.

<br>
<hr>
<br>

### __Useful Resources__
​
- [Markdown Guide](https://github.com/darsaveli/Readme-Markdown-Syntax) - This really helps with the understanding of Markdown syntax for READMEs and it allowed us to create a nicely structured README.

<br>
<hr>
<br>

## __Authors__

- Colton Smith 
    *  GitHub - [coltonsmith135](https://github.com/coltonsmith135)
- Curran Collins
    *  GitHub - [Curran](https://github.com/CurranCollins)
- Paull Shin 
    *  GitHub - [paullsshin](https://github.com/paullsshin)

<br>
<hr>
<br>

## __Acknowledgments__
​
This project was not an easy one and we faced some struggles and losses, but we made it. We plan to develop this project more so it can become a better and fully functioning website.

<br>
<hr>
​

