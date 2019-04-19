/* eslint-disable import/prefer-default-export */
// TODO: add and export your own actions
export function fetchMessages() {
  const promise = fetch('https://wagon-chat.herokuapp.com/general/messages')
    .then(response => response.json());
    console.log(promise);

  return {
    type: 'FETCH_MESSAGES',
    payload: promise
  };
}
