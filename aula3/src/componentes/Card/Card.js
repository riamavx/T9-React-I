// Parte 1: Crie um componente "card"que seja uma div com um img, um titulo e 1 subtitulo

// Parte 2: importe o componente criado no App.js e utilize 3 vezes, em cada uma deve-se receber uma imagem,
//  um titulo e um subtitulo diferente





// import React from 'react'
// import reactLogo from '../../imagem/react-logo.png'

// function Card(props) {
//     return (
//         <div>
//             <img src={props.imagem}></img>
//             <h1>{props.titulo}</h1>
//             <h3>{props.subtitulo}</h3>
//         </div>
//     )

// }
// export default Card;


//com Class:

import React from 'react'
// import reactLogo from '../../imagem/react-logo.png'

class Card extends React.Component{
    render(){
        return (
            <div>
                <img src={this.props.imagem}></img>
                <h1>{this.props.titulo}</h1>
                <h3>{this.props.subtitulo}</h3>
            </div>
        )
    }
}

export default Card;