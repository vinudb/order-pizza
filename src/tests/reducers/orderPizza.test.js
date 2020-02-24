import orderPizzaReducer from '../../reducers/orderPizza';
import {presets, orderPizza} from '../fixture';

test('should set default state', () => {
  const state = orderPizzaReducer(orderPizza, { type: '@@INIT' });
  expect(state).toEqual(orderPizza);
});

test('should set default orderPizza by given action object', () => {
    const action = {
      type: 'SET_ORDER_PIZZA_DEFAULT',
      actionObj: orderPizza.pizzaType
    };
    const state = orderPizzaReducer(orderPizza, action);
    expect(state).toEqual(orderPizza);
  });

  test('should update orderPizza by given action object', () => {
    const updatedOrder = {...orderPizza, total: 150}
    const action = {
      type: 'UPDATE_ORDER_PIZZA_TYPE',
      actionObj: updatedOrder
    };
    const state = orderPizzaReducer(orderPizza, action);
    expect(state).toEqual(updatedOrder);
  });

