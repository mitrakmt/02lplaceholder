  var hit;
  var inBattle = false;

    function action() {
        inBattle = !inBattle;
        if(inBattle) {
            document.getElementById('startBattleButton').style.visibility = 'hidden';
            document.getElementById('attackButton').style.visibility = 'visible';
            document.getElementById('enemyHealth').style.visibility = 'visible';
            document.getElementById('enemyName').style.visibility = 'visible';
            document.getElementById('inBattle').style.visibility = 'visible';
        } else {
            document.getElementById('startBattleButton').style.visibility = 'visible';
            document.getElementById('attackButton').style.visibility = 'hidden';
            document.getElementById('enemyHealth').style.visibility = 'hidden';
            document.getElementById('enemyName').style.visibility = 'hidden';
            document.getElementById('inBattle').style.visibility = 'hidden';
        }
    }

    var player = {
      intellect : 1,
      strength : 1,
      dexterity : 1,
      wisdom : 1,
      constitution : 1,
      charisma : 1,
      armor : 1,
      mana : 100,
      health : 100,
      class : "",
      gold : 0,
      inventory: {healthPotion: 1, manaPotion: 1}
    }

    var classes = [
      {
        name : "warrior",
          intellect : 1,
          strength : 4,
          dexterity : 3,
          wisdom : 1,
          constitution : 5,
          charisma : 4,
          armor : 6,
          mana : 0
      },

      {
        name : "rogue",
          intellect : 1,
          strength : 3,
          dexterity : 5,
          wisdom : 1,
          constitution : 3,
          charisma : 5,
          armor : 3,
          mana : 0
      },

      {
        name : "mage",
          intellect : 6,
          strength : 2,
          dexterity : 2,
          wisdom : 5,
          constitution : 3,
          charisma : 4,
          armor : 2,
          mana : 50
      }
    ]

    var enemies = [
      {
        name : "Giant Rat",
        intellect : 1,
        strength : 2,
        dexterity : 2,
        wisdom : 1,
        constitution : 3,
        charisma : 1,
        armor : 2,
        health : 60,
        mana : 100,
        gold: 3,
        inventory: {healthPotion: 2, manaPotion: 1}
      }, {
        name : "King Scorpion",
        intellect : 1,
        strength : 3,
        dexterity : 2,
        wisdom : 1,
        constitution : 3,
        charisma : 1,
        armor : 2,
        health : 70,
        mana : 100,
        gold: 5,
        inventory: {healthPotion: 3, manaPotion: 1}
      } , {
        name : "Camel",
        intellect : 1,
        strength : 2,
        dexterity : 2,
        wisdom : 1,
        constitution : 3,
        charisma : 1,
        armor : 2,
        health : 20,
        mana : 100,
        gold: 1,
        inventory: {healthPotion: 1, manaPotion: 1}
      } , {

      }, {
        name : "Mummy",
        intellect : 1,
        strength : 2,
        dexterity : 2,
        wisdom : 1,
        constitution : 3,
        charisma : 1,
        armor : 2,
        health : 75,
        mana : 100,
        gold: 6,
        inventory: {healthPotion: 1, manaPotion: 1}
      } , {
        name : "Lamia",
        intellect : 1,
        strength : 1,
        dexterity : 2,
        wisdom : 1,
        constitution : 3,
        charisma : 1,
        armor : 2,
        health : 50,
        mana : 100,
        gold: 2,
        inventory: {healthPotion: 1, manaPotion: 1}
      } , {
        name : "Mummy Lord",
        intellect : 1,
        strength : 3,
        dexterity : 2,
        wisdom : 1,
        constitution : 3,
        charisma : 1,
        armor : 2,
        health : 100,
        mana : 100,
        gold: 15,
        inventory: {healthPotion: 3, manaPotion: 2}
      }

    ];

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

    var manaPotion = function () {
      if (player.inventory.manaPotion > 0) {
        player.mana = 100;
        player.inventory.manaPotion--;
        document.getElementById("playerMana").innerHTML = player.mana;
        document.getElementById("playerManaPotion").innerHTML = player.inventory.manaPotion;
      } else {
        console.log("You have no mana potions");
      }
    }

    player.class = prompt("Choose your class! \n Warrior <> Rogue <> Mage");

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

    document.getElementById("playerIntellect").innerHTML = player.intellect;
    document.getElementById("playerStrength").innerHTML = player.strength;
    document.getElementById("playerDexterity").innerHTML = player.dexterity;
    document.getElementById("playerCharisma").innerHTML = player.charisma;
    document.getElementById("playerConstitution").innerHTML = player.constitution;
    document.getElementById("playerArmor").innerHTML = player.armor;
    document.getElementById("playerWisdom").innerHTML = player.wisdom;
    document.getElementById("playerHealth").innerHTML = player.health;
    document.getElementById("playerMana").innerHTML = player.mana;
    document.getElementById("playerClass").innerHTML = player.class;
    document.getElementById("playerGold").innerHTML = player.gold;
    document.getElementById("playerManaPotion").innerHTML = player.inventory.manaPotion;
    document.getElementById("playerHealthPotion").innerHTML = player.inventory.healthPotion;


    function findEnemy() {
      var randEnemy = Math.ceil((Math.random()*enemies.length)-1);
        return enemies[randEnemy];
    }

    function fight(enemy) {

      if(player.class === "warrior") { hit = Math.ceil(Math.random()*10)+player.strength }
      else if (player.class === "rogue") { hit = Math.ceil(Math.random()*10)+player.dexterity }
      else if (player.class === "mage") { hit = Math.ceil(Math.random()*10)+player.intellect }

      enemy.health -= hit;

      document.getElementById("enemyName").innerHTML = enemy.name;

      // When enemy is killed:
      if (enemy.health <= 0) {
        // Update player stats
        document.getElementById("logListTitle").innerHTML = "Enemy defeated!";
        document.getElementById("logListDesc").innerHTML = "You found " + enemy.gold + " gold!";
        player.gold += enemy.gold;
        document.getElementById("playerGold").innerHTML = player.gold;
        player.health = 100;
        document.getElementById("playerHealth").innerHTML = player.health;

        // Move all of enemy's inventory to player's inventory
        console.log("Attempting inventory add 1");
        if (enemy.inventory.length !== null) {
          console.log("Trying to add to inventory 2");
          for(var item in enemy.inventory) {
            player.inventory[item] += enemy.inventory[item];
          }
        }

        // Updpate items on DOM
        document.getElementById("playerManaPotion").innerHTML = player.inventory.manaPotion;
        document.getElementById("playerHealthPotion").innerHTML = player.inventory.healthPotion;

        // Take the player out of battle
        currentEnemy = findEnemy();
        action();

      } else {
        document.getElementById("logListTitle").innerHTML = "Attack Successful";
        document.getElementById("logListDesc").innerHTML = "You hit for " + hit + "!";
        document.getElementById("enemyHealth").innerHTML = enemy.health + " HP";
        player.health -= hit;
      }

      if (player.health <= 0) {
        alert("Game over :(");
      }
      document.getElementById("playerHealth").innerHTML = player.health;

      currentEnemy = enemy;
      return enemy;
    }
