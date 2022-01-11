// Je récupère l'élément avec l'id "maDiv"
let laDiv = document.getElementById('maDiv');
laDiv.innerText = "CDA_087";

function ilAClique() {
    console.log("He clicked !")
    let cpteur = document.getElementById('compteur')
    let ancienneValeur = parseInt(cpteur.innerText);
    let nvlleValeur = ancienneValeur + 1;
    cpteur.innerText = nvlleValeur;


// Mettre auto le curseur dans l'input
let auto = document.getElementById('monInput').focus();

// Récupérer la valeur de l'input
let valeurInput = document.getElementById('monInput').value;

// Créer un élément li
    let monLi = document.createElement('li');
    monLi.innerText = valeurInput;

// Ajouter l'element li à l'élément ul
    let monUl = document.getElementById('maListe');
    monUl.appendChild(monLi);
    document.getElementById('monInput').value = ' ';
}