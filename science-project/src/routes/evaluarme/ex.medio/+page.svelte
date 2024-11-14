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
  
  <main class="container">
    <h2>Examen del Medio Ambiente</h2>
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
  