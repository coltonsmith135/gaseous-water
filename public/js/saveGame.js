console.log("saved javascript file")

const saveGame = async (e) => {
    e.preventDefault()
  const gameName = document.querySelector('#gameItemName').innerHTML
  const gameRating = document.querySelector('#gameRating').innerHTML
  const gameReleased = document.querySelector('#gameReleased').innerHTML
  const details = document.querySelector('#details').innerHTML
  const gameImage = document.querySelector('#gameImage').src

  const response = await fetch('/game', {
    method: 'POST',
    body: JSON.stringify({ gameName, gameRating, gameReleased, details, gameImage }),
    headers: { 'Content-Type': 'application/json' },
  });
console.log("RESPONSE!!!!", response)
  if (response.ok) {
    document.location.replace('/profile');
  } else {
    console.log(response)
    alert(response.statusText);
  }

    console.log("save game function", gameName )
    
}


document.querySelector('#saveBtn').addEventListener('click', saveGame)
