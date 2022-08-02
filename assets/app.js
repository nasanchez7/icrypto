//Funciones Local Storage

function guardarCryptos(productos){
    localStorage.setItem("cryptos", JSON.stringify(productos));
}
function obtenerCryptos(){
    return JSON.parse(localStorage.getItem("cryptos")) || [];
}


async function obtenerCryptos (){
    const infoCryptos = await fetch(`https://api.coincap.io/v2/assets`);
    const cryptos = await infoCryptos.json();
    guardarCryptos(cryptos);
    const arrayCryptos = cryptos.data;
    const cryptosPrincipales = arrayCryptos.slice(0, 8);
    console.log(cryptosPrincipales);

    //Render Cryptos

    const contenedorCryptos = document.getElementById("cryptos");

    for(let crypto of cryptosPrincipales){

        const tarjeta = document.createElement("div");
        tarjeta.className = "crypto";

        let precio = Number(crypto.priceUsd);
        let precioDos = precio.toFixed(2);

        tarjeta.innerHTML = `
        <h3>#${crypto.rank}</h3>
        <h3>${crypto.name}</h3>
        <h3>${crypto.symbol}</h3>
        <h3>${precioDos} USD</h3>
        `

        contenedorCryptos.appendChild(tarjeta);

    }

}


obtenerCryptos();
