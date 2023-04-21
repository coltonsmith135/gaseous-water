console.log('SEARCH JS FILE CONNECTED')
// const gameItemName = document.getElementById(gameItemName).value

// console.log('GAMENAME: ', gameItemName)
const searchGame = async (e) => {
    e.preventDefault()
    console.log('search game function')

    const gameName = document.querySelector('#game').value

    if (gameName){
        window.location.replace(`https://gaseous-water.herokuapp.com/game?search=${gameName}`)
    }    
}



document.querySelector('#search-btn').addEventListener('click', searchGame)



