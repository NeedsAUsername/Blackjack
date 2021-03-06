export function getDeck() {
  return (dispatch) => {
    dispatch({type: 'LOADING_DECK'})
    const url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6`;
    return fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        dispatch({
          type: 'GET_DECK',
          payload: data.deck_id
        })
      } else {
        throw new Error('Could not get deck')
      }
    })
    .catch(error => console.log(error))
  }
}