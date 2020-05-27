import React,{Component} from 'react';
import './App.css';
import Persons from '../components/persons/Persons';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
//import person from './Person/Person';

//const app = props => {
//  const [personState, setPersonState] = useState({
//      persons : [
//        {name:"nada" ,age :"25"},
//        {name:"laila",age:"16"}
//        ] ,
//       //otherState : "another value" 
//    });
// const [otherState , setOtherState] = useState("another value")
// console.log(personState,otherState);
//  const switchNameHandler = () => {
//      //this.state.persons[0].name = "Nada galal"; //wrong
//    setPersonState( {persons : [
//        {name:"nada galal" ,age :"25"},
//        {name:"laila",age:"16"}
//        ] ,
//      //  otherState : personState.otherState
//    });
//  }
// 
//
//    return (
//      <div className="App">
//        <h1> Hi Nada </h1>
//        <p> This is working </p>
//        <button onClick = {switchNameHandler} > Switch Name </button>
//        <Person name = {personState.persons[0].name} age= {personState.persons[0].age}>
//            My hobby is drawing </Person>
//        <Person name="Radwa" age="35"/>
//        <Person/>
//      </div>
//    );
////      return React.createElement('div',{className : 'App'},React.createElement('h1',null,"React"));
//
//}

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
    // console.log(event.target.value);
    //    this.setState( {persons : [
    //     {name: "nada" ,age :"25",id:"1"},
    //     {name: event.target.value,age:"16",id:"2"}
    //     ] ,
    // });
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
        
    // let btnClass = [classes.Button]

    // const style = {
    //     backgroundColor : 'red' ,
    //     color : 'white',
    //     padding :'10px',
    //     cursor : 'pointer',
    //     font :'inherit',
    //     border : '1px solid blue',
    // }
    console.log("rendering")
    let persons = null
    if (this.state.showPersons){
     
        persons = (
            <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler} 
            changed = {this.nameChangeHandler}>
            </Persons>
            // <div>
            
            //     {this.state.persons.map( (person,index) => {
            //         return <Person 
            //         click= {() => this.deletePersonHandler(index)}
            //         name={person.name}
            //         age= {person.age}
            //         key = {person.id} 
            //         change = {(event) => this.nameChangeHandler(event,person.id)}/>
            //      })}

            // </div> 
        );
       // btnClass.push(classes.Red)
       // style.backgroundColor = 'green'
    }
    //let classes = ['red','bold'].join(' ');
    // let assignedClasses = []
    // if (this.state.persons.length <= 2){
    //     assignedClasses.push(classes.red)
    // }
    // if (this.state.persons.length <=1){
    //     assignedClasses.push(classes.bold)
    // }
    return (
    
        <div className={classes.App}>
        <button onClick ={() => {this.setState({showCockpit : false})
         }}>Remove Cockpit </button>
        {this.state.showCockpit ?
        <Cockpit
        title = {this.props.title}
        showPersons = {this.state.showPersons}
        personsLength= {this.state.persons.length}
        clicked = {this.togglePersonsHandler}></Cockpit> : null}
        {persons}
      </div>
     
    );
  }
}

export default App;
 

//state = {
//    persons : [
//        {name:"nada" ,age :"25"},
//        {name:"laila",age:"16"}
//        ]         
//    }
//  switchNameHandler = () => {
//      //this.state.persons[0].name = "Nada galal"; //wrong
//      this.setState( {persons : [
//        {name:"nada galal" ,age :"25"},
//        {name:"laila",age:"16"}
//        ]         
//    })
//  }