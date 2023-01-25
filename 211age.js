let input = document.querySelector('input');
let button = document.querySelector('button');
let canDrink = document.querySelector('h3');
let cantDrink = canDrink.nextElementSibling

button.addEventListener('click', function(){
    input.value >= 18?canDrink.innerText = 'You can drink':canDrink.innerText = 'You cant drink go back to your momma'
})