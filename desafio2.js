saldoDeRankeadas(180, 23)

function saldoDeRankeadas(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let nivel;
    if (vitorias <= 10){
        nivel = "Ferro";
        console.log("O herói tem saldo de: " + vitorias + "e está no nível de: " + nivel)
    } else if (vitorias >= 11 && vitorias <= 20 ) {
        nivel = "Bronze"
    } else if (vitorias >= 21 && vitorias <= 50 ) {
        nivel = "Prata"
    } else if (vitorias >= 51 && vitorias <= 80 ) {
        nivel = "Ouro"
    } else if (vitorias >= 81 && vitorias <= 90 ) {
        nivel = "Diamante"
    } else if (vitorias >= 91 && vitorias <= 100 ) {
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }
}