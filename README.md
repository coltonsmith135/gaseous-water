# __GASEIUS WATER__ ⛽️🌊


## __Table of Contents__ 🐜👨🏻
- [Overview](#overview-🕷👨)
 - [The Challenge](#the-challenge-👨😡💪🍏)
 - [Screenshots](#screenshots-🖐🏼🌀🧛🏻‍♂️)
 - [Links](#links-🩸🧙‍♀️)
 - [Our Process](#our-process-⍟🦸‍♂️)
 - [Built With](#built-with-🦅👁)
 - [What We Learned](#what-we-learned-🔫👱‍♂️🎧🎶)
 - [Continued Development](#continued-development-⚫️👩🏻‍🦰)
 - [Useful Resources](#useful-resources-🙅🏿🐈‍⬛👨🏿‍🦱)
- [Authors](#authors-stan)
- [Acknowledgments](#acknowledgments-🚀🦝)

<br>
<hr>
<br>

## __Overview__ 🕷👨 
GASEOUS WATER allows the user to search for games by title and once that information is obtained the user can then save the game into a wishlist for themselves.
<br>
<hr>
<br>

### __The Challenge__ 👨😡💪🍏
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

<!-- ![main-page](./assets/img/Web%20capture_28-12-2022_211430_127.0.0.1.jpeg) -->

<br>
<hr>
<br>

<!-- ![searched-movie](./assets/img/Web%20capture_28-12-2022_211452_127.0.0.1.jpeg) -->

<br>
<hr>
<br>

<!-- ![character-page](/assets/img/Screenshot%202023-01-03%2017.40.18.png) -->

<br>
<hr>
<br>

### __Links__ 🩸🧙‍♀️

- Our Repository: [Github Repo](https://github.com/coltonsmith135/gaseous-water)
- Published URL: [See it in Action!](https://appleschaussaa.github.io/marvel-movies-3000/)

<br>
​<hr>
<br>

## __Our Process__ ⍟🦸‍♂️

* Started off using Excalidraw to create a wireframe.
![wireframe](./public/images/Gaseous%20Water.png)

* Once the wireframing was done, we split up the work that needed to be done.

* Templates were made using HTML and then put into Handlebars. All of the Javascript code was created as well. 

* Worked on trying to correct CSS styling and Javascript code.


<br>
<hr>
<br>

### __Built with__ 🦅👁

- Semantic HTML5 markup
- CSS Custom Properties
- Foundation (Bootstrap Alternative)
- CSS Grid
- Javascript
- Mobile-first workflow
- [OMDB API](https://www.omdbapi.com/)
- [Marvel API](https://rapidapi.com/stefan.skliarov/api/Marvel/)

<br>
<hr>
<br>

### __What We learned__ 🔫👱‍♂️🎧🎶
​
The following are examples within our code that we learned from doing this project.
​
​
```html
HTML is done using Foundation Framework.

<input type="text" autocomplete="off"/>

<div class="cell large-10"></div>

<div class="grid-x grid-margin-x small-up-2 medium-up-3 pt15"></div>
```
​
```css
.pt15 {
  padding-top: 50px !important;
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

### __Continued Development__ ⚫️👩🏻‍🦰
​
After finishing our project, we understand things more clearly now. We also understand Foundation well enough now to be able to use it without too much of an issue. We have better understanding of CSS and Javascript and so for our future projects we hope to implement our knowledge into those future projects to make them better than what we have right now.

<br>
<hr>
<br>

### __Useful Resources__ 🙅🏿🐈‍⬛👨🏿‍🦱
​
- [Markdown Guide](https://github.com/darsaveli/Readme-Markdown-Syntax) - This really helps with the understanding of Markdown syntax for READMEs and it allowed us to create a nicely structured README.
- [Font Generator](https://www.fontgenerator.org/full-crazy) - Google Fonts was not able to provide the font that we wanted so we turned to this Font Generator to create special fonts. All we had to do was type in the words that we wanted to have generated and then we copied and pasted them into the html.
- [Hashing](https://lig-membres.imag.fr/donsez/cours/exemplescourstechnoweb/js_securehash/) - MD5 is a cryptographic hash function algorithm that takes the message as input of any length and changes it into a fixed-length message of 16 bytes. MD5 algorithm stands for the message-digest algorithm.

<br>
<hr>
<br>

## __Authors__ ![Stan](./assets/img/StanLee_Think.png)

- Sakthipriya Loganathan 
    *  GitHub - [SPloganathan](https://github.com/SPloganathan)
- Robert Schauss 
    *  GitHub - [Robert](https://github.com/appleschaussaa)
- Paull Shin 
    *  GitHub - [paullsshin](https://github.com/paullsshin)

<br>
<hr>
<br>

## __Acknowledgments__ 🚀🦝
​
Everyone in our group did an amazing job! We each split our work into sections that were manageable and whenever we needed help or someone saw something that could cause an issue, it was addressed almost right away. Everyone contributed so much of their time and effort and we are happy with what we created! Hope you guys enjoy!

<br>
<hr>
​

