
const { Player } = require('../algos_and_objects/game_objects');
const { makeShuffledDeck } = require('../algos_and_objects/game_algos');
import * as types from "../actions/actionTypes";

const initialState = {
  allPlayers: {},
  cardsOnStage: [],
};

const playerReducer = (state=initialState, action) => {
  let allPlayers;
  let cardsOnStage;

  switch(action.type) {
    case types.ADD_PLAYER:
      allPlayers = {...(state.allPlayers)};
      allPlayers[action.payload] = new Player(action.payload);
      return {
        ...state,
        allPlayers,
      };

    case types.RANDOMIZE_PLAYER_DECKS:
      allPlayers = {...(state.allPlayers)};
      Object.keys(allPlayers).forEach((player) => {
        allPlayers[player].drawPile = makeShuffledDeck(player);
      });
      return {
        ...state,
        allPlayers,
      };

    case types.DRAW_NEW_HAND:
      allPlayers = {...(state.allPlayers)};
      const numPlayers = Object.keys(allPlayers).length;
      if (numPlayers >= 3) {
        Object.keys(allPlayers).forEach((player) => {
          for (let i = 0; i < 5; i++) {
            allPlayers[player].currentHand[i] = allPlayers[player].drawPile.pop();
          }
        });
      }
      else if (numPlayers === 4) {
        Object.keys(allPlayers).forEach((player) => {
          for (let i = 0; i < 4; i++) {
            allPlayers[player].currentHand[i] = allPlayers[player].drawPile.pop();
          }
        });
      }
      else {
        Object.keys(allPlayers).forEach((player) => {
          for (let i = 0; i < 3; i++) {
            allPlayers[player].currentHand[i] = allPlayers[player].drawPile.pop();
          }
        });
      }
      return {
        ...state,
        allPlayers,
      };

    case types.DRAW_CARD:
      allPlayers = {...(state.allPlayers)};
      allPlayers[action.payload].currentHand.push(allPlayers[player].drawPile.pop());
      return {
        ...state,
        allPlayers,
      };

    case types.USE_CARD:
      allPlayers = {...(state.allPlayers)};
      cardsOnStage = {...(state.cardsOnStage)};
      cardsOnStage.push(allPlayers[action.payload.owner].currentHand)

    case types.DISCARD_CARD:

    case types.PLAYER_KILLED:

    case types.SUGGEST_CARD:

    default:
      return {
        ...state,
      }
  }
};

export default playerReducer;