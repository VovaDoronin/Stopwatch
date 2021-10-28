import React from 'react';
import './Timer.css'

const Timer = (props) => {
    return (
        <div className='timer'>
            <div className='time'>{('0' + Math.floor((`${props.time}` / 3600) % 100)).slice(-2)}</div>
            <div className='time'>{('0' + Math.floor((`${props.time}` / 60) % 60)).slice(-2)}</div>
            <div className='time'>{('0' + Math.floor(`${props.time}` % 60)).slice(-2)}</div>
        </div>
    )
}

export default Timer;