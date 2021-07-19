
let conteggio=0;

let container = document.createElement( "div" );
container.setAttribute('class','contenitore');
document.body.appendChild(container);

// creo element div che contiene i bottoni
let contatore = document.createElement("div");
contatore.setAttribute('class','stileContatore');
container.appendChild(contatore);

// creo element p con classe
let stringaContatore = document.createElement('p');
stringaContatore.setAttribute('class','counter-display');
contatore.appendChild(stringaContatore);

// creo selettore di p tramite classe e associo la funzione di update
let counterDisplayElem = document.querySelector('.counter-display');
let displayUpdate = () => counterDisplayElem.innerHTML = `Conteggio: ${conteggio}`;

// creo element div che contiene i bottoni
let pulsantiera = document.createElement("div");
pulsantiera.setAttribute('class','bottoni');
container.appendChild(pulsantiera);

//Inizializzo per la prima volta il counter
displayUpdate();

// Creo il bottone +
let buttonPlus = document.createElement('button');
buttonPlus.innerHTML = '+';
buttonPlus.setAttribute('class','button-plus');
buttonPlus.onclick = () => {
    conteggio++;
    displayUpdate(); // richiamo la funzione di update ad ogni click
}
pulsantiera.appendChild(buttonPlus);

// Creo il bottone -
let buttonMinus = document.createElement('button');
buttonMinus.innerHTML = '-';
buttonMinus.setAttribute('class','button-minus');
buttonMinus.onclick = () => {
  conteggio--;
  displayUpdate(); // richiamo la funzione di update ad ogni click
}
pulsantiera.appendChild(buttonMinus);

// Creo il bottone Cancel
let buttonCancel = document.createElement('button');
buttonCancel.innerHTML = 'Canc';
buttonCancel.setAttribute('class','button-cancel');
buttonCancel.onclick = () => {
  conteggio = 0;
  displayUpdate(); // richiamo la funzione di update ad ogni click
}
pulsantiera.appendChild(buttonCancel);