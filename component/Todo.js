import React from 'React'

export default class Todo extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <li
            onClick={this.props.onClick}
            style={{textDecoration:this.props.completed?'line-through':'none',
            cursor:this.props.completed?'default':'pointer'}}>{this.props.text}</li>
        );
    }
}