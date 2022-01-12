let currentId = 0;

function async() {
    let nomPkmn = $('#monPokemon').val();
    let urlARentrer = "https://pokeapi.co/api/v2/pokemon/" + nomPkmn;


    $.ajax(
        {
            url: urlARentrer,
            method: 'GET'
        }
    ).done(
        function (data, statut, xhr) {
            $('#photoPkmn').attr('src', data.sprites.front_default);
            $('#nom').text('Nom : ' + data.name);
            $('#num').text('ID : ' + data.id);
            currentId = data.id;

            $('#poids').text('Poids : ' + data.weight);
            $('#type').text('Type : ' + data.types[0].type.name);
        }
    ).fail(

    )
}

function suivant(){

   console.log(currentId);

   let nvlId = currentId + 1;
   let nvlUrl = "https://pokeapi.co/api/v2/pokemon/" + nvlId;


    $.ajax(
        {
            url: nvlUrl,
            method: 'GET'
        }
    ).done(
        function (data, statut, xhr) {
            $('#photoPkmn').attr('src', data.sprites.front_default);
            $('#nom').text('Nom : ' + data.name);
            $('#num').text('ID : ' + data.id);
            currentId = data.id;
            $('#poids').text('Poids : ' + data.weight);
            $('#type').text('Type : ' + data.types[0].type.name);
        }
    ).fail(

    )
}
function precedent() {

    console.log(currentId);

    let nvlId = parseInt(currentId - 1);
    let nvlUrl = "https://pokeapi.co/api/v2/pokemon/" + nvlId;


    $.ajax(
        {
            url: nvlUrl,
            method: 'GET'
        }
    ).done(
        function (data, statut, xhr) {
            $('#photoPkmn').attr('src', data.sprites.front_default);
            $('#nom').text('Nom : ' + data.name);
            $('#num').text('ID : ' + data.id);
            currentId = data.id;
            $('#poids').text('Poids : ' + data.weight);
            $('#type').text('Type : ' + data.types[0].type.name);
        }
    ).fail(

    )
}

