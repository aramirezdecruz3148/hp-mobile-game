import { getPlayersHand, getOpponentsHand } from './spellSelector';
import { playerSpells, opponentSpell } from '../utilities/test-data';

describe('spellSelector tests', () => {
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
