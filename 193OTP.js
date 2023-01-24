const inputField = document.querySelector('input')
const sumbmitButton = document.querySelector('button')
const cC = '141242'
inputField.addEventListener('input', function () {
    if (inputField.value.length > 5) {
        inputField.value = inputField.value.slice(0,6);
checkValid(inputField.value , cC)
    }
})

sumbmitButton.addEventListener('click', function (){
    checkValid(inputField.value , cC)
})

function checkValid(val , cC) {
    if (val === cC) {
        alert('success')
    }else{
        alert('wrong code try again')
    }
}