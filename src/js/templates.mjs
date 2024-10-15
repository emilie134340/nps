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
