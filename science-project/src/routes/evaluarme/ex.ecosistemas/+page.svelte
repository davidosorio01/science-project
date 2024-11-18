<script>
  // Respuestas del usuario para cada pregunta
  let answers = ["", "", "", "", ""];
  
  // Respuestas correctas
  const correctAnswers = ["a", "d", "a", "b", "c"];
  
  // Puntuación total del examen
  let totalPoints = 0;
  
  // Feedback para mostrar después de enviar el examen
  let feedback = "";
  
  // Función para calificar el examen
  function gradeExam() {
    totalPoints = 0;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].toLowerCase() === correctAnswers[i]) {
        totalPoints += 20;
      }
    }
    feedback = `¡Examen completado! Obtuviste ${totalPoints} puntos de 100.`;
  }
</script>
<div class="body">
  <br>
  <br>
  <br>
<main class="container">
  <br>
  <h1>Examen del Ecosistema</h1>
  <form on:submit|preventDefault={gradeExam}>

    <!-- Pregunta 1 -->
    <div class="pregunta">
      <p>1. Un ecosistema es un sistema que está formado por un conjunto de organismos, el medio ambiente físico en el que viven (hábitat) y las relaciones tanto bióticas como abióticas que se establece entre ellos.</p>
      <label><input type="radio" bind:group={answers[0]} value="a" /> a. Verdadero</label>
      <label><input type="radio" bind:group={answers[0]} value="b" /> b. Falso</label>
    </div>

    <!-- Pregunta 2 -->
    <div class="pregunta">
      <p>2. ¿Cuántos niveles tróficos existen?</p>
      <label><input type="radio" bind:group={answers[1]} value="a" /> a. 2</label> 
      <label><input type="radio" bind:group={answers[1]} value="b" /> b. 4</label> 
      <label><input type="radio" bind:group={answers[1]} value="c" /> c. 1</label> 
      <label><input type="radio" bind:group={answers[1]} value="d" /> d. 3</label>
    </div>

    <!-- Pregunta 3 -->
    <div class="pregunta">
      <p>3. Los niveles tróficos son: consumidores, descomponedores y productores.</p> 
      <label><input type="radio" bind:group={answers[2]} value="a" /> a. Verdadero</label>
      <label><input type="radio" bind:group={answers[2]} value="b" /> b. Falso</label>
    </div>

    <!-- Pregunta 4 -->
    <div class="pregunta">
      <p>4. Los productores no son capaces de producir materia orgánica (su propio alimento)?</p>
      <label><input type="radio" bind:group={answers[3]} value="a" /> a. Verdadero</label>
      <label><input type="radio" bind:group={answers[3]} value="b" /> b. Falso</label>
    </div>

    <!-- Pregunta 5 -->
    <div class="pregunta">
      <p>5. Entre organismos descomponedores se encuentran los _____, las ________ y algunas bacterias que reciclan la materia orgánica.</p>
      <label><input type="radio" bind:group={answers[4]} value="a" /> a. Hongos, bacterias</label>
      <label><input type="radio" bind:group={answers[4]} value="b" /> b. Sapos, lombrices</label>
      <label><input type="radio" bind:group={answers[4]} value="c" /> c. Hongos, lombrices</label>
      <label><input type="radio" bind:group={answers[4]} value="d" /> d. Sapos, larvas</label>
    </div>

    <button type="submit">Enviar</button>
  </form>
  <br>
  <br>
  <div class="feedback">{feedback}</div>
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
