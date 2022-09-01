export function toggleClassName(togglerEl, {targetSel, classNameActive}) {
  const el = {
    target: togglerEl.closest(targetSel),
    className: classNameActive
  };
  el.target.classList.toggle(el.className);
}
