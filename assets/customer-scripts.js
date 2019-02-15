window.addEventListener('scroll', function() {
  const scrollPos = window.scrollY || window.scollTop || document.getElementsByTagName('html')[0].scrollTop;

  var navBar = document.getElementsByClassName('site-header');
  if (scrollPos > 100) {
    if (!navBar[0].className.includes("site-header-scrolled")) {
      navBar[0].className += " site-header-scrolled";
    }
  } else {
    if (navBar[0].className.includes("site-header-scrolled")) {
      navBar[0].classList.remove("site-header-scrolled");
    }
  }
});
