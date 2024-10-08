// api.js
const baseUrl = "https://developer.nps.gov/api/v1/";

async function getJson(endpoint) {
  const apiKey = 'xg7eIBSdHPvKk3r5ra2qEgLhIusdOqyMmkEsMO1u';
  // construct the url: baseUrl + endpoint + parameters
  const url = baseUrl + endpoint;
  // set the options. The important one here is the X-Api-Key
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": apiKey
      }
  }
  // make the request
  const response = await fetch(url, options)
  const data = await response.json()
  console.log(data)
  return data;
}

async function renderClimbingList() {
    const listElement = document.querySelector('#outputList');
    const data = await getJson('activities/parks?q=climbing');
    const parks = data.data[0].parks.map(listTemplate);
    console.log(data);
    const html = parks.join("");
    listElement.innerHTML = html;
    console.log(html);
}

function listTemplate(item) {
    return `<a href="${item.url}"><li>${item.fullName}</li></a><span>${item.states}</span>`;
}

renderClimbingList();

// URL to get a list of parks involving Idaho:
// https://developer.nps.gov/api/v1/parks?stateCode=id

// URL to find campgrounds available at City of Rocks:
// https://developer.nps.gov/api/v1/campgrounds?parkCode=ciro

// URL for parks that offer the climbing activity:
// https://developer.nps.gov/api/v1/activities/parks?q=climbing

// URL to pull photos involving bears:
// https://developer.nps.gov/api/v1/multimedia/galleries?q=bears

