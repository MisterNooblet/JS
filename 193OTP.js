const inputField = document.querySelector('input')
const submitButton = document.querySelector('button')
const cC = '141242'
inputField.addEventListener('input', function () {
    if (inputField.value.length > 5) {
        inputField.value = inputField.value.slice(0, 6);
        checkValid(inputField.value, cC)
    }
})

submitButton.addEventListener('click' , checkValid(inputField.value , cC) )

function checkValid(val, cC) {
    if (val === cC) {
        alert('success')
    } else {
        alert('wrong code try again')
    }
}