  const wrapper = document.querySelector('.projects-wrapper');
  const cards = document.querySelectorAll('.project-card');
  const step = 320; // Her kartın genişliği + gap
  const totalCards = cards.length;

  let currentIndex = 0;

  function slideProjects(direction) {
    currentIndex += direction;

    if (currentIndex >= totalCards) {
      currentIndex = 0; // sona gelince başa dön
    }

    if (currentIndex < 0) {
      currentIndex = totalCards - 1; // baştaysa sona dön
    }

    const scrollAmount = currentIndex * step;
    wrapper.style.transform = `translateX(-${scrollAmount}px)`;}


    // script.js
    var thumbSlider = new Swiper('.thumb-slider', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,});

    var mainSlider = new Swiper('.main-slider', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',},
    thumbs: {
        swiper: thumbSlider,},
    });


  // ---- Hamburger Menü Bağlantılarına Tıklayınca Kapat
  const menuLinks = document.querySelectorAll('.menu-items a');
  const checkbox = document.getElementById('menuBtn');

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      checkbox.checked = false;
    });
  });

  const menuCheckbox = document.getElementById('menuBtn');

  menuCheckbox.addEventListener('change', () => {
    if (menuCheckbox.checked) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    });
