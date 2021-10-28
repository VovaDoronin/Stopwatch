import React from 'react';
import './Button.css'

const Button = (props) => {
    return (
        <div>
            <button type='button' className='button button_bg-col-green' onClick={props.start}>Start</button>
            <button type='button' className='button button_bg-col-red' onClick={props.stop}>Stop</button>
            <button type='button' className='button button_bg-col-grey' onDoubleClick={props.wait}>Wait</button>
            <button type='button' className='button button_bg-col-yellow' onClick={props.reset}>Reset</button>
        </div>
    )
}

export default Button;