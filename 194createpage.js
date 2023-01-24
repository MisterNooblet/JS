const title = document.createElement('title');
const head = document.querySelector('head');
const body = document.querySelector('body')
const pageheader = document.createElement('h1')
const imgContainer = document.createElement('div')
const img1 = document.createElement('img')
const img2 = document.createElement('img')
const img3 = document.createElement('img')
const wickedButton = document.createElement('button')
wickedButton.textContent = 'bye bye button'
img1.className = 'img'
img2.className = 'img'
img3.className = 'img'
imgContainer.appendChild(img1)
imgContainer.appendChild(img2)
imgContainer.appendChild(img3)

const images = document.getElementsByClassName('img')

function setImages(){

    for(i = 0; i < images.length; i++){
        images[i].style.width = '200px'
        images[i].style.height = '200px';
        images[i].style.margin = '200px';
        images[i].src = 'https://picsum.photos/200'
    }
}
pageheader.textContent = 'This page is made purely with JS'
pageheader.style.color = '#000'
body.style.display = 'flex'
body.style.flexDirection = 'column'
body.style.alignItems = 'center'
title.textContent = 'creating page with js'
head.appendChild(title)
body.appendChild(pageheader)
body.appendChild(imgContainer)
body.appendChild(wickedButton)
setImages()

wickedButton.addEventListener('click', function(){
const allElems = document.querySelectorAll('body *')
for(let i= 0; i < allElems.length; i++){
    allElems[i].style.display = 'none'
}
})