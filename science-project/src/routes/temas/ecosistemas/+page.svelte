<script>
    import fondo from '$lib/imagenes/general.jpg'
	import ecosistema from '$lib/imagenes/ecosistemas.jpg'
</script>

<div class="alto" style={`background-image:url(${fondo})`}>
    <main>
        <h1>¿Qué es un ecosistema?</h1>
        <p>En biología, un ecosistema es un sistema que está formado por un conjunto de organismos, el medio ambiente físico en el que viven (hábitat) y las relaciones tanto bióticas como abióticas que se establecen entre ellos. Las especies de seres vivos que habitan un determinado ecosistema interactúan entre sí y con el medio, determinando el flujo de energía y de materia que ocurre en ese ambiente.</p>
        <p>Existe una gran diversidad de ecosistemas en el planeta. Todos están formados por factores bióticos (seres vivos) y factores abióticos (elementos no vivos, como el suelo o el aire). Existen además, distintos tipos de ecosistemas: hay marinos, terrestres, microbianos y artificiales, entre otros ejemplos.</p>
        <p>Un ejemplo de las relaciones que tienen lugar entre los seres vivos de un ecosistema son las relaciones alimentarias. Las cadenas tróficas o alimenticias son representaciones sencillas de las relaciones alimentarias que existen entre las especies que forman parte de un ecosistema determinado. Por lo general, en los ecosistemas las cadenas tróficas se interrelacionan formando redes tróficas.</p>
        <p>Se dice que hay una relación trófica entre dos organismos cuando uno de ellos es consumido por el otro. A su vez, el organismo consumidor puede ser el alimento de otro que forma parte del mismo ecosistema. Así, se forma una conexión entre varios eslabones y se constituye una cadena trófica. Cada uno de los eslabones de una cadena representa un organismo que “come a otro” o “es comido por otro”.</p>
        <p>Dentro de las cadenas alimentarias existen distintos niveles tróficos, que se basan en la posición que ocupa un organismo en el flujo de materia y energía. Dicho de otra forma, el nivel trófico agrupa a todas las especies que comparten el origen de su alimento dentro del ecosistema. Existen tres niveles tróficos:</p>
        <p>Productores. Son organismos autótrofos, es decir, que son capaces de producir materia orgánica (su propio alimento) a partir de materia inorgánica, por medio de la fotosíntesis o quimiosíntesis. Los productores son el primer nivel trófico, es decir, que constituyen el primer eslabón de las cadenas alimentarias. Este grupo está representado por las plantas, las algas y fitoplancton y algunas bacterias.</p>
        <p>Consumidores. Son organismos heterótrofos, es decir, se alimentan de otros seres vivos para obtener la materia y energía que necesitan. A su vez, los consumidores se clasifican en distintos grupos, según el organismo que constituye su alimento. Los consumidores primarios son los organismos herbívoros, o sea, aquellos que se alimentan de productores. Los consumidores secundarios, por su parte, son carnívoros y se alimentan de consumidores primarios. También existen consumidores terciarios y cuaternarios, que se alimentan de consumidores secundarios y terciarios respectivamente.</p>
        <p>Descomponedores. Son organismos que se alimentan de materia orgánica en descomposición, es decir, obtienen la materia y energía que necesitan a partir de restos de otros seres vivos. Si bien no se los suele representar en las cadenas tróficas, son fundamentales en la naturaleza ya que permiten el reciclaje de nutrientes. Entre los organismos descomponedores se encuentran los hongos, las lombrices y algunas bacterias que reciclan la materia orgánica.</p>
        <br>
        <center><img src={ecosistema} alt="" style="height: 65%; width: 70%;"></center>
        <br>
		<br>
        <a href="https://concepto.de/ecosistemas/#ixzz8qjgfoaVQ">más</a>
		<br>
		<br>
		<br>
		<br>
		<a href="/temas">volver</a>
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