import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        const { index, fName, email, phone, website } = this.props
        return (
            <div>
                <h1>{index}</h1>
                <h2>{fName}</h2>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{website}</p>
            </div>
        )
    }
}
