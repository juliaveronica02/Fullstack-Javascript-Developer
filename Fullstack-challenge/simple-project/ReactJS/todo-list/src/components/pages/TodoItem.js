import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    state = {
        text: '',
        editState: false
    }

    getStyle = () => {
        return {
            background: '#F4F4F4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.isComplete ? 'line-through' : 'none',
        }
    };

    onChange = (e) => {
        this.setState({ text : e.target.value })
    }

    toggle = (e) => {
        e.preventDefault();
        this.setState({
            editState: true
        })
        // console.log(this.state.editState)
    }

    EditText() {
            return (
                <div>
                    <input
                        type="text"
                        name="update"
                        onChange={this.onChange}
                        value={this.state.text}
                    />
                    <button 
                        onClick={()=> { 
                            this.props.updateData(this.props.todo._id, this.state.text)
                            this.setState({editState: false})                        
                        }}
                    >Save</button>
                    <button 
                        style={{ marginLeft: '10px' }}
                        onClick={() => this.setState({editState: false})}
                    >Cancel</button>
                </div>
            )
    }

    render() {
        const { _id, title, isComplete } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                    <input 
                        type="checkbox" 
                        onChange={this.props.markComplete.bind(this, _id)} 
                        checked={isComplete ? true : ''} 
                    /> {''}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, _id)} style={{ float: 'right' }}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </button> 
                    <button onClick={this.toggle} style={{ float: 'right', marginRight: '10px' }}>
                        <i className="fa fa-edit" aria-hidden="true"></i>
                    </button>      
                    {this.state.editState && this.EditText()}         
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default TodoItem