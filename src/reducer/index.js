import { FETCH_START, FETCH_SUCCESS } from '../actions/index';

const initialState = {
    data: [],
    loading: false,
    error: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            console.log("FETCH_START");
            return {
                ...state,
                loading: true
            }
        case FETCH_SUCCESS:
            console.log("FETCH_SUCCESS");
            return {
                ...state,
                loading: false,
                data: action.data
            }
        default:
            return state;
    }
};

export default reducer;
