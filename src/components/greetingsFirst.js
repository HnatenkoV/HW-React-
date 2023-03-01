import React from 'react';


const GreetingsFirst = (props) => {
    return (
    <React.Fragment>
        <h1>{props.message} JSX</h1>
        {props.children}
    </React.Fragment>
    );
}

export default GreetingsFirst;