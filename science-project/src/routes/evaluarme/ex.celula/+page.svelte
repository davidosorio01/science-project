<script>
    // Definimos las preguntas y las respuestas correctas
    const preguntas = [
      {
        pregunta: "La célula es la unidad estructural y funcional de todos los organismos vivos. Constituye la forma más_________ y ______ de organización biológica, es decir, la estructura ordenada y viviente más pequeña que se conoce. Son ejemplos de células los espermatozoides y las neuronas.",
        opciones: [
          { value: "a", texto: "Pequeña y complicada" },
          { value: "b", texto: "Grande y simple" },
          { value: "c", texto: "Pequeña y simple" },
          { value: "d", texto: "Grande y complicada" }
        ],
        correcta: "c" // Respuesta correcta: Pequeña y simple
      },
      {
        pregunta: "¿Cuál es el promedio de medida de la célula en µm (MICROMETROS)?",
        opciones: [
          { value: "a", texto: "8" },
          { value: "b", texto: "10" },
          { value: "c", texto: "12" }
        ],
        correcta: "b" // Respuesta correcta: 10
      },
      {
        pregunta: "¿Cuántos tipos de células se muestran en el material de apoyo?",
        opciones: [
          { value: "a", texto: "3" },
          { value: "b", texto: "4" },
          { value: "c", texto: "2" },
          { value: "d", texto: "5" }
        ],
        correcta: "c" // Respuesta correcta: 2
      },
      {
        pregunta: "Las células eucariotas tienen una estructura más compleja que las procariotas.",
        opciones: [
          { value: "a", texto: "Verdadero" },
          { value: "b", texto: "Falso" }
        ],
        correcta: "a" // Respuesta correcta: Verdadero
      },
      {
        pregunta: "¿Qué célula tiene las siguientes características: Están constituidas por una membrana plasmática y distintas organelas (complejo de Golgi, mitocondrias, ribosomas, lisosomas, retículo endoplasmático liso y rugoso, entre otros)?",
        opciones: [
          { value: "a", texto: "Célula animal" },
          { value: "b", texto: "Célula vegetal" },
          { value: "c", texto: "Célula procariota" },
          { value: "d", texto: "Célula eucariota" }
        ],
        correcta: "a" // Respuesta correcta: Célula animal
      }
    ];
  
    // Inicializamos un arreglo de respuestas para cada pregunta
    let respuestas = preguntas.map(() => "");
    let puntuacion = 0;
    let feedback = '';
  
    // Función para evaluar las respuestas y calcular la puntuación
    const evaluar = () => {
      puntuacion = 0;
      let result = 'Resultado:\n\n';
  
      respuestas.forEach((respuesta, index) => {
        if (respuesta === preguntas[index].correcta) {
          result += `Pregunta ${index + 1}: Correcto\n`;
          puntuacion += 20;
        } else {
          result += `Pregunta ${index + 1}: Incorrecto. La respuesta correcta era: ${preguntas[index].correcta.toUpperCase()}\n`;
        }
      });
  
      feedback = result + `\nPuntaje Total: ${puntuacion} puntos`;
    };
  </script>
  
  <main>
    <h1>Examen de Células</h1>
    
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
    
    {#if feedback}
      <pre>{feedback}</pre>
    {/if}
  </main>
  
  <style>
    main {
      font-family: Arial, sans-serif;
      padding: 20px;
      max-width: 600px;
      margin: 0 auto;
      text-align: center;
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
  
    pre {
      margin-top: 20px;
      white-space: pre-wrap;
      font-size: 16px;
      color: #333;
    }
  </style>
  