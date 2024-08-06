import React, { Component } from 'react'
import { FaLink } from "react-icons/fa";
export default class Card extends Component {
    render() {
        const { name, country, website, code } = this.props
        return (
            <div className='card'>
                <h2>{name}</h2>
                <p>{country}</p>
                <a href={website} target="_blank" rel="noopener noreferrer"><FaLink /></a>
                <p>{code}</p>
            </div>
        )
    }
}
