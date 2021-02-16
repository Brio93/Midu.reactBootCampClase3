import ReactDOM from "react-dom";
import { useState } from "react";
import "./styles.css";

const WarningNotUsed = () => {
  return <h2>Aun no se inicializa el contador</h2>;
};

const ListOfClicks = ({ clicks }) => {
  console.log({ clicks });
  return <p>{clicks.join(", ")}</p>;
};

const App = () => {
  // const [left , setLeft] = useState(0)
  // const [right , setRight] = useState(0)

  const [counters, setCounters] = useState({
    left: 0,
    right: 0,
    mensaje: "Hola a todos"
  });

  const [clicks, setClicks] = useState([]);

  const handleClickLeft = () => {
    const newSetCounterState = {
      ...counters, //almacenamos los valores que no cambian estado, para de este modo no sean machacados al hacer cambio de estado guardando los valores que no cambian y actualizando los que si cambian
      left: counters.left + 1
      //right: counters.right,
      //mensaje: counters.mensaje,
      //clicks: counters.clicks + 1
    };
    setCounters(newSetCounterState);

    setClicks((prevClicks) => [...prevClicks, "L"]);
  };

  const handleClickRight = () => {
    setCounters({
      ...counters, //QUEREMOS TODAS LAS PROPIEDADES ALMACENADAS EN setCounters
      //left: counters.left, //ya no seria necesario agregarlo ya que estaria almacenado en counters, lo mismo con los demas datos que no serian modificados
      //mensaje: counters.mensaje,
      right: counters.right + 1
      //clicks: counters.clicks +1
    });
    setClicks((prevClicks) => [...prevClicks, "R"]);
  };

  return (
    <div>
      {counters.left}
      <button onClick={handleClickLeft}>Left</button>
      <button onClick={handleClickRight}>Right</button>
      {counters.right}
      <p>Click totales: {clicks.length}</p>
      {clicks.length === 0 ? (
        <WarningNotUsed />
      ) : (
        <ListOfClicks clicks={clicks} />
      )}
    </div>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
