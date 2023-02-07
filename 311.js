let dataArr = [];
let table = document.getElementById('table')
async function fetchData() {

    for (let i = 0; i < 10; i++) {
        let obj = {}
        try {
            let data = await fetch(`https://swapi.dev/api/people/${i + 1}/`)
            if (data.ok === false) {
                throw new Error(data.status)
            } else if (data.ok === true) {
                let object = await data.json()
                obj.name = object.name
                obj.height = object.height
                obj.hair = object.hair_color
                let planetreq = await fetch(object.homeworld)
                let planet = await planetreq.json()
                obj.planet = {
                    name: planet.name,
                    population: planet.population
                }
                dataArr.push(obj)
                layInfo(i)
            }

        } catch (error) {
            console.log('oooooooooooooooooops', error);
        }
    }
}

function layInfo(num) {
    table.innerHTML += `<tr><td>${dataArr[num].name}</td><td>${dataArr[num].hair}</td><td>${dataArr[num].height}</td><td>${dataArr[num].planet.name}</td><td>${dataArr[num].planet.population}</td></tr>`
}

fetchData()