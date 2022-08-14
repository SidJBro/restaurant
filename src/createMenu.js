const createMenu = function() {
    const menu = document.createElement('div');
    menu.className = 'menu';
    const header = document.createElement('h3');
    header.innerText = 'Menu';
    menu.appendChild(header);

    const menuItemOne = document.createElement('p');
    menuItemOne.innerText = "Menu Item One";
    menu.appendChild(menuItemOne);
    
    
    return menu;
}

export { createMenu };