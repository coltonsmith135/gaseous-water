console.log('HOMEPAGE JAVASCRIPT FILE LINKED')


let searchbtn = document.querySelector('#search-btn')
let loginBtn = document.querySelector('#login-btn')
let signupBtn = document.querySelector('#signup-btn')
let gameEl = document.querySelector('#game')

const loginFormHandler = async (event) => {
  console.log('login form handler triggered')
    event.preventDefault();
  

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
    const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        console.log(response)
        alert(response.statusText);
      }
    }
  };

const signupFormHandler = async (event) => {
  console.log('signup form handler triggered')
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/user', {
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
    .querySelector('#login-btn')
    .addEventListener('click', loginFormHandler);
    
  
  document
    .querySelector('#signup-btn')
    .addEventListener('click', signupFormHandler);