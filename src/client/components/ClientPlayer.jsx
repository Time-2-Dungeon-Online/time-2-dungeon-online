import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { drawCard, useCard, useCardC2S, useCardS2C } from '../actions/actions';
import { send } from '@giantmachines/redux-websocket';
import PlayerCard from './PlayerCard.jsx';

const ClientPlayer = () => {
  const dispatch = useDispatch();
  const { currentHand } = useSelector(state => state.playerReducer);
  const { userID } = useSelector(state => state.uiReducer);
  const stackClicked = () => {
    dispatch(drawCard());
  }
  const cardClicked = (card, playerName) => {
    dispatch(send(useCardC2S(card, playerName)));
  }
  const allCards = [];
  return (
    <div id="player">
      <img src="https://aitaikuji.com/content/images/thumbs/0007994_cardcaptor-sakura-official-clow-card-set.jpeg" onClick={() => {
        stackClicked();
      }}/>
      {/* {JSON.stringify(currentHand)}; */}
      {Object.keys(currentHand).forEach((card) => {
        allCards.push(<PlayerCard props={{'card': currentHand[card]}} onClick={() => {
          cardClicked(currentHand[card], userID);
        }}/>)
      })}
      {allCards}
    </div>
  )
}

export default ClientPlayer;