import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { drawCard } from '../actions/actions';

const ClientPlayer = () => {
  const dispatch = useDispatch();
  const { currentHand } = useSelector(state => state.playerReducer);
  const stackClicked = () => {
    dispatch(drawCard());
  }
  return (
    <div id="player">
      <img src="https://aitaikuji.com/content/images/thumbs/0007994_cardcaptor-sakura-official-clow-card-set.jpeg" onClick={() => {
        stackClicked();
      }}/>
      {JSON.stringify(currentHand)};
    </div>
  )
}

export default ClientPlayer;