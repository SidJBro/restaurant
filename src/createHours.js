const createHours = function() {
    const hours = document.createElement('div');
    hours.className = 'hours';
    const header = document.createElement('h3');
    header.innerText = 'Hours';
    hours.appendChild(header);
    ['Sunday - 6:00am - 3:00pm', 'Monday - 6:00am - 3:30pm', 'Tuesday - CLOSED', 
    'Wednesday - 6:00am - 3:30pm', 'Thursday - 6:00am - 3:30pm', 'Friday - 6:00am - 3:30pm', 
    'Saturday - 6:00am - 3:30pm' ].forEach(day => {
        const p = document.createElement('p');
        p.innerText = day;
        hours.appendChild(p);
    })
    return hours;
}

export { createHours };