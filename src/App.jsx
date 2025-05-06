import './App.css';
import React from 'react';
import { useState } from 'react';
const App = () => {

  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [num3, setNum3] = useState(0)
  const [uniNum1, setUniNum1] = useState(0)
  const [uniNum2, setUniNum2] = useState(0)
  const [resultadoUnitario, setResultadoUnitario] = useState({x:0, y:0})
  const [resultado, setResultado] = useState(0)

  const handleChange = (event) => {
    const { name, value } = event.target;

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


  const handleChangeUnitario = (event) => {
    const { name, value } = event.target
    const numberUniValue = value === "" ? "" : parseFloat(value)


    if (name === 'uniNum1') setUniNum1(numberUniValue)
    if (name === 'uniNum2') setUniNum2(numberUniValue)
  }


  const calcularUnitario = () => {
    if (isNaN(uniNum1) || isNaN(uniNum2)) {
      setResultadoUnitario("Por favor, ingresa números válidos.");
      return;
    }
  
    const modulo = Math.sqrt(Math.pow(uniNum1, 2) + Math.pow(uniNum2, 2));
  
    if (modulo === 0) {
      setResultadoUnitario("El vector no puede ser (0, 0).");
      return;
    }
  
    const unitarioX = (uniNum1 / modulo).toFixed(2);
    const unitarioY = (uniNum2 / modulo).toFixed(2);
  
    setUnitarioResult({ x: unitarioX, y: unitarioY });
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
            <h1 className='igualModulo'>=</h1>
            <input
              type='number'
              className='resultadoModulo'
              value={resultado}
              readOnly
              placeholder='Resultado'

            />


          </div>
          <div className='divBotonModulo'>
            <button onClick={clacularModulo}
              className='botonModulo'
            >Calcular Modulo</button>
          </div>
        </div>

        <div className='unitario'>
          <h1><strong>Vector unitario</strong></h1>
          <p>
            Un vector unitario (u) es un vector de módulo la unidad y cuya dirección, sentido y punto
            de aplicación, coinciden con el vector v, de tal manera que la relación entre ambos es v =
            v · u = |v| . u.
            Para hallar un vector unitario u, en la dirección y sentido de otro vector v, basta dividir el
            vector por su módulo.
          </p>
          <div className='unitariSolve'>

            <input
              type='number'
              name='uniNum1'
              value={uniNum1}
              placeholder='Primer numero o X'
            />

            <input
              type='number'
              name='uniNum2'
              value={uniNum2}
              placeholder='Segundo numero o Y'
            />
          </div>
        </div>
      </div>


    </>
  );
}

export default App;
