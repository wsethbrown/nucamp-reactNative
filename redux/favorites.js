import * as Actiontypes from './ActionTypes';

export const favorites = (state = [], action) => {
    switch(action.type) {
        case Actiontypes.ADD_FAVORITE:
            if (state.includes(action.payload)) {
                return state;
            }
            return state.concat(action.payload)

        default: 
        return state;
    }
}