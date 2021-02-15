import React, { Component } from "react"; 

class TodoItems extends Component {
    constructor(props){
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

        delete(key){
        this.props.delete(key); 
    }

    // Function with text to display and time to how to set task structure
    createTasks(item){
        return <div><li key={item.key}>{item.text} </li>
        <button className="delete-cross" type="submit" onClick={() => this.delete(item.key)}>✖</button></div>
    }

    //We are taking the list of todo items (passed in as entries) and turning them into variables and arrays
    render(){
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

    
    //What we see
    return(
    <div className="theList">
    <ul>
    {listItems}
    </ul>
    </div>
    )
}
};

export default TodoItems; 