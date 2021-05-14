const mutation = {
  test(state, payload) {
    state.test = JSON.parse(JSON.stringify(payload));
  }
};

export default mutation;
