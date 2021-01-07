class Turn{
    constructor(turn, players){
      this.startTurn(turn, players);
    }
    startTurn(turn, players){
      console.log(`It's turn ${turn}`);
      this.players = this.shuffle(players.filter(player => player.dead != true));
      if(this.players.length <= 1){
        console.log("hey here");
        this.winner = this.players[0];
      }else{
  
        this.players.map((player) => {
          if(!player.dead){
            player.newTurn(this.players);
          }
          this.done = true;
        });
      }
    }
    shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
  }