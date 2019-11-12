import { 
  updatePlayerSpells, 
  updateOpponentSpell,
  UPDATE_OPPONENT_SPELL, 
  UPDATE_PLAYER_SPELLS 
} from './spellActions';
import { playerSpells, opponentSpell } from '../utilities/test-data';


describe('spellActions tests', () => {
  it('can return player spells in payload', () => {
    const action = updatePlayerSpells(playerSpells);

    expect(action).toEqual({
      type: UPDATE_PLAYER_SPELLS,
      payload: playerSpells
    });
  });

  it('can return opponent spell in payload', () => {
    const action = updateOpponentSpell(opponentSpell);

    expect(action).toEqual({
      type: UPDATE_OPPONENT_SPELL,
      payload: opponentSpell
    })
  });
});