import React from 'react';

class Variable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { index: 1 };
    }

    btnHandler(increase = true) {
        if (increase) {
            this.setState({
                index: this.state.index + 1
            });
        } else {
            this.setState({
                index: this.state.index <= 0 ? 0 : this.state.index - 1
            });
        }
    }

    render() {
        return (
            <div>
                <p>Giá trị: {this.state.index}</p>
                <button onClick={() => this.btnHandler(true)}>Tăng</button>
                <button onClick={() => this.btnHandler(false)}>Giảm</button>
            </div>
        );
    }
}

export default Variable;
