const anchorsArr = Array.from(document.querySelectorAll('.link-anchor'));
anchorsArr.forEach(anchorsArrEl => {
  anchorsArrEl.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(e.currentTarget.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
