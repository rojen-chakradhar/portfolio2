function menu(action) {
  let navLinks = document.getElementById('nav-links');
  if (action == 'open') {
    navLinks.style.display = "flex";
  } else {
    navLinks.style.display = "none";
  }
}