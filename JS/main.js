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
      strength : 5,
      dexterity : 3,
      wisdom : 1,
      constitution : 5,
      charisma : 4,
      armor : 6,
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
  },

  {
    name : "mage",
      intellect : 5,
      strength : 2,
      dexterity : 2,
      wisdom : 5,
      constitution : 3,
      charisma : 4,
      armor : 2,
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
  }
];

player.class = prompt("Choose your class! \n Warrior <> Rogue <> Mage");
console.log("<> You chose: " + player.class + "! <>");

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

console.log("      Your class stats are..\n       _____________________________________________________________\n     <| Int <> Str <> Dex <> Wis <> Con <> Cha <> Def <> Mana <> HP |> \n     <|  "+player.intellect+"      "+player.strength+"      "+player.dexterity+"      "+player.wisdom+"      "+player.constitution+"      "+player.charisma+"      "+player.armor+"     "+player.mana+"    "+player.health+" |> \n        -----------------------------------------------------------");
