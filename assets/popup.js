const templateIndex = document.querySelector('.template-index');
const popup = document.querySelector('#popup');
const closeButton = document.querySelector('#popup .close');

if (templateIndex) {
  document.addEventListener("DOMContentLoaded", function () {
    const delay_popup = delayBeforeClosing * 1000;

    setTimeout(() => {
      popup.classList.add('hide')
    }, delay_popup);

    closeButton.addEventListener('click', () => {
      popup.classList.add('hide')
    })
  });
}