export default (state = [{squares: Array(9).fill(null),}], action) => {
  const { history, id } = action;
  switch (action.type) {
  case 'ADD_HISTORY':
    return Object.assign({}, state, {
      [id] : {
        history: history,
        id: id
      }
    });
    default:
      return state;
  }
};