import { connect } from 'react-redux';
import React from 'react';
import './App.css';
import Form from './components/Form';
import Data from './components/Data';

import { getData } from './actions';

import { useEffect } from 'react';

import axios from 'axios';

function App(props) {
  const { loading, data, getData } = props;
  
  useEffect(() => {
    getData()
  }, []);
  
  return (
    <div className="App">
      <Form />
      {
        loading ? <h1>Loading...</h1> : <Data />
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    data: state.data
  }
}
export default connect(mapStateToProps, { getData })(App);