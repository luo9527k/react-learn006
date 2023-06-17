const init = {
  yi: 10,
  er: 20,
};

export default personal = (state = init, action) => {
  state = { ...state };
  if (action.type === '') {
    state.yi++;
  }
  state.er++;
  return state;
};
