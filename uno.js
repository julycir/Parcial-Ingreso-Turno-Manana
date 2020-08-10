/*CIRAOLO JULIETA
comisión B
Examen de ingreso Programación 10/08/2020

ejercicio 1
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.
*/

function mostrar()
{
	var personas;
	var nombre;
	var temperatura;
	var sexo;
	var edad;

	var cantidadMujeres;
	var cantidadHombres;
	var acumuladorEdades;
	var promedioEdades;
	var mayorTemperatura;
	var banderaMayorTemperatura;
	var nombreMujerMayorTemperatura;

	personas = 0;
	cantidadMujeres = 0;
	cantidadHombres = 0;
	acumuladorEdades = 0;
	banderaMayorTemperatura = "es la primera";

	for (personas = 0; personas < 5; personas++) {
		do {
			nombre = prompt("Ingrese su nombre.");
			while (!isNaN(nombre)) {
				nombre = prompt("Por favor, ingrese un nombre valido."); //marcando error al usuario
			}
		} while (!isNaN(nombre)); //validando que no ingrese numeros

		do {
			temperatura = prompt("Ingrese su temperatura.");
			temperatura = parseInt(temperatura);
			while (isNaN(temperatura)) {
				temperatura = prompt("Error, ingrese una temperatura valida."); //marcando error al usuario
				temperatura = parseInt(temperatura);
			}
			
		} while (isNaN(temperatura)); // validando que sea un numero

		do {
			sexo = prompt("Ingrese su sexo, F para femenino o M para masculino.");
			sexo = sexo.toLowerCase();

			while (sexo != "f" && sexo != "m") {
				sexo = prompt("Por favor, ingrese  F para femenino o M para masculino."); //marcando error al usuario
				sexo = sexo.toLowerCase();
			}
		} while (sexo != "f" && sexo != "m"); // validando que sea f o m

		do {
			edad = prompt("Ingrese su edad");
			edad = parseInt(edad);

			while (isNaN(edad)) {
				edad = prompt("Por favor, ingrese una edad valida."); //marcando error al usuario
				edad = parseInt(edad);
			}
		} while (isNaN(edad)); // validando que sea un numero

		//a)informar la cantidad de personas de cada sexo.
		if (sexo == "f") {
			cantidadMujeres++;
		} else {
			cantidadHombres++;
		}

		//b)la edad promedio en total
		acumuladorEdades += edad;

		//c)la mujer con más temperatura(si la hay)
		if (banderaMayorTemperatura == "es la primera") {
			banderaMayorTemperatura = "listo";
			mayorTemperatura = temperatura;
		} else {
			if (temperatura > mayorTemperatura && sexo == "f") {
				mayorTemperatura = temperatura;
				nombreMujerMayorTemperatura = nombre;
			}
		}
	}

	//b)la edad promedio en total
	promedioEdades = acumuladorEdades / personas;
	promedioEdades = promedioEdades.toFixed(0);

	document.write("a. La cantidad de personas del sexo femenino es: " + cantidadMujeres + ".<br />La cantidad de personas del sexo masculino es: " + cantidadHombres + ".<br />b. La edad promedio de todas las personas es: " + promedioEdades + ".");

	if (nombreMujerMayorTemperatura != undefined) {
		document.write("<br />c. La mujer con temperatura más alta es: " + nombreMujerMayorTemperatura + ".");
	}
}
