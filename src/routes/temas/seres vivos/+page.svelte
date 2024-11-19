<script>
    import fondo from '$lib/imagenes/general.jpg'
	import seres from '$lib/imagenes/seres.jpg'
</script>

<div class="alto" style={`background-image:url(${fondo})`}>
    <main>
        <h1>¿Qué son los seres vivos?</h1>
        <p>Cuando hablamos de seres vivos o seres vivientes nos referimos a las diversas formas que la vida asume a lo largo de su historia, desde los seres más simples y microscópicos hasta las formas de vida compleja entre las que figuran los propios seres humanos.</p>
        <p>los seres vivos son tremendamente diversos en complejidad, tamaño, inteligencia y otras características diferenciadoras, que les permiten adaptarse a diversos entornos y competir con otros seres vivos por el acceso a los recursos necesarios para continuar viviendo y reproducir su especie, transmitiéndole a su descendencia esas características, anatómicas o de conducta. En esto consisten la adaptación y la evolución de las especies.</p>
        <p>No se sabe muy bien cómo se originó la vida, y esto es materia de debate, dado que los cuerpos de los seres vivos están compuestos de exactamente los mismos elementos que la materia inanimada, aunque dispuesta de modos enteramente distintos. De hecho, en el cuerpo de los seres vivos es posible hallar diversas dosis de metales y elementos inorgánicos.</p>
        <p>Aun así, los seres vivos se distinguen de la materia inerte en que éstos intentan por todos los medios mantener su estructura química y biológica equilibrada, es decir, mantenerse con vida, y al mismo tiempo perpetuar la especie.</p>
        <p>Si fallan en mantener su equilibrio interno, los seres vivos mueren, y sus cuerpos se descomponen hasta sus elementos constitutivos.</p>
        <h1>Características de los seres vivos</h1>
        <p>Los seres vivos interactúan con su entorno y son capaces de modificarlo.</p>
        <p>Los seres vivos comparten, dentro de su inmensa variedad, las siguientes características elementales:</p>
        <p>Mantienen su homeostasis. Este término quiere decir el balance interno de materia y energía, indispensable para que el organismo opere de manera coordenada y no caótica.</p>
        <p>Son mortales y se reproducen. Todas las formas de vida que existen mueren, eventualmente, ya que al final el desorden (la entropía) se impone en el sistema pasado suficiente tiempo, o cuando acontecen accidentes y cambios repentinos que no le permiten adaptarse a tiempo. La respuesta de la vida ante esta realidad inevitable es reproducirse: crear nuevos seres vivos que perpetúen la especie y contengan la información genética de sus padres.</p>
        <p>Consumen energía. La vida requiere de un gasto energético para operar, y dicha energía se obtiene del medio ambiente a partir de diversos mecanismos, que introducen al cuerpo materia y la someten a reacciones químicas.</p>
        <p>Reaccionan a su entorno. Una de las características de los seres vivos es que no existen aparte de su entorno y responden a las condiciones de éste, es decir, interactúan con él de diferentes maneras, y en consecuencia también lo modifican.</p>
        <br>
		<center><img src={seres} alt="" style="height: 65%; width: 70%;"></center>
        <br>
		<br>
        <br>
        <a href="https://concepto.de/seres-vivos/">Más</a>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<a href="/temas">Atrás</a>
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