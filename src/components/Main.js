import React, { Component } from 'react'
import '../styles/_main.css';
import House from '../assets/house.avif'
export default class Main extends Component {
    render() {
        return (
            <div className='main'>
                <img src={House} alt="" srcset="" />
            </div>
        )
    }
}
