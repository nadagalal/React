import React ,{Component} from 'react';
import Person from './Person/Person';
class Persons extends Component {
    shouldComponentUpdate(nextProps,nextState){
        console.log("[persons] - should update")
        //dah pointer comparison bs shghal 3shan ehna asln
        //lma l persons bttghyr bnn2l f array tanya w nset
        // fl address bytghyr lw kna bnghyr gwa nfs l array kan
        //7yb2a ghlt
        if(nextProps.persons !== this.props.persons
            || nextProps.changed !== this.props.changed
            || nextProps.clicked !== this.props.clicked){
            return true
        }else{
            return false
        }
        
    }
    componentDidUpdate(){
        console.log("[Persons]-didUpdate")
    }
    render(){
        console.log("[Persons]-rendering")
        return  this.props.persons.map( (person,index) => {
            return <Person 
            click= {() =>this.props.clicked(index)}
            name={person.name}
            age= {person.age}
            key = {person.id} 
            change = {(event) => this.props.changed(event,person.id)}/>
         });
    }

}

export default Persons;