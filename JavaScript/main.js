//Small amount of JavaScript to toggle custom cursor
const cursorToggle = document.getElementById('toggle');

cursorToggle.addEventListener('change', () => {
    if (cursorToggle.checked) {
        document.body.classList.add('custom-cursor-active');
    } else {
        document.body.classList.remove('custom-cursor-active');
    }
});

//Switch Between mobile and desktop nav bar
function mobileMenuOpen() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }