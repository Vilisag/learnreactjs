import * as types from '../const';

const provinces = (state = [], action) => {
    switch (action.type) {
        case types.GET_PROVINCE_LIST:
            state = action.provinces;
            return [...state];
    
        default:
            return [...state];
    }
}

export default provinces;