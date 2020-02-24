const orderPizzaDefaultState = {
    pizzaType: [],
    total: 0,
    child: 0,
    adult: 0
};

export default (state = orderPizzaDefaultState, action) => {
    switch (action.type) {
        case 'SET_ORDER_PIZZA_DEFAULT':
            return {
                ...state,
                pizzaType: action.actionObj
            }
        case 'UPDATE_ORDER_PIZZA_TYPE':
            return {
                ...state,
                ...action.actionObj
            }
        default:
            return state;
    }
};
