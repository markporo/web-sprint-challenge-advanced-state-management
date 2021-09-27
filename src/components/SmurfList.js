import React from 'react';
import Smurf from './Smurf';

import { connect } from 'react-redux';
import { addSmurf, addError } from '../actions';

const SmurfList = (props) => {
    const isLoading = props.isLoading;
    const smurfArray = props.smurfs;

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (<div className="listContainer">
        {smurfArray.map(eachSmurf => {
            return <Smurf smurf={eachSmurf} />
        })}
    </div>);
}

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error,
});

export default connect(
    mapStateToProps,
    { addSmurf, addError }
)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.