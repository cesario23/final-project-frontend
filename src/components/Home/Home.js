import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div>
            <div style={{ textAlign: "center", marginTop: "5%", fontSize: 75}}>
                House app
            </div>
            <div className="button">
                <input 
                type="text"
                />
                <button className="Search">Search</button>
            </div>
            </div>
        )
    }
}

export default Home
