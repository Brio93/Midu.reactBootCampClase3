import ReactDOM from "react-dom";
import {useState} from 'react'

const rootElement = document.getElementById("root");

const Counter = ({number}) => { 
  //destructurando la props (props) ---- Contador: {props.number}
  console.log('render')
return (
      <h1>
        Contador: {number}
      </h1>
)
}

const App = () =>{
  //let contador = 0
  const [contadorValue, updateContador] = useState(0)

/* PODEMOS HACER LO DE ARRIBA PARA DESESTRUCTURAR
  const contador = useState(0)
  const contadorValue = contador[0]
  const updateContador = contador[1]
*/

/* PUEDE DARNOS PROBLEMAS CON EL RENDERIZADO YA QUE AL RENDERIZAR EL CODIGO TAMBIEN PODRIA VOLVER A RENDERIZAR EL setInterval
  setInterval(() => {
    updateContador(contadorValue + 1)
  }, 1000);
*/

  const handleClick = () => {
    updateContador(contadorValue + 1)
  }

  const handleClickReset = () =>{
    updateContador(0)
  }

  const handleClickDisminuir = () =>{
    updateContador(contadorValue - 1)
  }

  const esPar = contadorValue % 2 === 0
  const mensajePar = esPar ? 'Es Numero Par' : 'Es Numero Impar' 

  return(
    <div className="App">
      <Counter number={contadorValue}/>
      <p>
        <b>
          {mensajePar}
        </b>
      </p>
      <button onClick={handleClick}>
        Incrementar
      </button>
      <button onClick={handleClickDisminuir}>
        Disminuir
      </button>
      <button onClick={handleClickReset}>
        Resetear
      </button>
    </div>
    )
}


    ReactDOM.render(
    <App/>,
    rootElement
    );


