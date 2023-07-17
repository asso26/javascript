window.addEventListener("scroll", function() {
  var container = document.querySelector(".container");
  var scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  var scrollPosition = (container.scrollWidth - container.clientWidth) * scrollPercentage;
  container.scrollLeft = scrollPosition;
});
