import React,{Component, createRef} from 'react';
import styled from 'styled-components'
import Aux from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/WithClass';
import classes from './Person.css';
import propTypes from 'prop-types'
//import Radium  from 'radium';
class Person extends Component {
    constructor(props){
        super(props);
        this.inputElement = React.createRef();
    }
    componentDidMount(){
       // this.inputElement.focus();
       this.inputElement.current.focus();
    }
    render(){
    return(
        //<div className='Person' style={style}>
        <Aux>
        {this.props.isAuth ? <p> Authenticated</p> : <p> please login !</p>}
        <p key="i1" onClick = {this.props.click} > I am {this.props.name} , I have {this.props.age} years </p>
        <p key="i2" > {this.props.children} </p>
        <input key="i3" 
        //ref= { (inputEl) => {this.inputElement = inputEl}}
        ref ={this.inputElement}
        type="text" 
        onChange = {this.props.change} 
        value={this.props.name} /> 
        </Aux>
       
        );
    }
}
Person.propTypes = {
    click : propTypes.func ,
    name : propTypes.string,
    age :propTypes.string,
    change : propTypes.func
}
export default withClass(Person,classes.Person);