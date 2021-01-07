class Fighter extends Character{
    constructor(name = "grace", human = false){
      super(name, human);
      this.hp = 12;
      this.dmg = 4;
      this.mana = 40;
    }
    takeDamage(n){
      if(this.dealVisionTurn > 0){
        super.takeDamage(n - 2);
      }else{
        super.takeDamage(n);
      }
    }
    darkVision(target){
      this.dealDamage(target, 5);
      this.mana -= 20;
      this.dealVisionTurn = 2;
    }
    newTurn(players){
      this.dealVisionTurn--;
      this.menu(players);
    }
    menu(players, warn = ""){
      if(warn != ""){
        console.log();
        console.log(warn);
        console.log();
      }
      let choice = this.attack("Dark Vision");
      if(!choice || choice < 1 || choice > 2){
        this.menu("veuillez faire un choix valide");
      }else{
        let p = this.player(players)    
        if(choice == 1){
          this.dealDamage(p);
        }else{
          this.darkVision(p);
        }
      }
    }
  }