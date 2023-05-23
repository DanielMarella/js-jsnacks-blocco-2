
/**
 * 
 * Generare una lista usando una funzione:
 * nell'html ci dovrà essere esclusivamente un elemento ul parent,
 * attraverso una funzione creiamo un singolo elemento html di tipo li
 * poi ne aggiungiamo una decina all'ul, sempre via js.
 * 
 * BONUS:
 * Se clicchiamo sul li il suo testo verrà sbarrato.
 */








const ulElement = document.getElementById('ul');

function addElement() {
    const newLiElement = document.createElement('li');
    newLiElement.classList.add('list-item');
    newLiElement.innerHTML = 'elemento della spesa';
    return newLiElement;
}


for (i = 0; i < 10; i++){
    const liElement = addElement();
    ulElement.appendChild(liElement);
}
