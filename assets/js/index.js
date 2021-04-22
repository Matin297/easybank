window.onload = init;

function init() {
    const $ham_menu = document.getElementById('ham-menu');
    const $overlay = document.getElementById('overlay');
    const $menu = document.getElementById('menu');

    $ham_menu.addEventListener('click', () => {
        // Close the menu
        if ($ham_menu.classList.contains('header__burger--open')) {
            $ham_menu.classList.remove('header__burger--open');

            $overlay.classList.add('fade-out');
            $overlay.classList.remove('fade-in');

            $menu.classList.remove('fade-in');
            $menu.classList.add('fade-out');
        }
        // Open the menu
        else {
            $ham_menu.classList.add('header__burger--open');

            $overlay.classList.add('fade-in');
            $overlay.classList.remove('fade-out');

            $menu.classList.add('fade-in');
            $menu.classList.remove('fade-out');
        }

    });
}
