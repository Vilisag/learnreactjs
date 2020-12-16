import React from 'react';

const Notification = (props) => {
    if (props.isShow) {
        return (
            <ul>
                <li>Chapter 1</li>
                <li>Chapter 2</li>
                <li>Chapter 3</li>
                <li>Chapter 4</li>
            </ul>
        )
    } else {
        return null;
    }
}

class RenderCondition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowNotification: false
        };
    }

    showNotification() {
        this.setState({
            isShowNotification: !this.state.isShowNotification
        });
    }

    render() {
        const {isShowNotification} = this.state;

        return (
            <div>
                <button onClick={() => {this.showNotification()}}>{isShowNotification ? 'Hide' : 'Show'}</button>
                <Notification isShow={isShowNotification} />
            </div>
        );
    }
}

export default RenderCondition
