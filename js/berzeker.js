class Berzeker extends Character{
    constructor(name = "Draven", human = false){
      super(name, human = false);
      this.hp = 8;
      this.dmg = 4;
      this.mana = 0;
    }
    rage(){
      this.hp--;
      this.dmg++;
    }
    newTurn(players){
      this.menu(players);
    }
  
    menu(players, warn = ""){
      if(warn != ""){
        console.log();
        console.log(warn);
        console.log();
      }
      let choice = this.attack("Rage");
      if(!choice || choice < 1 || choice > 2){
        this.menu("veuillez faire un choix valide");
      }else{
        let p = this.player(players)    
        if(choice == 1){
          this.dealDamage(p);
        }else{
          this.rage();
        }
      }
    }
  } 