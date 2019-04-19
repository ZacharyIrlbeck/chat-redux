export default function(state, action) {
  if (state === undefined) {
    return null;
  }

  if (action.type === 'SET_CHANNEL') {
    console.log('in the reducer');
    return action.payload;
  }

  return state;
}
