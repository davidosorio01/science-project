<header> 
    <div class="logo"> 
    <span>SCIENCE</span> 
    </div> 
    <nav class="menu"> 
      <ul> 
        <li><a href="/home">Inicio</a></li> 
        <li><a href="/temas">Aprende</a></li> 
        <li><a href="/nosotros">Nuestro Origen</a></li> 
        <li><a href="/referencias">Referencias</a></li>
        <li><a href="/evaluarme">evaluarme</a></li> 
      </ul> 
    </nav> 
  </header> 
  <main class="body">
    <center>
      <h1>EVALUA TU CONOCIMIENTO</h1>
    <div class="cards">
      <div class="card">
        <div class="card-details">
          <p class="text-title">La Célula</p>
        </div>
        <a class="card-button" href="/evaluarme/ex.celula">Iniciar</a>
      </div>
      <br>
      <br>
      <div class="card">
        <div class="card-details">
          <p class="text-title">Los Ecosistemas</p>
        </div>
        <a class="card-button" href="/evaluarme/ex.ecosistemas">Iniciar</a>
      </div>
      <br>
      <br>
      <div class="card">
        <div class="card-details">
          <p class="text-title">Estados de la Materia</p>
        </div>
        <a class="card-button" href="/evaluarme/ex.estados">Iniciar</a>
      </div>
      <br>
      <br>
      <div class="card">
        <div class="card-details">
          <p class="text-title">El Medio Ambiente</p>
        </div>
        <a class="card-button" href="/evaluarme/ex.medio">Iniciar</a>
      </div>
    </div>
    <br>
    <br>
    <div class="cards">
      <div class="card">
        <div class="card-details">
          <p class="text-title">Los Cinco Sentidos</p>
        </div>
        <a class="card-button" href="/evaluarme/ex.sentidos">Iniciar</a>
      </div>
      <br>
      <br>
      <div class="card">
        <div class="card-details">
          <p class="text-title">Los Seres Vivos</p>
        </div>
        <a class="card-button" href="/evaluarme/ex.seres">Iniciar</a>
      </div>
      <br>
      <br>
      <div class="card">
        <div class="card-details">
          <p class="text-title">Sistemas del Cuerpo Humano</p>
        </div>
        <a class="card-button" href="/evaluarme/ex.sistemas">Iniciar</a>
      </div>
    </div>
  </center>
  </main>
  <style>
    /* From Uiverse.io by alexruix */ 
  
  .cards {
    display: flex;
    gap: 20px;
    text-align: center;
  }
  
  
  .card {
   width: 190px;
   height: 254px;
   border-radius: 20px;
   background: #f5f5f5;
   position: relative;
   padding: 1.8rem;
   border: 2px solid #c3c6ce;
   transition: 0.5s ease-out;
   overflow: visible;
  }
  
  .card-details {
   height: 100%;
   gap: .5em;
   display: grid;
   place-content: center;
  }
  
  .card-button {
   transform: translate(-50%, 125%);
   width: 60%;
   border-radius: 1rem;
   border: none;
   background-color: #008bf8;
   color: #fff;
   font-size: 1rem;
   padding: .5rem 1rem;
   position: absolute;
   left: 50%;
   bottom: 0;
   opacity: 0;
   transition: 0.3s ease-out;
  }
  
  
  /*Text*/
  .text-title {
   font-size: 1.5em;
   font-weight: bold;
  }
  
  /*Hover*/
  .card:hover {
    background-image:  url($lib/imagenes/fondo.jpg);
    border-color: #008bf8;
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
    color:#ffffff;
  }
  
  .card:hover .card-button {
    border-color: #000000;
   transform: translate(-50%, 50%);
   opacity: 1;
  }
  .body {
      font-family: 'Comic Sans MS', cursive, sans-serif;
      background-image: url($lib/imagenes/general.jpg);
      background-size: cover;  
      background-position: center; 
      background-repeat: no-repeat;
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
      color:#ffffff;
      margin-bottom: 20px;
    }
  </style>