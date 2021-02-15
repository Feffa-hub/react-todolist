
import './App.css';
import SubmitForm from "./SubmitForm";
import "./SubmitForm.css"; 
import "./TodoItems.css"; 




function App() {

function exit(){
alert("lol it is just decorative"); 
}


  return (
    <div>
    <header>
    <div className ="bar">
    <div className ="bar-decor">
    <button className="bar-decor-open">_</button>
    <button className="bar-decor-close" onClick={exit}>X</button>
    </div>
    </div>
    </header>
    <div className="App">
    <SubmitForm 
    /> 
    </div>
    </div>
  );
}

export default App;
