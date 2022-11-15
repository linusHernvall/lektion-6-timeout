window.addEventListener('DOMContentLoaded', main); // main är en callback-funktion därför inga paranteser.

function main() {
    // Start på programmet.

    setTimeout(changeBackgroundColor, 4000);
}

function changeBackgroundColor() {
    document.body.style.background = 'lightblue';
}