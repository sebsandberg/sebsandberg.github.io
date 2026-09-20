const rows = document.querySelectorAll(".timeline__row");

if ("IntersectionObserver" in window && rows.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  rows.forEach((row) => observer.observe(row));
} else {
  rows.forEach((row) => row.classList.add("is-visible"));
}
