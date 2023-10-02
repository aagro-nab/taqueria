window.addEventListener("DOMContentLoaded", () => {
    const user = document.querySelector("#selectUser");
    const sendBtn = document.querySelector("#sendUser-btn");
    const taquero = "./statics/templates/taquero.html";
    const comensal = "./statics/templates/comensal.html";
    

    sendBtn.addEventListener("click", () => {
        if(user.value == "taquero")
            window.location = taquero;
        else
            window.location = comensal;
    });
});