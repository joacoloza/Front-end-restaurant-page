import brasedImg from 'D:/Usuario/Desktop/restaurantPage/src/img/brased .jpg';
import bunnyImg from 'D:/Usuario/Desktop/restaurantPage/src/img/bunny.jpg';

export function createBodyMenu(){
    const body = document.getElementById('content_box');
    
    const divBox = document.createElement('div');
    divBox.classList.add('content');

    const menuTitle = document.createElement('h2');
    menuTitle.textContent='Our Menu';

    divBox.appendChild(menuTitle);

    const chickenMenu = document.createElement('div');
    const chickenTitle = document.createElement('h3');
    const chickenDesc = document.createElement('p');
    const chickenImg = document.createElement('img');

    chickenTitle.textContent='Brased Chicken';
    chickenDesc.textContent='something idk i do not know how to make chiken';
    chickenImg.src=brasedImg;
    
    chickenMenu.appendChild(chickenTitle);
    chickenMenu.appendChild(chickenDesc);
    chickenMenu.appendChild(chickenImg);
    divBox.appendChild(chickenMenu);
    
    
    const herbsMenu = document.createElement('div');
    const herbsTitle = document.createElement('h3');
    const herbsDesc = document.createElement('p');
    const bunnyHImg=document.createElement('img');

    herbsTitle.textContent='Hills herbs and bunny';
    herbsDesc.textContent='i suppose some bunny with something';
    bunnyHImg.src=bunnyImg;
    
    herbsMenu.appendChild(herbsTitle);
    herbsMenu.appendChild(herbsDesc);
    herbsMenu.appendChild(bunnyHImg);
    divBox.appendChild(herbsMenu);

    divBox.classList.add('menu');

    body.appendChild(divBox);
    return body;
}