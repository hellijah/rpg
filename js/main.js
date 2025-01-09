const allClasses = [Fighter, Paladin, Monk, Berzerker, Assassin, Wizard, Necromancer];

function getRandomCharacter() {
    const RandomClass = allClasses[Math.floor(Math.random() * allClasses.length)];
    const name = prompt(`Nom du personnage (${RandomClass.name}) : `) || RandomClass.name;
    return new RandomClass(name);
}

// Créer 5 personnages aléatoires
const players = [];
for (let i = 0; i < 5; i++) {
    players.push(getRandomCharacter());
}

const game = new Game(players);
game.startGame();
