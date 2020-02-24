import React from 'react';

export const ServingSizeItem = (props) => {
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
        <div data-test='servingSizeComponent' className='servingSizeItem'>
            <div className='servingSizeLeftContainer'>
                <img
                    alt={props.value}
                    src={require('../assets/' + props.value + '.png')}
                    className='servingSizeImages' />
                <p
                    className='servingSizeText'
                    style={customStyle.textColor}>
                    {props.value}
                </p>
            </div>

            <div className='servingSizeRightContainer'>
                <div className='servingSizeBtnsContainer'>
                    {
                        //render the +/- buttons only when the isEditable is true in the presets of workGroup
                        props.isEditable &&
                        <div
                            disabled={props.count === 0}
                            style={customStyle.reduceBtn}
                            className={`round-button ${props.count === 0 && 'btnDisabled'}`}
                            onClick={(e) => props.count > 0 && props.onServingSizeMinusClick(props.value)}>-
                        </div>
                    }

                    <div className='count'>{props.count}</div>
                    
                    {
                        props.isEditable &&
                        <div
                            style={customStyle.increaseBtn}
                            className='round-button'
                            onClick={(e) => props.onServingSizePlusClick(props.value)}>+
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default ServingSizeItem;