import React from 'react';

const ValidationComponent = (props) => {
    let textValidation = null;
    if(props.textLength >= 5){
        textValidation = <p>Text long enough</p>
    } else {
        textValidation = <p>Text too short</p>
    }

    return (
        <div className='ValidationComponent'>
            {textValidation}
        </div>
    );
}

export default ValidationComponent;