const quantidadeGolpes = 4;

let minerais = ["Carvao", "Ferro", "Diamante", "Pedra"];

for (let i = 0; i < quantidadeGolpes; i++) {

  let minaIndex = i % minerais.length;
  
  console.log((i-1) + ":" + minerais[minaIndex]);
}