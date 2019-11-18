/* 
1. Double check that components have the initial necessary props
2. Create functions necessary to retrieve data (I think they should live in container for service folder):
  a. Function to get array of 5 random spells from data
  b. Function to get one random spell
  c. Function to get one random villian
3. Start with hooking up functionality off of game start button
4. Then start with the next round of functionality from the duel
button
  a. Need to figure out how I want to tackle which spell is selected
    whether that will be stored in React state or Redux. I think it 
    should probably be Redux and I should add another property to 
    to the spell objects: isSelected
      - Will need an action to update the isSelected property
      - Will need an action to remove the selected spell
5. Will also need to make a component to hold all components that need to go in the StartGame connect container
*/

/*
//function for getting 5 random spells
//will need to import spell array

function fiveRandomSpells(spellArray) {
  let spells = [];
  for (var i = 0; i < 5; i++) {
    const index = spellArray[Math.floor(Math.random() * 19)];
    spells.push(index);
  }
  return spells
}
*/

/*
//function for getting 1 random spells
//will need to import spell array

function oneRandomSpells(spellArray) {
  return spellArray[Math.floor(Math.random() * 19)];
}
*/

/*
//function for getting 1 random villian
//will need to import villian array

function oneRandomSpells(villianArray) {
  return villianArray[Math.floor(Math.random() * 9)];
}
*/