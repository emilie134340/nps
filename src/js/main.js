import { getParkData, parkInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";
const parkData = getParkData();

// const data = getParkData();

// 02 step 1 set full park name and description from our data
function setParkIntro(data) {
  const introEl = document.querySelector(".intro");
  introEl.innerHTML = `<h1>${parkData.fullName}</h1>
  <p>${parkData.description}</p>`;
}

// 02 step 2

// // name, designation, and states of the park
// // this is a simple template function
// function parkInfoTemplate(info) {
//     return `<a href="/" class="hero-banner__title">${info.name}</a>
//     <p class="hero-banner__subtitle">
//       <span>${info.designation}</span>
//       <span>${info.states}</span>
//     </p>`;
//   }

// set title to be Yellowstone (or whatever)
// document.querySelector('title').innerHTML = data.fullName;

// from class
// document.querySelector('.hero-baner__title').innerHTML = data.name;

// just from class
// let banner_img = document.querySelector(".hero-banner img");
// banner_img.src = data.images[0].url;
// banner_img.alt = data.images[0].altText;

// set the rest of the header info
// document.querySelector(".hero-banner__content").innerHTML = parkInfoTemplate(data);

// setHeaderInfo(data); //what

function setParkInfoLinks(data) {
  const infoEl = document.querySelector(".info");
  // we have multiple links to build...so we map to transform the array of objects into an array of HTML strings.
  const html = data.map(mediaCardTemplate);
  // join the array of strings into one string and insert it into the section
  infoEl.insertAdjacentHTML("afterbegin", html.join(""));
}

setHeaderFooter(parkData); //whaaaaat
setParkIntro(parkData);
setParkInfoLinks(parkInfoLinks);
// the mailing address isn't in the code so just don't include it for now