import React, { Component } from 'react'
import Card from './Card'

export default class Cards extends Component {
    render() {
        const { universities = [] } = this.props
        return (
            <div className='cards'>
                {universities.length ? universities.slice(0,20).map((university, index) => (
                    <Card key={index} name={university.name} country={university.country} website={university.web_pages} code={university.alpha_two_code} />
                )) : <h1>Loading...</h1>}
            </div>
        )
    }
}
