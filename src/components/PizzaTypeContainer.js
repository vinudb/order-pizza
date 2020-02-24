import React from 'react';
import { connect } from 'react-redux';
import PizzaTypeItem from './PizzaTypeItem';
import { startPizzaTypePlus, startPizzaTypeMinus } from "../actions/orderPizza";

class PizzaTypeContainer extends React.Component {
    onPizzaPlusClick = (type) => this.props.startPizzaTypePlus(type);

    onPizzaMinusClick = (type) => {
        if (this.props.pizzaPresets.minAdultCount === this.props.orderPizza.adult &&
            this.props.orderPizza.child === 0) {
            return alert('Sorry! Adult count should be at least 1')
        }
        this.props.startPizzaTypeMinus(type)
    };

    render() {
        return (
            <React.Fragment>
                {
                    this.props.pizzaPresets.pizzaType.map((item, index) => (
                        <PizzaTypeItem
                            key={index}
                            type={item.type}
                            count={this.props.orderPizza.pizzaType[index].count}
                            onPizzaPlusClick={this.onPizzaPlusClick}
                            onPizzaMinusClick={this.onPizzaMinusClick}
                            colors={{
                                reduceBtnColor: this.props.pizzaPresets.reduceBtnColor,
                                increaseBtnColor: this.props.pizzaPresets.increaseBtnColor,
                                primaryTextColor: this.props.pizzaPresets.primaryTextColor
                            }} />
                    ))
                }
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => ({
    pizzaPresets: state.pizzaPresets,
    orderPizza: state.orderPizza
});

const mapDispatchToProps = (dispatch, props) => ({
    startPizzaTypePlus: (type) => dispatch(startPizzaTypePlus(type)),
    startPizzaTypeMinus: (type) => dispatch(startPizzaTypeMinus(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(PizzaTypeContainer);