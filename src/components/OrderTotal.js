import React from 'react';

const OrderTotal = (props) => (
    <div className='totalContainer'>
        <div
            style={{ color: props.color }}
            className='outerSubtitle'>
            order <div
                className='innerSubtitle'>
                total
            </div>
        </div>
        
        <div className='outerSubtitle total'>{props.total}</div>
    </div>
);

export default OrderTotal;