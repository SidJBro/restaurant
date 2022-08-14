const createFooter = function() {
    const footerContainer = document.createElement('div');
    footerContainer.className = 'footer';
    footerContainer.innerText = 'Footer Goes Here';
    return footerContainer;
    
}

export { createFooter };