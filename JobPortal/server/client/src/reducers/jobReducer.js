export default function(state = [], action) {
    switch (action.type) {
        case "SEARCH_JOBS":
            return action.payload;
        default:
            return state;
    }
}
