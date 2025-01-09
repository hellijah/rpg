class Paladin extends Character {
  constructor(name = "Ulder") {
    super(name, 16, 3, 160);
  }

  healingLighting(victim) {
    if (this.mana >= 40) {
    this.mana -= 40;
    victim.takeDamage(4);
    this.hp += 5;
    console.log(`${this.name} utilise Healing Lighting sur ${victim.name}, inflige 4 dégâts et se soigne de 5 points.`);
    } else {
    console.log("Pas assez de mana !");
    }
  }
}
