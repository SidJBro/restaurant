import { createLocation } from './createLocation.js';
import { createHours } from './createHours.js'
import { createReviews } from './createReviews.js';
import { createInnerHeader } from './createInnerHeader.js';
import { createMenu } from './createMenu.js';
const createMain = function (pageName) {
    
        var main = {
            init: function() {
                this.createSections();
                this.renderMain();
            },
            createSections: function() {
                this.createMain();
                if (pageName === 'Home') {
                    this.itemsToAppend = this.createHomePage();
                } else if (pageName === 'Menu') {
                    this.itemsToAppend = this.createMenu();
                }
                
                
            },
            createMain: function() {
                this.mainContainer = document.createElement('div');
                this.mainContainer.className = 'main';
            },
            createHomePage: function() {
                return [createInnerHeader(), createReviews(), createHours(), createLocation()];
            },
            createMenu: function() {
                return createMenu();
            },
            renderMain: function() {
                if (this.itemsToAppend.length > 1) {
                    this.itemsToAppend.forEach(item => {
                        this.mainContainer.appendChild(item);
                    });
                } else {
                    this.mainContainer.appendChild(this.itemsToAppend);
                }
                
                // this.appendHeader();
                // this.appendReviews();
                // this.appendHours();
                // this.appendLocation();
            }, 
        }
        main.init();
        return main.mainContainer;
    }
export { createMain };