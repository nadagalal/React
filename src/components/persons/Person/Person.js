import React from 'react';
import styled from 'styled-components'
import Aux from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/WithClass';
import classes from './Person.css';
//import Radium  from 'radium';
const person = (props) => {
    const StyleDiv = styled.div`
    width: 60%;
    margin:16px auto;
    border:1px solid #eee;
    box-shadow:0 2px 3px #ccc;
    padding:16px;
    text-align: center;
    '@media (min-width : 500PX)' : {
        width : '450px;'
    
    
    
    `;
    // const style = {
    //     '@media (min-width : 500PX)' : {
    //         width : '450px;'
    //     }
    // }
    return(
        //<div className='Person' style={style}>
        <Aux>
        <p key="i1" onClick = {props.click} > I am {props.name} , I have {props.age} years </p>
        <p key="i2"> {props.children} </p>
        <input key="i3" type="text" onChange = {props.change} value={props.name} /> 
        </Aux>
       
        );
}
export default withClass(person,classes.Person);