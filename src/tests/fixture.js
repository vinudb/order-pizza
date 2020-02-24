import { workflow } from "../workflow/workflow";
export const presets = workflow;

export const orderPizza = {
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
        },
        {
          count: 0,
          type: 'large',
          unitCost: 300
        }
      ],
      total: 0,
      child: 0,
      adult: 0
}