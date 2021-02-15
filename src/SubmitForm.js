import React, { Component } from "react";
import TodoItems from "./TodoItems"; 


 
class SubmitForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      items:[]
    };
  // required to access to the correct value of "this" within the callback
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  
  //Collect the input value and store it as the object "newItem"
  addItem(e){
  if (this._inputElement.value !== ""){ 
  var newItem = {
  text: this._inputElement.value,
  key: Date.now()
  };
}


  //Update the State while keeping the previous one
   this.setState((prevState) => {
  return {
  items: prevState.items.concat(newItem)  
  };
  });
  
  this._inputElement.value = ""; 


  console.log(this.state.items);

  e.preventDefault(); 
}
  
    deleteItem(key){
    var filteredItems = this.state.items.filter(function (item){
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    });
  }

  
  render(){
  return (
    <div className ="first-block">
    <div className="input text">
    <form onSubmit ={this.addItem}>
      {/* Verificare */}
      <input ref={(a) => this._inputElement = a} placeholder="New Todo..." type="text" required
        maxlength="18"></input>
      <button className="button-one"type="submit">Add</button>
    </form>
     </div>
    <TodoItems entries={this.state.items}
    delete={this.deleteItem}/>
    </div>
  );
}
}

export default SubmitForm; 