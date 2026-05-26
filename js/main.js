(function () {
  'use strict';

  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const navMobile = document.querySelector('.nav-mobile');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const scrollTopButton = document.createElement('button');

  scrollTopButton.type = 'button';
  scrollTopButton.className = 'scroll-top';
  scrollTopButton.setAttribute('aria-label', 'Scroll to top');
  scrollTopButton.innerHTML = '&#8593;';
  document.body.appendChild(scrollTopButton);

  /* Sticky header glass effect */
  function onScroll() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 24);
    scrollTopButton.classList.toggle('is-visible', window.scrollY > 420);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Scroll to top */
  scrollTopButton.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? 'auto' : 'smooth'
    });
  });

  /* Mobile navigation */
  if (navToggle && navMobile) {
    navToggle.addEventListener('click', function () {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navMobile.classList.toggle('is-open', !expanded);
      navMobile.setAttribute('aria-hidden', String(expanded));
    });

    navMobile.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.setAttribute('aria-expanded', 'false');
        navMobile.classList.remove('is-open');
        navMobile.setAttribute('aria-hidden', 'true');
      });
    });
  }

  /* Scroll reveal */

  if (!prefersReduced && 'IntersectionObserver' in window) {
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }
})();
