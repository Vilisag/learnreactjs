import React from 'react';

const NumberContext = React.createContext();

class UpdateNumber extends React.Component {
    render() {
        return (
            <button onClick={() => console.log(this.context.update())}>Update number</button>
        );
    }
}
UpdateNumber.contextType = NumberContext;

class ShowNumber extends React.Component {
    render() {
        return (
            <p>{this.context.number}</p>
        );
    }
}
ShowNumber.contextType = NumberContext;

class Context  extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }

    updateNumber = () => {
        this.setState({
            number: Math.random(),
        });
    }

    render() {
        return (
            <NumberContext.Provider value={{
                number: this.state.number,
                update: this.updateNumber.bind(this),
            }}>
                <NumberContext.Consumer>
                    {
                        () => (
                            <>
                                <ShowNumber />
                                <UpdateNumber />
                            </>
                        )
                    }
                </NumberContext.Consumer>
            </NumberContext.Provider>
        );
    }
}

export default Context;
