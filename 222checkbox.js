const checkBox = document.querySelector('#check');
const image = document.querySelector('#img');

checkBox.addEventListener('click', function () {
    this.checked ? image.src = 'https://media.tenor.com/mhLPO2VldCkAAAAM/0001.gif' : image.src = ''
})