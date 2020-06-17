import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Input from './componentes/Input/Input'
import Card from './componentes/Card/Card'
import ReactLogo from './imagem/react-logo.png'



function App() {
  return (
    <div>
      {/* <h1>Diga Algo:</h1>
      
      <Input tipoDoInput="text" />
      <Input tipoDoInput="passWord" /> */}
      <Card titulo ="Aqui é um Titulo"/>
      <Card subtitulo = "Aqui é um Subtitulo"/>
      <Card  imagem = {ReactLogo}/>

    </div>
  );
}

export default App;
