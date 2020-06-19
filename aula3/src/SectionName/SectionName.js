import React from 'react'
// import reactLogo from '../../imagem/react-logo.png'

class SectionName extends React.Component {
    constructor() {
        super()
        this.state = {
            valor: ""
        }
    }
    alterarValor = ()=>{
        this.setState({
            valor: "reprograma"
        });
    }
    render() {
        return (
            <div>

                <input onChange={(event) => console.log(event.target.value)}></input>
                <p>{valor}</p>
            </div >
        );

    }
}



export default SectionName;