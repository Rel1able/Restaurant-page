import "./styles.css";

import loadPage from "./load-page.js";
import showMenu from "./menu.js";
import showContacts from "./contact.js";

loadPage();

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById("contact");

function clearPage(elementId) {
    const content = document.getElementById(elementId);

    content.className = "";

    content.innerHTML = "";
}



homeButton.addEventListener("click", () => {
    clearPage("content");
    loadPage();

})

menuButton.addEventListener("click", () => {
    clearPage("content");
    showMenu();
})


contactButton.addEventListener("click", () => {
    clearPage("content");
    showContacts();
})

