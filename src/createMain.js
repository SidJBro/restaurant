import { createHomepage } from './createHomepage.js';
import { createMenu } from './createMenu.js';
import { createContact } from './createContact.js';

const createMain = function () {
    
        var main = {
            init: function() {
                this.createSections();
            },
            createSections: function() {
                this.homePage = createHomepage(); 
                this.menu = createMenu();
                this.contact = createContact();              
            },
        }
        main.init();
        return {
            homePage: main.homePage,
            menu: main.menu,
            contact: main.contact
        }
    }
export { createMain };