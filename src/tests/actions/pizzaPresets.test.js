import React from 'react';
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { setPresets } from '../../actions/pizzaPresets';
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
 
test('should set default preset values to the store', () => {
    const action = setPresets(presets['dominos']);
    expect(action).toEqual({
        type: 'SET_PRESETS',
        presets: presets['dominos'] 
    });
});
