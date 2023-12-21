import 'normalize.css';
import './styles/main.scss';

const accordion = document.querySelectorAll(".tab__accordion"),
tab = document.querySelectorAll(".tab"),
arrow = document.querySelectorAll(".tab__arrow"),
btn = document.querySelector('.main__btn_continue');

tab.forEach(function (item, index) {
    item.addEventListener("click", function () {
        toggleTwoClasses(accordion[index], "is-visible", "is-hidden", 500);
        item.classList.add('checked');
        if (accordion[index].classList.contains('is-hidden')) {
            arrow[index].style.transform = "rotateX(0deg)";
            item.style.border = "none";
            item.style.paddingLeft = "18px";
        } else {
            arrow[index].style.transform = "rotateX(180deg)";
            item.style.transition = "0.6s";
            item.style.borderLeft = "4px solid #E9262D";
            item.style.paddingLeft = "14px";
        }
        checkClick();
    })
})

function toggleTwoClasses(element, first, second, timeOfAnimation) {
    if (!element.classList.contains(first)) {
      element.classList.add(first);
      element.classList.remove(second);
    } else {
      element.classList.add(second);
      window.setTimeout(function() {
        element.classList.remove(first);
      }, timeOfAnimation);
    }
  }

function checkClick() {
    const checked = document.querySelectorAll('.tab.checked').length;
    tab.length === checked ? btn.disabled = false : '';
}