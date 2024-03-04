let player1 = 0;
let player2 = 0;
let tiri = 3;
// usiamo il ciclo for per aggiornare il punteggio ad ogni tiro
// 
for(i=1; i <= tiri; i++){
   //console.log(i);
   //let random = 
   //Math.floor(Math.random()*(6-1+1)+1);
   //console.log(random);
   player1 = player1 + Math.floor(Math.random()*(6-1+1)+1);
   player2 = player2 + Math.floor(Math.random()*(6-1+1)+1);
}
if (player1 > player2){
    console.log(`hai vinto giocatore 1`);
}else if(player1 == player2){
    console.log(`pareggio`);
} else {
    console.log(`hai vinto giocatore 2`);
}
console.log(player1,player2);