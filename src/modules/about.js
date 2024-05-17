import image from 'D:/Usuario/Desktop/restaurantPage/src/img/Captura de pantalla 2024-04-24 100318.jpg';

export function createBodyAbout (){
    const  body = document.getElementById('content_box');

    const divBox = document.createElement('div');
    divBox.classList.add('content');

    const abouText = document.createElement('h2');
    abouText.textContent = 'Where are we?.';
    divBox.appendChild(abouText);

    const locationText = document.createElement('p');
    locationText.textContent = 'We are located near by Lago del Fuerte in Tandil city,over the hills.';
    divBox.appendChild(locationText);

    const locationImg = document.createElement('img');
    locationImg.src=image;
    divBox.appendChild(locationImg);

    body.appendChild(divBox);

    return body;
}