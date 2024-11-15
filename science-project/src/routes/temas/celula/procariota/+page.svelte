<script>
    import fondo from '$lib/imagenes/general.jpg' 
	import procariota from '$lib/imagenes/procariota.jpg' 
</script>

<div class="alto" style={`background-image:url(${fondo})`}>
    <main>
        <h1>CÉLULA PROCARIOTA</h1>
        <p>
            Las células procariotas tienen una estructura básica sencilla, sin membrana nuclear, por lo
            que su material genético se encuentra disperso, ocupando un espacio llamado nucleoide, y que
            está en contacto directo con el resto del citoplasma.
        </p>
        <p>
            Las células procariotas son pequeñas y tienen un tamaño de entre 1-5 µm. Fueron las primeras
            formas de vida en la Tierra y hasta donde se conoce, todos los seres vivos formados por
            células procariotas son unicelulares.
        </p>
        <br>
		<center>
			<img src={procariota} alt="">
		</center>
        <br>
        <br>
        <a href="/temas/celula">Atrás</a>
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

	img {
		height: auto;
		width: auto;
	}

    .alto{
       min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
