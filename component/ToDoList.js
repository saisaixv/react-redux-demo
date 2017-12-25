import React from 'React'
import Todo from './Todo'
export default class ToDoList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <ul>
                {
                    this.props.todos.map((todo,index)=>
                        <Todo
                            key={index}
                            onClick={()=>this.props.onTodoClick(index)}
                            text={todo.text}/>
                    )
                }
            </ul>
        );
    }
}
