const createInnerHeader = function() {
    const header = document.createElement('div');
    header.className = 'inner-header';
    header.innerText = 'Jane\'s Coffee';
    return header;
}

export { createInnerHeader };