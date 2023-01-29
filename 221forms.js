const reviewBtn = document.querySelector('#review-btn');
const modifyBtn = document.querySelector('#modify-btn')
const submitBtn = document.querySelector('#submit-btn')
const form = document.querySelector('#form')
const nameInput = document.querySelector('#nameInput')
const ageInput = document.querySelector('#ageInput')
const emailInput = document.querySelector('#emailInput')
const reviewList = document.querySelector('#reviewList')
const reviewName = document.querySelector('#reviewName')
const reviewAge = document.querySelector('#reviewAge')
const reviewEmail = document.querySelector('#reviewEmail')
const formMessage = document.querySelector('#formMessage')

const formData = {}

for (let input of [nameInput, ageInput, emailInput]) {
    input.addEventListener('input', ({ target }) => {
        const { name, value } = target;
        formData[name] = value;
        console.log(formData);
    })
}

reviewBtn.addEventListener('click', reviewData)
modifyBtn.addEventListener('click', modifyData)
submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    formMessage.innerHTML = 'Submitted form successfuly 📃'
})




function reviewData() {
    reviewList.style.display = 'inline'
    reviewName.innerHTML = formData.name
    reviewAge.innerHTML = formData.age
    reviewEmail.innerHTML = formData.email
    nameInput.disabled = true
    ageInput.disabled = true
    emailInput.disabled = true
    modifyBtn.style.display = 'inline'
    submitBtn.style.display = 'inline'
}

function modifyData() {
    reviewList.style.display = 'none'
    reviewName.innerHTML = formData.name
    reviewAge.innerHTML = formData.age
    reviewEmail.innerHTML = formData.email
    nameInput.disabled = false
    ageInput.disabled = false
    emailInput.disabled = false
    modifyBtn.style.display = 'none'
}
