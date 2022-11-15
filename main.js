window.addEventListener('DOMContentLoaded', main); // main är en callback-funktion därför inga paranteser.

let timeoutRef;

function main() {
    // Start på programmet.
   timeoutRef = setTimeout(changeBackgroundColor, 2000);
    setupEventListeners();
}

function changeBackgroundColor() {
    document.body.style.background = 'lightblue'
}

function setupEventListeners() {
    const button = document.getElementById('cancel');
    button.addEventListener('click', cancelBackgroundChange);
}

function cancelBackgroundChange() {
    clearTimeout(timeoutRef);
}