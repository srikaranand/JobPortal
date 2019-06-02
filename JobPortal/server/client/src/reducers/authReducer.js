const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case "SET_CURRENT_USER":
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            };
        case "UNSET_CURRENT_USER":
            return initialState;
        default:
            return state;
    }
}
