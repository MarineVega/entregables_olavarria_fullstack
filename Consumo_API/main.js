let contenedor = document.getElementById("contenedor")

fetch("https://rickandmortyapi.com/api/character")
.then(resp => resp.json())
.then(data =>{
    data.results.forEach(personaje => {
        contenedor.innerHTML +=`<h2>Personaje: ${personaje.name} </h2>
                                <image> ${personaje.image} </image>`

       console.log(personaje) 
    });

})
