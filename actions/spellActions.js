export const UPDATE_PLAYER_SPELLS = 'UPDATE_PLAYER_SPELLS';
export const updatePlayerSpells = spells => ({
  type: UPDATE_PLAYER_SPELLS,
  payload: spells
});

export const UPDATE_OPPONENT_SPELL = 'UPDATE_OPPONENT_SPELL';
export const updateOpponentSpell = spell => ({
  type: UPDATE_OPPONENT_SPELL,
  payload: spell
});