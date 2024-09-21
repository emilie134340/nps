import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

let disclaimer = document.querySelector(".disclaimer a");
disclaimer.innerHTML = parkData.fullName;
disclaimer.href = parkData.url;

// name, designation, and states of the park
// this is a simple template function
function parkInfoTemplate(info) {
    return `<a href="/" class="hero-banner__title">${info.name}</a>
    <p class="hero-banner__subtitle">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>`;
  }

// set title to be Yellowstone (or whatever)
document.querySelector('title').innerHTML = parkData.fullName;

// from class
document.querySelector('.hero-baner__title').innerHTML = parkData.name;

// just from class
let banner_img = document.querySelector(".hero-banner img");
banner_img.src = parkData.images[0].url;
banner_img.alt = parkData.images[0].altText;

// set the rest of the header info
document.querySelector(".hero-banner__content").innerHTML = parkInfoTemplate(parkData);