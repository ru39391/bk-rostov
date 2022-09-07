import {toggleClassName} from '../utils/constants';

const navDropdownTogglersArr = Array.from(document.querySelectorAll('.nav__dropdown-toggler'));
navDropdownTogglersArr.forEach(navDropdownTogglersArrEl => {
  navDropdownTogglersArrEl.addEventListener('click', e => {
    e.preventDefault();
    toggleClassName(e.target, {
      targetSel: '.nav__item',
      classNameActive: 'nav__item_active'
    });
  });
});

const navTogglerBtn = document.querySelector('.nav__toggler');
if(navTogglerBtn) {
  navTogglerBtn.addEventListener('click', e => {
    e.preventDefault();
    toggleClassName(e.target, {
      targetSel: '.nav',
      classNameActive: 'nav_active'
    });
  });
}

