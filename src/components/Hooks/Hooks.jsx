import React, {useState} from 'react';

const Hooks = (props) => {
    const [number, setNumber] = useState(0);

    return (
        <div>
            <b>{number}</b> <hr />
            <button onClick={() => setNumber(Math.round(Math.random() * 100))}>Random</button>
        </div>
    )
}

export default Hooks;
