import React from 'react';

const Image = (props) => {
    return <img src="https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?cs=srgb&dl=pexels-mali-maeder-102104.jpg&fm=jpg" alt="learn reactjs" height="200px"/>
}

class HigherOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 1,
        };
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onMouseEnter() {
        this.setState({
            opacity: 0.5,
        });
    }

    onMouseLeave() {
        this.setState({
            opacity: 1,
        });
    }

    render() {
        return (
            <div style={{opacity: this.state.opacity}} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <Image />
            </div>
        );
    }
}

export default HigherOrder;
