
import * as types from "../actions/actionTypes";
import * as socketTypes from '../../../server/utils/actions';
import { makeShuffledDeck } from '../algos_and_objects/game_algos';
import { attackEnemy } from '../../../server/utils/algos.js';

const initalState = {
  deck: [],
  currentHand: {},
  discardPile: [],
  HP: 40,
}

const playerReducer = (state=initalState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch(action.type) {
    case 'REDUX_WEBSOCKET::MESSAGE':
        const socketAction = JSON.parse(action.payload.message);
        switch (socketAction.type) {
          case socketTypes.SERVER_TO_CLIENT_START_GAME:
            newState.deck = makeShuffledDeck('random', 'cert');
            return newState;
          case socketTypes.SERVER_TO_CLIENT_USE_CARD:
            socketAction.card.location = "DISCARD_PILE";
            newState.discardPile.push(socketAction.card);
            console.log(newState.currentHand);
            delete newState.currentHand[socketAction.card.key];
            console.log(newState.currentHand);
            
            const newCard = newState.deck.pop();
            newCard.location = "HAND";
            newState.currentHand[newCard.key] = newCard;
            newState.HP -= 1;
            return newState;
          default:
            break;
        }
        return newState;
    case types.DRAW_CARD:
      if (Object.keys(newState.currentHand).length === 3) {
        console.log("TOO MANY CARDS!");
        return newState;
      }
      const newCard = newState.deck.pop();
      newCard.location = 'HAND';
      newState.currentHand[newCard.key] = newCard;
      console.log(newState.currentHand);
      newState.HP -= 1;
      return newState;
    // case types.USE_CARD:
    //   const enemyNow = attackEnemy(action.payload.card, action.payload.enemy);
    //   action.payload.card.location = 'DISCARD_PILE';
    //   newState.discardPile.push(action.payload.card);
    //   delete newState.currentHand[action.payload.card.key];
    //   return newState;
    default:
      return state;
  }
};

export default playerReducer;