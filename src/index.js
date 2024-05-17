import { createBodyAbout } from './modules/about.js';
import { createBodyHome } from './modules/home.js';
import { createBodyMenu } from './modules/menu.js';
import './styles/mainStyle.css';
import { backAnim } from './modules/backgrounAnim.js';




function init (){
    loadPage();
    backAnim();

    const initalbtn= document.getElementById('home');
    initalbtn.classList.add('active');

    const tabs = document.querySelectorAll(".tab_btn");
    const content = document.querySelectorAll(".content"); 




    tabs.forEach ((tab,index) => {

        tab.addEventListener('click',(e)=>{
            tabs.forEach((tab,index)=>{
                tab.classList.remove('active');
            });
            tab.classList.add('active');

            var subLine = document.querySelector('.subLine');
            subLine.style.width = e.target.offsetWidth + "px";
            subLine.style.left = e.target.offsetLeft + "px";


            const indexa = Array.from(tabs).indexOf(tab);

            content.forEach(content =>{content.classList.remove('active')});
            content[index].classList.add('active');
        })      
    })



}

function loadPage(){
    createBodyHome();
    createBodyMenu();
    createBodyAbout();
}

document.addEventListener('DOMContentLoaded',init);