import './styles.css';
import { createHeader } from './createHeader.js';
import { createMain } from './createMain.js';
import { createFooter } from './createFooter.js';


(function() {
    var page = {
        init: function() {
            this.buildDivs();

            this.render(this.main);
            this.attachEvents();
        },
        buildDivs: function() {
            this.contentContainer = document.querySelector('.content');
            this.header = createHeader();
            this.main = createMain('Home');
            this.footer = createFooter();
        },
        attachEvents: function() {
            this.header.buttons.forEach(button => {
                button.addEventListener('click', e => {
                    let newMain = createMain(e.target.innerText);
                    // this.main.innerHTML = newMain.innerHTML;
                    this.contentContainer.replaceChild(newMain, this.main);
                });
            });
        },
        render: function(mainContainer) {
            [this.header.container, mainContainer, this.footer].forEach(div => {
                this.contentContainer.appendChild(div);
            });
        }
    }
    page.init();
    
})();