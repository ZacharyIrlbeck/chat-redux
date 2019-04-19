export default function(state, action) {
  if (state === undefined) {
    return null;
  }

  if (action.type === 'FETCH_MESSAGES') {
    return action.payload;
  }

  return state;
}
