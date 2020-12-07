import React, { Component } from 'react'
import styled from 'styled-components'

export default class Increment extends Component {
    state = {
        count:0
    }
    IncrementItem (){
        this.setState({count: this.state.count + 1});
      
    }
    DecreseItem(){
        this.setState({count: this.state.count - 1});
       if(this.state.count <=0){
           window.alert("Can't Decrement Minus Number");
          this.setState({count:this.state.count = 0});
       }
    }
    reset(){
        this.setState({count: 0});
    }

    render() {
        return (
            <div>
                <Button onClick={() => this.IncrementItem()}>+</Button>
                <Input type="text" className="number" value={this.state.count}></Input>
                <Button className="Decrement" onClick={() => this.DecreseItem()}>-</Button>
                <br/>
                <Button className="reset" onClick={()=>this.reset()}>Reset</Button>
            </div>
        )
    }
}
// styling using styled-components.
const Button = styled.button`
      background-color: palevioletred;
      color: white;
      font-size: 30px;
      padding: 10px 40px;
    `
const Input = styled.input`
height: 50px;
font-size: 20px;
color: palevioletred;
text-weight: bold;
text-align: center;
margin: 20px;
outline: palevioletred solid 5px;
`