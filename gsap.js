gsap.registerPlugin(ScrollTrigger);

  // CONTACT SECTION (fade up + slight scale-in)
  gsap.from(".contact-container", {
    scrollTrigger: {
      trigger: ".contact-section",
      start: "top 85%",
      toggleActions: "play none none none"
    },
    y: 80,
    scale: 0.95,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });

  // TESTIMONIALS HEADING (fade from top)
  gsap.from(".reviews-section h2", {
    scrollTrigger: {
      trigger: ".reviews-section",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });

  // TESTIMONIALS PARAGRAPH (fade from bottom)
  gsap.from(".reviews-section p", {
    scrollTrigger: {
      trigger: ".reviews-section",
      start: "top 78%",
      toggleActions: "play none none none"
    },
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power2.out"
  });

  // FOOTER MAIN (fade in from bottom)
  gsap.from(".snap-footer-container", {
    scrollTrigger: {
      trigger: ".snap-footer",
      start: "top 90%",
      toggleActions: "play none none none"
    },
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });

  // FOOTER BOTTOM (fade-in with scale)
  gsap.from(".snap-footer-bottom", {
    scrollTrigger: {
      trigger: ".snap-footer",
      start: "top 95%",
      toggleActions: "play none none none"
    },
    scale: 0.9,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    delay: 0.3
  });