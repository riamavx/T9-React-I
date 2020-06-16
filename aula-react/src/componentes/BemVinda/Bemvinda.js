import React from 'react';


function Bemvinda(props){
    console.log(props)
return <h1>Seja Bem vinda, honey {props.nome}, {props.cidade},{props.signo}</h1>
}


export default Bemvinda;