class Game {
  constructor(players) {
    this.players = players;
    this.turnLeft = 10;
  }

  // Démarrer le jeu
  startGame() {
    console.log("La partie commence !");
    while (this.turnLeft > 0 && this.getAlivePlayers().length > 1) {
      this.startTurn();
    }
    this.endGame();
  }

  // Démarrer un tour
  startTurn() {
    console.log(`\n--- Tour ${11 - this.turnLeft} ---`);
    const alivePlayers = this.getAlivePlayers();
    
    // Mélanger l'ordre des joueurs aléatoirement
    this.shuffleArray(alivePlayers);

    // Chaque joueur joue son tour
    alivePlayers.forEach(player => {
      if (player.status === "playing") {
        console.log(`C'est au tour de ${player.name} de jouer.`);
        const target = this.chooseTarget(player);
        player.dealDamage(target);
      }
    });

    this.skipTurn();
    this.watchStats();
  }

  // Passer au tour suivant
  skipTurn() {
    this.turnLeft--;
    console.log(`Fin du tour. Tours restants : ${this.turnLeft}`);
  }

  // Choisir une cible avec IA basique
  chooseTarget(attacker) {
    const possibleTargets = this.getAlivePlayers().filter(player => player !== attacker);
    
    // IA : essayer un coup fatal si possible
    for (const target of possibleTargets) {
      if (target.hp <= attacker.dmg) {
        console.log(`${attacker.name} tente un coup fatal sur ${target.name} !`);
        return target;
      }
    }

    // Sinon, cibler un joueur aléatoire
    return possibleTargets[Math.floor(Math.random() * possibleTargets.length)];
  }

  // Obtenir les joueurs encore en vie
  getAlivePlayers() {
    return this.players.filter(player => player.status === "playing");
  }

  // Fin de la partie
  endGame() {
    const winners = this.getAlivePlayers();
    if (winners.length === 1) {
      winners[0].status = "winner";
      console.log(`🏆 ${winners[0].name} a gagné la partie !`);
    } else {
      console.log("Fin des 10 tours ! Les survivants sont :");
      winners.forEach(player => player.status = "winner");
      this.watchStats();
    }
  }

  // Affichage des statistiques des joueurs
  watchStats() {
    console.log("\n--- Statistiques des joueurs ---");
    this.players.forEach(player => {
      console.log(
        `${player.name} | HP: ${player.hp} | Mana: ${player.mana} | Dégâts: ${player.dmg} | Status: ${player.status}`
      );
    });
  }

  // Mélanger un tableau (ordre aléatoire des joueurs)
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}

