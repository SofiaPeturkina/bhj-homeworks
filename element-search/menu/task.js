const menuLink = document.querySelectorAll(".menu__link");

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].onclick = function() {
        const menu = this.closest(".menu__item");
        const menuSub = menu.querySelector(".menu.menu_sub");
        const openSubmenu = document. querySelector(".menu.menu_sub.menu_active");

        if (openSubmenu === null) {
            if (!menuSub) {
                return true;
            }
            if (menuSub.className === "menu menu_sub") {
                menuSub.className = "menu menu_sub menu_active";
            } else if (menuSub.className === "menu menu_sub menu_active") {
                menuSub.className = "menu menu_sub";
            }
            return false;
        }

        if (menuSub && menuSub === openSubmenu) {
            menuSub.className = "menu menu_sub";

            return false;
        } else if (menuSub && menuSub !==openSubmenu) {
            openSubmenu.className = "menu menu_sub";
            menuSub.className = "menu menu_sub menu_active";

            return false;
        }
    }
}