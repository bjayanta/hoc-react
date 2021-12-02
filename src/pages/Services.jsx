import React, { Component } from 'react'
import withParams from '../withParams'
import withNavigation from '../withNavigation'

class Services extends Component {
    render() {
        console.log(this.props);

        return (
            <div>
                <h1>Services</h1>
                <button onClick={ () => { this.props.navigate('/') } }>Click</button>
            </div>
        )
    }
}

export default withNavigation(withParams(Services));
