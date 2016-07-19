  var hit, skillA, skillB;
  var inBattle = false;
  var startHP = 0;
  var totalExp = 100;

    function action() {
        inBattle = !inBattle;
        if(inBattle) {
            document.getElementById('startBattleButton').style.visibility = 'hidden';
            document.getElementById('attackButton').style.visibility = 'visible';
            document.getElementById('enemyHealth').style.visibility = 'visible';
            document.getElementById('enemyName').style.visibility = 'visible';
            document.getElementById('inBattle').style.visibility = 'visible';
            document.getElementById('skillaButton').style.visibility = 'visible';
            document.getElementById('skillbButton').style.visibility = 'visible';
            document.getElementById('skillaButton').innerHTML = skillA;
            document.getElementById('skillbButton').innerHTML = skillB;
        } else {
            document.getElementById('startBattleButton').style.visibility = 'visible';
            document.getElementById('attackButton').style.visibility = 'hidden';
            document.getElementById('enemyHealth').style.visibility = 'hidden';
            document.getElementById('enemyName').style.visibility = 'hidden';
            document.getElementById('inBattle').style.visibility = 'hidden';
            document.getElementById('skillaButton').style.visibility = 'hidden';
            document.getElementById('skillbButton').style.visibility = 'hidden';
            document.getElementById('skillaButton').innerHTML = skillA;
            document.getElementById('skillbButton').innerHTML = skillB;
        }
    }

    var cheatCodes = function() {
      var phrase = prompt("Do you know one of our secret cheat codes?");
      if (phrase === "Bling bling bitches") {
        player.gold += 100000;
        document.getElementById("playerGold").innerHTML = player.gold;
      } else if (phrase === "I'm invincible boyyy") {
        player.health = 100000;
        document.getElementById("playerHealth").innerHTML = player.health;
      }
    }

    var player = {
      level: 1,
      experience : 0,
      intellect : 1,
      strength : 1,
      dexterity : 1,
      wisdom : 1,
      constitution : 1,
      charisma : 1,
      armor : 1,
      mana : 100,
      energy : 100,
      rage : 100,
      health : 100,
      class : "",
      gold : 0,
      weapon : null,
      inventory: {healthPotion: 1, manaPotion: 1}
    }

    var classes = [
      {
        name : "warrior",
          intellect : 1,
          strength : 5,
          dexterity : 3,
          wisdom : 1,
          constitution : 5,
          charisma : 4,
          armor : 6,
          rage : 100
      }, {
        name : "rogue",
          intellect : 1,
          strength : 3,
          dexterity : 5,
          wisdom : 1,
          constitution : 3,
          charisma : 5,
          armor : 3,
          energy : 100
      }, {
        name : "paladin",
          intellect : 2,
          strength : 4,
          dexterity : 4,
          wisdom : 3,
          constitution : 3,
          charisma : 5,
          armor : 5,
          mana : 0
      }, {
        name : "mage",
          intellect : 6,
          strength : 2,
          dexterity : 2,
          wisdom : 5,
          constitution : 3,
          charisma : 4,
          armor : 2,
          mana : 0
      }
    ]

    var enemies = [
      {
        name : "Giant Rat",
        status: "Common",
        level: 1,
        experience: 10,
        stats : {health : 60, mana : 100, intellect : 1, strength : 2, dexterity : 2, wisdom : 1, constitution : 3, armor : 1},
        inventory: {healthPotion: 0, manaPotion: 0, gold: 3}
      }, {
        name : "King Scorpion",
        status: "Uncommon",
        level: 1,
        experience: 25,
        stats : {health : 60, mana : 100, intellect : 1, strength : 2, dexterity : 2, wisdom : 1, constitution : 3, armor : 1},
        inventory: {healthPotion: 0, manaPotion: 0, gold: 3}
      } , {
        name : "Camel",
        status: "Common",
        level: 1,
        experience: 10,
        stats : {health : 60, mana : 100, intellect : 1, strength : 2, dexterity : 2, wisdom : 1, constitution : 3, armor : 1},
        inventory: {healthPotion: 0, manaPotion: 0, gold: 3}
      } , {
        name : "Mummy",
        status: "Common",
        level: 1,
        experience: 10,
        stats : {health : 60, mana : 100, intellect : 1, strength : 2, dexterity : 2, wisdom : 1, constitution : 3, armor : 1},
        inventory: {healthPotion: 0, manaPotion: 0, gold: 3}
      } , {
        name : "Naga",
        status: "Common",
        level: 1,
        experience: 10,
        stats : {health : 60, mana : 100, intellect : 1, strength : 2, dexterity : 2, wisdom : 1, constitution : 3, armor : 1},
        inventory: {healthPotion: 0, manaPotion: 0, gold: 3}
      } , {
        name : "Ragnaros",
        status: "Boss",
        level: 3,
        experience: 100,
        stats : {health : 150, mana : 100, intellect : 3, strength : 5, dexterity : 3, wisdom : 5, constitution : 5, armor : 4},
        inventory: {healthPotion: 4, manaPotion: 4, gold: 70}
      } , {
        name : "Arcane Golem",
        status: "Uncommon",
        level: 1,
        experience: 25,
        stats : {health : 100, mana : 100, intellect : 1, strength : 2, dexterity : 2, wisdom : 1, constitution : 3, armor : 1},
        inventory: {healthPotion: 2, manaPotion: 2, gold: 35}
      } , {
        name : "Orc Warrior",
        status: "Common",
        level: 1,
        experience: 10,
        stats : {health : 100, mana : 100, intellect : 1, strength : 3, dexterity : 2, wisdom : 1, constitution : 3, armor : 1},
        inventory: {healthPotion: 2, manaPotion: 2, gold: 35}
      } , {
        name : "Tauren Warrior",
        status: "Common",
        level: 1,
        experience: 10,
        stats : {health : 100, mana : 100, intellect : 1, strength : 3, dexterity : 2, wisdom : 1, constitution : 3, armor : 1},
        inventory: {healthPotion: 2, manaPotion: 2, gold: 35}
      }
    ];

    var store = {
      weapons: {
        KingSlayer: {
          name: "King Slayer",
          type: "Weapon",
          damage: 29,
          dexterity: 50,
          cost: 150
        },
        Claymore: {
          name: "Claymore",
          type: "Weapon",
          damage: 3,
          cost: 30
        },
        ShortStaff: {
          name: "Short Staff",
          type: "Weapon",
          damage: 3,
          cost: 30
        },
        Dirk: {
          name: "Dirk",
          type: "Weapon",
          damage: 3,
          cost: 30
        },
        Club: {
          name: "Club",
          type: "Weapon",
          damage: 3,
          cost: 30
        }
      },
      potions: {
        HealthPotion: {
          name: "Health Potion",
          type: "Potion",
          cost: 5
        },
        ManaPotion: {
          name: "Mana Potion",
          type: "Potion",
          cost: 5
        }
      }
    }

    var healthPotion = function () {
      if (player.inventory.healthPotion > 0) {
        player.health = 100;
        player.inventory.healthPotion--;
        document.getElementById("playerHealth").innerHTML = player.health;
        document.getElementById("playerHealthPotion").innerHTML = player.inventory.healthPotion;
      } else {
        console.log("You have no health potions");
      }
    }

    var buyHealthPotion = function () {
      if (player.gold > store.potions.HealthPotion.cost) {
        player.gold -= store.potions.HealthPotion.cost;
        player.inventory.healthPotion++;
        document.getElementById("playerHealthPotion").innerHTML = player.inventory.healthPotion;
        document.getElementById("playerGold").innerHTML = player.gold;
      } else {
        alert("Sorry, you don't have enough gold yet.")
      }
    }

    var manaPotion = function () {
      if (player.inventory.manaPotion > 0) {
        player.mana = 100;
        player.inventory.manaPotion--;
        document.getElementById("playerResourceValue").innerHTML = player.mana;
        document.getElementById("playerManaPotion").innerHTML = player.inventory.manaPotion;
      } else {
        console.log("You have no mana potions");
      }
    }

    var buyManaPotion = function () {
      if (player.gold > store.potions.ManaPotion.cost) {
        player.gold -= store.potions.ManaPotion.cost;
        player.inventory.manaPotion++;
        document.getElementById("playerManaPotion").innerHTML = player.inventory.manaPotion;
        document.getElementById("playerGold").innerHTML = player.gold;
      } else {
        alert("Sorry, you don't have enough gold yet.")
      }
    }

    var buyKingSlayer = function() {
      if (player.gold >= store.weapons.KingSlayer.cost) {
        player.weapon = "King Slayer";
        player.strength += 29;
        player.dexterity += 50;
        player.gold -= store.weapons.KingSlayer.cost;
        document.getElementById("playerStrength").innerHTML = player.strength;
        document.getElementById("playerDexterity").innerHTML = player.dexterity;
        document.getElementById("playerGold").innerHTML = player.gold;
      } else {
        alert("Sorry, you don't have enough gold yet.")
      }
    }

    player.class = prompt("Choose your class! \n Warrior <> Rogue <> Mage <> Paladin");

    classes.forEach(function(playerClass) {
      if (player.class === playerClass.name) {
        player.intellect += playerClass.intellect;
        player.strength += playerClass.strength;
        player.dexterity += playerClass.dexterity;
        player.charisma += playerClass.charisma;
        player.constitution += playerClass.constitution;
        player.armor += playerClass.armor;
        player.wisdom += playerClass.wisdom;
        player.mana += playerClass.mana;
       }
    });

    // Defining first skill
    if (player.class === "warrior") { skillA = "Cleave" }
    else if (player.class === "rogue") { skillA = "Sinister Strike" }
    else if (player.class === "mage") { skillA = "Fireball" }
    else if (player.class === "paladin") { skillA = "Judgement" }

    // Defining second skill
    if (player.class === "warrior") { skillB = "Bladestorm" }
    else if (player.class === "rogue") { skillB = "Eviscerate" }
    else if (player.class === "mage") { skillB = "Dragon's Breath" }
    else if (player.class === "paladin") { skillB = "Divine Storm" }

    // Insert player stats and inventory into DOM
    document.getElementById("playerLevel").innerHTML = player.level;
    document.getElementById("playerIntellect").innerHTML = player.intellect;
    document.getElementById("playerStrength").innerHTML = player.strength;
    document.getElementById("playerDexterity").innerHTML = player.dexterity;
    document.getElementById("playerCharisma").innerHTML = player.charisma;
    document.getElementById("playerConstitution").innerHTML = player.constitution;
    document.getElementById("playerArmor").innerHTML = player.armor;
    document.getElementById("playerWisdom").innerHTML = player.wisdom;
    document.getElementById("playerHealth").innerHTML = player.health;
    document.getElementById("playerClass").innerHTML = player.class;
    document.getElementById("playerGold").innerHTML = player.gold;
    document.getElementById("playerManaPotion").innerHTML = player.inventory.manaPotion;
    document.getElementById("playerHealthPotion").innerHTML = player.inventory.healthPotion;
    if (player.class === "warrior") {
      document.getElementById("playerResourceValue").innerHTML = player.rage;
      document.getElementById("playerResourceName").innerHTML = "Rage";
    } else if (player.class === "rogue") {
      document.getElementById("playerResourceValue").innerHTML = player.energy;
      document.getElementById("playerResourceName").innerHTML = "Energy";
    } else if (player.class === "mage") {
      document.getElementById("playerResourceValue").innerHTML = player.mana;
      document.getElementById("playerResourceName").innerHTML = "Mana";
    } else if (player.class === "paladin") {
      document.getElementById("playerResourceValue").innerHTML = player.mana;
      document.getElementById("playerResourceName").innerHTML = "Mana";
    }

    // Insert store into DOM
    document.getElementById("buyKingSlayerName").innerHTML = store.weapons.KingSlayer.name;
    document.getElementById("buyKingSlayerCost").innerHTML = store.weapons.KingSlayer.cost;
    document.getElementById("buyHealthPotionName").innerHTML = store.potions.HealthPotion.name;
    document.getElementById("buyHealthPotionCost").innerHTML = store.potions.HealthPotion.cost;
    document.getElementById("buyManaPotionName").innerHTML = store.potions.ManaPotion.name;
    document.getElementById("buyManaPotionCost").innerHTML = store.potions.ManaPotion.cost;

    var findEnemy = function() {
      var randEnemy = Math.ceil((Math.random() * enemies.length) - 1);
      enemy = enemies[randEnemy];
      startHP = enemy.stats.health;
      document.getElementById("enemyHealth").innerHTML = enemy.stats.health + " HP";
      document.getElementById("enemyName").innerHTML = enemy.name;
      action();
    }

    var normalStrength = function () {
        if(player.class === "paladin") {
        hit = Math.ceil(Math.random()*10)+player.strength;

        if ((hit - player.strength) === 10) {
          return hit *= 2;
        } else {
          return hit;
        }
      } else if(player.class === "warrior") {
        hit = Math.ceil(Math.random()*10)+player.strength;

        if ((hit - player.strength) === 10) {
          return hit *= 2;
        } else {
          return hit;
        }
      } else if (player.class === "rogue") {
        hit = Math.ceil(Math.random()*10)+player.dexterity;

        if ((hit - player.dexterity) === 10) {
          return hit *= 2;
        } else {
          return hit;
        }
      } else if (player.class === "mage") {
        hit = Math.ceil(Math.random()*10)+player.strength;

        if ((hit - player.strength) === 10) {
          return hit *= 2;
        } else {
          return hit;
        }
      }
    }

    var mediumStrength = function () {
      if (player.class === "paladin") {
        hit = Math.ceil(Math.random()*20)+player.intellect;
        if (player.mana >= 10) {
          player.mana -= 10;
          document.getElementById("playerResourceValue").innerHTML = player.mana;

          if ((hit - player.intellect) === 19||20) {
            return hit *= 2;
          } else {
            return hit;
          }
        } else {
          console.log("Not enough mana to use this attack!");
        }
      }
      else if(player.class === "warrior") {
        hit = Math.ceil(Math.random()*20)+player.strength;
        if (player.rage >= 10) {
          player.rage -= 10;
          document.getElementById("playerResourceValue").innerHTML = player.rage;

          if ((hit - player.strength) === 19||20) {
            return hit *= 2;
          } else {
            return hit;
          }
        } else {
          console.log("Not enough rage to use this attack!");
        }
      } else if (player.class === "rogue") {
        hit = Math.ceil(Math.random()*20)+player.dexterity;
        if (player.energy >= 10) {
          player.energy -= 10;
          document.getElementById("playerResourceValue").innerHTML = player.energy;

          if ((hit - player.dexterity) === 19||20) {
            return hit *= 2;
          } else {
            return hit;
          }
        } else {
          console.log("Not enough energy to use this attack!");
        }
      } else if (player.class === "mage") {
        hit = Math.ceil(Math.random()*20)+player.intellect;
        if (player.mana >= 10) {
          player.mana -= 10;
          document.getElementById("playerResourceValue").innerHTML = player.mana;

          if ((hit - player.intellect) === 19||20) {
            return hit *= 2;
          } else {
            return hit;
          }
        } else {
          console.log("Not enough energy to use this attack!");
        }
      }
    }

    var maxStrength = function () {
      if (player.class === "paladin") {
        hit = Math.ceil(Math.random()*26)+player.intellect+player.strength;
        if (player.mana >= 20) {
          player.mana -= 20;
          document.getElementById("playerResourceValue").innerHTML = player.mana;

          if ((hit - player.intellect) === 25||26) {
            return hit *= 2;
          } else {
            return hit;
          }
        } else {
          console.log("Not enough energy to use this attack!");
        }
      }
      else if(player.class === "warrior") {
        hit = Math.ceil(Math.random()*25)+player.strength;
        if (player.rage >= 20) {
          player.rage -= 20;
          document.getElementById("playerResourceValue").innerHTML = player.rage;

          if ((hit - player.strength) === 24||25) {
            return hit *= 2;
          } else {
            return hit;
          }
        } else {
          console.log("Not enough rage to use this attack!");
        }
      } else if (player.class === "rogue") {
        hit = Math.ceil(Math.random()*25)+player.dexterity;
        if (player.energy >= 20) {
          player.energy -= 20;
          document.getElementById("playerResourceValue").innerHTML = player.energy;

          if ((hit - player.dexterity) === 24||25) {
            return hit *= 2;
          } else {
            return hit;
          }
        } else {
          console.log("Not enough energy to use this attack!");
        }
      } else if (player.class === "mage") {
        hit = Math.ceil(Math.random()*20)+player.intellect;
        if (player.mana >= 20) {
          player.mana -= 20;
          document.getElementById("playerResourceValue").innerHTML = player.mana;

          if ((hit - player.intellect) === 24||25) {
            return hit *= 2;
          } else {
            return hit;
          }
        } else {
          console.log("Not enough mana to use this attack!");
        }
      }
    }

    var gainedLevel = function() {
      if (player.experience > totalExp) {
        player.level++;
        document.getElementById("playerLevel").innerHTML = player.level;
        totalExp = totalExp * 3;
        console.log("Level gained! New totalExp is " + totalExp)
      }
      console.log(player.experience)
    }

    function attack(enemy, hit) {
      if (hit === undefined) {
        return false;
      } else {
        var enemyHit = Math.ceil(Math.random()*10) + enemy.stats.strength;
        enemy.stats.health -= hit;

        // When enemy is killed:
        if (enemy.stats.health <= 0) {
          // Update player stats
          document.getElementById("logListTitle").innerHTML = "Enemy defeated!";
          document.getElementById("logListDesc").innerHTML = "You found " + enemy.inventory.gold + " gold!";
          player.gold += enemy.inventory.gold;
          player.experience += enemy.experience;
          gainedLevel();
          document.getElementById("playerGold").innerHTML = player.gold;
          document.getElementById("playerHealth").innerHTML = player.health;

          // Move all of enemy's inventory to player's inventory
          if (enemy.inventory.length !== null) {
            for(var item in enemy.inventory) {
              if (player.inventory[item] !== undefined) {
                player.inventory[item] += enemy.inventory[item];
              } else {
                player.inventory[item] = enemy.inventory[item];
              }
            }
          }

          // Updpate items on DOM
          document.getElementById("playerManaPotion").innerHTML = player.inventory.manaPotion;
          document.getElementById("playerHealthPotion").innerHTML = player.inventory.healthPotion;

          // Reset enemy to full health
          enemy.stats.health = startHP;

          // Take the player out of battle
          action();

        } else {
          document.getElementById("logListTitle").innerHTML = "Attack Successful";
          document.getElementById("logListDesc").innerHTML = "You hit for " + hit + "!";
          document.getElementById("enemyHealth").innerHTML = enemy.stats.health + " HP";
          player.health -= (enemyHit - (player.armor/2));
          document.getElementById("playerHealth").innerHTML = player.health;
        }

        if (player.health <= 0) {
          alert("Game over :(");
          location.reload();
        }

        return enemy;
      }
    }
