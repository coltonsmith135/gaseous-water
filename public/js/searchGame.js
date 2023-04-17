console.log('SEARCH JS FILE CONNECTED')

const searchGame = async (e) => {
    e.preventDefault()
    console.log('search game function')

    const gameName = document.querySelector('#game').value

    if (gameName){
        window.location.replace(`http://localhost:3001/game?search=${gameName}`)
    }    
}

document.querySelector('#search-btn').addEventListener('click', searchGame)

