class Berzerker extends Character {
  constructor(name = "Draven") {
  super(name, 8, 4, 0);
  }

  rage() {
    this.hp -= 1;
    this.dmg += 1;
    console.log(`${this.name} utilise Rage, gagne +1 dégâts permanents mais perd 1 point de vie.`);
  }
}
