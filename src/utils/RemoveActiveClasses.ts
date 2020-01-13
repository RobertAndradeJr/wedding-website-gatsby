const removeActiveClasses = (): void =>
  document
    .querySelectorAll('.nav-link.active')
    .forEach(el => el.classList.remove('active'));

export default removeActiveClasses;
