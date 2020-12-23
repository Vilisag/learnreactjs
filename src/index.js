import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import myReducer from './redux/reducers';
import {Provider} from 'react-redux';

// import App from './App';
import App from './redux/App';

const store = createStore(
    myReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));