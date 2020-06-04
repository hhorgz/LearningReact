import React from 'react';

const userOutput = (props) => {
    return(
        <div className="UserOutput">
            <p>The username is:</p>
            <p>{props.username}</p>
        </div>
    );
}

export default userOutput;