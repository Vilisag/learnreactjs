import React, {Component} from 'react';

class Class extends Component {
    render() {
        return (
            <div>
                <h1>Welcome, {this.props.name}! This is a class component.</h1>
            </div>
        );
    }
}

export default Class;
