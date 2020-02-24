import React from 'react';

export const PizzaTypeItem = (props) => {
    //custom style based on the workgroup selected. Custon styles are fetched from presets 
    const customStyle = {
        textColor: {
            color: props.colors.primaryTextColor
        },
        reduceBtn: {
            backgroundColor: props.count > 0 && props.colors.reduceBtnColor
        },
        increaseBtn: {
            backgroundColor: props.colors.increaseBtnColor
        }
    }

    return (
        <div data-test='pizzaTypeItemComponent' className='pizzaTypeItem'>
            <div className='pizzaTypeRightContainer'>
                <div className='pizzaTypeDetailsContainer'>
                    <img
                        alt={props.type}
                        src={require('../assets/' + props.type + '.png')}
                        className='pizzaImages' />

                    <div
                        className='pizzaTypeText'
                        style={customStyle.textColor}>
                        {props.type}
                    </div>
                </div>

                <div className='pizzaTypeBtnsContainer'>
                    <div
                        disabled={props.count === 0}
                        style={customStyle.reduceBtn}
                        className={`round-button ${props.count === 0 && 'btnDisabled'}`}
                        onClick={(e) => props.count > 0 && props.onPizzaMinusClick(props.type)}>-
                    </div>

                    <div className='count'>{props.count}</div>

                    <div
                        disabled={props.count === 0}
                        style={customStyle.increaseBtn}
                        className='round-button '
                        onClick={(e) => props.onPizzaPlusClick(props.type)}>+
                    </div>
                </div>
            </div>
        </div>


    );
};

export default PizzaTypeItem;