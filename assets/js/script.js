function scrollToElement(id) {
  var targetElement = document.getElementById(id);
  targetElement.scrollIntoView({ behavior: "smooth" });
}