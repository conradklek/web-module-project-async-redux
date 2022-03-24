import React from 'react';
import { connect } from 'react-redux';

const Data = (props) => {
    const { data, error } = props;
    console.log(data)
    if (!data || error !== '') {
        return <h6>{error}</h6>
    }
    return(
        <main>
            {
                data.map((item, index) => {
                    return <p key={index}>{item.Population}</p>
                })
            }
        </main>
    )
}

const mapStateToProps = state => {
    return {
        data: state.data,
        error: state.error
    }
}

export default connect(mapStateToProps)(Data);