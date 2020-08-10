/*CIRAOLO JULIETA
comisión B
Examen de ingreso Programación 10/08/2020

ejercicio 3
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/

function mostrar()
{
	var respuesta;
	var nombreTitular;
	var lugar;
	var temporada;
	var cantidadPasajeros;

	var lugarMasElegido;
	var bariloche;
	var cataratas;
	var salta;
	var nombreTitularLlevaMasPasajeros;
	var banderaTitularLlevaMasPasajeros;
	var cantidadTitularLlevaMasPasajeros;
	var cantidadPasajerosInvierno; //acumulador
	var cantidadViajesInvierno; // contador
	var promedioPasajerosInvierno;

	respuesta = true;
	bariloche = 0;
	cataratas = 0;
	salta = 0;
	banderaTitularLlevaMasPasajeros = true;
	cantidadPasajerosInvierno = 0;
	cantidadViajesInvierno = 0;

	do {

		nombreTitular = prompt("Ingrese el nombre del titular.");
		while (!(isNaN(nombreTitular))) {
			nombreTitular = prompt("Por favor, ingrese el nombre del titular.");
		}

		lugar = prompt("Ingrese el nombre del lugar elegido.");
		lugar = lugar.toLowerCase();
		while(lugar != "bariloche" && lugar != "cataratas" && lugar != "salta") {
			lugar = prompt("Por favor, ingrese el nombre del lugar elegido: Bariloche, Cataratas o Salta.");
			lugar = lugar.toLowerCase();
		}

		switch (lugar) {
			case "bariloche":
				bariloche++;
				break;
			case "cataratas":
				cataratas++;
				break;
			case "salta":
				salta++;
		}

		temporada = prompt("Ingrese la estación del año en la que desea viajar.")
		temporada = temporada.toLowerCase();
		while (temporada != "otoño" && temporada != "invierno" && temporada != "primavera" && temporada != "verano") {
			temporada = prompt("Por favor, ingrese si desea viajar en otoño, invierno, primavera o verano.")
		}

		cantidadPasajeros = prompt("Ingrese la cantidad de pasajeros que van a viajar.");
		cantidadPasajeros = parseInt(cantidadPasajeros);
		while (isNaN(cantidadPasajeros) || cantidadPasajeros < 0) {
			cantidadPasajeros = prompt("Por favor, ingrese la cantidad de pasajeros en números que van a viajar.");
			cantidadPasajeros = parseInt(cantidadPasajeros);
		}

		//b)el nombre de titular que lleva más pasajeros.
		if (banderaTitularLlevaMasPasajeros) {
			banderaTitularLlevaMasPasajeros = false;
			nombreTitularLlevaMasPasajeros = nombreTitular;
			cantidadTitularLlevaMasPasajeros = cantidadPasajeros;
		} else {
			if (cantidadPasajeros > cantidadTitularLlevaMasPasajeros) {
				nombreTitularLlevaMasPasajeros = nombreTitular;
				cantidadTitularLlevaMasPasajeros = cantidadPasajeros;
			}
		}

		//c)el promedio de personas por viaje,  que viajan en invierno
		if (temporada == "invierno") {
			cantidadPasajerosInvierno += cantidadPasajeros;
			cantidadViajesInvierno++;
		}

		respuesta = confirm("Desea continuar?"); //doy posibilidad que usuario diga que no

	} while (respuesta);

	//a)el lugar más elegido
		if (bariloche > salta && bariloche > cataratas) {
			lugarMasElegido = "bariloche";
		} else if (salta > bariloche && salta > cataratas) {
			lugarMasElegido = "salta";
		} else {
			lugarMasElegido = "cataratas";
		}  

	//c)el promedio de personas por viaje,  que viajan en invierno

		if (cantidadViajesInvierno != 0) {
			promedioPasajerosInvierno = cantidadPasajerosInvierno / cantidadViajesInvierno;
		}

	console.log("a) el lugar más elegido es: " + lugarMasElegido + ". b) el nombre de titular que lleva más pasajeros es: " + nombreTitularLlevaMasPasajeros + ".");
	if (cantidadViajesInvierno != 0) {
		console.log("c) el promedio de personas por viaje que viajan en invierno es: " + promedioPasajerosInvierno + ".")
	}
}
	
