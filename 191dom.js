
function domWalk() {
    const liStart = document.querySelector('.start-here');
    const newLI = document.createElement('li')
    const listList = liStart.nextElementSibling.firstElementChild;
    const ul = document.querySelector('ul');
    const title = document.querySelector('title')
    const p = document.querySelector('p');
    newLI.innerHTML = 'subtitle 4' 
    
    liStart.textContent = 'main title'
    listList.appendChild(newLI)
    ul.lastElementChild.remove();
    title.textContent = 'Master Of The Dom'
    p.textContent = 'wwwwwwwwwwwwwwwwww'

    
}

domWalk();