const searchbar = document.getElementById('searchbar');
const search = document.getElementById('search');
const username = document.getElementById('username')
const userHref = document.getElementById('userHref')
const userImg = document.getElementById('userImg')
const moreinfo = document.getElementById('moreinfo')
const genre = document.getElementById('genre')
const year = document.getElementById('year')
const plot = document.getElementById('plot')
const director = document.getElementById('director')
const actors = document.getElementById('actors')
const imdb = document.getElementById('imdb')
const rt = document.getElementById('rt')
const ratings = document.getElementById('ratings')
const meta = document.getElementById('meta')
const moreinfobox = document.getElementById('moreinfobox')
search.addEventListener('click', fetchUser)
moreinfo.addEventListener('click', fetchMore)
window.addEventListener('keyup', (e) => {
    e.key === 'Enter' && fetchUser()
})
window.onload = () => {
    searchbar.focus()
}
let userObj
async function fetchUser() {
    resetUI()
    userObj = 0
    try {
        let data = await fetch(`http://www.omdbapi.com/?t=${searchbar.value.split(' ').join('+')}&apikey=82eae376`)
        userObj = await data.json()
        console.log(userObj);
        if (userObj.Response === 'False') {
            throw new Error(userObj.Error);

        } else {
            username.innerHTML = `${userObj.Title}`
            userImg.src = `${userObj.Poster}`
            searchbar.value = ''
            searchbar.focus()
        }

    } catch (error) {
        username.innerHTML = `${userObj.Error}`
        userImg.src = ``
        resetUI()

    }
}

function fetchMore() {
    if (userObj !== 0) {
        genre.innerHTML = `Genre : ${userObj.Genre}`
        year.innerHTML = `Year : ${userObj.Year}`
        plot.innerHTML = `Plot : ${userObj.Plot}`
        director.innerHTML = `Director : ${userObj.Director}`
        actors.innerHTML = `Actors : ${userObj.Actors}`
        userObj.Ratings.forEach(element => {
            let rating = document.createElement('li')
            rating.innerHTML = `${element.Source} : ${element.Value}`
            ratings.appendChild(rating)

        })
    }
    moreinfobox.classList.remove('hidden')
}

function resetUI() {
    moreinfobox.classList.add('hidden')
    genre.innerHTML = ``
    year.innerHTML = ``
    plot.innerHTML = ``
    director.innerHTML = ``
    actors.innerHTML = ``
    ratings.innerHTML = ``
}