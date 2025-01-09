class Assassin extends Character {
  constructor(name = "Carl") {
    super(name, 6, 6, 20);
  }

  shadowHit(victim) {
    if (this.mana >= 20) {
  this.mana -= 20;
  victim.takeDamage(7);
  console.log(`${this.name} utilise Shadow Hit sur ${victim.name} et inflige 7 dégâts.`);
  if (victim.hp > 0) {
    this.hp -= 7;
    console.log(`${this.name} perd 7 points de vie car ${victim.name} n'est pas mort.`);
  }
  } else {
    console.log("Pas assez de mana !");
  }
  }
}
