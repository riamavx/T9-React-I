// import React from 'react'; //avisando ao cod que será atualizado react

// function Button(props){ // estrutura principal. Ela sempre tem que ter um return
//     return( // o parenteses serve para avisar que será utilizado mais de uma linha, caso seja só uma linha não precisa
//         <>
//         <button onClick={()=> alert("Digite algo")} >Pesquisa Google</button>
//         <button  >Estou com Sorte</button>
//         </>
//     );

// }

// export default Button;// tem que colocar o nome da função


import React from 'react';

function Button(props){
return <button onClick ={props.clique}>{props.nomeBotao}</button>
{/* <button onClick={()=> alert('oi')}> Clique aqui </button> */}
}

export default Button;