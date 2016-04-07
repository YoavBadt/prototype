
export const screenFakeChange = (payload) => {
  payload = Number(payload)
  return {
    type: 'SCREEN_FAKE_CHANGE',
    payload
  };
};
