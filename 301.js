const searchbar = document.getElementById('searchbar');
const search = document.getElementById('search');
const username = document.getElementById('username')
const userHref = document.getElementById('userHref')
const userImg = document.getElementById('userImg')
const moreinfo = document.getElementById('moreinfo')
const followers = document.getElementById('followers')
const following = document.getElementById('following')
const repos = document.getElementById('repos')
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
    try {
        let data = await fetch(`https://api.github.com/users/${searchbar.value}`)
        console.log(data);
        if (data.ok === false) {
            userObj = 0
            throw new Error(response.statusText);

        } else {
            userObj = await data.json()
            console.log(userObj);
            username.innerHTML = `${userObj.name} AKA ${userObj.login}`
            userHref.href = `${userObj.html_url}`
            userImg.src = `${userObj.avatar_url}`
            followers.innerHTML = ``
            following.innerHTML = ``
            repos.innerHTML = ``
            searchbar.value = ''
            searchbar.focus()
        }

    } catch (error) {
        username.innerHTML = `Usernot found! Try again`
        userImg.src = ``
        followers.innerHTML = ``
        following.innerHTML = ``
        repos.innerHTML = ``
    }
}

function fetchMore() {
    if (userObj !== 0) {
        followers.innerHTML = `Followers : ${userObj.followers}`
        following.innerHTML = `Followers : ${userObj.following}`
        repos.innerHTML = `Public Repos : ${userObj.public_repos}`

    }
}