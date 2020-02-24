import pizzaPresetsReducer from '../../reducers/pizzaPresets';
import {presets} from '../fixture';

test('should set default state', () => {
  const state = pizzaPresetsReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should set presets by given action object', () => {
    const action = {
      type: 'SET_PRESETS',
      presets: presets['dominos']
    };
    const state = pizzaPresetsReducer(presets['dominos'], action);
    expect(state).toEqual(presets['dominos']);
  });