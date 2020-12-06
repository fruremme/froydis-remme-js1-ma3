// JAVASCRIPT 1 - MA1 

// question 2


const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";


const resultContainer = document.querySelector(".container");

async function getResults() {

    const response = await fetch(url);

    const results = await response.json();

    const facts = results.results;

    for (let i = 0; i < facts.length; i++) {
        console.log(facts[i].results);

        if (i === 8) {
            break;
        }

        resultContainer.innerHTML += `<div class="result">${facts[i].rating}</div>`;
        resultContainer.innerHTML += `<div class="result">${facts[i].name}</div>`;
        resultContainer.innerHTML += `<div class="result">${facts[i].tags.length}</div>`;
    }
}


getResults();

