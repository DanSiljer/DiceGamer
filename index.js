

var score = 0;
var continuar = 0;
var empates = 0;
var contEmpate = 0; 
var escolhaRodadas = 0;
var jogadores = [];


do { 


    var qntjogadores = +prompt("Informe o número de JOGADORES: ");

    var escolhaRodadas = +prompt("Informe número de RODADAS: ");



  for (let i = 0; i < qntjogadores; i++) {
      let nomes = {};
      nomes.nome = prompt(`****** Informe o nome do ${i+1}º JOGADOR ******\n:`);
      jogadores.push(nomes);
      
  }


  for (let i = 0; i < escolhaRodadas; i++) {
    console.log(`===== Iniciando a ${i+1}º rodada =====`);

    var jogos = [];


    for(let i = 0; i < qntjogadores; i++){
      let jogo = {
      nome: jogadores[i].nome,
      score: Math.floor( Math.random() * 6 + 1) 
      
      };
      jogos.push(jogo);
      
     
  }
console.log(jogos.sort((a, b) => b.score - a.score));


console.log(`${jogos[0].nome} é o(a) VENCEDOR(A) da rodada`);
  }

console.log()


continuar = prompt("Fim de jogo.\nDeseja continuar? (Resp. S / N):").toUpperCase();


}while(continuar === "S")



