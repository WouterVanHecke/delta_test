// Initial State
const initialState = {
    loading: true,
    coins: []
};

// Reducers (Modifies The State And Returns A New State)
const coinsReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        default:
            return newState;
    }
};

// Exports
export default coinsReducer;
