import React from 'react'

export default class Add extends React.Component{
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(){
        let text=this.refs.input.value;
        this.props.onAddClick(text)
    }

    render(){
        return (
            <div>
                <input type="text" ref="input"/>
                <button onClick={this.handleClick}>add</button>
            </div>
        );
    }
}
