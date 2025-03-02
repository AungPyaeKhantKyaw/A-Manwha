document.getElementById("search_box").addEventListener("change", function() {
    let bar = document.getElementById('search_bar');

    if (this.checked) {
        bar.style.display = "flex"; // Show search bar when checked
    } else {
        bar.style.display = "none"; // Hide search bar when unchecked
    }
});

function hiddenBox(){
    let box = document.getElementById('hidden-box');

    // Check the current position of the box and toggle it
    if (box.style.left === '-100%' || box.style.left === '') {
        box.style.left = '-2%'; // Move it into view
    } else {
        box.style.left = '-100%'; // Hide it by moving it out of view
    }
}



