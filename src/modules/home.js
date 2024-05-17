export function createBodyHome(){
    const body = document.getElementById('content_box');
    body.innerHTML = ''; // Limpia el contenido existente
    
    const divBox = document.createElement('div');
    divBox.id = 'div';
    divBox.classList.add('content');
    divBox.classList.add('active');

    const homeTxt = document.createElement('h2');
    homeTxt.textContent = 'Who we are?';
    divBox.appendChild(homeTxt);
    
    const explain = document.createElement('p');
    explain.textContent = 'We are a food company based in Tandil, Argentina. We hope to bring the best to our clients.';
    divBox.appendChild(explain);

    const comeBy = document.createElement('p');
    comeBy.textContent = 'Don’t doubt it! Come by and taste our delicious plates.';
    divBox.appendChild(comeBy);
    
    body.appendChild(divBox);

    
    return body;
}

