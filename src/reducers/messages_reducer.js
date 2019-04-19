export default function(state, action) {
  if (state === undefined) {
    return null;
  }

  if (action.type === 'FETCH_MESSAGES') {
    return action.payload.messages;
  }

  if (action.type === 'SEND_MESSAGE') {
    return [...state, action.payload];
  }
  return state;
}
