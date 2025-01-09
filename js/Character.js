class Character {
  constructor(name, hp, dmg, mana) {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.status = "playing";
  }

  takeDamage(amount) {
    this.hp -= amount;
    if (this.hp <= 0) {
      this.status = "loser";
      this.hp = 0;
      console.log(`${this.name} a été éliminé !`);
    }
  }

  dealDamage(victim) {
    victim.takeDamage(this.dmg);
    console.log(`${this.name} attaque ${victim.name} et inflige ${this.dmg} dégâts.`);
  }
}
