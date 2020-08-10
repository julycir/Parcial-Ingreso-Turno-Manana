/*CIRAOLO JULIETA
comisión B
Examen de ingreso Programación 10/08/2020

ejercicio 2
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/

function mostrar()
{
	var respuesta = "si";
	var marca;
	var precio;
	var peso;
	var tipo;

	var pesoTotalCompra;
	var marcaLiquidoMasCaro;
	var banderaLiquidoMasCaro;
	var precioLiquidoMayor;
	var marcaSolidoMasLiviano;
	var banderaSolidoMasLiviano;
	var pesoSolidoMenor;

	pesoTotalCompra = 0; //acumulador de peso
	banderaLiquidoMasCaro = "es el liquido mas caro";
	banderaSolidoMasLiviano = "es el solido mas liviano";
	marcaLiquidoMasCaro = "no se han ingresado productos líquidos";
	marcaSolidoMasLiviano = "no se han ingresado productos sólidos";

	while (respuesta == "si") {

		marca = prompt("Ingrese la marca del producto.");
		while (!(isNaN(marca))) { //valido que NO sea un numero
			marca = prompt("Error, ingrese la marca del producto.");
		}

		precio = prompt("Ingrese el precio del producto.");
		precio = parseInt(precio);
		while (isNaN(precio)) { //valido que sea un numero
			precio = prompt("Error, ingrese el precio del producto en numeros."); //aviso al usuario que tiene que ingresar un numero
			precio = parseInt(precio);
		}

		peso = prompt("Ingrese el peso del producto.");
		peso = parseInt(peso);

		while (isNaN(peso)) { //valido que sea un numero
			peso = prompt("Por favor, ingrese el peso del producto en numeros."); //aviso al usuario que tiene que ingresar un numero
			peso = parseInt(peso);
		}

		tipo = prompt("Ingrese el tipo de producto: sólido o líquido.");
		while (tipo != "sólido" && tipo != "líquido") {
			tipo = prompt("Error, ingrese el tipo de producto: sólido o líquido."); //valido sólido o líquido
		}

		//a)informar el peso total de la compra.
		pesoTotalCompra += peso;

		//b)la marca del más caro de los líquidos

		if (tipo == "líquido") {
			if (banderaLiquidoMasCaro == "es el liquido mas caro") {
				banderaLiquidoMasCaro = "listo";
				precioLiquidoMayor = precio;
				marcaLiquidoMasCaro = marca;
			} else {
				if (precio > precioLiquidoMayor) {
					precioLiquidoMayor = precio;
					marcaLiquidoMasCaro = marca;
				}
			}
		}

		//c)la marca del más liviano de los sólidos

		if (tipo == "sólido") {
			if (banderaSolidoMasLiviano == "es el solido mas liviano") {
				banderaSolidoMasLiviano = "listo";
				pesoSolidoMenor = precio;
				marcaSolidoMasLiviano = marca;
			} else {
				if (peso < pesoSolidoMenor) {
					pesoSolidoMenor = precio;
					marcaSolidoMasLiviano = marca;
				}
			}
		}

		respuesta = prompt("Desea continuar, si o no?"); //hasta que el usuario quiera seguir ingresando
	}

	document.write("a) El peso total de la compra es: " + pesoTotalCompra + ".<br />b) La marca del más caro de los líquidos es: " + marcaLiquidoMasCaro + ".<br />c) La marca del más liviano de los sólidos es: " + marcaSolidoMasLiviano + ".");
}
