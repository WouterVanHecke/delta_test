import { REHYDRATE } from "redux-persist";

import { COINS_FETCH_INITIAL_SUCCESS, COINS_FETCH_MORE_SUCCESS, SET_PAGE } from "../actions/actionTypes";

const initialState = {
    loading: true,
    coins: [],
    page: 1
};

const coinsReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case REHYDRATE:
            newState.loading = false;
            newState.coins = action.payload.coinsReducer.coins;
            newState.page = action.payload.coinsReducer.page;
            return newState;

        case COINS_FETCH_INITIAL_SUCCESS:
            newState.loading = false;
            newState.coins = [...action.payload.coins];
            return newState;

        case COINS_FETCH_MORE_SUCCESS:
            newState.loading = false;
            newState.coins = [...state.coins, ...action.payload.coins];
            return newState;

        case SET_PAGE:
            newState.page = action.payload.page;
            return newState;

        default:
            return newState;
    }
};

// Exports
export default coinsReducer;
