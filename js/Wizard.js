class Wizard extends Character {
  constructor(name = "Merlin") {
    super(name, 10, 2, 200);
  }

  fireball(victim) {
    if (this.mana >= 25) {
    this.mana -= 25;
    victim.takeDamage(7);
    console.log(`${this.name} lance Fireball sur ${victim.name}, infligeant 7 dégâts.`);
    } else {
    console.log(`${this.name} n'a pas assez de mana !`);
    }
  }
}
