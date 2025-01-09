class Necromancer extends Character {
  constructor(name = "bob") {
      super(name, 14, 3, 100);
  }

  darkCurse(victim) {
      if (this.mana >= 30) {
          this.mana -= 30;
          victim.takeDamage(5);
          this.hp += 5;
          console.log(`${this.name} utilise Dark Curse, inflige 5 dégâts et vole 5 HP à ${victim.name}.`);
      } else {
          console.log(`${this.name} n'a pas assez de mana !`);
      }
  }
}
