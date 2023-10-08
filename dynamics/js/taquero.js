window.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-taquero");
    const salir = document.getElementById("logOut");
    const main = "../../index.html";

    async function requestfetch(url, data) {
        let response = await fetch(url, {
            method: 'POST', 
            body: data});
        return await response.text();
    }

    console.log(form);

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let datosForm = new FormData(form);

        let pag = "../../dynamics/php/taquero.php";

        let respuesta = requestfetch(pag, datosForm);
        console.log(respuesta);
        alert("Se ha guardado tu taquito 👍");
    });

    salir.addEventListener("click", () => {
        window.location = main;
    });
});