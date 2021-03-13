/**
 * Main JS file for theme behaviours
 */

// Mobile menu
var menuToggle = document.getElementById('menu-toggle');
if (menuToggle) {
  menuToggle.addEventListener('click', function(e){
    document.body.classList.toggle('menu--opened');
    e.preventDefault();
  },false);
  document.body.classList.remove('menu--opened');
}

// Back to top
document.querySelector('#to-top').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('#page').scrollIntoView({ behavior: 'smooth' });
});
