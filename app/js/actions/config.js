// actions/config.js

/**
 * Called every time the firebase ref changes
 */
function replaceConfig(config) {
  return {
    type: 'CONFIG_REPLACE',
    value: config
  };
}

/**
 * Start listening to changes when the app boots
 */
function listenToConfigChanges() {
  return (dispatch, getState) => {
    const { firebaseRef } = getState();
    firebaseRef.child('config').on('value', (snapshot) => {
      dispatch(replaceConfig(snapshot.val()));
    });
  };
}

/*
 * Save new config data
 */
function saveConfig(config) {
  return (dispatch, getState) => {
    const { firebaseRef } = getState();
    firebaseRef.child('config').set(config);
    // no need for dispatch, it will trigger Firebase 'value', which will dispatch `replaceConfig`
  };
}

//actions/firebaseRef.js yaani
function setFirebaseRef(ref) {
  return {
    type: 'FIREBASE_REF_SET',
    value: ref
  };
}
