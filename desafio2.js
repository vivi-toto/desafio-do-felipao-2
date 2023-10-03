saldoDeRankeadas(180, 23)

function saldoDeRankeadas(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let nivel;
    if (vitorias <= 10){
        nivel = "Ferro";
        console.log("O herói tem saldo de: " + vitorias + "e está no nível de: " + nivel)
    } else if (vitorias >= 11 && vitorias <= 20 ) {
        nivel = "Bronze"
        console.log("O herói tem saldo de: " + vitorias + "e está no nível de: " + nivel)
    } else if (vitorias >= 21 && vitorias <= 50 ) {
        nivel = "Prata"
        console.log("O herói tem saldo de: " + vitorias + "e está no nível de: " + nivel)
    } else if (vitorias >= 51 && vitorias <= 80 ) {
        nivel = "Ouro"
        console.log("O herói tem saldo de: " + vitorias + "e está no nível de: " + nivel)
    } else if (vitorias >= 81 && vitorias <= 90 ) {
        nivel = "Diamante"
        console.log("O herói tem saldo de: " + vitorias + "e está no nível de: " + nivel)
    } else if (vitorias >= 91 && vitorias <= 100 ) {
        nivel = "Lendário"
        console.log("O herói tem saldo de: " + vitorias + "e está no nível de: " + nivel)
    } else {
        nivel = "Imortal"
        console.log("O herói tem saldo de: " + vitorias + "e está no nível de: " + nivel)
    }
}