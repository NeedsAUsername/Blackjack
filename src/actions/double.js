import { cardMap } from '../helpers/cardMap';

export function double(deckId, hand) {
  return (dispatch) => {
    dispatch({type: 'DRAWING_CARD'})
    const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
    return fetch(url)
    .then(response => response.json())
    .then(data => {
      const drawnCard = data.cards[0];
      let numberOfAcesValue11 = drawnCard.value === 'ACE' ? 1 : 0;
      let newHandTotal = cardMap[drawnCard.value];
      hand.forEach(card => {
        if (card.value === 'ACE') {
          numberOfAcesValue11 += 1;
        }
        newHandTotal += cardMap[card.value]
      })
      while (numberOfAcesValue11 > 0 && newHandTotal > 21) {
        newHandTotal -= 10;
        numberOfAcesValue11 -= 1;
      }
      

      if (newHandTotal > 21) {
        dispatch({
          type: 'DOUBLE_DRAW_CARD_BUST',
          drawnCard,
          newHandTotal
        })
      } else {
        dispatch({
          type: 'DOUBLE_DRAW_CARD',
          drawnCard,
          newHandTotal
        })
      }
    })
    .catch(error => console.log(error))
  }
}