let searchbtn = document.querySelector('#search-btn')
let loginBtn = document.querySelector('#login-btn')
let signupBtn = document.querySelector('#signup-btn')
let gameEl = document.querySelector('#game')
require('dotenv').config()
const axios = require('axios')


// document
//   .querySelector("searchbtn")
//   .addEventListener("click", function (event) {
//     if (event.target.nodeName !== "BUTTON") {
//       return;
//     }
//     let gameName = event.target.getAttribute("data-gameName");
//     document.querySelector("#t").value = gameName;
//   });

// document
//   .querySelector("#searched-character")
//   .addEventListener("click", function (event) {
//     if (event.target.nodeName !== "BUTTON") {
//       return;
//     }
//     let characterText = event.target.getAttribute("data-characterText");
//     document.querySelector("#character-text").value = characterText;
//   });


// async function getGameList() {
//     let response = await axios.get(
//         `https://rawg-video-games-database.p.rapidapi.com/games?&key=${process.env.apiKey}`,

//         {
//           headers: {
//             "x-rapidapi-key":
//               "e6ef05302emsh9c46dd59d7ac5d1p13a2d8jsneb37aae7d452",
//             "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
//           },
//         }
//       );
//     let data = await response.json();
//     let gameList = data.data.results;
//     if (gameList.length > 0) {
//       let names = gameList.map((title) => {
//         return data.results.name;
//       });
//       //Sort names in ascending order
//       let sortedNames = names.sort();
//       let input = document.querySelector("#search-btn");
//       //Execute function on keyup
//       input.addEventListener("keyup", (e) => {
//         //loop through above array
//         //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
//         removeElements();
//         for (let i of sortedNames) {
//           //convert input to lowercase and compare with each string
//           if (
//             input.value !== "" &&
//             i.toLowerCase().startsWith(input.value.toLowerCase())
//           ) {
//             //create li element
//             let listItem = document.createElement("li");
//             //One common class name
//             listItem.classList.add("list-items");
//             listItem.style.cursor = "pointer";
//             listItem.addEventListener("click", function () {
//               input.value = i;
//               removeElements();
//             });
//             //Display matched part in bold
//             let word = "<b>" + i.substr(0, input.value.length) + "</b>";
//             word += i.substr(input.value.length);
//             //display the value in array
//             listItem.innerHTML = word;
//             document.querySelector(".list").appendChild(listItem);
//           }
//         }
//       });
//     }
//   }


const loginFormHandler = async (event) => {
    event.preventDefault();
  

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };

const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ email, username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);