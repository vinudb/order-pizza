const pizzaPresetsDefaultState = {};

export default (state = pizzaPresetsDefaultState, action) => {
  switch (action.type) {
    case 'SET_PRESETS':
      return {
        ...action.presets
      }
    default:
      return state;
  }
};
