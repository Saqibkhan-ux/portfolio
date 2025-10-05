// Simple fade-in effect when scrolling
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const trigger = window.innerHeight / 1.3;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) section.classList.add("visible");
  });
});
