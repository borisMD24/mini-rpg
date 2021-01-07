class Paladin extends Character{
    constructor(name = "Ulder", human = false){
      super(name, human);
      this.hp = 16;
      this.dmg = 3;
      this.mana = 160;
    }
    healingLighting(victim){
      if(this.mana < 40){
        return false;
      }
      this.mana -= 40;
      this.hp += 5;
      this.dealDamage(victim, 4) ;
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
      let choice = this.attack("Heal Lighting");
      if(!choice || choice < 1 || choice > 2){
        this.menu("veuillez faire un choix valide");
      }else{
        let p = this.player(players)    
        if(choice == 1){
          this.dealDamage(p);
        }else{
          if(!this.healingLighting(p)){
            this.menu(players, "vous n'avez pas assez de mana.");
          }
        }
      }
    }
  } 