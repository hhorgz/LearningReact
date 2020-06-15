import React from 'react';

const CharComponent = (props) => {
    let charComponentStyle = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    }
    return(
        <div className='CharComponent' style={charComponentStyle} onClick={props.click}>
            <p>{props.letter}</p>
        </div>
    );
}

export default CharComponent;