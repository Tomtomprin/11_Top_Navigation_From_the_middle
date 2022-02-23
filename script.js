const ClassOpenbtn = document.querySelector('.openbtn');
const ClassNavigation = document.querySelector('.navigation');

function ClickOpenbtn() {
    ClassOpenbtn.classList.toggle('active');
    ClassNavigation.classList.toggle('panelactive');
}
ClassOpenbtn.onclick = ClickOpenbtn;


window.onscroll = function () {
    const scroll_position = window.pageYOffset;
    if (scroll_position > 800) {
        ClassNavigation.classList.add('appear_navigation');
    } else {
        ClassNavigation.classList.remove('appear_navigation')
    }
}