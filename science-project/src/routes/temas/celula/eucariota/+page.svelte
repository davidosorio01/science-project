<script>
    import fondo from '$lib/imagenes/general.jpg'
	import eucariota from '$lib/imagenes/eucariota.jpg'
</script>

<div class="alto" style={`background-image:url(${fondo})`}>
    <main>
        <h1>CELULA EUCARIOTA</h1>
        <p>
        Las células eucariotas tienen una estructura más compleja que las procariotas. Tienen el
        núcleo rodeado de una membrana nuclear, por lo que su material genético queda contenido en
        el núcleo. Además, estas células poseen orgánulos (también llamados “organelas”) en su
        citoplasma que pueden estar delimitados por membranas.
        </p>
        <p>
        El tamaño de las células eucariotas varía entre 10-100 µm, por lo que son más grandes que
        las células procariotas. En la historia evolutiva de la Tierra, las células eucariotas
        surgieron después que las procariotas.
        </p>  
        <br>
		<center>
		<img src={eucariota} alt="">
		</center>
        <br>
        <br>
        <a href="/temas/celula">atrás</a>
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