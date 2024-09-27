import { parkInfoTemplate, footerTemplate } from "./templates.mjs";

// wraping up code from w1 into a function
function setHeaderInfo(data) {
    let disclaimer = document.querySelector(".disclaimer a");
    disclaimer.innerHTML = data.fullName;
    disclaimer.href = data.url;
    // update site title
    document.querySelector("head > title").textContent = data.fullName;
    // set the banner img
    document.querySelector(".hero-banner > img").src = data.images[0].url;
    // set the rest of the park-specific info in header
    document.querySelector(".hero-banner__content").innerHTML = parkInfoTemplate(data);
}

function setFooter(data) {
  const footerEl = document.querySelector("#park-footer"); //why El? what's that mean??
  footerEl.insertAdjacentHTML("afterbegin", footerTemplate(data));
}

export default function setHeaderFooter(parkData) {
  setHeaderInfo(parkData);
  setFooter(parkData);
}