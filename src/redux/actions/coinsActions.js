import { getApiUrl } from "./apiActions";
import { COINS_FETCH_INITIAL_SUCCESS, COINS_FETCH_MORE_SUCCESS } from "./actionTypes";

const fetchInitialSuccess = coins => ({
    type: COINS_FETCH_INITIAL_SUCCESS,
    payload: { coins }
});

const fetchMoreSuccess = coins => ({
    type: COINS_FETCH_MORE_SUCCESS,
    payload: { coins }
});

export const fetchCoins = page => {
    return dispatch => {
        fetch(getApiUrl(page))
            .then(response => {
                response.json().then(coins => {
                    if (page === 1) {
                        dispatch(fetchInitialSuccess(coins.data));
                    } else {
                        dispatch(fetchMoreSuccess(coins.data));
                    }
                });
            })
            .catch(err => console.error(err));
    };
};
