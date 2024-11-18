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
  <div class="body">
    <br>
    <br>
    <br>
  <main>
    <br>
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
    <br>
    <br>
    <a class="b" href="/evaluarme">Volver</a>
  </main>
  <br>
  <br>
  <br>
  </div>
  
  <style>

    .body{
      background-image: url($lib/imagenes/general.jpg);
      background-size: cover;  
      background-position: center; 
      background-repeat: no-repeat;
    }
  main {
  background-color: #fff;
  padding: 20px;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
  }
  
  h1 {
  font-size: 2em;
  margin-bottom: 20px;
  }
  
  .pregunta {
  margin-bottom: 20px;
  text-align: left;
  }
  
  .pregunta {
  font-size: 1.2em;
  margin-bottom: 10px;
  }
  
  label {
  display: block;
  margin-bottom: 10px;
  font-size: 1em;
  cursor: pointer;
  }
  
  input[type="radio"] {
  margin-right: 10px;
  }
  
  button {
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  margin-top: 20px;
  }
  
  button:hover {
  background-color: #0056b3;
  }


  /* From Uiverse.io by alexroumi */ 
.b {
 padding: 15px 25px;
 border: unset;
 border-radius: 15px;
 color: #212121;
 z-index: 1;
 background: #e8e8e8;
 position: relative;
 font-weight: 1000;
 font-size: 17px;
 -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 transition: all 250ms;
 overflow: hidden;
}

.b::before {
 content: "";
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 width: 0;
 border-radius: 15px;
 background-color: #212121;
 z-index: -1;
 -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 transition: all 250ms
}

.b:hover {
 color: #e8e8e8;
}

.b:hover::before {
 width: 100%;
}
  </style>