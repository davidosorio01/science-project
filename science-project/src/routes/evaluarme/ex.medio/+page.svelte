<script>
    // Respuestas del usuario para cada pregunta
    let answers = ["", "", "", "", ""];
    
    // Respuestas correctas
    const correctAnswers = ["a", "c", "b", "b", "a"];
    
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
    <br>
    <h1>Examen del Medio Ambiente</h1>
    <br>
    <form on:submit|preventDefault={gradeExam}>
  
      <!-- Pregunta 1 -->
      <div class="question">
        <p>1. El medio ambiente es el espacio en el que se desarrolla la vida de los organismos y que permite su interacción. Está conformado por seres vivos (factores bióticos), por elementos sin vida (factores abióticos) y por elementos artificiales creados por el hombre.</p>
        <label><input type="radio" bind:group={answers[0]} value="a" /> a. Verdadero</label>
        <label><input type="radio" bind:group={answers[0]} value="b" /> b. Falso</label>
      </div>
  
      <!-- Pregunta 2 -->
      <div class="question">
        <p>2. Los seres humanos utilizan una gran cantidad de recursos _________ del medio para cubrir sus necesidades como ____________ , alimento y objetos de uso cotidiano entre otros ejemplos.</p>
        <label><input type="radio" bind:group={answers[1]} value="a" /> a. Naturales, Refugio</label>
        <label><input type="radio" bind:group={answers[1]} value="b" /> b. Connatural, Vestimenta</label>
        <label><input type="radio" bind:group={answers[1]} value="c" /> c. Naturales, Vestimenta</label>
        <label><input type="radio" bind:group={answers[1]} value="d" /> d. Connatural, Refugio</label>
      </div>
  
      <!-- Pregunta 3 -->
      <div class="question">
        <p>3. ¿Cuando se habla de factores bióticos no hace referencia a las bacterias microscópicas, los hongos, la flora, la fauna, los seres humanos?</p>
        <label><input type="radio" bind:group={answers[2]} value="a" /> a. Verdadero</label>
        <label><input type="radio" bind:group={answers[2]} value="b" /> b. Falso</label>
      </div>
  
      <!-- Pregunta 4 -->
      <div class="question">
        <p>4. La fauna y la flora no son de vital importancia para el medio ambiente ya que poseen una interdependencia que posibilita el equilibrio de las especies y el desarrollo de la biodiversidad.</p>
        <label><input type="radio" bind:group={answers[3]} value="a" /> a. Verdadero</label>
        <label><input type="radio" bind:group={answers[3]} value="b" /> b. Falso</label>
      </div>
  
      <!-- Pregunta 5 -->
      <div class="question">
        <p>5. ¿Cuando el ser humano cuida los factores abióticos (por ejemplo, los ríos de una región) y los factores bióticos (como los árboles de un bosque) mantiene y preserva el futuro de su especie, el futuro del resto de los organismos y el de las generaciones futuras?</p>
        <label><input type="radio" bind:group={answers[4]} value="a" /> a. Verdadero</label>
        <label><input type="radio" bind:group={answers[4]} value="b" /> b. Falso</label>
      </div>
  
      <button type="submit">Enviar</button>
    </form>
  
    <div class="feedback">{feedback}</div>
    <br>
    <br>
    <a href="/evaluarme">Volver</a>
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