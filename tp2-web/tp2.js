document.getElementById('date').valueAsDate = new Date();
document.getElementById('savoir').focus();

function IlaClique() {

    let monSavoir = document.getElementById('savoir').value;
    let monAuteur = document.getElementById('auteur').value;
    let maDate = document.getElementById('date').value;

    if (monSavoir === "" || monAuteur === "" || maDate === "") {
        alert('Il faut remplir les champs')
        return;
    }

// Ajouter un encart pour la nouvelle citation
    let maDiv = document.createElement('div');
    maDiv.addEventListener("click", boutonClique);

    let monLi = document.createElement('li');
    monLi.innerText = monSavoir;

    let monP = document.createElement('p');
    monP.innerText = "Par " + monAuteur + ", le " + maDate;


// Ajouter l'element ol à l'élément ul
    let monOl = document.getElementById('monOl');
    monOl.appendChild(maDiv);
    maDiv.appendChild(monLi);
    monLi.appendChild(monP);

    document.getElementById('savoir').value = ' ';
    document.getElementById('auteur').value = ' ';
    document.getElementById('date').value = ' ';
}

function boutonClique() {
    alert('Vous allez supprimer le fils')
    this.remove()
}

