"use strict"

let contenedor = document.getElementById("contenedor")
/*
fetch("https://rickandmortyapi.com/api/character")
.then(resp => resp.json())
.then(data =>{
    data.results.forEach(personaje => {
        contenedor.innerHTML +=`<h2>${personaje.name} </h2>
                                <img src=${personaje.image}>
                                <h4>Género: ${personaje.gender}</h4>
                                <h4>Especie: ${personaje.species}</h4>`
    });

})
*/

let url = "https://rickandmortyapi.com/api/character"

async function mostrarPersonajes() {
    try{
        let respuesta = await fetch(url)
        let data = await respuesta.json()
    
        data.results.forEach(personaje => {
            contenedor.innerHTML +=`<div class="cardPersonaje">
                                        <h2>${personaje.name} </h2>
                                        <img src=${personaje.image}>
                                        <h4>Género: ${personaje.gender}</h4>
                                        <h4>Especie: ${personaje.species}</h4>
                                    </div>`
        });  

    } catch(error) {
        console.log(`Ocurrió un error ${error}`)
    }
}

mostrarPersonajes();
