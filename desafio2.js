saldoDeRankeadas(180, 23)

function saldoDeRankeadas(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    console.log("saldo: " + saldo)
    if (vitorias <= 10) {
        let nivel = "Ferro";
    } else {
        let nivel = "Bronze";
    }

    console.log("O Herói tem de saldo de" + vitorias + "vitorias e está no nível de " + nivel)
}