const createLocation = function() {
    const location = document.createElement('div');
    location.className = 'location';

    const addressHeader = document.createElement('h3');
    addressHeader.innerText = 'Location'
    location.appendChild(addressHeader);

    ['19 Crestwood Dr', 'West Orange, NJ', '07052'].forEach(line => {
        const p = document.createElement('p');
        p.innerText = line;
        location.appendChild(p);

    });
    return location;
}

export {createLocation};