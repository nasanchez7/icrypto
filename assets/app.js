//Funciones Local Storage

function guardarCryptos(productos){
    localStorage.setItem("cryptos", JSON.stringify(productos));
}
function obtenerCryptos(){
    return JSON.parse(localStorage.getItem("cryptos")) || [];
}



const contenedorCryptos = document.getElementById("cryptos");


async function obtenerCryptos (){
    const infoCryptos = await fetch(`https://api.coincap.io/v2/assets`);
    const cryptos = await infoCryptos.json();
    guardarCryptos(cryptos);

}

obtenerCryptos();    

const cryptos = obtenerCryptos();
const arrayCryptos = cryptos.data;
console.log(cryptos);


function renderCryptos(){

    const cryptosPrincipales = arrayCryptos.slice([0], [5]);

    console.log(cryptosPrincipales);


}

