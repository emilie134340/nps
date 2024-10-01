setTimeout(function() {
    console.log('async')
}, 1000); // 1 second

console.log('synchronous'); // this will show up first because the other one is timeing out

// fetch activity
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  console.log(response);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}

async function getPokemonList(url) {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      doStuffList(data);
    }
}    
// function doStuff(data) {
//   results = data;
//   console.log("first: ", results);
// }

// takes js object and get the name and sprites.front_default
function doStuff(data) {
    const outputElement = document.querySelector("#output");
    results = data;
    const html = `<h2>${results.name}</h2>
                  <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
    outputElement.innerHTML = html;
    console.log("first: ", results);
  }

function doStuffList(data) {
    console.log(data);
    const pokeListElement = document.querySelector("#outputList");
    const pokeList = data.results;
    pokeList.forEach((currentItem) => {
      const html = `<li>${currentItem.name}</li>`;
      // note the += here...
      pokeListElement.innerHTML += html; //adds to the one that's already there instead of replacing it
    });
  }

getPokemon(url);
console.log("second: ", results);
getPokemonList(urlList);


const park_url = "https://developer.nps.gov/api/v1/parks?parkCode=yell&api_key=xg7eIBSdHPvKk3r5ra2qEgLhIusdOqyMmkEsMO1u";

async function getJSON() {
    let data = null;
    const response = await fetch(park_url);
    if (response.ok) {
        data = await response.json();
        document.querySelector('#outputPark').innerHTML = data.data[0].fullName;
    } else {
        console.log("Error");
    }
}

getJSON(park_url);