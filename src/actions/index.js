import axios from 'axios';

// constants
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_FAIL";
export const FETCH_SMURFS_LOADING = "FETCH_SMURFS_FAIL";
export const FETCH_SMURFS_ERROR = "FETCH_SMURFS_ERROR";
export const ADDS_SMURF = "ADDS_SMURF";
export const ADD_SMURFS_ERROR = "ADD_SMURFS_ERROR";

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const fetchSmurfs = (newSmurfFromInput) => dispatch => {

    dispatch({ type: FETCH_SMURFS_LOADING })
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log("get request", res.data);
            dispatch({
                type: FETCH_SMURFS_SUCCESS,
                payload: res.data.results,
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_SMURFS_ERROR,
                payload: err.error,
            })
        })
}

export const addSmurf = (newSmurfFromInput) => dispatch => {

    axios.post('http://localhost:3333/smurfs', newSmurfFromInput)
        .then(res => {
            console.log("res.data from post", res.data);
            // save res.data to state? in reducer right?
            dispatch({
                type: ADDS_SMURF,
                payload: res.data,
            })
        })
        .catch(err => {
            dispatch({
                type: ADD_SMURFS_ERROR,
                payload: "api post error",
            })
        })
}

export const addError = (err) => {
    return { type: ADD_SMURFS_ERROR, payload: err }
}
