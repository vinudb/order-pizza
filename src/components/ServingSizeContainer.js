import React from 'react';
import ServingSizeItem from './ServingSizeItem';
import { connect } from 'react-redux';
import { servingSizePlus, servingSizeMinus } from "../actions/orderPizza";

class ServingSizeContainer extends React.Component {
    onServingSizePlusClick = (category) => this.props.servingSizePlus(category);

    onServingSizeMinusClick = (category) => {
        if (category === 'adult' && this.props.pizzaPresets.minAdultCount === this.props.orderPizza.adult) {
            return alert('Sorry! Adult count should be at least 1')
        }
        this.props.servingSizeMinus(category)
    };

    //servingsize array to iterate to build each item in .map
    servingSize = [
        {
            value: "adult"
        },
        {
            value: "child"
        }
    ]

    render() {
        return (
            <div className='servingSizeContainer'>
                {
                    this.servingSize.map((item, index) =>
                        <ServingSizeItem
                            key={index}
                            isEditable={this.props.pizzaPresets.servingSizeEditable}
                            value={item.value}
                            count={item.value === 'child' ? this.props.orderPizza.child : this.props.orderPizza.adult}
                            onServingSizePlusClick={this.onServingSizePlusClick}
                            onServingSizeMinusClick={this.onServingSizeMinusClick}
                            colors={{
                                reduceBtnColor: this.props.pizzaPresets.reduceBtnColor,
                                increaseBtnColor: this.props.pizzaPresets.increaseBtnColor,
                                primaryTextColor: this.props.pizzaPresets.primaryTextColor
                            }} />
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    pizzaPresets: state.pizzaPresets,
    orderPizza: state.orderPizza
});

const mapDispatchToProps = (dispatch, props) => ({
    servingSizePlus: (category) => dispatch(servingSizePlus(category)),
    servingSizeMinus: (category) => dispatch(servingSizeMinus(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(ServingSizeContainer);