import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

export default class Pagenotfound extends Component {
    render() {
        // console.log(this.props.navigation);
        console.log(Navigate);

        return <Navigate to="/" />;

        // return (
        //     <div>
        //         <h1>Page not found.</h1>
        //         <button onClick={ () => (<Navigate to="/" />) }>Home</button>
        //     </div>
        // )
    }
}
