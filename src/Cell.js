import React, { Component } from 'react'

export default class Cell extends Component {
    constructor(props) {
        super()
        this.state = {
            color:  props.value
        }
    }

    // change color on click
    handleClick = () => {
        this.setState({
          color: '#333'
        })
      }


    render() {
        return (
            <div 
            className='cell' 
            style={{backgroundColor: this.state.color}}
            // Create a click listener which, when activated, updates the state 
            // to the following hex value: '#333'
            onClick={this.handleClick}>

            </div>
            
        )
    }
}