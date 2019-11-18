/* 
1. Double check that components have the initial necessary props
2. Create a component for game start button, will eventually be
a modal that will start/end the game, but for simplicity just make
it a button for now
3. Need to create a duel button
4. Create functions necessary to retrieve data (I think they should live in container for service folder):
  a. Function to get array of 5 random spells from data
  b. Function to get one random spell
  c. Function to get one random villian
5. Start with hooking up functionality off of game start button
6. Then start with the next round of functionality from the duel
button
  a. Need to figure out how I want to tackle which spell is selected
    whether that will be stored in React state or Redux. I think it 
    should probably be Redux and I should add another property to 
    to the spell objects: isSelected
      - Will need an action to update the isSelected property
      - Will need an action to remove the selected spell
7. Will also need to make a component to hold all components that need to g
*/