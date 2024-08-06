import React, { Component } from 'react'
import '../styles/_footer.css';

export default class Footer extends Component {
    render() {
        const year = new Date().getFullYear()
        return (
            <footer>
                <p> {year} &copy; All rights reserved</p>
            </footer>
        )
    }
}
