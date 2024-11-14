<script>
    import fondo from '$lib/imagenes/general.jpg'
    import solido from '$lib/imagenes/solido.jpg'
    import liquido from '$lib/imagenes/liquido.jpg'
    import gaseoso from '$lib/imagenes/gaseoso.jpg'
</script>

<div class="alto" style={`background-image:url(${fondo})`}>
    <main>
        <h1>ESTADOS DE LA MATERIA</h1>
        <h2>¿QUÉ SON LOS ESTADOS DE LA MATERIA?</h2>
        <p>Los estados de la materia son las distintas fases o estados de agregación en los que puede encontrarse la materia conocida, sean sustancias puras o mezclas. El estado de agregación de una sustancia depende del tipo y de la intensidad de las fuerzas de unión que existan entre sus partículas (átomos, moléculas, iones, etc.). Otros factores que influyen en el estado de agregación son la temperatura y la presión.</p>
        <p>Los estados de la materia más conocidos son tres: el sólido, el líquido y el gaseoso, aunque también existen otros menos frecuentes como el plasmático y otras formas que no se producen en nuestro entorno naturalmente, como los condensados fermiónicos. Cada uno de estos estados posee características físicas distintas (volumen, fluidez, resistencia, entre otras).</p>
        <div>
            <h1>ESTADO SÓLIDO</h1>  
            <h2>¿QUÉ ES EL ESTADO SÓLIDO?</h2>
            <p>Se llama estado sólido a una de las cuatro formas esenciales en que la materia se presenta, junto a la líquida, la gaseosa y la plasmática. Estas formas se denominan estados de agregación de la materia.</p>
            <p>La materia en estado sólido (o simplemente los sólidos) se caracteriza por una disposición específica sus partículas, basada en nexos muy rígidos y fuertes, lo cual se traduce en una estructura física muy bien definida. Esto ocurre debido a las fuerzas de cohesión entre las partículas, responsables de mantener la forma y el volumen del sólido estables, y de otorgarle cierto margen de dureza y de resistencia.</p>
            <center>
                <img src={solido} alt=""  style="height: 65%; width: 70%;">
            </center>
            
        </div>
        <div>
            <h1>ESTADO LÍQUIDO</h1>
            <h2>¿QUÉ ES EL ESTADO LÍQUIDO?</h2>
            <p>Se llama estado líquido (o simplemente líquidos) a un estado de la materia que se considera intermedio entre el estado sólido y el gaseoso, ya que sus partículas se encuentran lo bastante juntas para conservar una cohesión mínima, a la vez que lo suficientemente dispersas para permitir la fluidez y el cambio de forma.</p>
            <p>Las partículas de un compuesto líquido están más separadas que las de un compuesto sólido, pero más juntas que las de un compuesto gaseoso. Por esta razón los compuestos sólidos son rígidos y los gases son dispersos. Para que un sólido se convierta en líquido es necesario suministrarle energía calórica hasta que ocurra la fusión. Por otra parte, para que un gas se convierta en líquido es necesario sustraerle energía calorífica hasta que ocurra la condensación.</p>
            <p>Otra forma de hacer pasar un compuesto de un estado a otro es variando las condiciones de presión. Por ejemplo, si se aumenta la presión de un gas, manteniendo cierta temperatura, sus partículas comenzarán a acercarse, empezarán a interactuar y este probablemente pasará al estado líquido.</p>
           <center>
              <img src={liquido} alt="" style="height: 65%; width: 70%;">
          </center>

        </div>
        <div>
            <h1>ESTADO GASEOSO</h1>
            <h2>¿QUÉ ES EL ESTADO GASEOSO?</h2>
            <p>Se entiende por estado gaseoso, a uno de los cuatro estados de agregación de la materia, junto con los estados sólido, líquido y plasmático.</p>
            <p>Las sustancias en estado gaseoso se denominan “gases” y se caracterizan por tener sus partículas constitutivas poco unidas entre sí, o sea, expandidas a lo largo del contenedor donde se encuentren, hasta cubrir lo más posible el espacio disponible.</p>
            <p>Esto último se debe a que las partículas que componen a los gases presentan entre sí una fuerza de atracción muy leve, y por esta razón no tienen forma ni ocupan un volumen definido en el espacio. Por otra parte, la densidad de los gases es mucho menor que la de los sólidos y los líquidos, y tienen además muy poca respuesta a la gravedad.</p>
            <p>Debido a la poca interacción entre las partículas de los gases, se encuentran suspendidos con muy poca influencia de la gravedad (se puede decir que “flotan”). Además, a pesar de su cohesión casi nula, los gases presentan una enorme capacidad para ser comprimidos, lo que a menudo se lleva a cabo durante su tratamiento industrial para el transporte.</p>
            <center>
                <img src={gaseoso} alt="" style="height: 65%; width: 70%;">
            </center>
        </div>
        <br>
        <br>
        <a href="/temas">atrás</a>
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