import React from 'react';
import cat from '../../src/imagem/cat.jpg'
import dog from '../../src/imagem/dog.jpg'

class Pets extends React.Component{
    constructor(){
        super();
        this.state = {
            imagem : dog
        }
    }
    render(){
         
        return(
            <div className="divMae">
                
                <img src={this.state.imagem} alt="pet"></img>
                <button className="btn" onClick={()=>{this.setState({imagem: cat})}}>Cat</button>
                <button className="btn" onClick={()=>{this.setState({imagem: dog})}}>Dog</button>
                
            </div>
        );
    }
}

export default Pets;