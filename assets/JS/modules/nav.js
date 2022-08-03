export const nav = () => {
    const botonAbrir = document.getElementById("mostrarNav");
    const botonCerrar = document.getElementById("cerrarNav");
    const barra = document.getElementById("barra");


    botonAbrir.addEventListener("click", () => {
        console.log("click");
        barra.classList.add("barraMobileVisible");
    })

    botonCerrar.addEventListener("click", () => {
        barra.classList.remove("barraMobileVisible");
    })

}