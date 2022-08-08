//Funciones Local Storage

export function guardarCryptos(productos){
    localStorage.setItem("cryptos", JSON.stringify(productos));
}
export function obtenerCryptos(){
    return JSON.parse(localStorage.getItem("cryptos")) || [];
}


export async function renderCryptos (){
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

export async function cienCryptos (){
    const infoCryptos = await fetch(`https://api.coincap.io/v2/assets`);
    const cryptos = await infoCryptos.json();
    guardarCryptos(cryptos);
    const arrayCryptos = cryptos.data;
    const cienCryptos = arrayCryptos.slice(0, 101);
    console.log(cienCryptos);

    const tabla = document.getElementById("tablaCripto");

    for(let cripto of cienCryptos){

        const criptoNueva = document.createElement("tr");
        criptoNueva.className = "infoCrypto";

        let precio = Number(cripto.priceUsd);
        let precioDos = precio.toFixed(3);

        let precioMercado = Number(cripto.marketCapUsd);
        let mercado =   precioMercado.toFixed(1);

        let precioHoras = Number(cripto.volumeUsd24Hr);
        let precioHorasDos = precioHoras.toFixed(1);

        criptoNueva.innerHTML = `
            <td>${cripto.rank} </td>
            <td>${cripto.name}</td>
            <td>${cripto.symbol}</td>
            <td>$${precioDos}</td>
            <td>$${mercado}</td>
            <td>$${precioHorasDos}</td>
        `

        tabla.appendChild(criptoNueva);
    }

    
}