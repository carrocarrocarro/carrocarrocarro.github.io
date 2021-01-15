
const menuIcon = document.getElementById('menu-icon');
menuIcon.addEventListener('click', responsiveMenu);

function responsiveMenu() {
    const menu = document.getElementById('menu');

    if(menu.className === 'nav-right') {
        menu.className += ' responsive';
    } else{
        menu.className = 'nav-right';
    }

}
