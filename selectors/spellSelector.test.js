import { getPlayersHand, getOpponentsHand } from './spellSelector';

describe('spellSelector tests', () => {
  const playerSpells = [
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
    },
    {
      spell: "Bombarda",
      type: "Spell",
      effect: "causes an explosion",
      damage: -5,
      outcome: `You were hit with the Bombarda spell, that caused an explosion
      so powerful you were knocked you clean off your feet and it took 5 damage 
      points from your health`
    },
    {
      spell: "Carpe Retractum",
      type: "Spell",
      effect: "shoots a rope from wand to snag opponent",
      damage: -3,
      outcome: `You were hit with the Carpe Retractum spell, that trapped you
      under a web-like rope and took 3 damage points from your health`
    }];
  
    const opponentSpell = {
      spell: "Furnunculus",
      type: "Curse",
      effect: "produces boils on opponent",
      damage: -4, 
      outcome: `You were hit with the Furnunculus curse, which caused boils to
      errupt all over your body and took 4 damage points from your health`
    };

  it('gets players hand', () => {
    const state = {
      spells: {
        playersHand: playerSpells,
        opponentsHand: opponentSpell
      }
    }

    const players = getPlayersHand(state);

    expect(players).toEqual(playerSpells);
  });

  it('gets opponents hand', () => {
    const state = {
      spells: {
        playersHand: playerSpells,
        opponentsHand: opponentSpell
      }
    }

    const opponents = getOpponentsHand(state);

    expect(opponents).toEqual(opponentSpell);
  });
});
