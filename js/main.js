/* =========================================================
   Nusantaratoto — main.js
   Nav toggle, FAQ accordion, contact form demo handler,
   active-link highlighting.
   ========================================================= */
document.addEventListener('DOMContentLoaded', function () {

  /* ---- Mobile nav toggle ---- */
  var navToggle = document.querySelector('.nav-toggle');
  var mainNav = document.querySelector('.main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      mainNav.classList.toggle('is-open');
      var expanded = mainNav.classList.contains('is-open');
      navToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }

  /* ---- FAQ accordion ---- */
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var question = item.querySelector('.faq-question');
    if (!question) return;
    question.addEventListener('click', function () {
      var wasOpen = item.classList.contains('is-open');
      faqItems.forEach(function (other) { other.classList.remove('is-open'); });
      if (!wasOpen) item.classList.add('is-open');
    });
  });

  /* ---- Contact form demo handler ---- */
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.getElementById('form-message');
      if (msg) {
        msg.textContent = 'Terima kasih! Pesan Anda telah kami terima dan akan segera direspons oleh tim redaksi Nusantaratoto.';
        msg.classList.add('is-visible');
      }
      contactForm.reset();
    });
  }

  /* ---- Active nav link highlighting ---- */
  var currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(function (link) {
    var linkPath = link.getAttribute('href').split('/').pop();
    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });

});

