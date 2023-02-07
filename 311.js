let dataArr = [];
let table = document.getElementById('table') // targeting our table
async function fetchData() { // fetching all needed data and pushing it to our dataArr above

    for (let i = 0; i < 10; i++) { // running a loop to fetch the desired amount of characters
        let obj = {} // a temporary object to construct an object to push to dataArr
        try {
            let data = await fetch(`https://swapi.dev/api/people/${i + 1}/`) // fetching our character using *i* as an id
            if (data.ok === false) { // if the request was not succesfull we throw an error.
                throw new Error(data.status)
            } else if (data.ok === true) { // if our request was succesfull we start extracting data recieved from the API
                let object = await data.json() // we make convert the data to json
                obj.name = object.name // setting our temp objects properties and values  
                obj.height = object.height
                obj.hair = object.hair_color
                let planetreq = await fetch(object.homeworld) // after were done with our characters required data we start fetching the home planet 
                let planet = await planetreq.json() // we convert it to json as well
                obj.planet = { // and we add a new object to our character which contains the required planet info
                    name: planet.name,
                    population: planet.population
                }
                dataArr.push(obj) // finally we push our object to the dataArr
                layInfo(i) // and we call the layInfo function with (i) as a parameter to lay the information on our table as soon as we get it
            }

        } catch (error) { // if our api call fails for some reason or the link was incorrect we get the following error
            console.log('oooooooooooooooooops', error);
        }
    }
}

function layInfo(num) { // just constructing the table with the information from dataArr[i]
    table.innerHTML += `<tr><td>${dataArr[num].name}</td><td>${dataArr[num].hair}</td><td>${dataArr[num].height}</td><td>${dataArr[num].planet.name}</td><td>${dataArr[num].planet.population}</td></tr>`
}

fetchData() // and ofcourse we initiate the process