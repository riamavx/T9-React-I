import React from 'react';
import './Home.css'
import imgGoogle from '../../img/imgGoogle.png'
import Button from '../../componentes/Button/Button';
import BemVinda from '../../componentes/BemVinda/Bemvinda'



function Home() {
    return (
        <div className="divPai">
            <img src={imgGoogle} alt="logo google"></img>
            <input type="text" ></input>

            <div className="divbtn">
                <Button texto="Buscar" clicar={() => alert("Digite Algo")} />


                {/* <BemVinda nome= "Maria" cidade="Aurora" signo= "Câncer"/> */}


            </div>
        </div>
    );
}

export default Home;




