import spritePath from '../images/sprite.symbol.svg';

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

// l7 templates
export function iconTemplate(iconId) {
  return `<svg class="icon" role="presentation" focusable="false">
  <use
    href="${spritePath}#${iconId}"
   ></use>
</svg>`;;
  }
  
  export function vcDetailsTemplate(elementId, summaryText, iconId, content) {
  return `<details name="vc-details" id="${elementId}">
  <summary>
  ${iconTemplate(iconId)}
  ${summaryText}
  </summary>
  ${content}
  </details>`;
  }

  export function vcTitleTemplate(text) {
    return `${iconTemplate("ranger-station")} ${text}`;
  }
  
  export function vcInfoTemplate(data) {
    const image = data.images[0];
    return `<figure>
            <img src="${image.url}" alt="${image.altText}" />
            <figcaption>${image.caption} <span>${image.credit}</span></figcaption>
          </figure>
          <p>${data.description}</p>`;
  }
  export function listTemplate(data, contentTemplate) {
    const html = data.map(contentTemplate);
    return `<ul>${html.join("")}</ul>`;
  }

// amenities list template
export function vcAmenityTemplate(data) {
  return `<li>${data}</li>`;
}

function vcAddressTemplate(data) {
  return `<section>
            <h3>${data.type} Address</h3>
            <address>
              ${data.line1}<br />
              ${data.city}, ${data.stateCode} ${data.postalCode}
            </address>
          </section>`;
}

export function vcAddressesListTemplate(data) {
  const physical = data.find((address) => address.type === "Physical");
  const mailing = data.find((address) => address.type === "Mailing");
  let html = vcAddressTemplate(physical);
  if (mailing) {
    html += vcAddressTemplate(mailing);
  }
  return html;
}
export function vcDirectionsTemplate(data) {
  return `<p>${data}</p>`;
}
export function vcContactsTemplate(data) {
  return `<section class="vc-contact__email">
            <h3>Email Address</h3>
            <a href="email:${data.emailAddresses[0].emailAddress}">Send this visitor center an email</a>
          </section>
          <section class="vc-contact__phone">
            <h3>Phone numbers</h3>
            <a href="tel:+1${data.phoneNumbers[0].phoneNumber}">${data.phoneNumbers[0].phoneNumber}</a>
          </section>`;
}


// vc image template
export function vcImageTemplate(data) {
  return `<li><img src="${data.url}" alt="${data.altText}" ><li>`;
}