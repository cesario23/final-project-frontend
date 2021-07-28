import React, { Component } from 'react'

export class Home extends Component {
    async componentDidMount () {
        try{
        
        }catch (e){
        console.log(e)
        }
    } 

    render() {
        return (
            <div>
            <div style={{ textAlign: "center", marginTop: "5%", fontSize: 75}}>
                House app
            </div>
            </div>
        )
    }
}

export default Home
