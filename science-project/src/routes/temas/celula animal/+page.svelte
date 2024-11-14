<script>
    import fondo from '$lib/imagenes/general.jpg'
	import celulaanimal from '$lib/imagenes/animal.jpg'
</script>

<div class="alto" style={`background-image:url(${fondo})`}>
    <main>
       <h1>CELULA ANIMAL</h1>
       <center><mark>La celula animal es de tipo eucariota.</mark></center>
       <p>Están constituidas por una membrana plasmática y distintas organelas (complejo de Golgi, mitocondrias, ribosomas, lisosomas, retículo endoplasmático liso y rugoso, entre otros).</p>
        <p>El material genético se encuentra en un núcleo envuelto en una membrana nuclear.</p>
        <p>No tienen pared celular y presentan formas muy diversas.</p>
        <p>Poseen lisosomas (organelas exclusivas de las células animales), que son vesículas que contienen enzimas digestivas y se dedican a degradar ciertos compuestos químicos y estructuras celulares.</p>
        <p>Poseen centríolos (organelas exclusivas de las células animales), que tienen una función muy importante en la división celular.</p> 
        <br>
		<center><img src={celulaanimal} alt=""></center>
        
        <br>
        <a href="/temas">volver</a> 
    </main>
</div>

<style>
	main {
		background-color: #ffffff;
		border: 1px solid #ccc;
		border-radius: 15px;
		padding: 20px;
		width: 70%;
		margin: 2rem auto;
		text-align: left;
        font-weight: bold;
	}

	h1 {
		text-align: center;
	}

	p {
		padding: 20px;
		width: 70%;
		margin: 0 auto;
		text-align: left;
	}
	a {
		background-color: #465cd8; /* Color de fondo */
		border: none;
		color: rgb(255, 255, 255);
		padding: 15px 32px; /* Espaciado interno */
		text-align: center;
		text-decoration: none;
		font-size: 16px; /* Tamaño del texto */
		margin: 4px 2px;
		cursor: pointer;
		border-radius: 8px; /* Bordes redondeados */
		transition-duration: 0.4s; /* Duración de la transición */
	}

	a:hover {
		background-color: white; /* Color de fondo al pasar el mouse */
		color: #465cd8;
		border: 2px solid #4c9baf; /* Borde al pasar el mouse */
	}



    .alto{
       min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>