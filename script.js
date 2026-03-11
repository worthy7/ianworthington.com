const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
    rootMargin: '0px 0px -60px 0px'
  }
);

revealElements.forEach((element, index) => {
  element.style.animationDelay = `${Math.min(index * 80, 420)}ms`;
  observer.observe(element);
});
