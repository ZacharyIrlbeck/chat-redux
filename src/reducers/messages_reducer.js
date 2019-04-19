export default function(state, action) {
  if (state === undefined) {
    return null;
  }

  if (action.type === 'FETCH_MESSAGES') {
    return action.payload;
  }

  if (action.type === 'SEND_MESSAGE') {
    const messagesArray = [...state.messages, action.payload];
    return Object.assign({}, state, { messages: messagesArray });
  }
  return state;
}
