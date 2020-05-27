import React,{Component} from 'react';
import './App.css';
import Persons from '../components/persons/Persons';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass'
class App extends Component {
    constructor(props){
        super(props)
        console.log("in App Constructor")
    }
    state = {
        persons : [
        {name:"nada tarek" ,age :"25",id:"1"},
        {name:"nada bassem",age:"16",id:"2"},
        {name:"dina wael",age:"16",id:"3"}
        ] ,
       otherState : "other value",
       showPersons : false ,
       showCockpit : true
    }
static getDerivedStateFromProps(props,state){
    console.log("in derived",props);
    return state;
}

switchNameHandler = (newName) => {
      //this.state.persons[0].name = "Nada galal"; //wrong
    this.setState( {persons : [
        {name: newName ,age :"25",id:"1"},
        {name:"nada bassem",age:"16",id:"2"},
        {name:"dina wael",age:"16",id:"3"}
        ] ,
    });}
nameChangeHandler = (event,id) =>{
    const personIndex = this.state.persons.findIndex(p => {return p.id === id})
    const updatedPerson = {
        ...this.state.persons[personIndex]
    }
    updatedPerson.name = event.target.value;
    const updatedPersons = [...this.state.persons]
    updatedPersons[personIndex] = updatedPerson
    this.setState({persons : updatedPersons})
}
togglePersonsHandler = () =>{
const doesShow = this.state.showPersons;
this.setState ({showPersons :  !doesShow})
}
deletePersonHandler = (index) =>{
    const persons = this.state.persons.slice();
    persons.splice (index,1);
    this.setState({persons : persons})
}

componentDidMount(){
    console.log("in mount")
}
render(){

    console.log("rendering")
    let persons = null
    if (this.state.showPersons){
     
        persons = (
            <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler} 
            changed = {this.nameChangeHandler}>
            </Persons>
        );
   
    }

    return (
        
        <WithClass classes={classes.App}>
        <button onClick ={() => {this.setState({showCockpit : false})
         }}>Remove Cockpit </button>
        {this.state.showCockpit ?
        <Cockpit
        title = {this.props.title}
        showPersons = {this.state.showPersons}
        personsLength= {this.state.persons.length}
        clicked = {this.togglePersonsHandler}></Cockpit> : null}
        {persons}
        </WithClass>
    
     
    );
  }
}

export default App;
 
