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
        } 
      });
  
      feedback = result + `\nPuntaje Total: ${puntuacion} puntos`;
    };
  </script>
  <div class="body">
    <br>
    <br>
    <br>
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
    <br>
    <br>
    <a class="b" href="/evaluarme">volver</a>
    <br>
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

.pregunta h2 {
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

h3 {
  margin-top: 20px;
  font-size: 1.5em;
}

pre {
  margin-top: 20px;
  white-space: pre-wrap;
  font-size: 1em;
  color: #333;
  text-align: left;
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
  