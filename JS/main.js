  var hit;
  var docById = document.getElementById

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
      class : ""
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
          mana : 100
      }
    ];

    player.class = prompt("Choose your class! \n Warrior <> Rogue <> Mage").toLowerCase();

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

    docById("playerIntellect").innerHTML = player.intellect;
    docById("playerStrength").innerHTML = player.strength;
    docById("playerDexterity").innerHTML = player.dexterity;
    docById("playerCharisma").innerHTML = player.charisma;
    docById("playerConstitution").innerHTML = player.constitution;
    docById("playerArmor").innerHTML = player.armor;
    docById("playerWisdom").innerHTML = player.wisdom;
    docById("playerHealth").innerHTML = player.health;
    docById("playerMana").innerHTML = player.mana;
    docById("playerClass").innerHTML = player.class;


    function findEnemy() {
      var randEnemy = Math.ceil((Math.random()*enemies.length)-1);
        return enemies[randEnemy];
    }

    function fight(enemy) {
      console.log(enemy);

      if(player.class==="warrior") { hit = Math.ceil(Math.random()*10)+player.strength }
      else if (player.class==="rogue") { hit = Math.ceil(Math.random()*10)+player.dexterity }
      else if (player.class==="mage") { hit = Math.ceil(Math.random()*10)+player.intellect }

      enemy.health -= hit;
      console.log(enemy.health);
      if (enemy.health <= 0) {
        docById("logList").innerHTML += '<md-list-item layout-padding layout-margin>';
            docById("logList").innerHTML += "<div>";
              docById("logList").innerHTML += "<h3><strong>VVVV</strong></h3>";
              docById("logList").innerHTML += "<p>You defeated the Giant Rat!</p>";
            docById("logList").innerHTML += "</div>";
            docById("logList").innerHTML += "<md-divider></md-divider>";
          docById("logList").innerHTML += "</md-list-item>";
      } else {
        docById("logList").innerHTML += '<md-list-item layout-padding layout-margin>';
            docById("logList").innerHTML += "<div>";
              docById("logList").innerHTML += "<h3><strong>VVVV</strong></h3>";
              docById("logList").innerHTML += "<p>You defeated the Giant Rat!</p>";
            docById("logList").innerHTML += "</div>";
            docById("logList").innerHTML += "<md-divider></md-divider>";
          docById("logList").innerHTML += "</md-list-item>";
      }
    }

    console.log(fight(findEnemy()));
