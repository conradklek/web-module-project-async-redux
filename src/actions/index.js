import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

export const getData = () => {
    return dispatch => {
        dispatch({
            type: FETCH_START
        });
        axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
            .then(res => {
                console.log(res.data.data);
                dispatch({
                    type: FETCH_SUCCESS,
                    data: res.data.data
                });
            })
    }
}

export const fetchStart = () => {
    console.log("FETCH_START");
    return {
        type: FETCH_START
    }
}

export const fetchSuccess = (data) => {
    console.log("FETCH_SUCCESS");
    console.log(data)
    return {
        type: FETCH_SUCCESS,
        payload: data
    }
}
