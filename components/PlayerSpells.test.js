import React from 'react';
import { shallow } from 'enzyme';
import PlayerSpells from './PlayerSpells';

describe('PlayerSpells component', () => {
  it('renders PlayerSpells', () => {
    const wrapper = shallow(<PlayerSpells 
      spellArray={[
        {
          spell: "Anteoculatia",
          type: "Hex",
          effect: "turns opponent's hair into antlers",
          damage: -1,
          outcome: `You were hit with the Anteoculatia hex, which caused
          giant antlers to sprout on your head and took 1 damage point from
          your health`
        },
        {
          spell: "Avis",
          type: "Spell",
          effect: "launches birds at your opponent",
          damage: -2,
          outcome: `You were hit with the Avis spell, which caused birds to swarm
          and attack you and took 2 damage points from your health`
        },
        {
          spell: "Babbling Curse ",
          type: "Curse",
          effect: "makes opponent endlessly babble",
          damage: -1,
          outcome: `You were hit with the Babbling curse, which is caused you to 
          endlessly babble none sense and took 2 damage points from your health`
        }
      ]} 
      />);
    expect(wrapper).toMatchSnapshot();
  });
});