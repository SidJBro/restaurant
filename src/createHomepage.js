import { createInnerHeader } from "./createInnerHeader";
import { createReviews } from "./createReviews";
import { createHours } from "./createHours";
import { createLocation } from "./createLocation";

const createHomepage = function() {
    const homePage = document.createElement('div');
    homePage.className = 'home-page-div';
    const sections = [] 
    sections.push(createInnerHeader());
    sections.push(createReviews());
    sections.push(createHours());
    sections.push(createLocation());
    sections.forEach(section => {
        homePage.append(section);
    });
    return homePage;
}

export { createHomepage };