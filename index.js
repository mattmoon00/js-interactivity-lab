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
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn)
    document.querySelector("ul").appendChild(movie)
    inputField.value = ''
}

function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = 'Movie deleted!'
}

function crossOffMovie (event) {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')  === true) {
        message.textContent = 'Movie watched!'
    }
    else {
        message.textContent = 'Movie added back!'
    }
}

document.querySelector('form').addEventListener('submit', addMovie)