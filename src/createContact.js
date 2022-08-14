const createContact = function() {
    const contact = document.createElement('div');
    contact.className = 'contact';
    contact.innerText = "Here's how to contact us: 934-345-3443";
    return contact;
}

export { createContact };