window.addEventListener("DOMContentLoaded", () => {
    const tabla = document.getElementById("menu");
    const salir = document.getElementById("logOut");
    const main = "../../index.html";
    console.log(tabla);

    fetch('../../dynamics/php/comensal.php', {
        method: 'POST'
    }).then((response) => {
        return response.json();
    }).then((datos) =>{
        // console.log(datosJSON);
        i=0;
        let taco;
    
        for (taco of datos){
            taco[i] = datos[i];
            tabla.innerHTML += `
            <tr>
                <td>${taco.nombre}</td>
                <td>${taco.precio}</td>
                <td>${taco.info}</td>
            </tr>`;
            // console.log(taco[i]);
            // console.log(taco.nombre);
            i++;
        }

    });

    salir.addEventListener("click", () => {
        window.location = main;
    });



    // const tabla = document.getElementsByClassName("menu");
    // let div = document.getElementById("menuCont");

    // async function requestfetch(url, data) {
    //     let response = await fetch(url, {method: 'POST', body: data});
    //     // console.log(response);
    //     response = JSON.stringify(response);
    //     return await response.json();
    // };

    // async function menu(){
    //     let pag = "../../dynamics/php/comensal.php";
    //     let menuTexto = await requestfetch(pag);
    //     console.log(menuTexto);
    //     div.innerHTML += `<div>${menuTexto}</div>`;
    //     return await menuTexto;
    // };

    /* let menu = requestfetch(pag);
    console.log(menu); */

    // menuArray = menu();

    // div.innerHTML += `<div>${menuArray}</div>`;

    /* // tabla.innerHTML += `
    //     <tr>
    //         <th>${menu[0]}</th>
    //         <th></th>
    //         <th></th>
    //     </tr>
    // `; */

    /* async function requestfetch(url, data) {
        let response = await fetch(url, {method: 'POST', body: data})
        .then ((respuesta) => {
            return respuesta.json();
        })
        .then((datosJSON) => {
            let titulo = ["Nombre", "Precio", "Info"];
            let datos=[datosJSON.nombre, datosJSON.precio, datosJSON.info];
            i=0;
            for (dato of datos){
                div.innerHTML += `
                <div class="dato">
                    <h1>${titulo[i]}</h1>
                    <p>${dato}</p>
                </div>
                `;
                i++;
            }
            console.log(menu);

            div.innerHTML += `<div>${menu}</div>`;

            tabla.innerHTML += `
                <tr>
                    <th>${menu[0]}</th>
                    <th></th>
                    <th></th>
                </tr>
            `;
        });  
    }; */

});