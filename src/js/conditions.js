import { getParkData, getParkAlerts, getVisitorCenterData } from "./parkService.mjs";
import { alertTemplate, visitorCenterTemplate, activityListTemplate } from "./templates.mjs";
import  setHeaderFooter from "./setHeaderFooter.mjs";

function setAlerts(alerts) {
    const alertsContainer = document.querySelector(".alerts > ul");
    alertsContainer.innerHTML = "";
    const html = alerts.map(alertTemplate);
    alertsContainer.insertAdjacentHTML("beforeend", html.join(""));
  }

function setVisitorCenters(center) {
  const centersContainer = document.querySelector(".visitor-center ul");
  centersContainer.innerHTML = "";
  const html = center.map(visitorCenterTemplate);
  centersContainer.insertAdjacentHTML("afterbegin", html.join(""));
}

function setActivities(activities) {
  const activitiesContainer = document.querySelector(".activities ul");
  activitiesContainer.innerHTML = "";
  const html = activityListTemplate(activities);
  activitiesContainer.insertAdjacentHTML("afterbegin", html);
}

// init();
async function init() {
    const parkData = await getParkData();
    setHeaderFooter(parkData);
    const alerts = await getParkAlerts(parkData.parkCode);
    const visitorCenterData = await getVisitorCenterData(parkData.parkCode);
    setAlerts(alerts);
    setVisitorCenters(visitorCenterData);
    setActivities(parkData.activities);
  }
  
  init();