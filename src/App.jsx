import './App.css';
import React from 'react';
import { useState } from 'react';
const App = () => {

  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [num3, setNum3] = useState(0)
  const [resultado, setResultado] = useState(0)

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Convertir el valor de cada campo a número
    const numberValue = value === "" ? "" : parseFloat(value);

    if (name === 'num1') setNum1(numberValue);
    if (name === 'num2') setNum2(numberValue);
    if (name === 'num3') setNum3(numberValue);
  };



  const clacularModulo = () => {

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      setResultado("Por favor, ingresa números válidos.");
      return;
    }

    const modulo = Math.sqrt(Math.pow(num1, 2) + Math.pow(num2, 2) + Math.pow(num3, 2));
    setResultado(modulo.toFixed(2));
  };
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

        <div className='modulo'>
          <h1><strong>Modulo</strong></h1>
          <p>Para sacar el módulo de un vector, necesitas calcular la raíz cuadrada de la suma de los cuadrados de sus componentes.
            En otras palabras, si tienes un vector con componentes x, y y z (si es tridimensional), el módulo será √(x² + y² + z²).
          </p>
        </div>
        <div className='solveModul'>
          <input
            type='number'
            name='num1'
            className='num1Modulo'
            value={num1}
            placeholder='Primer numero o X'
            onChange={handleChange}
          />
          <input
            type='number'
            name='num2'
            className='num2Modulo'
            value={num2}
            placeholder='Segundo numero o Y'
            onChange={handleChange}

          />
          <input
            type='number'
            name='num3'
            className='num3Modulo'
            value={num3}
            placeholder='Tercer numero o Z'
            onChange={handleChange}
          />

          <input
            type='number'
            value={resultado}
            readOnly
            placeholder='Resultado'

          />

          <button onClick={clacularModulo}>Calcular Modulo</button>


        </div>
      </div>


    </>
  );
}

export default App;
