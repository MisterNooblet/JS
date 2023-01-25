const field = document.querySelector('textarea');
const button = document.querySelector('button');
const body = document.querySelector('body');
button.addEventListener('click', function () {
    if (!isNaN(field.value * 1)) {
        if (document.querySelector('.smileybox') !== null) {
            document.querySelector('.smileybox').remove()
        }
        makeItRain(field.value * 1)
    } else {
        alert('Only numbers allowed!')
    }
})

function makeItRain(amm) {
    const box = document.createElement('div');
    box.classList.add('smileybox');
    body.appendChild(box)

    for (let i = 0; i < amm; i++) {
        if (i % 2 == 0) {
            const angry = document.createElement('img');
            angry.src = 'https://cdn-icons-png.flaticon.com/128/743/743418.png'
            box.appendChild(angry)
        } else {
            const happy = document.createElement('img');
            happy.src = 'https://cdn-icons-png.flaticon.com/128/743/743267.png'
            box.appendChild(happy)
        }

    }
}