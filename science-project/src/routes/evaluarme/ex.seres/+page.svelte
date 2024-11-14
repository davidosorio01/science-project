<script>
    // Definimos las preguntas y las respuestas correctas
    const preguntas = [
      {
        pregunta: "Cuando hablamos de seres vivos o seres vivientes nos referimos a las diversas formas que la vida asume a lo largo de su historia, desde los seres más complejos y microscópicos hasta las formas de vida compleja entre las que figuran los propios seres humanos.",
        opciones: [
          { value: "a", texto: "Verdadero" },
          { value: "b", texto: "Falso" }
        ],
        correcta: "b" // Respuesta correcta: Falso
      },
      {
        pregunta: "Los seres vivos mantienen su homeostasis. Este término quiere decir el __________ interno de materia y energía, indispensable para que el organismo opere de manera ________ y no caótica.",
        opciones: [
          { value: "a", texto: "Desbalance, Desordenada" },
          { value: "b", texto: "Balance, Desordenada" },
          { value: "c", texto: "Balance, Ordenada" },
          { value: "d", texto: "Desbalance, Ordenada" }
        ],
        correcta: "c" // Respuesta correcta: Balance, Ordenada
      },
      {
        pregunta: "Los seres vivos no consumen tanta energía. La vida requiere de un gasto energético para operar, y dicha energía se obtiene del medio ambiente a partir de diversos mecanismos, que introducen al cuerpo materia y la someten a reacciones químicas.",
        opciones: [
          { value: "a", texto: "Verdadero" },
          { value: "b", texto: "Falso" }
        ],
        correcta: "b" // Respuesta correcta: Falso
      },
      {
        pregunta: "Los seres vivos reaccionan a su entorno. Una de las características de los seres vivos es que no existen aparte de su entorno y responden a las condiciones de éste, es decir, interactúan con él de diferentes maneras, y en consecuencia también lo modifican.",
        opciones: [
          { value: "a", texto: "Diferentes, Pertenecen" },
          { value: "b", texto: "Iguales, Modifican" },
          { value: "c", texto: "Iguales, Pertenecen" },
          { value: "d", texto: "Diferentes, Modifican" }
        ],
        correcta: "d" // Respuesta correcta: Diferentes, Modifican
      },
      {
        pregunta: "Los seres vivos interactúan con su entorno y son capaces de modificarlo.",
        opciones: [
          { value: "a", texto: "Verdadero" },
          { value: "b", texto: "Falso" }
        ],
        correcta: "a" // Respuesta correcta: Verdadero
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
    <h1>Examen: Los Seres Vivos</h1>
  
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