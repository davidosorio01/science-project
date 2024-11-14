<header> 
	<div class="logo"> 
	<span>SCIENCE</span> 
	</div> 
	<nav class="menu"> 
	  <ul> 
		<li><a href="/iniciar">Iniciar Sesión</a></li>
		<li><a href="/registrar">Registrarme</a></li> 
	  </ul> 
	</nav> 
  </header> 
  <main class="body"> 
	<h1>¡BIENVENIDO A SCIENCE!</h1>
	<p>¡QUE GUSTO QUE TE HAYAS UNIDO!</p> 
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
  </main> 
  <footer> 
	<p>SCIENCE</p> 
  </footer>
  
  
  
  <style>
  .body {
	  font-family: 'Comic Sans MS', cursive, sans-serif;
	  background-image: url($lib/imagenes/inicio.jpg);
	  background-size: cover;  
		  background-position: center; 
		  background-repeat: no-repeat;
  }
  
  header {
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  background-color: #2c6cf7; /* Color de fondo del header */
	  padding: 20px;
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
  
  footer {
	  text-align: center;
	  padding: 22px;
	  background-color: #2c6cf7;
	  color: #fff;
	  position: absolute;
	  bottom: 0;
	  width: 96%;
	  height: auto;
  }
  
  footer p {
	  margin: 0;
  }
  </style>