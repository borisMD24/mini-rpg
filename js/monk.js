class Monk extends Character{
    constructor(name = "Moana", human = false){
      super(name, human);
      this.hp = 8;
      this.dmg = 2;
      this.mana = 200;
    }
    heal(){
      if(this.mana < 25){
        return false;
      }
      this.mana -= 25;
      this.hp += 8;
      return true;
    }
    newTurn(players){
      this.menu(players);
    }
    menu(players, warn = ""){
      if(warn != ""){
        console.log();
        p.warn(warn);
        console.log();
      }
      let choice = this.attack("heal");
      if(!choice || choice < 1 || choice > 2){
        this.menu("veuillez faire un choix valide");
      }else{
        let p = this.player(players)    
        if(choice == 1){
          this.dealDamage(p);
        }else{
          if(!this.heal()){
            this.menu(players, "Vous n'avez pas assez de mana.");
          }
        }
      }
    }
  } 