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

<main class="container">
  <h2>Examen del Ecosistema</h2>
  <form on:submit|preventDefault={gradeExam}>

    <!-- Pregunta 1 -->
    <div class="question">
      <p>1. Un ecosistema es un sistema que está formado por un conjunto de organismos, el medio ambiente físico en el que viven (hábitat) y las relaciones tanto bióticas como abióticas que se establece entre ellos.</p>
      <label><input type="radio" bind:group={answers[0]} value="a" /> a. Verdadero</label>
      <label><input type="radio" bind:group={answers[0]} value="b" /> b. Falso</label>
    </div>

    <!-- Pregunta 2 -->
    <div class="question">
      <p>2. ¿Cuántos niveles tróficos existen?</p>
      <label><input type="radio" bind:group={answers[1]} value="a" /> a. 2</label> 
      <label><input type="radio" bind:group={answers[1]} value="b" /> b. 4</label> 
      <label><input type="radio" bind:group={answers[1]} value="c" /> c. 1</label> 
      <label><input type="radio" bind:group={answers[1]} value="d" /> d. 3</label>
    </div>

    <!-- Pregunta 3 -->
    <div class="question">
      <p>3. Los niveles tróficos son: consumidores, descomponedores y productores.</p> 
      <label><input type="radio" bind:group={answers[2]} value="a" /> a. Verdadero</label>
      <label><input type="radio" bind:group={answers[2]} value="b" /> b. Falso</label>
    </div>

    <!-- Pregunta 4 -->
    <div class="question">
      <p>4. Los productores no son capaces de producir materia orgánica (su propio alimento)?</p>
      <label><input type="radio" bind:group={answers[3]} value="a" /> a. Verdadero</label>
      <label><input type="radio" bind:group={answers[3]} value="b" /> b. Falso</label>
    </div>

    <!-- Pregunta 5 -->
    <div class="question">
      <p>5. Entre organismos descomponedores se encuentran los _____, las ________ y algunas bacterias que reciclan la materia orgánica.</p>
      <label><input type="radio" bind:group={answers[4]} value="a" /> a. Hongos, bacterias</label>
      <label><input type="radio" bind:group={answers[4]} value="b" /> b. Sapos, lombrices</label>
      <label><input type="radio" bind:group={answers[4]} value="c" /> c. Hongos, lombrices</label>
      <label><input type="radio" bind:group={answers[4]} value="d" /> d. Sapos, larvas</label>
    </div>

    <button type="submit">Enviar</button>
  </form>

  <div class="feedback">{feedback}</div>
</main>

<style>
  .container {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: auto;
  }

  .question {
    margin-top: 15px;
  }

  .feedback {
    margin-top: 20px;
    font-weight: bold;
  }

  main {
    font-family: Arial, sans-serif;
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }

  label {
    display: block;
    margin-bottom: 10px;
  }

  button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>
