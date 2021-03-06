function dealerReducer(state = {
  hand: [], 
  handTotal: 0,
  status: 'waiting'
}, action) {

  switch(action.type) { 
    case 'DEAL_CARDS':
      return {
        ...state,
        hand: action.dealerCards,
        handTotal: action.dealerHandTotal,
      }

    case 'RESET_HANDS':
      return {
        ...state,
        hand: [],
        handTotal: 0,
        status: 'waiting',
      }
    
    case 'STAND':
      return {
        ...state,
        status: 'hitting'
      }
    
    // called when players splits hand then busts on second hand after standing on first hand
    case 'SHOWDOWN':
      return {
        ...state,
        status: 'hitting'
      }

    case 'DEALER_DRAW_CARD':
      return {
        ...state,
        hand: [...state.hand, action.drawnCard],
        handTotal: action.newHandTotal,
      }
    
    case 'DEALER_DRAW_CARD_BUST':
      return {
        ...state,
        hand: [...state.hand, action.drawnCard],
        handTotal: action.newHandTotal,
        status: 'bust'
      }
    
    case 'CALCULATE_WINNER':
      return {
        ...state,
        status: 'waiting'
      }

    default: 
      return state
  }
}


export default(dealerReducer)