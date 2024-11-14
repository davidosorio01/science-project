<script>
    import fondo from '$lib/imagenes/general.jpg'
	import medioambiente from '$lib/imagenes/medioambiente.jpg'
</script>

<div class="alto" style={`background-image:url(${fondo})`}>
    <main>
        <h1>¿Qué es el medio ambiente?</h1>
        <p>El medio ambiente es el espacio en el que se desarrolla la vida de los organismos y que permite su interacción. Está conformado por seres vivos (factores bióticos), por elementos sin vida (factores abióticos) y por elementos artificiales creados por el hombre.</p>
        <p>Cuando se habla de factores bióticos se hace referencia a todos los seres vivos que viven en un ambiente (las bacterias microscópicas, los hongos,  la flora, la fauna,  los seres humanos) y las interacciones entre ellos; por su parte, los factores abióticos son aquellos que carecen de vida pero determinan el espacio físico del ambiente (como el aire, el suelo y el agua) y resultan esenciales para la subsistencia de los organismos vivos.</p>
        <p>Entre los elementos artificiales se incluye a todos aquellos creados por el ser humano, como la urbanización, la cultura, las tradiciones. La suma de estos valores naturales, culturales y sociales en un momento histórico y en un lugar en particular constituyen el medio ambiente.</p>
        <h1>Importancia del medio ambiente</h1>
        <p>Todos los organismos obtienen del medio ambiente todos los elementos que necesitan para vivir: desde el aire y el agua, hasta el refugio y el alimento que les permite crecer, desarrollarse y obtener energía. Mantener el equilibrio del medio ambiente es fundamental para mantener la vida en la Tierra tal como la conocemos.</p>
        <p>Además, los seres humanos utilizan una gran cantidad de recursos naturales del medio para cubrir sus necesidades como vestimenta, alimento y objetos de uso cotidiano entre otros ejemplos. Por eso el ser humano debe conocer y cuidar sus interacciones con el medio ambiente para gestionar de manera sostenible los recursos naturales que permiten su crecimiento económico y su desarrollo.</p>
        <p>La fauna y la flora son de vital importancia para el medio ambiente ya que poseen una interdependencia que posibilita el equilibrio de las especies y el desarrollo de la biodiversidad.</p>
        <p>La supervivencia del hombre depende en gran medida de las interacciones y el uso consciente de la flora, la fauna y los recursos naturales, así como del desarrollo de las relaciones sociales, políticas y económicas que forman parte de su medio.</p>
        <p>Cuando el ser humano cuida los factores abióticos (por ejemplo, los ríos de una región) y los factores bióticos (como los árboles de un bosque) mantiene y preserva el futuro de su especie, el futuro del resto de los organismos y el de las generaciones futuras.</p>
        <br>
		<center>
			<img src={medioambiente} alt="" style="height: 65%; width: 70%;">
		</center>
        <br>
		<br>
		<br>
        <a href="https://concepto.de/medio-ambiente/">ver más</a>
		<br>
		<br>
		<br>
		<br>
		<br>
		<a href="/temas">volver</a>
		<br>
		<br>
		<br>
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













