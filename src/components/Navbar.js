import React, { Component } from 'react'
import '../styles/_navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <h1>Food</h1>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Gallery</a></li>
                </ul>
                <input type="search" placeholder='Search' name="" id="" />
            </nav>
        )
    }
}
