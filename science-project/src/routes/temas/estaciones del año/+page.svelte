<script>
    import fondo from '$lib/imagenes/general.jpg'
    import estaciones from '$lib/imagenes/estaciones.jpg'
</script>

<div class="alto" style={`background-image:url(${fondo})`}>
    <main>
        <h1>¿Qué son las estaciones del año?</h1>
        <p>Las estaciones del año, primavera, verano, otoño e invierno, son los cuatro períodos regulares en que cada año se divide, de acuerdo a las condiciones climáticas concretas y recurrentes que se manifiestan en la atmósfera. Cada una tiene una duración aproximada de tres meses, y en total conforman un sistema cíclico de condiciones meteorológicas y climáticas, que se da de manera continua.</p>
        <p>Las estaciones son un fenómeno planetario, consecuencia de los movimientos de traslación e inclinación del planeta en su órbita alrededor del Sol, y aunque se dan en los dos hemisferios terrestres, lo hacen siempre de manera invertida, es decir, cuando en el norte es verano, en el sur es invierno y viceversa. Para distinguirlas, normalmente se habla de estaciones boreales (del hemisferio norte) y estaciones australes (del hemisferio sur).</p>
        <p>Además, las estaciones se manifiestan de modos muy diferentes dependiendo de la franja climática. Por ejemplo, las regiones más próximas al ecuador no presentan estaciones definidas, sino épocas de lluvia y de sequía con leves variaciones de temperatura, mientras que en la zona templada las estaciones son marcadas y con diferencias sustanciales en materia climática y meteorológica. Incluso así, el modo exacto en que cada estación se manifiesta depende de la geografía del lugar.</p>
        <p>Desde un punto de vista general, las cuatro estaciones se pueden entender de la siguiente manera:</p>
        <div>
            <h2>Invierno (del latín hibernus)</h2>
            <p>Es la época más fría del año, en la que el Sol impacta de manera menos directa y menos intensa, de modo que el crecimiento de las plantas se enlentece o detiene y en algunos lugares se producen heladas, nevadas y otros fenómenos meteorológicos más extremos.</p>
        </div>
        <div>
            <h2>Primavera (del latín primum veris)</h2>
            <p>Es la época del renacimiento, en que el Sol vuelve a calentar más y los hielos comienzan a derretirse, momento que las plantas aprovechan para reverdecer y florecer. Las especies animales que hibernan salen de sus madrigueras y los días comienzan a alargarse.</p>
        </div>
        <div>
            <h2>Verano (del latín veranum)</h2>
            <p>Es la época de mayor calor del año, en la que el Sol impacta de manera directa e intensa, elevando las temperaturas. Es la época de la cosecha, en que las plantas producen frutos y la mayoría de los animales aprovechan para reproducirse.</p>
        </div>
        <div>
            <h2>Otoño (del latín autumnus)</h2>
            <p>Es la época en que se marchitan las hojas de los árboles, en que el clima comienza a enfriarse y la vida se prepara para la llegada del invierno. Es una época culturalmente asociada a la melancolía y la tristeza, dado que las noches comienzan a hacerse más largas que los días.</p>
        </div>
        <center><img src={estaciones} alt=""  style="height: 65%; width: 70%;"></center>
        <br>
        <p>Las distintas culturas comprendieron desde tiempos antiguos las estaciones como un ciclo eterno, al cual asociaron sus relatos funcionales y sus ciclos cosmológicos. El alargamiento de las noches y la debilidad del Sol durante los meses de invierno, por ejemplo, se asociaba a la muerte y el fin de los tiempos, lo cual convertía la primavera en una época de renacimiento y celebración, de victoria de la vida por encima de la muerte.</p>
        <p>Este tipo de asociaciones y metáforas se hallan presentes en numerosas tradiciones mitológicas e incluso en la simbología de la mayoría de las doctrinas religiosas.</p>
        <br>
        <br>
        <br>
        <a href="https://concepto.de/estaciones-del-ano/">ver más</a>
        <br>
        <br>
        <br>
        <br><a href="/temas">volver</a>
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

    h2 {
        text-align: center;
    }

    .alto{
       min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>