import React from 'react';
import './Home.css'
import imgGoogle from '../../img/imgGoogle.png'
import Button from '../../componentes/Button/Button';
// import BemVinda from '../../componentes/BemVinda/Bemvinda'



function Home() {
    
    const botaoTchau = () =>(
        alert("Até Logo")
    );

    return (
        <div className="divPai">
            <img src={imgGoogle} alt="logo google"></img>
            <input type="text" ></input>

            <div className="divbtn">
                {/* <Button texto="Buscar" clicar={() => alert("Digite Algo")} /> */}
                <Button clique = {()=> alert("Seja Bem Vindxs")} nomeBotao= "Liga" />
                <Button clique = {botaoTchau}  nomeBotao= "Desliga"/>


                
                
                
                
                
                
                {/* <BemVinda nome= "Maria" cidade="Aurora" signo= "Câncer"/> */}


            </div>
        </div>
    );
}

export default Home;




