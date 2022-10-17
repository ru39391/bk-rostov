const priceSecArr = Array.from(document.querySelectorAll('.price'));
priceSecArr.forEach(priceSecArrEl => {
  const priceParams = {
    btn: priceSecArrEl.querySelector('.btn'),
    title: priceSecArrEl.querySelector('.price__title'),
  };
  priceParams.btn.addEventListener('click', e => {
    e.preventDefault();
    const formName = document.querySelector(e.currentTarget.getAttribute('data-target'));
    const fieldName = e.currentTarget.getAttribute('data-name');
    formName.querySelector(`[name="${fieldName}"]`).value = priceParams.title.textContent;
  });
});
