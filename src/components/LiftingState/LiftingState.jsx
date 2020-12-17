import React from 'react';

const USD2VND_EXCHANGE_RATE = 23632;

const USD2VND = function(props) {
    const convert = (usd) => usd * USD2VND_EXCHANGE_RATE;

    const inputChangeHandler = (e) => {
        const usd = e.target.value;
        const vnd = convert(usd);
        props.onChangeHandler({usd, vnd});
    };

    return (
        <div>
            <span>USD</span>
            <input type="text" value={props.value} onChange={(e) => inputChangeHandler(e)} />
        </div>
    );
}

const VND2USD = function(props) {
    const convert = (vnd) => vnd / USD2VND_EXCHANGE_RATE;

    const inputChangeHandler = (e) => {
        const vnd = e.target.value;
        const usd = convert(vnd);
        props.onChangeHandler({usd, vnd});
    };

    return (
        <div>
            <span>VND</span>
            <input type="text" value={props.value} onChange={(e) => inputChangeHandler(e)} />
        </div>
    );
}

class LiftingState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usd: 0,
            vnd: 0
        };
    }

    changeHandler = (data) => {
        this.setState(data);
    }

    render() {
        return (
            <div>
                <USD2VND onChangeHandler={this.changeHandler} value={this.state.usd} />
                <VND2USD onChangeHandler={this.changeHandler} value={this.state.vnd} />
            </div>
        );
    }
}

export default LiftingState;
