const modal = document.querySelector('#modal');
const openButton = document.querySelector('#open-modal');
const closeButton = document.querySelector('.close-button')

// open modal
function openModal() {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", false);
}

// close modal
function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", true);
}

// add click funcitonality
openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

// use esc to close
window.addEventListener("keydown", function(event) {
    // check that the esc key is pressed
    if (event.key === "Escape") {
        // use same close function
        closeModal();
    }
});

// click outside the box to close
modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeModal();
    }
});