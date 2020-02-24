export const workflow = {
    //dominos has all the data which covers all cases given in the problem statement
    //pizzahut is the second workgrpup object where no rules are applicable. 
    //pizzahut has different color schemes, servingsize is non editable
    dominos: {
        servingSizeEditable: true,
        orderMin: 200,
        orderMax: 1000,
        pizzaType:[
            {
                type: "small",
                cost: 150,
                upperLimit: 1,
                childServe: 1,
                adultServe: 0,
                combinedServe: {
                    child:1,
                    adult: 0
                },
                priority: "child"
            },
            {
                type: "medium",
                cost: 200,
                upperLimit: 1,
                childServe: 2,
                adultServe: 1,
                combinedServe: {
                    child:0,
                    adult: 1
                },
                priority: "adult"
            },
            {
                type: "large",
                cost: 300,
                upperLimit: undefined,
                childServe: 4,
                adultServe: 2,
                combinedServe: {
                    child:2,
                    adult: 1
                },
                priority: "adult"
            }
        ],
        childToPizzaTypeLink: "small",
        adultToPizzaTypeLink: "medium",
        brandName: "Dominos",
        reduceBtnColor: "#02029a",
        increaseBtnColor: "#ff6c85",
        primaryTextColor: "#02029a",
        minAdultCount: 1,
        minChildCount: 0,
        minimizeCostRuleApply: true
    },
    pizzahut: {
        servingSizeEditable: false,
        orderMin: 300,
        orderMax: 1500,
        pizzaType:[
            {
                type: "small",
                cost: 150,
                upperLimit: 1,
                childServe: 1,
                adultServe: 0,
                combinedServe: {
                    child:1,
                    adult: 0
                },
                priority: "child"
            },
            {
                type: "medium",
                cost: 200,
                upperLimit: 1,
                childServe: 2,
                adultServe: 1,
                combinedServe: {
                    child:0,
                    adult: 1
                },
                priority: "adult"
            },
            {
                type: "large",
                cost: 300,
                upperLimit: undefined,
                childServe: 4,
                adultServe: 2,
                combinedServe: {
                    child:2,
                    adult: 1
                },
                priority: "adult"
            }
        ],
        childToPizzaTypeLink: "small",
        adultToPizzaTypeLink: "medium",
        brandName: "Pizza Hut",
        reduceBtnColor: "lightseagreen",
        increaseBtnColor: "black",
        primaryTextColor: "lightseagreen",
        minAdultCount: 1,
        minChildCount: 0,
        minimizeCostRuleApply: false
    }
}