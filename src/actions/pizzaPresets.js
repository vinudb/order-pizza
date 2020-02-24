import { workflow } from "../workflow/workflow";
import {setPizzaTypesDefault, startPizzaTypePlus} from './orderPizza';

export const setPresets = (presets) => ({
    type: 'SET_PRESETS',
    presets
});

export const startSetPresets = (workGroupName) =>{
    return (dispatch, getState) => {
        const presets = workflow[workGroupName];
        //dispatch action to set the workgroup presets
        //this can be stored in DB in the real appication and can be fetched using fetch()
        //For demo purpose, all the workgroup presets are stored in workflow.js as an object 
        dispatch(setPresets(presets));

        //create a default object for the orderPizza store
        let pizzaTypeDefaults = presets.pizzaType.map((item)=>
            ({
                count: 0,
                type: item.type,
                unitCost: item.cost
            }));
        
        //dispatch action to set the orderPizza store    
        dispatch(setPizzaTypesDefault(pizzaTypeDefaults));

        //dispatch action to update the orderPizza store until the total is >= minimum default order set in the preset
        while(getState().orderPizza.total < presets.orderMin){
            dispatch(startPizzaTypePlus(presets.pizzaType[1].type))    
        }
    }
}