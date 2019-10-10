// import { Provider } from 'react-redux';
import React from 'react';
// import react from 'react'
// import React, { useState } from 'react';

export default class TestApp extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <p>HEllo Worlddddd</p>
                <a href="/auth/facebook">Login with Facebook</a>
            </div>
        )
    };
}