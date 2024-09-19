import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

let disclaimer = document.querySelector(".disclaimer a");

disclaimer.innerHTML = parkData.fullName;
disclaimer.href = parkData.url;

// set title to be Yellowstone (or whatever)
document.querySelector('title').innerHTML = parkData.fullName;

// This hasn't been added into the html yet, we just did this in class ?? you can call it something different (maybe with less underscores)
document.querySelector('.hero-baner__title').innerHTML = parkData.name;

// also not added yet, just from class
let banner_img = document.querySelector(".hero-banner img");
banner_img.src = parkData.images[0].url;
banner_img.alt = parkData.images[0].altText;