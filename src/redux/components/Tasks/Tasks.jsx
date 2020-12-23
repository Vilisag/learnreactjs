import React from 'react';
import {connect} from 'react-redux';
import * as acts from '../../actions';
import apiCaller from '../../utils/apiCaller';

class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            provinces: []
        };
    }

    componentDidMount() {
        apiCaller('dvhcvn.json').then(res => {
            this.setState({
                provinces: res.data.provinces
            });
        });
    }

    render() {
        let {provinces} = this.state;
        return (
            <div>
                <ul>
                    {
                        provinces && provinces.map((province) => {
                            return <li key={province.id}>{province.name}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        provinces: state.provinces
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        listAllProvinces: (provinces) => {
            dispatch(acts.listAllProvinces(provinces));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
