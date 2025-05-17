import {
    SET_DRINK
} from '../actions/types';

const INIT_STATE = {
    drinks: new Map()
};

let drink = (state: {drinks: Map<any, any>} = INIT_STATE, action:{type: string, payload: any}) => {
    switch (action.type) {
        case SET_DRINK:
            return { ...state, drinks: state.drinks.set(action.payload.code, action.payload.drinks) };

        default:
            return { ...state };
    }
};

export default drink;
