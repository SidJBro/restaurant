const createMenu = function() {
    const menu = document.createElement('div');
    menu.className = 'menu';
    const header = document.createElement('div');
    header.className = 'inner-header'
    header.innerText = 'Menu';
    menu.appendChild(header);

    const menuItemNames = [
        ['Shitberry Rhubarb', '$12.99'],
        ['Crushroom Ravioli', '$14.99'],
        ['Butterpickle Pancakes', '$9.99'],
        ['Roast Pheasant on a Stick', '$28.99'],
        ['Corn on the Snob', '$6.99'],
        ['Pigs in Anklets', '$11.99']
    ];

    menuItemNames.forEach(item => {
        const next = document.createElement('div');
        const t = document.createElement('h3');
        t.innerText = item[0];
        const p = document.createElement('p');
        p.innerText = item[1]
        next.appendChild(t).appendChild(p);
        menu.appendChild(next);
    });
    
    
    return menu;
}

export { createMenu };