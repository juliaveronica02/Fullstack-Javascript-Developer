import React, { Component } from 'react'
import styled from "styled-components"

export default class plusminreset extends Component {
    // count item from zero (0);
    state = {
        count: 0
    }
    // plus item.
    incrementItem() {
        this.setState({count: this.state.count +1});
    }
    // minus item.
    decrementItem() {
        this.setState({count: this.state.count -1});
        // windows alert to show can't decrement until minus.
        if(this.state.count <= 0){
            window.alert("WARNING!! Can't Decrement!");
            this.setState({count: this.state.count =0})
        }
    }
    // reset item to zero (0) again.
    reset(){
        this.setState({count: 0})
    }

    render() {
    // Styling using styled-components.
    // Button styling.
    const Button = styled.button`
    background-color: #FF1493;
    margin-bottom: 1em;
    padding-top: 10px;
    padding-bottom:10px;
    padding-left:40px;
    padding-right:40px;
    text-align:center;
    `
    // Input styling.
    const Input = styled.input`
    text-align:center;
    justify-content:space-between;
    width: 20em;
    margin-left:1em;
    margin-right: 1em;
    font-size: 16px;
    padding-bottom: 10px;
    padding-top: 10px;
    `
        return (
            <div>
                 <Button onClick={() => this.incrementItem()}>+</Button>
                <Input type="text" className="number" value={this.state.count}></Input>
                <Button className="Decreament" onClick={() => this.decrementItem()}>-</Button>
                <br/>
                <Button className="reset" onClick={()=>this.reset()}>Reset</Button>
            </div>
        )
    }

}
