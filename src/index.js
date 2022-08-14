import './styles.css';
import { createHeader } from './createHeader.js';
import { createMain } from './createMain.js';
import { createFooter } from './createFooter.js';


(function() {
    var page = {
        init: function() {
            this.buildDivs();
            this.buttons = this.header.buttons;
            this.attachEvents();
            this.render();
        },
        buildDivs: function() {
            this.contentContainer = document.querySelector('.content');
            this.header = createHeader();
            this.main = createMain();
            this.footer = createFooter();
        },
        attachEvents: function() {
            this.buttons[0].addEventListener('click', e => {
                this.main.homePage.style.display = 'flex';
                this.main.menu.style.display = 'none';
                this.main.contact.style.display = 'none';
            });
            this.buttons[1].addEventListener('click', e => {
                this.main.homePage.style.display = 'none';
                this.main.menu.style.display = 'flex';
                this.main.contact.style.display = 'none';
            });
            this.buttons[2].addEventListener('click', e => {
                this.main.homePage.style.display = 'none';
                this.main.menu.style.display = 'none';
                this.main.contact.style.display = 'flex';
            });
        },
        render: function() {
            this.contentContainer.appendChild(this.header.container);
            this.contentContainer.appendChild(this.main.homePage);
            this.contentContainer.appendChild(this.main.menu);
            this.contentContainer.appendChild(this.main.contact);
            this.contentContainer.appendChild(this.footer);
        }
    }
    page.init();
    
})();