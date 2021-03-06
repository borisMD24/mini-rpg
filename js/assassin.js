class Assassin extends Character{
    constructor(name = "Carl", human = false){
      super(name, human);
      this.hp = 6;
      this.dmg = 6;
      this.mana = 20;
    }
    shadowHit(victim){
      if(this.mana <= 20){
        return false;
      }
      this.invicible = true;
      this.mana -= 20;
      this.shadowHitVictim = victim;
      return true;
    }
    newTurn(players){
      this.invicible = false;
      if(this.shadowHitVictim){
        this.dealDamage(this.shadowHitVictim, 7);
        if(!this.shadowHitVictim.dead){
          this.takeDamage(7);
        }
      }
      this.menu(players);
    }
    menu(players, warn = ""){
      if(warn != ""){
        console.log();
        p.warn();(warn);
        console.log();
      }
      let choice = this.attack("Shadow Hit");
      if(!choice || choice < 1 || choice > 2){
        this.menu("veuillez faire un choix valide");
      }else{
        let p = this.player(players);
        if(choice == 1){
          this.dealDamage(p);
        }else{
          if(!this.shadowHit(p)){
            this.menu(players, "vous n'avez pas assez de Mana.");
          }
        }
      }
    }
  }