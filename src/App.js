import './App.css';

const App = () => {
  return (
    <>
      <div className='introduction'>
        <div className='presentacion'>
          <h1 className='presentacion-title'><strong>Vectores</strong></h1>
          <p>
            Los vectores son segmentos de una línea recta que están orientados dentro de un plano bidimensional o tridimensional,
            también conocido como un espacio vectorial. Su expresión matemática se representa mediante una letra con una flecha en
            la parte superior y, a nivel gráfico,también se utiliza el recurso de la fecha para señalarlos.
            Los vectores pueden representar magnitudes físicas con intensidad y dirección, como la fuerza, el desplazamiento y la velocidad.
            Además, suelen representarse en planos a través de coordenadas.
          </p>
        </div>
    
        <div className='caracteristicas'>
          <h1><strong>Caracteristicas de los vectores</strong></h1>
          <ul>
            <li>
              <strong>Sentido:</strong> viene representado por la punta de la flecha que se expresa gráficamente,
              indicando el lugar hacia el cual se dirige el vector.
            </li>
            <li>
              <strong>Dirección:</strong> es la recta sostronge la que se plantea el vector, la cual es continua e infinita en el espacio.
            </li>
            <li>
              <strong>Módulo:</strong> se trata de la longitud entre el inicio y fin del vector, es decir, dónde empieza y dónde termina la flecha.
            </li>
            <li>
              <strong>Amplitud:</strong> es la expresión numérica de la longitud gráfica del vector.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
