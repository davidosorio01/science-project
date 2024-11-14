<script>
    import fondo from '$lib/imagenes/general.jpg'
	import celulavegetal from '$lib/imagenes/vegetalcell.jpg'
</script>

<div class="alto" style={`background-image:url(${fondo})`}>
    <main>
        <h1>LA CELULA VEGETAL</h1>
        <center><mark>La celula vegetal es de tipo eucariota</mark></center>
        <p>Tienen un núcleo rodeado de membrana nuclear donde se encuentra el material genético.</p>
        <p>Poseen una pared celular rígida compuesta principalmente por celulosa. Esta estructura le da forma a la célula y le otorga sostén a la planta (los organismos vegetales no tienen esqueletos como los animales).</p>
        <p>Poseen cloroplastos (organelas exclusivas de las células vegetales), que son organelos que llevan a cabo la fotosíntesis, proceso mediante el cual se utiliza la luz solar para sintetizar compuestos    orgánicos a partir de compuestos inorgánicos.</p>
        <br>
		<center>
			<img src={celulavegetal} alt="">
		</center>
		
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