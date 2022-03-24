import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';
const Form = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.getData();
    }
    return(
        <form onSubmit={handleSubmit}>
            <button type='submit'>Click Me</button>
        </form>
    )
}

export default connect(null, {getData})(Form);