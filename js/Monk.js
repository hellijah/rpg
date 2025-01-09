class Monk extends Character {
  constructor(name = "Moana") {
    super(name, 8, 2, 200);
  }

  heal() {
    if (this.mana >= 25) {
    this.mana -= 25;
    this.hp += 8;
    console.log(`${this.name} utilise Heal et se soigne de 8 points.`);
    } else {
    console.log("Pas assez de mana !");
    }
  }
}
