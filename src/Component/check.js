import React, { Component } from 'react'

export class Check extends Component {
    render() {
        return (
            <div>
                <input onChange={this.props.funct } type="text"/>
            </div>
        )
    }
}

export default Check
