// Animazioni scroll-based con Intersection Observer
document.addEventListener("DOMContentLoaded", function () {
  // Effetto macchina da scrivere per "Enrico Carretti"
  const typewriterElement = document.getElementById("typewriter-text");
  const text = "Enrico Carretti";
  let index = 0;
  
  function typeWriter() {
    if (index < text.length) {
      typewriterElement.textContent = text.substring(0, index + 1);
      index++;
      setTimeout(typeWriter, 100);
    }
  }
  
  // Inizia subito l'animazione
  typeWriter();

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Osserva tutti gli elementi con classe animate
  const animatedElements = document.querySelectorAll(".animate");
  animatedElements.forEach((el) => observer.observe(el));

  // Mostra una sola freccia di sezione alla volta
  const sectionWithIndicators = document.querySelectorAll(".section-treatments, .section-gallery");
  const indicatorObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const indicator = entry.target.querySelector(".section-scroll-indicator");
        if (!indicator) {
          return;
        }
        if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
          indicator.classList.add("visible-indicator");
        } else {
          indicator.classList.remove("visible-indicator");
        }
      });
    },
    {
      threshold: [0.35, 0.55, 0.75],
    }
  );

  sectionWithIndicators.forEach((section) => indicatorObserver.observe(section));

  // Smooth scroll per i link interni
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId && targetId !== '#') {
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });

  // Drag orizzontale del feed Instagram (cursor grab)
  const igTrack = document.querySelector(".ig-feed-track");
  if (igTrack) {
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    igTrack.addEventListener("mousedown", (event) => {
      isDown = true;
      igTrack.classList.add("is-dragging");
      startX = event.pageX - igTrack.offsetLeft;
      scrollLeft = igTrack.scrollLeft;
    });

    igTrack.addEventListener("mouseleave", () => {
      isDown = false;
      igTrack.classList.remove("is-dragging");
    });

    igTrack.addEventListener("mouseup", () => {
      isDown = false;
      igTrack.classList.remove("is-dragging");
    });

    igTrack.addEventListener("mousemove", (event) => {
      if (!isDown) {
        return;
      }
      event.preventDefault();
      const x = event.pageX - igTrack.offsetLeft;
      const walk = (x - startX) * 1.5;
      igTrack.scrollLeft = scrollLeft - walk;
    });
  }
});
