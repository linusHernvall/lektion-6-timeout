window.addEventListener('DOMContentLoaded', main); // main är en callback-funktion därför inga paranteser.

let timeoutRef;

function main() {
    // Start på programmet.
   const ref = setTimeout(changeBackgroundColor, 2000);
    addEventListeners();
}

function changeBackgroundColor() {
    document.body.style.background = 'lightblue';
}

function addEventListeners() {
    const button = document.getElementById('cancel');
    button.addEventListener('click', cancelBackgroundChange);
}

function cancelBackgroundChange() {
    clearTimeout(timeoutRef);
}