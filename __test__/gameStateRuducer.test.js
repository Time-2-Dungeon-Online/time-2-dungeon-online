import subject from '../src/client/reducers/gameStateReducer';

describe('Game State Reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      playersInGame: 0,
      deadPlayers: 0,
      gameStarted: false,
      gameFinished: false,
      didWin: null,
      timerActive: null,
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

  describe('START_GAME', () => {
    const action = {
      type: 'START_GAME'
    }

    test('should set gameStarted to TRUE if the number of players in the game is greater than or equal to TWO', () => {
      state.playersInGame = 2;
      const { gameStarted } = subject(state, action);
      expect(gameStarted).toEqual(true);
    });

    test('should set timerActive to TRUE when game starts', () => {
      state.playersInGame = 2;
      const { timerActive } = subject(state, action);
      expect(timerActive).toEqual(true);
    });

    test('should return the original without any duplication if the number of players is below TWO', () => {
      expect(subject(state, action)).toEqual(state);
    });

    test('returns a state object not strictly equal to the original', () => {
      expect(subject(state, action)).not.toBe({
        playersInGame: 0,
        deadPlayers: 0,
        gameStarted: false,
        gameFinished: false,
        didWin: null,
        timerActive: null,
      });
    });
  });
  
  describe('ADD_PLAYER', () => {
    const action = {
      type: 'ADD_PLAYER',
      payload: 'TESTER'
    };

    test('should increment the player count by one', () => {
      const { playersInGame } = subject(state, action);
      expect(playersInGame).toEqual(1);
    });

    test('should not allow the total number of players in the game to exceed 5', () => {
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
        timerActive: null,
      });
    });
  });

  describe('PLAYER_KILLED', () => {
    const action = {
      type: 'PLAYER_KILLED',
      payload: 'TESTER'
    };

    test('should increment the dead player count by one', () => {
      const { deadPlayers } = subject(state, action);
      expect(deadPlayers).toEqual(1);
    });

    test('should not allow the total number of dead players in the game to exceed the total number of players in the game', () => {
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
        timerActive: null,
      });
    });
  });

  describe('GAME_LOST', () => {
    const action = {
      type: 'GAME_LOST',
    };

    test('should set didWin to false if the number of players in game equals the number of dead players', () => {
      state.playersInGame += 2;
      state.deadPlayers +=2;
      const { didWin } = subject(state, action);
      expect(didWin).toEqual(false);
    });

    test('should set didWin to false if the timer is set to false', () => {
      state.timerActive = false;
      const { didWin } = subject(state, action);
      expect(didWin).toEqual(false);
    });

    test('returns a state object not strictly equal to the original', () => {
      expect(subject(state, action)).not.toBe({
        playersInGame: 0,
        deadPlayers: 0,
        gameStarted: false,
        gameFinished: false,
        didWin: null,
        timerActive: null,
      });
    });
  });
  
  describe('GAME_WON', () => {
    const action = {
      action: 'GAME_WON',
    };

    test('should set didWin to true when the dungeon boss is defeated', () => {
      const { didWin } = subject(state, action);
      expect(didWin).toEqual(true);
    });

    test('returns a state object not strictly equal to the original', () => {
      expect(subject(state, action)).not.toBe({
        playersInGame: 0,
        deadPlayers: 0,
        gameStarted: false,
        gameFinished: false,
        didWin: null,
        timerActive: null,
      });
    });
  });

  describe('FINISH_GAME', () => {
    const action = {
      type: 'FINISH_GAME'
    }

    test('should set gameFinished to TRUE when didWin is FALSE', () => {
      state.didWin = false;
      const { gameFinished } = subject(state, action);
      expect(gameFinished).toEqual(true);
    });

    test('should set gameFinished to TRUE when didWin is TRUE', () => {
      state.didWin = true;
      const { gameFinished } = subject(state, action);
      expect(gameFinished).toEqual(true);
    });

    test('returns a state object not strictly equal to the original', () => {
      expect(subject(state, action)).not.toBe({
        playersInGame: 0,
        deadPlayers: 0,
        gameStarted: false,
        gameFinished: false,
        didWin: null,
        timerActive: null,
      });
    });
  });
});
