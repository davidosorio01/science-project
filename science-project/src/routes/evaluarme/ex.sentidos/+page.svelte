<script>
    // Arreglo con las preguntas y las respuestas correctas
    const preguntas = [
      {
        pregunta: "Los sentidos de los seres humanos son: el gusto, el olfato, la vista y la audición.",
        opciones: [
          { value: 'a', texto: 'Falso' },
          { value: 'b', texto: 'Verdadero' }
        ],
        correcta: 'a'
      },
      {
        pregunta: "¿Cuántos sentidos tiene el ser humano?",
        opciones: [
          { value: 'a', texto: '4' },
          { value: 'b', texto: '6' },
          { value: 'c', texto: '5' },
          { value: 'd', texto: '7' }
        ],
        correcta: 'c'
      },
      {
        pregunta: "¿Qué sentido nos permite distinguir formas, tamaños, colores y ubicación de las cosas?",
        opciones: [
          { value: 'a', texto: 'Olfato' },
          { value: 'b', texto: 'Vista' },
          { value: 'c', texto: 'Gusto' },
          { value: 'd', texto: 'Tacto' },
          { value: 'e', texto: 'Audición' }
        ],
        correcta: 'b'
      },
      {
        pregunta: "A través del órgano de los oídos, es posible escuchar los sonidos, como voces, música, ruidos, etc. Los sonidos muy altos perturban nuestro sentido de la audición.",
        opciones: [
          { value: 'a', texto: 'Verdadero' },
          { value: 'b', texto: 'Falso' }
        ],
        correcta: 'a'
      },
      {
        pregunta: "¿Qué nos permite conocer texturas, durezas y temperaturas?",
        opciones: [
          { value: 'a', texto: 'Olfato' },
          { value: 'b', texto: 'Vista' },
          { value: 'c', texto: 'Gusto' },
          { value: 'd', texto: 'Tacto' },
          { value: 'e', texto: 'Audición' }
        ],
        correcta: 'd'
      }
    ];
  
    // Inicializamos un arreglo de respuestas para cada pregunta
    let respuestas = preguntas.map(() => "");
    let puntuacion = 0;
  
    // Función para evaluar las respuestas y calcular la puntuación
    const evaluar = () => {
      puntuacion = respuestas.reduce((total, respuesta, index) => {
        return respuesta === preguntas[index].correcta ? total + 20 : total;
      }, 0);
    };
  </script>
  
  <main>
    <h1>Examen: Responde las siguientes preguntas</h1>
  
    <form>
      {#each preguntas as pregunta, index}
        <div class="pregunta">
          <h2>{index + 1}. {pregunta.pregunta}</h2>
          {#each pregunta.opciones as opcion}
            <label>
              <input type="radio" name={"pregunta" + index} bind:group={respuestas[index]} value={opcion.value} />
              {opcion.texto}
            </label>
          {/each}
        </div>
      {/each}
  
      <button type="button" on:click={evaluar}>Evaluar</button>
    </form>
  
    <h3>Puntuación: {puntuacion} / 100</h3>
  </main>
  
  <style>
    main {
      font-family: Arial, sans-serif;
      padding: 20px;
      max-width: 600px;
      margin: 0 auto;
    }
  
    h1 {
      text-align: center;
    }
  
    .pregunta {
      margin-bottom: 20px;
    }
  
    button {
      padding: 10px 20px;
      background-color: #007BFF;
      color: white;
      border: none;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #0056b3;
    }
  
    label {
      display: block;
      margin-bottom: 10px;
    }
  
    h3 {
      text-align: center;
      margin-top: 20px;
      font-size: 1.5em;
    }
  </style>