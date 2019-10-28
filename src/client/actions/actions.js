import * as types from "./actionTypes";
import * as socketTypes from '../../../server/utils/actions';


// UI REDUCER ACTIONS
export const signIn = () => ({
  type: types.SIGN_IN,
});
export const joinRoom = () => ({
  type: types.JOIN_ROOM,
});

// PLAYER REDUCER ACTIONS
export const setRoomToUnavailable = () => ({
  type: types.ROOM_UNAVAILABLE,
})
export const addPlayer = (playerName) => ({
  type: types.ADD_PLAYER,
  payload: playerName,
});
export const randomizePlayerDecks = () => ({
  type: types.RANDOMIZE_PLAYER_DECKS,
});
export const drawNewHand = () => ({
  type: types.DRAW_NEW_HAND,
});
export const drawCard = () => ({
  type: types.DRAW_CARD,
});
export const useCardS2C = (card, playerName) => ({
  type: socketTypes.SERVER_TO_CLIENT_USE_CARD,
  payload: { card, playerName }
});
export const useCardC2S = (card, playerName) => ({
  type: socketTypes.CLIENT_TO_SERVER_USE_CARD,
  payload: { card, playerName },
})
export const discardCard = (card) => ({
  type: types.DISCARD_CARD,
  payload: card
});
export const playerKilled = (playerName) => ({
  type: types.PLAYER_KILLED,
  payload: playerName,
});
export const suggestCard = (card) => ({
  type: types.SUGGEST_CARD,
  payload: card,
});

// DUNGEON REDUCER ACTIONS
export const randomizeDungeonDeck = () => ({
  type: types.RANDOMIZE_DUNGEON_DECK,
});
export const setNewEnemy = () => ({
  type: types.SET_NEW_ENEMY,
});
export const compareCardAgainstEnemy = (card) => ({
  type: types.COMPARE_CARD_AGAINST_ENEMY,
  payload: card,
});
export const bossDead = () => ({
  type: types.BOSS_DEAD,
});

// GAME STATE REDUCER ACTIONS
export const winOrLoss = (winLoseBool) => ({
  type: types.WIN_OR_LOSS,
  payload: winLoseBool,
});
export const startGame = () => ({
  type: socketTypes.CLIENT_TO_SERVER_START_GAME,
});
export const finishGame = () => ({
  type: types.FINISH_GAME,
})