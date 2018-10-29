window.addEventListener('scroll', function() {
  const scrollPos = window.scrollY || window.scollTop || document.getElementsByTagName('html')[0].scrollTop;

  var nav_bar = document.getElementsByClassName('site-header');
  if (scrollPos > 100) {
    nav_bar[0].className += " site-header-scrolled";
  } else {
    nav_bar[0].classList.remove("site-header-scrolled");
  }
});
