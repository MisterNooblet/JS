const searchbar = document.getElementById('searchbar');
const search = document.getElementById('search');
const username = document.getElementById('username')
const userHref = document.getElementById('userHref')
const userImg = document.getElementById('userImg')
const moreinfo = document.getElementById('moreinfo')
const followers = document.getElementById('followers')
const following = document.getElementById('following')
search.addEventListener('click', fetchUser)
moreinfo.addEventListener('click', fetchMore)
let userObj
async function fetchUser() {
    try {
        let data = await fetch(`https://api.github.com/users/${searchbar.value}`)
        userObj = await data.json()
        console.log(userObj);
        username.innerHTML = `${userObj.name} AKA ${userObj.login}`
        userHref.href = `${userObj.html_url}`
        userImg.src = `${userObj.avatar_url}`
        followers.innerHTML = ``
        following.innerHTML = ``
    } catch (error) {
        throw new Error(error)
    }
}

function fetchMore() {
    followers.innerHTML = `Followers : ${userObj.followers}`
    following.innerHTML = `Followers : ${userObj.following}`
}