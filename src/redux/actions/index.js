import * as types from '../const';

export const increment = () => {
    return {
        type: types.INCREMENT
    }
}

export const descrement = () => {
    return {
        type: types.DESCREMENT
    }
}

export const listAllProvinces = (provinces) => {
    return {
        type: types.GET_PROVINCE_LIST,
        provinces
    }
}