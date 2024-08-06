import React, { Component } from 'react'
import Card from './Card'
import Loading from './Loading'

export default class Cards extends Component {
    render() {
        const { users } = this.props
        return (
            <div>
                {users.length ? users.map((user, index) => (
                    <Card key={index} index={index + 1} fName={user.name} email={user.email} phone={user.phone} website={user.website} />
                )) : <Loading />}
            </div>
        )
    }
}
