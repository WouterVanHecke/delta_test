import { REHYDRATE } from "redux-persist";

import { COINS_FETCH_INITIAL_SUCCESS, COINS_FETCH_MORE_SUCCESS } from "../actions/actionTypes";

const initialState = {
    loading: true,
    coins: []
};

const coinsReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case REHYDRATE:
            newState.loading = false;
            newState.coins = action.payload.coinsReducer.coins;
            return newState;

        case COINS_FETCH_INITIAL_SUCCESS:
            newState.loading = false;
            newState.coins = [...action.payload.coins];
            return newState;

        case COINS_FETCH_MORE_SUCCESS:
            newState.loading = false;
            newState.coins = [...state.coins, ...action.payload.coins];
            return newState;

        default:
            return newState;
    }
};

// Exports
export default coinsReducer;
