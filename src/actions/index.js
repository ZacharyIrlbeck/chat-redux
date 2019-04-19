/* eslint-disable import/prefer-default-export */
// TODO: add and export your own actions
export function fetchMessages(channel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json());

  return {
    type: 'FETCH_MESSAGES',
    payload: promise
  };
}

export function sendMessage(channel, author, message) {
  const body = { author, content: message };
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: 'SEND_MESSAGE',
    payload: promise
  };
}

export function selectChannel(channel) {
  return {
    type: 'SET_CHANNEL',
    payload: channel
  };
}
