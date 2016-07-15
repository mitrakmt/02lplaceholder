var player = {
  baseIntellect : 1,
  baseStrength : 1,
  baseDexterity : 1,
  baseWisdom : 1,
  baseConstitution : 1,
  baseCharisma : 1,
  baseArmor : 1,
  baseMana : 100,
  baseHealth : 100,
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
]

player.class = prompt("Choose your class! \n Warrior <> Rogue <> Mage");
  console.log(player.class);
  
