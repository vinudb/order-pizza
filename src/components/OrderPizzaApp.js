import React from 'react';
import { connect } from 'react-redux';
import { setPresets, startSetPresets } from '../actions/pizzaPresets';
import PizzaTypeContainer from './PizzaTypeContainer';
import ServingSizeContainer from './ServingSizeContainer';
import OrderTotal from './OrderTotal';

class OrderPizzaApp extends React.Component {

    //workGroup name can be either dominos or pizzahut to analyze 2 different scenario
    workGroup = {
        name: "dominos" //OR pizzahut
    }

    componentDidMount() {
        //dispatch action to set pizza presets 
        //the workgroup can be decided based on the login in the real application. 
        this.props.startSetPresets(this.workGroup.name)
    }

    render() {
        return (
            <React.Fragment>
                <p
                    className='title'
                    style={{ color: this.props.pizzaPresets.primaryTextColor }}>
                    {`${this.props.pizzaPresets.brandName}`}
                </p>

                <div
                    className='outerSubtitle'
                    style={{ color: this.props.pizzaPresets.primaryTextColor }}>
                    order <div
                        className='innerSubtitle'>
                        pizza
                    </div>
                </div>

                {
                    //render below components only when pizzaPresets are set
                    (Object.keys(this.props.pizzaPresets).length > 0 && this.props.pizzaPresets.constructor === Object) &&
                    <div className='editorContainer'>
                        <PizzaTypeContainer />
                        <ServingSizeContainer />
                    </div>
                }

                <OrderTotal
                    total={this.props.orderPizza.total}
                    color={this.props.pizzaPresets.primaryTextColor} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    pizzaPresets: state.pizzaPresets,
    orderPizza: state.orderPizza
});

const mapDispatchToProps = (dispatch, props) => ({
    setPresets: (workGroup) => dispatch(setPresets(workGroup)),
    startSetPresets: (workGroup) => dispatch(startSetPresets(workGroup))
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderPizzaApp);