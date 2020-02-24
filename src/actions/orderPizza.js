//dispatch action to set default inital order
export const setPizzaTypesDefault = (actionObj) => ({
    type: 'SET_ORDER_PIZZA_DEFAULT',
    actionObj
})

//dispatch action to update the order object on each button click
export const updateOrderPizzaType = (actionObj) => ({
    type: 'UPDATE_ORDER_PIZZA_TYPE',
    actionObj
});

//handle pizzatype plus click
export const startPizzaTypePlus = (type) => {
    return (dispatch, getState) => {
        const presets = getState().pizzaPresets;
        let orderPizza = getState().orderPizza;
        //get the index of selected type from presets
        const pickedIndex = presets.pizzaType.findIndex((item) => item.type === type);

        //if rules to be applied
        if (presets.minimizeCostRuleApply) {
            //loop through all types and apply the rule at each iteration from picked index till last element
            for (let i = pickedIndex; i < orderPizza.pizzaType.length; i++) {
                //If existing count has reached it's upperlimit in preset, set it to zero 
                if ((orderPizza.pizzaType[i].count === presets.pizzaType[i].upperLimit)
                    && i < orderPizza.pizzaType.length - 1) {
                    orderPizza.pizzaType[i].count = 0;
                }
                //If index has reached the last element/type, increment the count to 1
                //OR
                //If existing count is less than it's upperlimit in preset, increment the count to 1
                else if (i === orderPizza.pizzaType.length - 1 ||
                    orderPizza.pizzaType[i].count < presets.pizzaType[i].upperLimit) {
                    orderPizza.pizzaType[i].count = orderPizza.pizzaType[i].count + 1;
                    break;
                }
            }
        }
        //if no rule required
        else {
            //increment the respective pizza types to 1 and update orderpizza object
            const pizzaType = orderPizza.pizzaType.map((item) =>
                item.type === type ? { ...item, count: item.count + 1 } : item);
            orderPizza = { ...orderPizza, pizzaType };
        }

        //get serving size from presets for child and adult
        const childServe = presets.pizzaType[pickedIndex].childServe;
        const adultServe = presets.pizzaType[pickedIndex].adultServe;

        //update serving size based on size presets and priority preset 
        if (presets.pizzaType[pickedIndex].priority === "child") {
            orderPizza.child = childServe > 0 ? orderPizza.child + childServe : orderPizza.child;
        } else {//if priority is adult
            orderPizza.adult = adultServe > 0 ? orderPizza.adult + adultServe : orderPizza.adult;
        }

        //create the action object before dispatch
        const actionObj = buildActionObject(orderPizza)

        //if total is more than the max limit in preset, then through message
        if (actionObj.total > presets.orderMax) {
            alert(`Sorry! You cannot place order more than ${presets.orderMax}`)
        } else {
            dispatch(updateOrderPizzaType(actionObj))//dispatch action to update the orderPizza store
        }
    }
}

//handle pizzaType minus click
export const startPizzaTypeMinus = (type) => {
    return (dispatch, getState) => {
        let orderPizza = getState().orderPizza;
        const presets = getState().pizzaPresets;
        //get the index of selected type from presets
        const pickedIndex = presets.pizzaType.findIndex((item) => item.type === type);
        //if rules to be applied
        if (presets.minimizeCostRuleApply) {
            for (let i = pickedIndex; i < orderPizza.pizzaType.length; i++) {
                if ((orderPizza.pizzaType[i].count === presets.pizzaType[i].upperLimit)
                    && i < orderPizza.pizzaType.length - 1) {
                    orderPizza.pizzaType[i].count = 0;
                    break;
                }
                else if (i === orderPizza.pizzaType.length - 1 && orderPizza.pizzaType[i].count > 0) {
                    orderPizza.pizzaType[i].count = orderPizza.pizzaType[i].count - 1;
                } else if (orderPizza.pizzaType[i].count < presets.pizzaType[i].upperLimit) {
                    orderPizza.pizzaType[i].count = orderPizza.pizzaType[i].count + 1;
                }
            }
        }
        //if no rules to be applied
        else {
            //decrement respective pizza types by 1 and update orderpizza object
            const pizzaType = orderPizza.pizzaType.map((item) =>
                item.type === type ? { ...item, count: item.count - 1 } : item);
            orderPizza = { ...orderPizza, pizzaType };
        }

        //get serving size from presets for child and adult
        const childServe = presets.pizzaType[pickedIndex].childServe;
        const adultServe = presets.pizzaType[pickedIndex].adultServe;

        //if current child count is already zero, then decrement adult count
        if (orderPizza.child === 0) {
            orderPizza.adult = adultServe > 0 ? orderPizza.adult - adultServe : orderPizza.adult;
        }
        //if current adult count is laready zero, then decrement child count 
        else if (orderPizza.adult === 0) {
            orderPizza.child = childServe > 0 ? orderPizza.child - childServe : orderPizza.child;
        }
        //if both are not zero, then refer to combinedserve preset and decrement respectively
        else {
            orderPizza.adult = orderPizza.adult - presets.pizzaType[pickedIndex].combinedServe.adult;
            orderPizza.child = orderPizza.child - presets.pizzaType[pickedIndex].combinedServe.child;
        }

        //get the action object from the orderPizza
        const actionObj = buildActionObject(orderPizza);

        //dispatch action to update the orderPizza store
        dispatch(updateOrderPizzaType(actionObj));
    }
}

//handle child/adult plus click 
export const servingSizePlus = (category) => {
    return (dispatch, getState) => {
        const presets = getState().pizzaPresets;
        //get serving size to pizza type relation and dispatch 
        if (category === "child") {
            dispatch(startPizzaTypePlus(presets.childToPizzaTypeLink))
        } else {
            dispatch(startPizzaTypePlus(presets.adultToPizzaTypeLink))
        }
    }
}

//handle child/adult minus click
export const servingSizeMinus = (category) => {
    return (dispatch, getState) => {
        const presets = getState().pizzaPresets;
        const orderPizza = getState().orderPizza;
        //get serving size to pizza type relation and dispatch 
        if (category === "child") {
            dispatch(startPizzaTypeMinus(presets.childToPizzaTypeLink))
        } else {
            dispatch(startPizzaTypeMinus(presets.adultToPizzaTypeLink))
        }
    }
}

export const buildActionObject = (orderPizza) => {
    return {
        pizzaType: orderPizza.pizzaType,
        total: orderPizza.pizzaType.reduce((sum, item) => {//sum up from all pizzatypes and it's count
            return sum + (item.count * item.unitCost)
        }, 0),
        child: orderPizza.child,
        adult: orderPizza.adult
    }
}

