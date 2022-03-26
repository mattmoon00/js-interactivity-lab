document.querySelector('form').addEventListener('submit', addMovie)
let message = document.querySelector('#message')

function addMovie(event) {
    event.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let Movietitle = document.createElement("span")
    addEventListener("click", crossOffMovie)
    Movietitle.textContent = inputField.value
    movie.appendChild(Movietitle)
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = "x"
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn)
    document.querySelector("ul").appendChild(movie)
    inputField.value = ''
}

function deleteMovie(event) {
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`
    revealMessage()
    event.target.parentNode.remove()
}

function crossOffMovie (event) {
    let movieTitle = event.target.textContent
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')  === true) {
        message.textContent = `${movieTitle} watched!`
    }
    else {
        message.textContent = `${movieTitle} added back!`
    }
    revealMessage()
}


function revealMessage() {
    message.classList.remove('hide')
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}