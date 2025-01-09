class Fighter extends Character {
  constructor(name = "Grace") {
    super(name, 12, 4, 40);
  }

  darkVision(victim) {
    if (this.mana >= 20) {
    this.mana -= 20;
    victim.takeDamage(5);
    console.log(`${this.name} utilise Dark Vision sur ${victim.name} et inflige 5 dégâts.`);
    } else {
    console.log("Pas assez de mana !");
    }
  }
}
