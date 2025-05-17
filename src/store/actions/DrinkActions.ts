/**
 * Drink action creators
 */

import {
    SET_DRINK
} from './types';

export const setDrink = (code: string, drinks: any) => ({
    type: SET_DRINK,
    payload: { code, drinks },
});
