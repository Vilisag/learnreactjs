import React from 'react';

const MyInput = React.forwardRef((props, ref) => {
    return (<input name={props.name} ref={ref} />);
});

class ReactRefs extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    };

    clickHandler = () => {
        this.myRef.current.focus();
    }

    render() {
        return (
            <>
                <code>zukitek.com</code><br/>
                <MyInput name="email" ref={this.myRef} />
                <button onClick={this.clickHandler}>Focus input</button>
            </>
        );
    }
}

export default ReactRefs;
