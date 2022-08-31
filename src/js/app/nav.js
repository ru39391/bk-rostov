import {toggleClassName} from '../utils/constants';

const navDropdownTogglersArr = Array.from(document.querySelectorAll('.nav__dropdown-toggler'));
navDropdownTogglersArr.forEach(navDropdownTogglersArrEl => {
  navDropdownTogglersArrEl.addEventListener('click', e => {
    e.preventDefault();
    const navDropdownToggler = e.target;
    const navItemParams = {
      target: navDropdownToggler.closest('.nav__item'),
      className: 'nav__item_active'
    };
    toggleClassName(navItemParams);
  });
});

const navTogglerBtn = document.querySelector('.nav__toggler');
if(navTogglerBtn) {
  navTogglerBtn.addEventListener('click', e => {
    e.preventDefault();
    const navTogglerBtn = e.target;
    const navParams = {
      target: navTogglerBtn.closest('.nav'),
      className: 'nav_active'
    };
    toggleClassName(navParams);
  });
}

