import React from 'react';
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { setPizzaTypesDefault, startPizzaTypePlus, startPizzaTypeMinus, servingSizePlus, servingSizeMinus } from '../../actions/orderPizza';
import { presets } from '../fixture';
const createMockStore = configureMockStore([thunk]);

const newOrder = () => {
    return {
        pizzaType: [
            {
                count: 0,
                type: 'small',
                unitCost: 150
            },
            {
                count: 0,
                type: 'medium',
                unitCost: 200
            }
        ],
        total: 0,
        child: 0,
        adult: 0
    }
}

    test('should set default orderPizza values to the store', () => {
        const action = setPizzaTypesDefault(newOrder());
        expect(action).toEqual({
            type: 'SET_ORDER_PIZZA_DEFAULT',
            actionObj: newOrder()
        });
    });

test('should update redux store with valid values when small pizza is incremented', async () => {

    const store = createMockStore({ pizzaPresets: presets['dominos'], orderPizza: newOrder() });
    await store.dispatch(startPizzaTypePlus("small"));
    const actions = store.getActions();
    let updatedOrder = newOrder();
    updatedOrder.pizzaType[0].count = updatedOrder.pizzaType[0].count + 1
    updatedOrder.total = updatedOrder.total + updatedOrder.pizzaType[0].unitCost;
    updatedOrder.child = 1;
    expect(actions[0]).toEqual({
        type: 'UPDATE_ORDER_PIZZA_TYPE',
        actionObj: updatedOrder
    });

    expect(actions[0].actionObj.total).toEqual(150)
    expect(actions[0].actionObj.child).toEqual(1)
    expect(actions[0].actionObj.pizzaType[1].count).toEqual(0);//medium pizza should be 1
});

test('should update redux store with valid values when child is incremented', async () => {
    const store = createMockStore({ pizzaPresets: presets['dominos'], orderPizza: newOrder() });
    await store.dispatch(servingSizePlus("child"));
    const actions = store.getActions();
    let updatedOrder = newOrder();
    updatedOrder.pizzaType[0].count = 1;
    updatedOrder.total = 150;
    updatedOrder.child = 1;
    expect(actions[0]).toEqual({
        type: 'UPDATE_ORDER_PIZZA_TYPE',
        actionObj: updatedOrder
    });
});


