  var hit, skillA, skillB;
  var inBattle = false;
  var startHP = 0;
  var totalExp = 100;
  var mageResource = "Mana";
  var paladinResource = "Mana";
  var warriorResource = "Rage";
  var rogueResource = "Energy";
  var hpMultiplier = 1;
  var strMultiplier = 1;

  // Create elements for insert to DOM
  var newListItem = document.createElement("li");
  var newUnorderedListItem = document.createElement("ul");
  var newOrderedListItem = document.createElement("ol");
  var newDiv = document.createElement("div");
  var newParagraph = document.createElement("p");
  var newH1 = document.createElement("h1");
  var newLineBreak = document.createElement("br");
  var newButton = document.createElement("button");
  var newSpan = document.createElement("span");
  var storeUl = document.querySelector('ul');
  var storeCard = document.getElementById('storeCard');

  // Create lists for insert to DOM
  var armorList = document.getElementById("armorList");
  var weaponsList = document.getElementById("weaponsList");

  // Convert player state to inBattle and !inBattle
  function action() {
      inBattle = !inBattle;
      if(inBattle) {
          document.getElementById('startBattleButton').style.visibility = 'hidden';
          document.getElementById('attackButton').style.visibility = 'visible';
          document.getElementById('enemyHealth').style.visibility = 'visible';
          document.getElementById('enemyName').style.visibility = 'visible';
          document.getElementById('enemyStatus').style.visibility = 'visible';
          document.getElementById('enemyStrength').style.visibility = 'visible';
          document.getElementById('enemyArmor').style.visibility = 'visible';
          document.getElementById('enemyLevel').style.visibility = 'visible';
          document.getElementById('inBattle').style.visibility = 'visible';

          if (player.level >= 2) {
            document.getElementById('skillaButton').innerHTML = skillA;
            document.getElementById('skillaButton').style.visibility = 'visible';
          }
          if (player.level >= 5) {
            document.getElementById('skillbButton').innerHTML = skillB;
            document.getElementById('skillbButton').style.visibility = 'visible';
          }
      } else {
          document.getElementById('startBattleButton').style.visibility = 'visible';
          document.getElementById('attackButton').style.visibility = 'hidden';
          document.getElementById('enemyHealth').style.visibility = 'hidden';
          document.getElementById('enemyName').style.visibility = 'hidden';
          document.getElementById('inBattle').style.visibility = 'hidden';
          document.getElementById('enemyStatus').style.visibility = 'hidden';
          document.getElementById('enemyStrength').style.visibility = 'hidden';
          document.getElementById('enemyArmor').style.visibility = 'hidden';
          document.getElementById('enemyLevel').style.visibility = 'hidden';
          if (player.level >= 2) {
            document.getElementById('skillaButton').style.visibility = 'hidden';
            document.getElementById('skillaButton').innerHTML = skillA;
          }
          if (player.level >= 5) {
            document.getElementById('skillbButton').style.visibility = 'hidden';
            document.getElementById('skillbButton').innerHTML = skillB;
          }
        }
      }


    var cheatCodes = function() {
      var phrase = prompt("Do you know one of our secret cheat codes?");
      if (phrase === "bling") {
        player.gold += 100000;
        document.getElementById("playerGold").innerHTML = player.gold;
      } else if (phrase === "invincible") {
        player.health = 100000;
        document.getElementById("playerHealth").innerHTML = player.health;
      }
  }

  // Secret codes -- should turn cheats into separate object
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

  // Player Object
  var player = {
    level: 7,
    experience : 0,
    intellect : 1,
    strength : 1,
    dexterity : 1,
    wisdom : 1,
    constitution : 1,
    charisma : 1,
    armor : 1,
    resource: 100,
    health : 100,
    class : "",
    gold : 1000,
    weapon : null,
    inventory: {healthPotion: 1, resourcePotion: 1}
  }

  // Class creation
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
        resource : 100
    }, {
      name : "rogue",
        intellect : 1,
        strength : 3,
        dexterity : 5,
        wisdom : 1,
        constitution : 3,
        charisma : 5,
        armor : 3,
        resource : 100
    }, {
      name : "paladin",
        intellect : 2,
        strength : 4,
        dexterity : 4,
        wisdom : 3,
        constitution : 4,
        charisma : 5,
        armor : 5,
        resource : 0
    }, {
      name : "mage",
        intellect : 6,
        strength : 2,
        dexterity : 2,
        wisdom : 4,
        constitution : 2,
        charisma : 4,
        armor : 2,
        resource : 0
    }
  ]

  // All enemies
  var enemies = [
    {
      name : "Giant Rat",
      status: "Common",
      level: 1,
      experience: 10,
      stats : {health : 60, mana : 100, intellect : 1, strength : 2, dexterity : 2, wisdom : 1, constitution : 3, armor : 1},
      inventory: {healthPotion: 0, resourcePotion: 0, gold: 3}
    }, {
      name : "King Scorpion",
      status: "Uncommon",
      level: 1,
      experience: 25,
      stats : {health : 60, mana : 100, intellect : 1, strength : 2, dexterity : 2, wisdom : 1, constitution : 3, armor : 1},
      inventory: {healthPotion: 0, resourcePotion: 0, gold: 3}
    } , {
      name : "Camel",
      status: "Common",
      level: 1,
      experience: 10,
      stats : {health : 60, mana : 100, intellect : 1, strength : 2, dexterity : 2, wisdom : 1, constitution : 3, armor : 1},
      inventory: {healthPotion: 0, resourcePotion: 0, gold: 3}
    } , {
      name : "Mummy",
      status: "Common",
      level: 1,
      experience: 10,
      stats : {health : 60, mana : 100, intellect : 1, strength : 2, dexterity : 2, wisdom : 1, constitution : 3, armor : 1},
      inventory: {healthPotion: 0, resourcePotion: 0, gold: 3}
    } , {
      name : "Naga",
      status: "Common",
      level: 1,
      experience: 10,
      stats : {health : 60, mana : 100, intellect : 1, strength : 2, dexterity : 2, wisdom : 1, constitution : 3, armor : 1},
      inventory: {healthPotion: 0, resourcePotion: 0, gold: 3}
    } , {
      name : "Ragnaros",
      status: "Boss",
      level: 3,
      experience: 100,
      stats : {health : 150, mana : 100, intellect : 3, strength : 5, dexterity : 3, wisdom : 5, constitution : 5, armor : 4},
      inventory: {healthPotion: 4, resourcePotion: 4, gold: 70}
    } , {
      name : "Arcane Golem",
      status: "Uncommon",
      level: 1,
      experience: 25,
      stats : {health : 80, mana : 100, intellect : 1, strength : 2, dexterity : 2, wisdom : 1, constitution : 3, armor : 1},
      inventory: {healthPotion: 2, resourcePotion: 2, gold: 35}
    } , {
      name : "Orc Warrior",
      status: "Common",
      level: 1,
      experience: 10,
      stats : {health : 80, mana : 100, intellect : 1, strength : 3, dexterity : 2, wisdom : 1, constitution : 3, armor : 1},
      inventory: {healthPotion: 2, resourcePotion: 2, gold: 35}
    } , {
      name : "Tauren Warrior",
      status: "Common",
      level: 1,
      experience: 10,
      stats : {health : 80, mana : 100, intellect : 1, strength : 3, dexterity : 2, wisdom : 1, constitution : 3, armor : 1},
      inventory: {healthPotion: 2, resourcePotion: 2, gold: 35}
    }
  ];

  // Store Object
  var store = {
    weapons: {
      Atiesh:{
        name: "Atiesh: Greatstaff of the Guardians",
        class: "mage",
        type: "Staff",
        intellect: 10,
        strength: 0,
        dexterity: 0,
        cost: 1000
      },
      Dragonwrath: {
        name: "Dragonwrath, Tarecgosa's Rest",
        class: "mage",
        type: "Staff",
        intellect: 8,
        strength: 0,
        dexterity: 0,
        cost: 700
      },
      KingSlayer: {
        name: "King Slayer",
        class: "mage",
        type: "Weapon",
        strength: 25,
        dexterity: 25,
        intellect: 25,
        cost: 3000
      },
      Shadowmourne:{
        name: "Shadowmourne",
        class: "warrior",
        type: "Axe",
        strength: 10,
        dexterity: 0,
        intellect: 0,
        cost: 1000
      },
      Sulfuras:{
        name: "Sulfuras, Hand of Ragnaros",
        class: "warrior",
        type: "Hammer",
        strength: 8,
        dexterity: 0,
        intellect: 0,
        cost: 800
      },
      Claymore: {
        name: "Claymore",
        class: "warrior",
        type: "Weapon",
        strength: 3,
        dexterity: 0,
        intellect: 0,
        cost: 30
      },
      Warglaives:{
        name: "Warglaives of Azzinoth",
        class: "rogue",
        type: "Glaives",
        dexterity: 10,
        strength: 3,
        intellect: 0,
        cost: 1000
      },
      Fangs:{
        name: "Golad & Tiriosh",
        class: "rogue",
        type: "Daggers",
        dexterity: 7,
        strength: 3,
        intellect: 0,
        cost: 600
      },
      Dirk: {
        name: "Dirk",
        class: "rogue",
        type: "Weapon",
        dexterity: 3,
        strength: 0,
        intellect: 0,
        cost: 30
      },
      Ashbringer:{
        name: "Ashbringer",
        class: "paladin",
        type: "2H Sword",
        intellect: 4,
        strength: 8,
        dexterity: 0,
        cost: 900
      },
      Truthguard:{
        name: "Truthguard",
        class: "paladin",
        type: "Sword and Shield",
        intellect: 4,
        strength: 3,
        dexterity: 0,
        armor: 7,
        cost: 800
      },
      Frostmourne:{
        name: "Frostmourne",
        class: "paladin",
        type: "2H Sword",
        strength: 7,
        intellect: 4,
        dexterity: 0,
        cost:800
      },
      ShortStaff: {
        name: "Short Staff",
        class: "paladin",
        type: "Weapon",
        intellect: 3,
        strength: 0,
        dexterity: 0,
        cost: 30
      }
    },
    armor: {
      RustedArmor: {
        name: "Rusted Armor",
        class: "paladin",
        type: "Plate",
        armor: 2,
        intellect: 1,
        wisdom: 2,
        strength: 0,
        dexterity: 0,
        cost: 100
      },
      Judgement: {
        name: "Judgement Armor",
        class: "paladin",
        type: "Plate",
        armor: 6,
        intellect: 5,
        dexterity: 0,
        strength: 3,
        wisdom: 5,
        cost: 400
      },
      Redemption: {
        name: "Redemption Armor",
        class: "paladin",
        type: "Plate",
        armor: 8,
        intellect: 7,
        strength: 6,
        dexterity: 0,
        wisdom: 9,
        cost: 900
      },
      WhiteTiger: {
        name: "White Tiger Armor",
        class: "paladin",
        type: "Plate",
        armor: 11,
        intellect: 10,
        strength: 11,
        dexterity: 0,
        wisdom: 13,
        cost: 1300
      },
      Lightsworn: {
        name: "Lightsworn Dragonplate",
        class: "paladin",
        type: "Plate",
        armor: 16,
        intellect: 14,
        dexterity: 0,
        strength: 17,
        wisdom: 15,
        cost: 2500
      },
      RaggedTunic: {
        name: "Ragged Tunic",
        class: "mage",
        type: "Cloth",
        armor: 2,
        intellect: 1,
        strength: 0,
        dexterity: 0,
        wisdom: 2,
        cost: 100
      },
      Aldor: {
        name: "Aldor Regalia",
        class: "mage",
        type: "Cloth",
        armor: 3,
        intellect: 5,
        strength: 0,
        dexterity: 0,
        wisdom: 4,
        cost: 400
      },
      Tirisfal: {
        name: "Tirisfal Regalia",
        class: "mage",
        type: "Cloth",
        armor: 4,
        intellect: 7,
        dexterity: 0,
        strength: 0,
        wisdom: 6,
        cost: 900
      },
      KirinTor: {
        name: "Kirin Tor Regalia",
        class: "mage",
        type: "Cloth",
        armor: 6,
        intellect: 11,
        dexterity: 0,
        strength: 0,
        wisdom: 10,
        cost: 1300
      },
      TimeLords: {
        name: "Time Lord's Regalia",
        class: "mage",
        type: "Cloth",
        armor: 8,
        intellect: 15,
        strength: 0,
        dexterity: 0,
        wisdom: 14,
        cost: 2500
      },
      Destroyer: {
        name: "Battlegear of Wrath Destroyer",
        class: "warrior",
        type: "Plate",
        armor: 6,
        strength: 5,
        dexterity: 0,
        intellect: 0,
        wisdom: 0,
        cost: 400
      },
      Wrath: {
        name: "Battlegear of Wrath",
        class: "warrior",
        type: "Plate",
        armor: 12,
        dexterity: 0,
        intellect: 0,
        wisdom: 0,
        strength: 7,
        cost: 900
      },
      Dreadnaught: {
        name: "Valourous Dreadnaught",
        class: "warrior",
        type: "Plate",
        armor: 6,
        strength: 11,
        dexterity: 0,
        intellect: 0,
        wisdom: 0,
        cost: 1300
      },
      Dragonplate: {
        name: "Sanctified Colossal Dragonplate",
        type: "Plate",
        armor: 19,
        strength: 15,
        dexterity: 0,
        intellect: 0,
        wisdom: 0,
        cost: 2500
      },
      NightSlayer: {
        name: "Night Slayer Armor",
        class: "rogue",
        type: "Leather",
        armor: 4,
        dexterity: 5,
        strength: 0,
        intellect: 0,
        wisdom: 0,
        strength: 4,
        cost: 400
      },
      Terrorblade: {
        name: "Terrorblade Battlegear",
        class: "rogue",
        type: "Leather",
        armor: 5,
        dexterity: 7,
        strength: 0,
        intellect: 0,
        wisdom: 0,
        strength: 6,
        cost: 900
      },
      DarkPhoenix: {
        name: "Vestments of the Dark Phoenix",
        class: "rogue",
        type: "Leather",
        armor: 7,
        dexterity: 11,
        intellect: 0,
        wisdom: 0,
        strength: 10,
        cost: 1300
      },
      DragonsSoul: {
        name: "Dragon's Soul Battlegear",
        class: "rogue",
        type: "Leather",
        armor: 10,
        dexterity: 15,
        strength: 14,
        intellect: 0,
        wisdom: 0,
        cost: 2500
      }
    },
    potions: {
      HealthPotion: {
        name: "Health Potion",
        type: "Potion",
        cost: 5
      },
      ResourcePotion: {
        name: "Resource Potion",
        type: "Potion",
        cost: 5
      }
    }
  }

  // Consume Health Potion Function
  var healthPotion = function () {
    if (player.inventory.healthPotion > 0) {
      player.health = 100;
      player.inventory.healthPotion--;
      document.getElementById("playerHealth").innerHTML = player.health;
      document.getElementById("playerHealthPotion").innerHTML = player.inventory.healthPotion;
    } else {
      alert("You have no health potions");
    }
  }

  // Buy Health Potion Function
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

  // Consume Resource Potion Function
  var resourcePotion = function () {
    if (player.inventory.resourcePotion > 0) {
      player.resource = 100;
      player.inventory.resourcePotion--;
      document.getElementById("playerResourceValue").innerHTML = player.resource;
      document.getElementById("playerResourcePotion").innerHTML = player.inventory.resourcePotion;
    } else {
      alert("You have no resource potions");
    }
  }

  // Buy Resource Potion Function
  var buyResourcePotion = function () {
    if (player.gold > store.potions.ResourcePotion.cost) {
      player.gold -= store.potions.ResourcePotion.cost;
      player.inventory.resourcePotion++;
      document.getElementById("playerResourcePotion").innerHTML = player.inventory.resourcePotion;
      document.getElementById("playerGold").innerHTML = player.gold;
    } else {
      alert("Sorry, you don't have enough gold yet.")
    }
  }

  // Buy Weapon Function
  var buyWeapon = function (weaponName) {
    if (player.gold >= store.weapons[weaponName].cost) {
      if (store.weapons[weaponName].cost > 30) {
        alert("This item costs " + store.weapons[weaponName].cost + ". Are you sure you want to buy this?");
       }
      player.weapon = store.weapons[weaponName].name;
      player.strength += store.weapons[weaponName].strength;
      player.dexterity += store.weapons[weaponName].dexterity;
      player.intellect += store.weapons[weaponName].intellect;
      player.gold -= store.weapons[weaponName].cost;
      document.getElementById("playerStrength").innerHTML = player.strength;
      document.getElementById("playerIntellect").innerHTML = player.intellect;
      document.getElementById("playerDexterity").innerHTML = player.dexterity;
      document.getElementById("playerWisdom").innerHTML = player.wisdom;
      document.getElementById("playerGold").innerHTML = player.gold;
    } else {
      alert("Sorry, you don't have enough gold yet.")
    }
  }

  // Buy Armor Function
  var buyArmor = function (armorName) {
    if (player.gold >= store.armor[armorName].cost) {
      player.weapon = store.armor[armorName].name;
      player.strength += store.armor[armorName].strength;
      player.dexterity += store.armor[armorName].dexterity;
      player.intellect += store.armor[armorName].intellect;
      player.gold -= store.armor[armorName].cost;
      document.getElementById("playerStrength").innerHTML = player.strength;
      document.getElementById("playerIntellect").innerHTML = player.intellect;
      document.getElementById("playerDexterity").innerHTML = player.dexterity;
      document.getElementById("playerWisdom").innerHTML = player.wisdom;
      document.getElementById("playerGold").innerHTML = player.gold;
    } else {
      alert("Sorry, you don't have enough gold yet.")
    }
  }

  player.class = prompt("Choose your class! \n Warrior <> Rogue <> Mage <> Paladin");
  var playerClass = player.class;

  // Add player class stats to player stats
  classes.forEach(function(playerClass) {
    if (player.class === playerClass.name) {
      player.intellect += playerClass.intellect;
      player.strength += playerClass.strength;
      player.dexterity += playerClass.dexterity;
      player.charisma += playerClass.charisma;
      player.constitution += playerClass.constitution;
      player.armor += playerClass.armor;
      player.wisdom += playerClass.wisdom;
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

  // Creating second store for armor & weapons based on class
  // if (player.class === "paladin") {
  //   for (var armor in store.armor.paladin) {
  //     var armorLi = document.createElement('li');
  //     var buyButton = document.createElement('button');
  //     armorLi.textContent += armor + ": ";
  //     buyButton.textContent = "Buy";
  //     armorLi.appendChild(buyButton);
  //     storeUl.appendChild(armorLi);
  //   }
  //
  //   for (var weapon in store.weapons.paladin) {
  //     var weaponLi = document.createElement('li');
  //     var buyButton = document.createElement('button');
  //     weaponLi.textContent += weapon + ": ";
  //     buyButton.textContent = "Buy";
  //     weaponLi.appendChild(buyButton);
  //     storeUl.appendChild(weaponLi);
  //   }
  // } else if (player.class === "rogue") {
  //   for (var armor in store.armor.rogue) {
  //     var armorLi = document.createElement('li');
  //     var buyButton = document.createElement('button');
  //     armorLi.textContent += armor + ": ";
  //     buyButton.textContent = "Buy";
  //     armorLi.appendChild(buyButton);
  //     storeUl.appendChild(armorLi);
  //   }
  //
  //   for (var weapon in store.weapons.rogue) {
  //     var weaponLi = document.createElement('li');
  //     var buyButton = document.createElement('button');
  //     weaponLi.textContent += weapon + ": ";
  //     buyButton.textContent = "Buy";
  //     weaponLi.appendChild(buyButton);
  //     storeUl.appendChild(weaponLi);
  //   }
  // } else if (player.class === "mage") {
  //   for (var armor in store.armor.mage) {
  //     var armorLi = document.createElement('li');
  //     var buyButton = document.createElement('button');
  //     armorLi.textContent += armor + ": ";
  //     buyButton.textContent = "Buy";
  //     armorLi.appendChild(buyButton);
  //     storeUl.appendChild(armorLi);
  //   }
  //
  //   for (var weapon in store.weapons.mage) {
  //     var weaponLi = document.createElement('li');
  //     var buyButton = document.createElement('button');
  //     weaponLi.textContent += weapon + ": ";
  //     buyButton.textContent = "Buy";
  //     weaponLi.appendChild(buyButton);
  //     storeUl.appendChild(weaponLi);
  //   }
  // } else if (player.class === "warrior") {
  //   for (var armor in store.armor.warrior) {
  //     var armorLi = document.createElement('li');
  //     var buyButton = document.createElement('button');
  //     armorLi.textContent += armor + ": ";
  //     buyButton.setAttribute("id", "buyArmorButton");
  //     document.getElementById("buyArmorButton").addEventListener("click", buyArmor());
  //     buyButton.textContent = "Buy";
  //     armorLi.appendChild(buyButton);
  //     storeUl.appendChild(armorLi);
  //   }
  //
  //   for (var weapon in store.weapons.warrior) {
  //     var weaponLi = document.createElement('li');
  //     var buyButton = document.createElement('button');
  //     weaponLi.textContent += weapon + ": ";
  //     buyButton.textContent = "Buy";
  //     weaponLi.appendChild(buyButton);
  //     storeUl.appendChild(weaponLi);
  //   }
  // }


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
    document.getElementById("playerResourcePotion").innerHTML = player.inventory.resourcePotion;
    document.getElementById("playerHealthPotion").innerHTML = player.inventory.healthPotion;
    document.getElementById("playerResourceValue").innerHTML = player.resource;
    if (player.class === "warrior") {
      document.getElementById("playerResourceName").innerHTML = warriorResource;
      document.getElementById("playerResourcePotionName").innerHTML = warriorResource;
      document.getElementById("buyResourcePotionName").innerHTML = warriorResource;
    } else if (player.class === "rogue") {
      document.getElementById("playerResourceName").innerHTML = rogueResource;
      document.getElementById("playerResourcePotionName").innerHTML = rogueResource;
      document.getElementById("buyResourcePotionName").innerHTML = rogueResource;
    } else if (player.class === "mage") {
      document.getElementById("playerResourceName").innerHTML = mageResource;
      document.getElementById("playerResourcePotionName").innerHTML = mageResource;
      document.getElementById("buyResourcePotionName").innerHTML = mageResource;
    } else if (player.class === "paladin") {
      document.getElementById("playerResourceName").innerHTML = paladinResource;
      document.getElementById("playerResourcePotionName").innerHTML = paladinResource;
      document.getElementById("buyResourcePotionName").innerHTML = paladinResource;
    }

  // Insert store into DOM
    // Paldins weapons
  document.getElementById("buyKingSlayerName").innerHTML = store.weapons.KingSlayer.name;
  document.getElementById("buyKingSlayerCost").innerHTML = store.weapons.KingSlayer.cost;
  document.getElementById("buyAshbringerName").innerHTML = store.weapons.Ashbringer.name;
  document.getElementById("buyAshbringerCost").innerHTML = store.weapons.Ashbringer.cost;
  document.getElementById("buyTruthguardName").innerHTML = store.weapons.Truthguard.name;
  document.getElementById("buyTruthguardCost").innerHTML = store.weapons.Truthguard.cost;
  document.getElementById("buyFrostmourneName").innerHTML = store.weapons.Frostmourne.name;
  document.getElementById("buyFrostmourneCost").innerHTML = store.weapons.Frostmourne.cost;
    // Paldins armor
    document.getElementById("buyRustedArmorName").innerHTML = store.armor.RustedArmor.name;
    document.getElementById("buyRustedArmorCost").innerHTML = store.armor.RustedArmor.cost
    document.getElementById("buyJudgementName").innerHTML = store.armor.Judgement.name;
    document.getElementById("buyJudgementCost").innerHTML = store.armor.Judgement.cost
    document.getElementById("buyRedemptionName").innerHTML = store.armor.Redemption.name;
    document.getElementById("buyRedemptionCost").innerHTML = store.armor.Redemption.cost
    document.getElementById("buyWhiteTigerName").innerHTML = store.armor.WhiteTiger.name;
    document.getElementById("buyWhiteTigerCost").innerHTML = store.armor.WhiteTiger.cost
    document.getElementById("buyLightswornName").innerHTML = store.armor.Lightsworn.name;
    document.getElementById("buyLightswornCost").innerHTML = store.armor.Lightsworn.cost

    // Warriors Weapons
  document.getElementById("buyClaymoreName").innerHTML = store.weapons.Claymore.name;
  document.getElementById("buyClaymoreCost").innerHTML = store.weapons.Claymore.cost;
  document.getElementById("buyShadowmourneName").innerHTML = store.weapons.Shadowmourne.name;
  document.getElementById("buyShadowmourneCost").innerHTML = store.weapons.Shadowmourne.cost;
  document.getElementById("buySulfurasName").innerHTML = store.weapons.Sulfuras.name;
  document.getElementById("buySulfurasCost").innerHTML = store.weapons.Sulfuras.cost;
    // Warriors armor
  document.getElementById("buyDestroyerName").innerHTML = store.armor.Destroyer.name;
  document.getElementById("buyDestroyerCost").innerHTML = store.armor.Destroyer.cost
  document.getElementById("buyWrathName").innerHTML = store.armor.Wrath.name;
  document.getElementById("buyWrathCost").innerHTML = store.armor.Wrath.cost
  document.getElementById("buyDreadnaughtName").innerHTML = store.armor.Dreadnaught.name;
  document.getElementById("buyDreadnaughtCost").innerHTML = store.armor.Dreadnaught.cost
  document.getElementById("buyDragonplateName").innerHTML = store.armor.Dragonplate.name;
  document.getElementById("buyDragonplateCost").innerHTML = store.armor.Dragonplate.cost

    // Rogues
  document.getElementById("buyDirkName").innerHTML = store.weapons.Dirk.name;
  document.getElementById("buyDirkCost").innerHTML = store.weapons.Dirk.cost;
  document.getElementById("buyWarglaivesName").innerHTML = store.weapons.Warglaives.name;
  document.getElementById("buyWarglaivesCost").innerHTML = store.weapons.Warglaives.cost;
  document.getElementById("buyFangsName").innerHTML = store.weapons.Fangs.name;
  document.getElementById("buyFangsCost").innerHTML = store.weapons.Fangs.cost;
    // Rogues armor
  document.getElementById("buyNightSlayerName").innerHTML = store.armor.NightSlayer.name;
  document.getElementById("buyNightSlayerCost").innerHTML = store.armor.NightSlayer.cost
  document.getElementById("buyTerrorbladeName").innerHTML = store.armor.Terrorblade.name;
  document.getElementById("buyTerrorbladeCost").innerHTML = store.armor.Terrorblade.cost
  document.getElementById("buyDarkPhoenixName").innerHTML = store.armor.DarkPhoenix.name;
  document.getElementById("buyDarkPhoenixCost").innerHTML = store.armor.DarkPhoenix.cost
  document.getElementById("buyDragonsSoulName").innerHTML = store.armor.DragonsSoul.name;
  document.getElementById("buyDragonsSoulCost").innerHTML = store.armor.DragonsSoul.cost

    // Mages
  document.getElementById("buyShortStaffName").innerHTML = store.weapons.ShortStaff.name;
  document.getElementById("buyShortStaffCost").innerHTML = store.weapons.ShortStaff.cost;
  document.getElementById("buyAtieshName").innerHTML = store.weapons.Atiesh.name;
  document.getElementById("buyAtieshCost").innerHTML = store.weapons.Atiesh.cost;
  document.getElementById("buyDragonwrathName").innerHTML = store.weapons.Dragonwrath.name;
  document.getElementById("buyDragonwrathCost").innerHTML = store.weapons.Dragonwrath.cost;
    // Mages armor
  document.getElementById("buyRaggedTunicName").innerHTML = store.armor.RaggedTunic.name;
  document.getElementById("buyRaggedTunicCost").innerHTML = store.armor.RaggedTunic.cost
  document.getElementById("buyAldorName").innerHTML = store.armor.Aldor.name;
  document.getElementById("buyAldorCost").innerHTML = store.armor.Aldor.cost
  document.getElementById("buyTirisfalName").innerHTML = store.armor.Tirisfal.name;
  document.getElementById("buyTirisfalCost").innerHTML = store.armor.Tirisfal.cost
  document.getElementById("buyKirinTorName").innerHTML = store.armor.KirinTor.name;
  document.getElementById("buyKirinTorCost").innerHTML = store.armor.KirinTor.cost
  document.getElementById("buyTimeLordsName").innerHTML = store.armor.TimeLords.name;
  document.getElementById("buyTimeLordsCost").innerHTML = store.armor.TimeLords.cost


    //potions
  document.getElementById("buyHealthPotionName").innerHTML = store.potions.HealthPotion.name;
  document.getElementById("buyHealthPotionCost").innerHTML = store.potions.HealthPotion.cost;
  document.getElementById("buyResourcePotionCost").innerHTML = store.potions.ResourcePotion.cost;

  // Find New Enemy Function
  var findEnemy = function() {
    var randEnemy = Math.ceil((Math.random() * enemies.length) - 1);
    enemy = enemies[randEnemy];
    if (player.level !== 1) {
      hpMultiplier = 1;
      strMultiplier = 1;
      for (var i=1; i<player.level; i++) {
         hpMultiplier += .25;
         strMultiplier += .10;
       }
      enemy.stats.health *= hpMultiplier;
      enemy.stats.strength *= strMultiplier;
    }
    startHP = enemy.stats.health;
    document.getElementById("enemyHealth").innerHTML = enemy.stats.health + " HP";
    document.getElementById("enemyName").innerHTML = enemy.name;
    document.getElementById("enemyStrength").innerHTML = enemy.stats.strength.toFixed(1);;
    document.getElementById("enemyArmor").innerHTML = enemy.stats.armor;
    document.getElementById("enemyLevel").innerHTML = enemy.level;
    document.getElementById("enemyStatus").innerHTML = enemy.status;
    action();
  }

  // Normal Strength Attack Function
  var normalStrength = function () {
      if(player.class === "paladin") {
      hit = Math.ceil(Math.random()*10)+player.strength;

      if ((hit - player.strength) === 10) {
        return hit *= 2;
      } else {
        return hit.toFixed(1);;
      }
    } else if(player.class === "warrior") {
      hit = Math.ceil(Math.random()*10)+player.strength;

      if ((hit - player.strength) === 10) {
        return hit *= 2;
      } else {
        return hit.toFixed(1);;
      }
    } else if (player.class === "rogue") {
      hit = Math.ceil(Math.random()*10)+player.dexterity+player.strength;

      if ((hit - player.dexterity) === 10) {
        return hit *= 2;
      } else {
        return hit.toFixed(1);;
      }
    } else if (player.class === "mage") {
      hit = Math.ceil(Math.random()*10)+player.strength;

      if ((hit - player.strength) === 10) {
        return hit *= 2;
      } else {
        return hit.toFixed(1);;
      }
    }
    player.resource += (player.wisdom*2);
    player.health += (player.constitution*.5);
  }

  // Medium Strength Attack Function
  var mediumStrength = function () {
    if (player.class === "paladin") {
      hit = Math.ceil(Math.random()*20)+player.intellect;
      if (player.resource >= 10) {
        player.resource -= 10;
        document.getElementById("playerResourceValue").innerHTML = player.resource;

        if ((hit - player.intellect) === 20) {
          return hit *= 2;
        } else {
          return hit.toFixed(1);;
        }
      } else {
        alert("Not enough resource to use this attack!");
      }
    }
    else if(player.class === "warrior") {
      hit = Math.ceil(Math.random()*20)+player.strength;
      if (player.resource >= 10) {
        player.resource -= 10;
        document.getElementById("playerResourceValue").innerHTML = player.resource;

        if ((hit - player.strength) === 20) {
          return hit *= 2;
        } else {
          return hit.toFixed(1);;
        }
      } else {
        alert("Not enough resource to use this attack!");
      }
    } else if (player.class === "rogue") {
      hit = Math.ceil(Math.random()*20)+player.dexterity;
      if (player.resource >= 10) {
        player.resource -= 10;
        document.getElementById("playerResourceValue").innerHTML = player.resource;

        if ((hit - player.dexterity) === 20) {
          return hit *= 2;
        } else {
          return hit.toFixed(1);;
        }
      } else {
        alert("Not enough resource to use this attack!");
      }
    } else if (player.class === "mage") {
      hit = Math.ceil(Math.random() * 11 ) + player.intellect;
      if (player.resource >= 10) {
        player.resource -= 10;
        document.getElementById("playerResourceValue").innerHTML = player.resource;

        if ((hit - player.intellect) === 11) {
          return hit *= 2;
        } else {
          return hit.toFixed(1);;
        }
      } else {
        alert("Not enough resource to use this attack!");
      }
    }
    player.resource += (player.wisdom*2);
    player.health += (player.constitution*.5);
  }

  // Max Strength Attack Function
  var maxStrength = function () {
    if (player.class === "paladin") {
      hit = Math.ceil(Math.random()*26)+player.intellect + player.strength;
      if (player.resource >= 20) {
        player.resource -= 20;
        document.getElementById("playerResourceValue").innerHTML = player.resource;

        if ((hit - player.intellect) === 26) {
          return hit *= 2;
        } else {
          return hit.toFixed(1);;
        }
      } else {
        alert("Not enough resource to use this attack!");
      }
    }
    else if(player.class === "warrior") {
      hit = Math.ceil(Math.random()*25)+player.strength;
      if (player.resource >= 20) {
        player.resource -= 20;
        document.getElementById("playerResourceValue").innerHTML = player.resource;

        if ((hit - player.strength) === 25) {
          return hit *= 2;
        } else {
          return hit.toFixed(1);;
        }
      } else {
        alert("Not enough resource to use this attack!");
      }
    } else if (player.class === "rogue") {
      hit = Math.ceil(Math.random()*25)+player.dexterity;
      if (player.resource >= 20) {
        player.resource -= 20;
        document.getElementById("playerResourceValue").innerHTML = player.resource;

        if ((hit - player.dexterity) === 25) {
          return hit *= 2;
        } else {
          return hit.toFixed(1);;
        }
      } else {
        alert("Not enough resource to use this attack!");
      }
    } else if (player.class === "mage") {
      hit = Math.ceil(Math.random()*20)+player.intellect;
      if (player.resource >= 20) {
        player.resource -= 20;
        document.getElementById("playerResourceValue").innerHTML = player.resource;

        if ((hit - player.intellect) === 25) {
          return hit *= 2;
        } else {
          return hit.toFixed(1);;
        }
      } else {
        alert("Not enough mana to use this attack!");
      }
    }
    player.resource += (player.wisdom*2);
    player.health += (player.constitution*.5);
  }

  // Player Gain Level Function
  var gainedLevel = function() {
    if (player.experience > totalExp) {
      player.level++;
      document.getElementById("playerLevel").innerHTML = player.level;
      totalExp = totalExp * 3;
      alert("Level gained! EXP needed to level " + (player.level+1) + " is " + totalExp)
    }
    console.log(player.experience)
  }

  // Attack Enemy Function
  function attack(enemy, hit) {
    if (hit === undefined) {
      return false;
    } else {
      var enemyHit = Math.ceil(Math.random()*10) + enemy.stats.strength;
      //Crits
      if ((enemyHit - enemy.stats.strength) === 10) {
        enemyHit *= 2;
      } else {
        enemyHit.toFixed(1);;
      }
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
        document.getElementById("playerResourcePotion").innerHTML = player.inventory.resourcePotion;
        document.getElementById("playerHealthPotion").innerHTML = player.inventory.healthPotion;

        // Reset enemy to full health
        enemy.stats.health = startHP.toFixed(1);;

        // Take the player out of battle
        action();

      } else
        document.getElementById("logListTitle").innerHTML = "Attack Successful";
        document.getElementById("logListDesc").innerHTML = "You hit for " + hit + "!";
        document.getElementById("enemyHealth").innerHTML = enemy.stats.health + " HP";
        player.health -= (enemyHit - (player.armor/2));
        player.health = player.health.toFixed(1);
        document.getElementById("playerHealth").innerHTML = player.health;
      }

      if (player.health <= 0) {
        alert("Game over :(");
        location.reload();
      } else if (player.health <= 20) {
        alert("You are low on health!");
      }

      return enemy;
    }
