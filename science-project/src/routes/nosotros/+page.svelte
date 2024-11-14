<script>
  let objetivo = [
    "Practicar y reforzar conceptos difíciles",
    "Realizar tests y evaluaciones para medir su progreso",
    "Mejorar sus habilidades y subir de nivel"
  ];
</script>

<header> 
  <div class="logo"> 
  <span>SCIENCE</span> 
  </div> 
  <nav class="menu"> 
    <ul> 
      <li><a href="/home">Inicio</a></li> 
      <li><a href="/temas">Aprende</a></li> 
      <li><a href="/nosotros">Origen de Science</a></li> 
      <li><a href="/referencias">Referencias</a></li>
      <li><a href="/evaluarme">evaluarme</a></li> 
    </ul> 
  </nav> 
</header> 
<main class="body"> 
  <div class="main">
    <section class="intro">  
      </section>
      <h1 style="text-align: center;">NUESTRO ORIGEN</h1>
      <p>SCIENCE es un proyecto hecho por un grupo de cuatro estudiantes los cuales tienen el privilegio de ser la primer generación de su institución educativa en graduarse en una media tecnica.</p>
      <h1 style="text-align: center;">Estamos enfocados</h1>
      <p>Nuestro enfoque es potenciar el aprendizaje de los estudiantes de 1° a 5° de primaria, brindándoles herramientas y recursos para mejorar sus técnicas de estudio. Nuestra plataforma ofrece información detallada y accesible sobre temas específicos de Ciencias Naturales, adaptada a su nivel educativo.</p>
      <section class="objetivos">
        <h2 style="text-align: center;">Nuestro objetivo es que los estudiantes puedan:</h2>
        <ul>
          {#each objetivo as item}
            <li>{item}</li>
          {/each}
        </ul>
      </section>
      <section class="beneficios">
        <p>De esta manera, nuestros recursos ayudan a los estudiantes a consolidar su conocimiento y a desarrollar una base sólida en Ciencias Naturales, preparándolos para futuros desafíos académicos.</p>
    </section>
  </div>
</main>
  
  
<style>
  .body {
	  font-family: 'Comic Sans MS', cursive, sans-serif;
	  background-image: url($lib/imagenes/general.jpg);
	  background-size: cover;  
		  background-position: center; 
		  background-repeat: no-repeat;
  }
  
  .main {
		background-color: #ffffff;
		border: 1px solid #ccc;
		border-radius: 15px;
		padding: 20px;
		width: 70%;
		margin: 2rem auto;
		text-align: left;
        font-weight: bold;
	}

  header {
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  background-color: #2c6cf7; /* Color de fondo del header */
	  padding: 10px 20px;
	  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .logo {
	  display: flex;
	  align-items: center;
  }
  
  .logo span {
	  font-size: 1.5em;
	  font-weight: bold;
	  color: #fff;
  }
  
  .menu ul {
	  list-style: none;
	  margin: 0;
	  padding: 0;
	  display: flex;
  }
  
  .menu ul li {
	  margin: 0 15px;
  }
  
  .menu ul li a {
	  color: #fff;
	  text-decoration: none;
	  font-size: 1.2em;
  }
  
  .menu ul li a:hover {
	  color: #000000;
  }
  
  main {
	  text-align: center;
	  padding: 50px 50px;
	  background-image: url('background.jpg'); /* Ruta a tu imagen de fondo */
	  background-size: cover;
	  background-position: center;
  }
  
  main h1 {
	  font-size: 2.5em;
	  color: #2c6cf7;
	  margin-bottom: 20px;
  }
  
  main p {
	  font-size: 1.2em;
	  margin-bottom: 30px;
	  color: #333;
  }
</style>