<script>
    import fondo from '$lib/imagenes/general.jpg'
    import vista from '$lib/imagenes/vista.jpg'
    import oido from '$lib/imagenes/oido.jpg'
    import olfato from '$lib/imagenes/olfato.jpg'
    import gusto from '$lib/imagenes/gusto.jpg'
    import tacto from '$lib/imagenes/piel.jpg'
</script>
<div class="alto" style={`background-image:url(${fondo})`}>
    <main>
        <h1>Los 5 sentidos y sus funciones</h1>
        <p>La gran mayoría de los seres humanos disfrutan de cinco sentidos. Antes de enseñarle a los niños sobre este tema y poner en práctica las actividades para trabajar los 5 sentidos para niños, es necesario conocer sobre ellos, saber cuáles son sus funciones y cuáles son los órganos sensoriales:</p>
        <div>
            <h2>La vista</h2>
            <p>El sentido de la vista permite observar todo a través de los ojos, uno de los sentidos humanos que más se usa y que nos da el placer de distinguir formas, tamaños, colores y ubicación de las cosas.</p>
           <center> <img src={vista} alt="anatomía del ojo"  style="height: 65%; width: 70%;"></center>
        </div>
        <div>
            <h2>La audición</h2>
            <p>A través del órgano de los oídos, es posible escuchar los sonidos, como voces, música, ruidos, etc. Los sonidos muy altos perturban nuestro sentido de la audición.</p>
           <center> <img src={oido} alt=""  style="height: 65%; width: 70%;"></center>
        </div>
        <div>
            <h2>El olfato</h2>
            <p>El órgano de la nariz es el destinado para percibir olores y fragancias. A través de la nariz respiramos el aire que nos mantiene vivos, por ello es de suma importancia mantener las fosas nasales limpias y despejadas.</p>
            <center><img src={olfato} alt="" style="height: 65%; width: 70%;"></center>
        </div>  
        <div>
            <h2>El gusto</h2>
            <p>Por medio de la lengua podemos diferenciar sabores, lo dulce, salado, ácido, amargo, es lo que se llama el sentido del gusto.</p>  
            <center><img src={gusto} alt="" style="height: 65%; width: 70%;"> </center>       
        </div>
        <div>
            <h2>El tacto</h2>
            <p>A través de la delgada capa que cubre el cuerpo humano, la piel, se percibe el sentido del tacto. Lo que nos permite conocer texturas, durezas y temperaturas. De manera que lo áspero, suave, caliente, frío son sensaciones que se manifiestan a través del tacto.</p>  
            <center><img src={tacto} alt="" style="height: 65%; width: 70%;"></center>
        </div>
        <br>
        <br>
        <a href="/temas">Atrás</a>
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