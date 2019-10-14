
// const { Player } = require('../algos_and_objects/game_objects');
// const { makeShuffledDeck } = require('../algos_and_objects/game_algos');
import * as types from "../actions/actionTypes";
import * as socketTypes from '../../../server/utils/actions';

const initialState = {
  allPlayers: {},
  gameisFull: false,
  gameStarted: false,
  dungeonCardCount: 20,
  currentEnemy: null,
};

const gameStateReducer = (state=initialState, action) => {
  let allPlayers;
  let cardsOnStage;

  const newState = JSON.parse(JSON.stringify(state));
  switch(action.type) {
    case 'REDUX_WEBSOCKET::MESSAGE':
        const socketAction = JSON.parse(action.payload.message);
        switch (socketAction.type) {
          case socketTypes.SERVER_TO_CLIENT_JOIN_GAME:
            newState.allPlayers = socketAction.payload;
            return newState;
          case socketTypes.SERVER_TO_CLIENT_START_GAME:
            // console.log('started game:', socketAction.payload);
            const { currentEnemy, dungeonCardCount } = socketAction.payload;
            newState.currentEnemy = currentEnemy;
            newState.dungeonCardCount = dungeonCardCount;
            newState.gameStarted = true;
            return newState;
          case socketTypes.SERVER_TO_CLIENT_CANT_JOIN:
            newState.gameisFull = true;
            return newState;
          default:
            break;
        }
        return newState;
    // case types.RANDOMIZE_PLAYER_DECKS:
    //   allPlayers = {...(state.allPlayers)};
    //   Object.keys(allPlayers).forEach((player) => {
    //     allPlayers[player].drawPile = makeShuffledDeck(player);
    //   });

    //   return {
    //     ...state,
    //     allPlayers,
    //   };

    // case types.DRAW_NEW_HAND:
    //   allPlayers = {...(state.allPlayers)};
    //   const numPlayers = Object.keys(allPlayers).length;
    //   if (numPlayers >= 3) {
    //     Object.keys(allPlayers).forEach((player) => {
    //       for (let i = 0; i < 5; i++) {
    //         allPlayers[player].currentHand[i] = allPlayers[player].drawPile.pop();
    //         allPlayers[player].currentHand[i].location = 'HAND';
    //       }
    //     });
    //   }
    //   else if (numPlayers === 4) {
    //     Object.keys(allPlayers).forEach((player) => {
    //       for (let i = 0; i < 4; i++) {
    //         allPlayers[player].currentHand[i] = allPlayers[player].drawPile.pop();
    //         allPlayers[player].currentHand[i].location = 'HAND';
    //       }
    //     });
    //   }
    //   else {
    //     Object.keys(allPlayers).forEach((player) => {
    //       for (let i = 0; i < 3; i++) {
    //         allPlayers[player].currentHand[i] = allPlayers[player].drawPile.pop();
    //         allPlayers[player].currentHand[i].location = 'HAND';
    //       }
    //     });
    //   }

    //   return {
    //     ...state,
    //     allPlayers,
    //   };

    // case types.DRAW_CARD:
    //   allPlayers = {...(state.allPlayers)};
    //   const cardFromDeck = ;
    //   cardFromDeck.location = 'HAND';
    //   return {
    //     ...state,
    //     allPlayers,
    //   };

    // case types.USE_CARD:
    //   allPlayers = {...(state.allPlayers)};
    //   cardsOnStage = [...(state.cardsOnStage)];

    //   cardsOnStage.push(action.payload);
    //   const cardFromHand = allPlayers[action.payload.owner].currentHand[action.payload.id].pop();
    //   cardFromHand.location = 'DISCARD';
    //   allPlayers[action.payload.owner].discardPile.push(cardFromHand);
      
    //   return {
    //     allPlayers,
    //     cardsOnStage,
    //   };

    // case types.DISCARD_CARD:
    //   allPlayers = {...(state.allPlayers)};
    //   const cardFromHand = allPlayers[action.payload.owner].currentHand[action.payload.id].pop();
    //   cardFromHand.location = "DISCARD";
    //   allPlayers[action.payload.owner].discardPile.push(cardFromHand);

    //   return {
    //     ...state,
    //     allPlayers,
    //   }

    // case types.PLAYER_KILLED:
    //   allPlayers = {...(state.allPlayers)};
    //   allPlayers[action.payload].alive = false;

    //   return {
    //     ...state,
    //     allPlayers,
    //   }

    // case types.SUGGEST_CARD:
    //   allPlayers = {...(state.allPlayers)};
    //   allPlayers[action.payload.owner].currentHand[action.payload.id].highlighted = true;

    //   return {
    //     ...state,
    //     allPlayers,
    //   }

    default:
      return state;
  }
};

export default gameStateReducer;