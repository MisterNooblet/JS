const textArea = document.querySelector('textarea');
const button = document.querySelector('button');

button.addEventListener('mouseover', function() {
    if(textArea.value.length < 100){
        button.classList.toggle('error')
        button.innerText = 'Please fill in atleast 100 characters'
    }
})
button.addEventListener('mouseout', function() {
    if(textArea.value.length < 100){
        button.classList.toggle('error')
        button.innerText = 'Submit'
    }
})