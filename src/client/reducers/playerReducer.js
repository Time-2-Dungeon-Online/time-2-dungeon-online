
import * as types from "../actions/actionTypes";
import * as socketTypes from '../../../server/utils/actions';
import { makeShuffledDeck } from '../algos_and_objects/game_algos';

const initalState = {
  deck: [],
  currentHand: [],
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
          default:
            break;
        }
        return newState;
    case types.DRAW_CARD:
      const newCard = newState.deck.pop();
      newCard.location = 'HAND';
      newState.currentHand.push(newCard);
      newState.HP -= 1;
      return newState;
    default:
      return state;
  }
};

export default playerReducer;