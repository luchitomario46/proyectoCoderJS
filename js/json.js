const paises = [{id: 1, pais: "Chile", capital: "Santiago", continente: "America"},
                {id: 2, pais: "Argentina", capital: "Buenos Aires", continente: "America"},
                {id: 3, pais: "Peru", capital: "Lima", continente: "America"},
                {id: 4, pais: "Bolivia", capital: "Sucre", continente: "America"}]

const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};

for (const pais of paises){
    guardarLocal(pais.id, JSON.stringify(pais));
}


for (const Paises of paises){

let contenedor = document.createElement("div");
contenedor.innerHTML = `<table>
                            <tr>
                                <td>${Paises.id}</td>
                                <td>${Paises.pais}</td>
                                <td>${Paises.capital}</td>
                                <td>${Paises.continente}</td>
                            </tr>
                        </table>`;
document.body.appendChild(contenedor);
}