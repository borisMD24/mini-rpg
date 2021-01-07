class Game{
    constructor(turnLeft = 10){
      this.turnLeft = turnLeft;
      this.play();
    }
    newTurn(players){
      if(this.turnLeft <= 0){
  
      }else{
        this.turnLeft--;
      }
    }
    async play(){
      let human = this.chooseHumanClass();
      let players = [new Fighter(), new Paladin(), new Berzeker(), new Monk(), new Assassin];
      players = this.removeDuplicate(players, human)
      let turn = new Turn(this.turnLeft, players);
      while(this.turnLeft > 0 && !turn.winner){
        if (!turn.done){
          await this.sleep(300);
        } else {  
          this.turnLeft--;
          turn = new Turn(this.turnLeft, players);
        }
      }
    }
    chooseHumanClass(){
      p.ask("quelle classe voulez-vous incarner?");
      console.log("1 - Fighter");
      console.log("2 - Paladin");
      console.log("3 - Berzeker");
      console.log("4 - Monk");
      console.log("5 - Assassin");
      let choice = parseInt(window.prompt("votre choix?"), 10);
      switch(choice){
        case 1 :
          return new Fighter(window.prompt("votre nom?"), true);
        case 2 :
          return new Paladin(window.prompt("votre nom?"), true);
        case 3 :
          return new Berzeker(window.prompt("votre nom?"), true);
        case 4 :
          return new Monk(window.prompt("votre nom?"), true);
        case 5 :
          return new Assassin(window.prompt("votre nom?"), true);
      }
    }
    removeDuplicate(players, human){
      players = players.filter(player => player.constructor.name != human.constructor.name);
      players.push(human);
      return players
    }
    sleep(ms) { 
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  }