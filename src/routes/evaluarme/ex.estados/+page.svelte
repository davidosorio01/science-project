<script>
  // Arreglo con las preguntas y las respuestas correctas
  const preguntas = [
    {
      pregunta: "¿Cuántos estados de la materia tradicionales existen?",
      opciones: [
        { value: 'A', texto: '2' },
        { value: 'B', texto: '5' },
        { value: 'C', texto: '3' },
        { value: 'D', texto: '4' }
      ],
      correcta: 'D'
    },
    {
      pregunta: "Existen otros estados de la materia menos frecuentes como el plasmático y otras formas que no se producen en nuestro entorno naturalmente, como los condensados fermiónicos. Cada uno de estos estados posee características físicas distintas (volumen, fluidez, resistencia, entre otras).",
      opciones: [
        { value: 'A', texto: 'Verdadero' },
        { value: 'B', texto: 'Falso' }
      ],
      correcta: 'A'
    },
    {
      pregunta: "La materia en estado sólido (o simplemente los sólidos) se caracteriza por una disposición específica sus partículas, basada en nexos muy rígidos y _______, lo cual se traduce en una estructura física muy bien definida. Esto ocurre debido a las fuerzas de cohesión entre las partículas, responsables de mantener la forma y el ________ del sólido estables, y de otorgarle cierto margen de dureza y de ____________.",
      opciones: [
        { value: 'A', texto: 'Fuertes, Masa, Resistencia' },
        { value: 'B', texto: 'Fuertes, Volumen, Energía' },
        { value: 'C', texto: 'Delicados, Volumen, Resistencia' },
        { value: 'D', texto: 'Fuertes, Volumen, Resistencia' }
      ],
      correcta: 'D'
    },
    {
      pregunta: "Las partículas de un compuesto líquido están más unidas que las de un compuesto sólido.",
      opciones: [
        { value: 'A', texto: 'Verdadero' },
        { value: 'B', texto: 'Falsa' }
      ],
      correcta: 'B'
    },
    {
      pregunta: "Debido a la _____ interacción entre las partículas de los gases, se encuentran suspendidos con muy poca influencia de la gravedad (se puede decir que “flotan”). Además, a pesar de su cohesión casi nula, los gases presentan una _______ capacidad para ser comprimidos, lo que a menudo se lleva a cabo durante su tratamiento industrial para el transporte.",
      opciones: [
        { value: 'A', texto: 'Mucha, Poca' },
        { value: 'B', texto: 'Poca, enorme' },
        { value: 'C', texto: 'Poca, poca' },
        { value: 'D', texto: 'Mucha, enorme' }
      ],
      correcta: 'B'
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
  <h1>Examen de los Estados de la Materia</h1>

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
<br>
  <h3>Puntuación: {puntuacion} / 100</h3>
  <br>
  <a href="/evaluarme">Volver</a>
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

</style>