const initialState = {};

function config(state = initialState, action) {
  switch (action.type) {
  case 'CONFIG_REPLACE':
    return Object.assign({}, action.value); // note: we replace state entirely here
  default:
    return state;
  }
}

// reducers/firebaseRef.js
const initialState = null;

function firebaseRef(state = initialState, action) {
  switch (action.type) {
  case 'FIREBASE_REF_SET':
    return action.value;
  default:
    return state;
  }
}
