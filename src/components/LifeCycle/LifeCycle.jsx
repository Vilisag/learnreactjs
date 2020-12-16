import React from 'react';

class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        console.log('Initialize');
    }

    componentDidMount() {
        console.log('Component did mount!');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component did update!');
    }

    componentWillUnmount() {
        console.log('Component will unmount!');
    }

    render() {
        return (
            <div>
                <p>Component LifeCycle. Please press 'F12' to see on browser console.</p>
            </div>
        );
    };
}

export default LifeCycle;
