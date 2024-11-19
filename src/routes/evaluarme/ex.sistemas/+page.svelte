<script>
    // Respuestas del usuario para cada pregunta
    let answers = ["", "", "", "", ""];
  
    // Respuestas correctas
    const correctAnswers = ["d", "a", "b", "b", "a"];
  
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
  <main>
    <br>
    <h1>Examen de los Sistemas del Cuerpo</h1>
  
    <div class="question">
      <p>1. ¿De cuántos sistemas del cuerpo humano hemos hablado?</p>
      <label>
        <input type="radio" bind:group={answers[0]} value="a" /> a. 15 sistemas
      </label>
      <label>
        <input type="radio" bind:group={answers[0]} value="b" /> b. 10 sistemas
      </label>
      <label>
        <input type="radio" bind:group={answers[0]} value="c" /> c. 13 sistemas
      </label>
      <label>
        <input type="radio" bind:group={answers[0]} value="d" /> d. 12 sistemas
      </label>
    </div>
  
    <div class="question">
      <p>2. ¿Los sistemas del cuerpo humano utilizan distintos (y a veces los mismos) órganos, así como conductos, tejidos y glándulas?</p>
      <label>
        <input type="radio" bind:group={answers[1]} value="a" /> a. Verdadero
      </label>
      <label>
        <input type="radio" bind:group={answers[1]} value="b" /> b. Falso
      </label>
    </div>
  
    <div class="question">
      <p>3. ¿Tenemos algunos sistemas más importantes que otros?</p>
      <label>
        <input type="radio" bind:group={answers[2]} value="a" /> a. Verdadero
      </label>
      <label>
        <input type="radio" bind:group={answers[2]} value="b" /> b. Falso
      </label>
    </div>
  
    <div class="question">
      <p>4. El sistema nervioso cumple con la función del movimiento voluntario y la toma de decisiones, así como la ___________; pero también con el control interno y pasivo del organismo, como la regulación de los movimientos involuntarios, los ________ y otras formas de transmisión de información nerviosa, como los ________, el dolor, el placer, etc.</p>
      <label>
        <input type="radio" bind:group={answers[3]} value="a" /> a. Conciencia, Reflejos, Latidos
      </label>
      <label>
        <input type="radio" bind:group={answers[3]} value="b" /> b. Conciencia, Movimientos, Sensaciones
      </label>
      <label>
        <input type="radio" bind:group={answers[3]} value="c" /> c. Conciencia, Reflejos, Sentidos
      </label>
      <label>
        <input type="radio" bind:group={answers[3]} value="d" /> d. Inconsciente, Movimientos, Sentidos
      </label>
    </div>
  
    <div class="question">
      <p>5. Los sistemas del cuerpo hablados son: sistema nervioso, sistema endocrino, sistema respiratorio, sistema circulatorio, sistema digestivo, sistema excretor, sistema reproductor, sistema inmunológico, sistema óseo, sistema muscular, sistema linfático y sistema tegumentario.</p>
      <label>
        <input type="radio" bind:group={answers[4]} value="a" /> a. Verdadero
      </label>
      <label>
        <input type="radio" bind:group={answers[4]} value="b" /> b. Falso
      </label>
    </div>
  
    <button on:click={gradeExam}>Enviar</button>
    <br>
    <div class="feedback">{feedback}</div>
    <br>
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
  
  .question {
  margin-bottom: 20px;
  text-align: left;
  }
  
  .question {
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
  