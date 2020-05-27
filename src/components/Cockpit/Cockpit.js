import React ,{useEffect} from 'react';
import classes from './Cockpit.css'
const cockpit = (props) => {
    useEffect(()=> {
        console.log("[cockpit] useEffect")
        setTimeout(()=> { alert('save to cloud')},1000);
        return(() =>{
            console.log("[cockpit] - cleanup")
        })
    },[])
    useEffect(()=> {
        console.log("[cockpit] 2 useEffect")
        
    })
    const assignedClasses = []
    let btnClass = ''
    if(props.showPersons){
        btnClass = classes.Red;
    }
   
    if (props.personsLength <= 2){
        assignedClasses.push(classes.red)
    }
    if (props.personslength <=1){
        assignedClasses.push(classes.bold)
    }

    return (
        <div>
            <h1> {props.title} </h1>
            <p className = {assignedClasses.join(' ')} > This is working </p>
            <button className = {btnClass} onClick = 
            {props.clicked}
            > Switch Name </button> 
        </div>
    );
};
export default React.memo(cockpit);
