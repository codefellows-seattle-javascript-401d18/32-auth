export default store => next => action => {
  console.log('isaiah was here', action);
  return typeof action === 'function'
  ? action(store.dispatch, store.getState)
  : next(action);
};
