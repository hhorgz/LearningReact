import React from 'react';

const userInput = (props) => {
    return(
        <input style={props.inputStyle} onChange={props.changed} value={props.username}/>
    );
}

export default userInput;