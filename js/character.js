class Character{
    constructor(name, human){
      this.name = name;
      this.hp;
      this.dmg;
      this.mana;
      this.dead = false;
      this.human = human;
    }
    dealDamage(victim, dmg = this.dmg){
      victim.takeDamage(dmg);
      p.warn(`${this.name} inflige ${dmg} de degats a ${victim.name}!`);
    }
    takeDamage(n){
      this.hp -= n;
      if(this.hp <= 0){
        this.dead = true;
        this.hp = 0;
        console.log(`${this.name} est mort!`);
      }
    }
    attack(custom){
      if(this.human == false){
        return(Math.floor((Math.random() * 10)) % 2 + 1);
      }
      p.ask("que voulez-vous faire?");
      console.log(`1️⃣ - attque nomanle (${this.dmg} points de dommage)`);
      console.log(`2️⃣ - ${custom}`);
      return window.prompt("Votre choix?");
    }
    player(players){
      let pl = players.filter(player => player != this);
      if(this.human == false){
        return(pl[Math.floor((Math.random() * 100)) % pl.length]);
      }
      pl.map(player => console.log(`${pl.indexOf(player) + 1} - attaquer ${player.name}`));
      return pl[window.prompt("Votre choix?")-1];
    }
  }