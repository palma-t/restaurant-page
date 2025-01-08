import './styles.css';
import { initialLoad } from "./initial-load.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

initialLoad();

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

homeButton.addEventListener("click", () => {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    initialLoad();
})

menuButton.addEventListener("click", () => {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    menu();
})

aboutButton.addEventListener("click", () => {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    about();
})

const buttons = document.querySelectorAll('nav button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});
