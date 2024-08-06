import React, { Component } from 'react'

export default class MovieAdd extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.addMovie}>
                    <input type='text' value={this.props.title} onChange={this.props.handleValue} name='title' placeholder='Film title' />
                    <input type='number' value={this.props.number} onChange={this.props.handleValue} name='number' placeholder='Film yaer' />
                    <input type='number' value={this.props.rating} onChange={this.props.handleValue} name='rating' placeholder='Rating' />
                    <br/>
                    <button className='movie' onClick={()=>this.props.addMovie}>Add Movie</button>
                </form>
            </div>
        )
    }
}

// import React, { Component } from 'react'

// export default class AddMovie extends Component {
//     render() {
//         return (
//             <div>
//                 <form>
//                     <input type='text' value={this.props.title} onChange={this.props.handlevalue} name='title' placeholder='Film title' />
//                     <input type='number' placeholder='Film yaer' />
//                     <input type='number' placeholder='Rating' />
//                     <button onClick={this.props.addmovie}>Add Movie</button>
//                 </form>
//             </div>
//         )
//     }
// }
