import 'normalize.css';
import './styles/main.scss';

const accordion = document.querySelectorAll(".tab__accordion"),
tab = document.querySelectorAll(".tab"),
arrow = document.querySelectorAll(".tab__arrow"),
btn = document.querySelector('.main__btn_continue');

tab.forEach(function (item, index) {
    item.addEventListener("click", function () {
        accordion[index].classList.toggle('hidden');
        item.classList.add('checked')
        if (accordion[index].classList.contains('hidden')) {
            arrow[index].style.transform = "rotateX(0deg)";
            item.style.border = "none";
            item.style.paddingLeft = "18px";
        } else {
            arrow[index].style.transform = "rotateX(180deg)";
            item.style.borderLeft = "4px solid #E9262D";
            item.style.paddingLeft = "14px";
        }
        checkClick();
    })
})

function checkClick() {
    const checked = document.querySelectorAll('.tab.checked ').length;
    tab.length === checked ? btn.disabled = false : '';
}