import React from 'react';
import { useSelector } from 'react-redux';

const DungeonCard = () => {
  const { defeatConditions } = useSelector(state => state.gameStateReducer.currentEnemy);
  const conditionPs = Object.keys(defeatConditions).map(condition => (<p>
    {condition}: {defeatConditions[condition]}
  </p>))
  return (
    <div id="dungeon-card">
      <img src="https://i.pinimg.com/originals/eb/c0/e5/ebc0e50437f7b52e38f645d1f0a91c63.gif" />
      {conditionPs}
    </div>
  )
}

export default DungeonCard;