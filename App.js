import React from 'react';
import Add from './component/Add'
import TodoList from './component/ToDoList'

class App extends React.Component {

    constructor(props){
        super(props)
        this.addClickHandle=this.addClickHandle.bind(this);
        this.todoClickHandle=this.todoClickHandle.bind(this);
    }
    addClickHandle(text){

        console.log(text)
    }

    todoClickHandle(index){

        console.log(`index = ${index}`)
    }

    render() {
        console.log("render")
        return <div>
            <Add onAddClick={this.addClickHandle}/>
            <TodoList
                todos={[
                    {text:'a',completed:false},{text:'b',completed:true}
                ]}
                onTodoClick={this.todoClickHandle}/>
        </div>
    }
}

export default App
