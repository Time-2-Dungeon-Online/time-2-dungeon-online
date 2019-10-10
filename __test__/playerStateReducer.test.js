import subject from '../src/client/reducers/playerReducer';

describe('Player State Reducer', () => {
  let state;
  let card;
  let player;

  beforeEach(() => {
    state = {
      allPlayers: {},
      cardsOnStage: {},
    };

    player = {
      drawPile: [],
      currentHand: [],
      discardPile: [],
      alive: true
    };

    card = {
      type: null,
      highlighted: false,
      location: null,
    };
  })

  describe('Default State', () => {
    test.skip('should return a default state when given an undefined input', () => {
      expect(subject(undefined, {type: undefined})).toEqual(state);
    });
  });

  describe('Unrecognized Action Type', () => {
    test.skip('should return the original without any duplication', () => {
      const action = {type: 'skjdwfeiwbfewnfofn'};
      expect(subject(state, action)).toEqual(state);
    });
  });

  describe('ADD_PLAYER', () => {
    const action = {
      type: 'PLAYER_KILLED',
      payload: 'TESTER'
    };

    test.skip('should add player object to allPlayers', () => {
      const { allPlayers } = subject(state, action);
       
    });
  });
});

// playerReducer
//   - allPlayers (object of objects representing each player with player names as keys)
//   - cardsOnStage (object of objects representing cards that have been played by users against the current enemy)

//   - playerReducer
//   - addPlayer (adds new player object to allPlayers object)
//   - randomizePlayerDecks (randomly shuffle each player's deck)
//   - drawNewHand (all players draw new cards based on the number of people playing (i.e. 3, 4, or 5 cards))
//   - drawCard (player draws a card)
//   - useCard (player uses a card, then draws a new card to replace it)
//   - discardCard (player discards a card, then draws a new card to replace it)
//   - playerKilled (player ran out of cards so now the player is dead)
//   - suggestCard (highlight card click on by another player)