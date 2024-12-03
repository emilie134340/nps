// hero banner template
export function parkInfoTemplate(info) {
    return `<a href="/" class="hero-banner__title">${info.name}</a>
      <p class="hero-banner__subtitle">
        <span>${info.designation}</span> <br>
        <span>${info.states.split(',').join(', ')}</span>
      </p>`;
}

// media card template
export function mediaCardTemplate(info) {
    return `<div class="media-card">
      <a href="${info.link}">
      <img src="${info.image}" alt="${info.name}" class="media-card__img">
      <h3 class="media-card__title">${info.name}</h3>
      </a>
     <p>${info.description}</p>
       </div>`;
}

// step 5
// phone numbers template 
function getVoicePhone(numbers) {
    const voice = numbers.find((number) => number.type === "Voice");
    return voice.phoneNumber;
}

// footer template (sans mailing address)
export function footerTemplate(info) {
    const voice = getVoicePhone(info.contacts.phoneNumbers);
    
    return `<section class="contact">
    <h3>Contact Info</h3>
    <h4>Phone:</h4>
    <p>${voice}</p>
  </section>`;
}

import spritePath from '../images/sprite.symbol.svg';

export function alertTemplate(alert) {
  let alertType = "";
  // most of the alerts are one word and line up with the icons nicely. "Park Closure" is the exception
  switch (alert.category) {
    case "Park Closure":
      alertType = "closure";
      break;
    default:
      alertType = alert.category.toLowerCase();
  }
  return `<li class="alert">
  <svg class="icon" focusable="false" aria-hidden="true">
  <use href="${spritePath}#alert-${alertType}"></use></svg>
  <div>
    <h3 class="alert-${alertType}">${alert.title}</h3>
    <p>${alert.description}</p>
  </div></li>`;
}

// visitors center template
export function visitorCenterTemplate(center) {
  return `<li class="visitor-center">
  <h3><a href="visitor-center.html?id=${center.id}">${center.name}</a></h3>
  <p>${center.description}</p>
  <p>${center.directionsInfo}</p>
  </li>`;
}
// activities template
export function activityListTemplate(activities) {
  return activities.map((activity) => `<li>${activity.name}</li>`).join("");
}