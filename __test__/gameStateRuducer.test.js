const subject = require('../src/client/');

describe('Player Reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      playersInGame: 0,
      deadPlayers: 0,
      gameStarted: false,
      gameFinished: false,
      didWin: null,
      timerActive: false
    }
  });

  describe('Default State', () => {
    test('should return a default state when given an undefined input', () => {
      expect(subject(undefined, {type: undefined})).toEqual(state);
    });
  });

  describe('Unrecognized Action Type', () => {
    test('should return the original without any duplication', () => {
      const action = {type: 'skjdwfeiwbfewnfofn'};
      expect(subject(state, action)).toEqual(state);
    });
  });
  
  describe('ADD_PLAYER', () => {
    const action = {
      type: 'ADD_PLAYER',
      payload: {
        username: 'TESTER'
      }
    };

    describe('should increment the player count by one', () => {
      const { playersInGame } = subject(state, action);
      expect(playersInGame).toEqual(1);
    });

    describe('should not allow the total number of players in the game to exceed 5', () => {
      let totalPlayers;
      for (let i = 1; i <= 6; i+= 1) {
        const { playersInGame } = subject(state, action);
        totalPlayers = playersInGame;
      }
      expect(totalPlayers).toEqual(5);
    });

    test('returns a state object not strictly equal to the original', () => {
      expect(subject(state, action)).not.toBe({
        playersInGame: 0,
        deadPlayers: 0,
        gameStarted: false,
        gameFinished: false,
        didWin: null,
        timerActive: false
      });
    });
  });

  describe('PLAYER_KILLED', () => {
    const action = {
      type: 'PLAYER_KILLED',
      payload: {
        username: 'TESTER'
      }
    };

    describe('should increment the dead player count by one', () => {
      const { deadPlayers } = subject(state, action);
      expect(deadPlayers).toEqual(1);
    });

    describe('should not allow the total number of dead players in the game to exceed the total number of players in the game', () => {
      let dead;
      state.playersInGame += 1;
      for (let i = 1; i <= 2; i+= 1) {
        const { deadPlayers } = subject(state, action);
        dead = deadPlayers;
      }
      expect(dead).toEqual(1);
    });

    test('returns a state object not strictly equal to the original', () => {
      expect(subject(state, action)).not.toBe({
        playersInGame: 0,
        deadPlayers: 0,
        gameStarted: false,
        gameFinished: false,
        didWin: null,
        timerActive: false
      });
    });
  });

  describe('GAME_LOST', () => {
    const action = {
      type: 'GAME_LOST',
      payload: false
    };

    test('should set didWin to false')
  });
  
});

- gameStateReducer
  - gameLost (sets didWin to false; happens when time runs out or if numDeadPlayers === numPlayersInGame)
  - gameWon (sets didWin to true; happens when boss is killed)
  - startGame (starts the game, initializing a variety of states as well as starts the timer)
  - finishGame (ends the game when didWin is set to either true or false)
