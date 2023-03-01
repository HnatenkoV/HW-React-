import React, {useState} from 'react';

const SomeCounter = () => {
    const [count, setCount] = useState(0);
    const [showWarn, setShowWarn] = useState(false);
    const onClickUp = () => {
        console.log('click up')
        setCount(count + 1);
        setShowWarn(false);
    }
    const onClickDown = () => {
        console.log('click down')
        if (count > 0) {
            setCount(count - 1);
        }
        setShowWarn(true);
    }

    return (
        <React.Fragment>
            <h2>Count: {count}</h2>
            <button onClick={onClickUp}>Counter Up</button>
            <button onClick={onClickDown}>Counter Down</button>
            {showWarn && <h2>Stop</h2>}
        </React.Fragment>
    );
}

export default SomeCounter;