// get item
window.addEventListener('load', () => {
    let savedNote = localStorage.getItem('note');
    if (savedNote) {
        document.querySelector('#noteInput').value = savedNote;
    }
})

// set item
document.querySelector('#saveBtn').addEventListener('click', function() {
    let note = document.querySelector('#noteInput').value;
    localStorage.setItem('note', note) //key value
    alert('Note saved');
})

// remove item
document.querySelector('#clearBtn').addEventListener('click', function() {
    let note = document.querySelector('#noteInput').value = ''; //empty it
    localStorage.removeItem('note') //just the key will remove the whole thing
    alert('Note cleared');
})