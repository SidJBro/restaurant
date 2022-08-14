const createHeader = function() {

    var header = {
        build: function() {
            this.container = this.createContainer();
            this.addButtons();
        },
        createContainer: function(){
            this.container = document.createElement('div');
            this.container.className = 'header';
            return this.container;
        },
        addButtons: function() {
            const buttons = document.createElement('div');
            buttons.className = 'nav-buttons';
            ['Home', 'Menu', 'Contact'].forEach(b => {
                const button = document.createElement('button');
                button.innerText = b;
                buttons.appendChild(button);
            });
            this.container.appendChild(buttons);
            this.buttonsArray = Array.from(this.container.querySelectorAll('.nav-buttons button'));
        }
    }
    header.build();
    return {
        container: header.container,
        buttons: header.buttonsArray    
    };
    

}

export { createHeader };