const priceSecArr = Array.from(document.querySelectorAll('.price'));
priceSecArr.forEach(priceSecArrEl => {
  const priceParams = {
    btn: priceSecArrEl.querySelector('.btn'),
    title: priceSecArrEl.querySelector('.price__title'),
  };
  priceParams.btn.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(e.currentTarget.getAttribute('data-target'));
    target.querySelector('[name="priceform__type"]').value = priceParams.title.textContent;
  });
});
