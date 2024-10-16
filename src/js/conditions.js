import { getParkData } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";


function setAlerts(data) {
    const alertsInfo = document.querySelector(".alerts");
    const html = data.map(alertsTemplate);
    alertsInfo.insertAdjacentElement("afterbegin", html.join(""));
  }

async function init() {
  const parkData = await getParkData();
  setHeaderFooter(parkData);

  setAlerts(parkData);
}

init();