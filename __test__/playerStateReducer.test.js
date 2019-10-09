


playerReducer
  - allPlayers (object of objects representing each player with player names as keys)
  - cardsOnStage (object of objects representing cards that have been played by users against the current enemy)

  - playerReducer
  - addPlayer (adds new player object to allPlayers object)
  - randomizePlayerDecks (randomly shuffle each player's deck)
  - drawNewHand (all players draw new cards based on the number of people playing (i.e. 3, 4, or 5 cards))
  - drawCard (player draws a card)
  - useCard (player uses a card, then draws a new card to replace it)
  - discardCard (player discards a card, then draws a new card to replace it)
  - playerKilled (player ran out of cards so now the player is dead)
  - suggestCard (highlight card click on by another player)