// --- EJERCICIOS: CONDICIONALES SIMPLES Y CONDICIONALES MÚLTIPLES ---

// Ejercicio 1

/*
var nota1 = parseInt(prompt("Ingrese la primera nota:"))
var nota2 = parseInt(prompt("Ingrese la segunda nota:"))
var nota3 = parseInt(prompt("Ingrese la tercera nota:"))

if (nota1 >=6 && nota2 >=6 && nota3 >=6)
{
	alert("Aprobado")
}
else
{
	alert("Reprobado")
}
*/

// Ejercicio 2

/*
var numero1 = parseInt(prompt("Ingresa el primer número:"))
var numero2 = parseInt(prompt("Ingresa el segundo número:"))

if (numero1 > numero2)
{
	alert(numero1 + " es el mayor")
}
else if (numero1 == numero2)
{
	alert("Son iguales")
}
else
{
	alert(numero2 + " es el mayor")
}
*/

// Ejercicio 3

/*
var numero = parseInt(prompt("Ingrese número"))

if (numero >= 0)
{
	alert("Número positivo")
}
else
{
	alert("Número negativo")
}
*/

// Ejercicio 4

/*
var precio = parseInt(prompt("Ingrese el precio de su traje:"))
var precio_final
var descuento

if (precio > 2500)
{
	precio_final = 0.85*precio
	descuento = 0.15*precio
}
else
{
	precio_final = 0.92*precio
	descuento = 0.08*precio
}

alert("Su descuento es de " + descuento + ".\nEntonces el precio final es de " + parseInt(precio_final))
*/

// Ejercicio 5

/*
var numero1 = parseInt(prompt("Ingrese el primer número:"))
var numero2 = parseInt(prompt("Ingrese el segundo número:"))
var numero3 = parseInt(prompt("Ingrese el tercer número:"))

if (numero1 > numero2 && numero1 > numero3 )
{
	alert(numero1 + " es mayor.")
}
else if (numero2 > numero1 && numero2 > numero3 )
{
	alert(numero2 + " es mayor.")
}
else if (numero3 > numero2 && numero3 > numero1 )
{
	alert(numero3 + " es mayor.")
}
*/

// Ejercicio 6
/*
var n_personas = parseInt(prompt("Ingrese el número de comensales:"))
var costo

if (n_personas > 300)
{
	costo = n_personas*75
}
else if (n_personas > 200)
{
	costo = n_personas*85
}
else
{
	costo = n_personas*95
}

alert("El costo total es " + costo)
*/

// Ejercicio 7

/*
var alumnos = parseInt(prompt("Ingrese el número de alumnos:"))
var costo
var autobus = 4000

if (alumnos >= 100)
{
	costo = alumnos*65
}
else if (alumnos >= 50)
{
	costo = alumnos*70
}
else if (alumnos >= 30)
{
	costo = alumnos*95
}
else
{
	costo = 0
}

costo += autobus

alert("El costo total es " + costo)
*/

// Ejercico 8

/*
var autobus_A = 2
var autobus_B = 2.5
var autobus_C = 3

var n_personas = parseInt(prompt("Ingrese el número de personas:"))
var costo_A
var costo_B
var costo_C

if (n_personas < 20)
{
	costo_A = 20*autobus_A
	costo_B = 20*autobus_B
	costo_C = 20*autobus_C
}
else
{
	costo_A = n_personas*autobus_A
	costo_B = n_personas*autobus_B
	costo_C = n_personas*autobus_C
}

alert("Si elige el bus A, pagará " + costo_A + "(costo por persona = " + autobus_A + ")" +
	  "\nSi elige el bus B, pagará " + costo_B + "(costo por persona = " + autobus_B + ")" +
	  "\nSi elige el bus C, pagará " + costo_C + "(costo por persona = " + autobus_C + ")")
*/

// Ejercicio 9

/*
var hamburguesa = prompt("¿Qué hamburguesa desea? (Sencilla, doble, triple)")
var n_hamburguesas = prompt("Ingrese el número de hamburguesas:")
var tarjeta = prompt("¿Va a pagar con tarjeta de crédito? (Sí, no)")

var sencilla = 20
var doble = 25
var triple = 28

var costo

if (hamburguesa.toLowerCase() == "sencilla")
{
	costo = sencilla*n_hamburguesas
}
else if (hamburguesa.toLowerCase() == "doble")
{
	costo = doble*n_hamburguesas
}
else if (hamburguesa.toLowerCase() == "triple")
{
	costo = triple*n_hamburguesas
}

if (tarjeta.toLowerCase() == "sí")
{
	costo *= 0.95
}

alert("El costo total es de " + costo)
*/

// Ejercicio 10
/*
var CostoProduccion = materiaPrima + manoObra + gastosFabricacion
var precioVenta = costoProduccion + (0.45 * costoProduccion)
var clave = [1, 2, 3, 4, 5, 6]
manoObra =
*/
// -------------------------------------------------------------------

// --- EJERCICIO: ESTRUCTURAS REPETITIVAS FOR, WHILE, DO WHILE ---

// Ejercicio 1

/*
var numero
var suma = 0

var n_veces = 0

while (n_veces < 10)
{
	numero = parseInt(prompt("Ingrese un número:"))
	suma += numero
	n_veces += 1
}

alert("La suma es " + suma)
*/

// Ejercicio 2

/*
var numero
var suma = 0

var n_veces = 0

do
{
	numero = parseInt(prompt("Ingrese un número:"))
	suma += numero
	n_veces += 1
} while (n_veces < 10)

alert("La suma es " + suma)
*/

// Ejercicio 3

/*
var numero
var suma = 0

for(var n_veces = 0; n_veces < 10; n_veces++)
{
	numero = parseInt(prompt("Ingrese un número:"))
	suma += numero
}

alert("La suma es " + suma)
*/

// Ejercicio 4

/*
var n_alumnos = parseInt(prompt("Ingrese el número de alumnos:"))
var edad
var suma = 0
var promedio

var n_veces = 0

while (n_veces < n_alumnos)
{
	edad = parseInt(prompt("Ingrese una edad:"))
	suma += edad
	n_veces++
}

promedio = suma / n_alumnos

alert("El promedio es " + promedio)

// TAREA
*/

// Ejercicio 5

/*
var numero = 0
var numero_final = 100

while (numero <= numero_final)
{
	console.log(numero)
	numero += 2
}
*/

// -------------------------------------------------------------------

// --- EJERCICIOS PRÁCTICOS ---

// Ejercicio 3

// 0 1
/*
var N = parseInt(prompt("Ingrese N:"))
var numero_ant = 0
var numero_actual = 1
var suma

var numero_veces = 0


if (N == 1)
{
	console.log(0)
}
else if (N == 2)
{
	console.log(0)
	console.log(1)
}
else
{
	console.log(0)
	console.log(1)

	while(numero_veces < N-2)
	{
		suma = numero_ant + numero_actual
		numero_ant = numero_actual
		numero_actual = suma

		console.log(numero_actual)

		numero_veces++
	}
}
*/
// ---------TIPOS DE DATOS, VARIABLES Y OPERADORES-------------------

// Ejercicio 1

/*
var numero1 = prompt("Ingresa un número:");
var numero2 = prompt("Ingresa otro número:");

var cociente = numero1/numero2
console.log(cociente)
*/

// Ejercicio 2

/*
var nombre = prompt("Ingresa tu nombre")
var edad = prompt("Ingresa tu edad")

var dias = edad*365

alert(nombre + ', has vivido ' + dias + ' dias.')
*/

// Ejercicio 3

/*
var nombre = prompt("Ingresa tu nombre.")
var primerApellido = prompt("Ingresa tu primer apellido.")
var poblacion = prompt("¿Dónde vives?")

alert('Hola, ' + nombre + ' ' + primerApellido + '\n' + 'Adiós, habitante de ' + poblacion)
*/

// Ejercicio 4

/*
var numero = parseInt(prompt("Ingresa un número."))
var numero1 = numero + 5
var numero2 = numero1 + 21
var numero3 = numero2 - 4

alert('Número introducido: ' + numero + '\n' + 'Contadores:     ' + numero1 + '     ' + numero2 + '     ' + numero3)
*/

// Ejercicio 5

/*
var u1 = parseInt(prompt("Ingresa el primero elemento del vector U."))
var u2 = parseInt(prompt("Ingresa el segundo elemento del vector U."))

var v1 = parseInt(prompt("Ingresa el primero elemento del vector V."))
var v2 = parseInt(prompt("Ingresa el segundo elemento del vector V."))

var producto = (u1*v1) + (u2*v2)

alert('El prodcto escalar de los vectores:' + '\n(' + u1 + ',' + u2 + ') y (' + v1 + ',' + v2 + ') es ' + producto)
*/

// Ejercicio 6

/*
var x1 = parseInt(prompt("Ingresa el primero elemento del segmento."))
var x2 = parseInt(prompt("Ingresa el segundo elemento del segmento."))

var y1 = parseInt(prompt("Ingresa el primero elemento del segmento."))
var y2 = parseInt(prompt("Ingresa el segundo elemento del segmento."))

var M1 = x1 + x2
var M2 = y1 + y2
var R1 = M1 / 2
var R2 = M2 / 2

alert('El punto medio del segmento de extremos, los puntos:' + '\n' + '(' + x1 + ' ,' + x2 + ')' + ' y ' + '(' + y1 + ' ,' + y2 + ')' + ' es ' + '(' + R1 + ' ,' + R2 + ')')
*/

// Ejercicio 7

/*
var radio = parseInt(prompt("Ingresa el radio del círculo:"))
var area = Math.PI*radio*radio

alert("El área del círculo de radio " + radio + " es " + area)
*/

// Ejercicio 8

/*
var a,b
a=parseInt(prompt("Escribe la base:"))
b=parseInt(prompt("Escribe la altura:"))
alert("Área = "+(a*b/2));
*/

// Ejercicio 9

/*
var a11 = prompt ("Ingresa el primer número de la matriz")
var a12 = prompt ("Ingresa el segundo número de la matriz")
var a21 = prompt ("Ingresa el tercer número de la matriz")
var a22 = prompt ("Ingresa el cuarto número de la matriz")

var resultado = a11*a22 - a12*a21

alert (resultado)
*/

// Ejercicio 10
/*
var a11 = parseInt(prompt("Ingresa el primer número de la matriz"))
var a12 = parseInt(prompt("Ingresa el segundo número de la matriz"))
var a21 = parseInt(prompt("Ingresa el tercer número de la matriz"))
var a22 = parseInt(prompt("Ingresa el cuarto número de la matriz"))

var resultado = a11 * a22 - a12 * a21

alert("A   =    " + a11 + "         " + a12 + "\n" + "            " + a21 + "         " + a22)
*/

//-----------EJERCICIOS: ESTRUCTURAS CONDICIONALES Y REPETITIVAS EN JAVASCRIPT-----------

// Ejercicio 1
/*
var numero1 = 5;
var numero2 = 8;

if(numero1 <= numero2)
{
    alert(numero1 + " no es mayor que " + numero2);
}

if(numero2 > 0)
{
  alert(numero2 + " es positivo");
}

if(numero1 < 0 || numero1 != 0)
{
  alert(numero1 + " es negativo o distinto de cero");
}

if(numero1++ <= numero2)
{
  alert("Incrementar en 1 unidad el valor de " + numero1 + " no lo hace mayor o igual que " + numero2);
}
*/

// Ejercicio 2

/*
var numero = prompt("Ingresa un número para que se muestre su factorial.");
var resultado = 1;

for(var i = 1; i <= numero; i++)
{
  resultado *= i;
}

alert("El resultado es " + resultado);
*/

// Ejercicio 3
/*
var numero1 = parseInt(prompt("Ingrese el primero número."))
var numero2 = parseInt(prompt("Ingrese el segundo número."))
var suma = numero1 + numero2
var resta = numero1 - numero2
var division = numero1 / numero2
var multiplicacion = numero1 * numero2

if (numero1 > numero2)
{
	alert("La suma es " + suma + " y la resta es " + resta)
}
else if (numero1 == numero2)
{
	alert (numero1 + " es igual a " + numero2)
}
else
{
	alert("la multiplicación es " + multiplicacion + " y la división es " + division)
}
*/

//Ejercicio 4
/*
var numeroCuenta
var nombre
var saldo = 0
var saldoAcreededor = 0

do
{
	numeroCuenta = parseInt(prompt("Ingrese su número de cuenta:"))
    if (numeroCuenta >= 0)
	{
		nombre = prompt("Ingrese su nombre: ")
		saldo = parseInt(prompt("Saldo actual: "))
    	if (saldo > 0)
		{
        	saldoAcreededor += saldo
        	document.write(nombre +" tiene estado de cuenta acreededor <br>")
      	}
		else if (saldo < 0)
		{
			document.write(nombre + " tiene estado de cuenta deudor<br>")
	  	}
        else
        {
          document.write(nombre +" tiene saldo nulo<br>")
        }
    }
}

while(numeroCuenta > 0)
{
	document.write("La suma total de saldos acreedores es: " + saldoAcreededor)
}
*/

// Ejercicio 5
/*
var texto = prompt("Ingrese un texto cualquiera.")
var numeroVeces = parseInt(prompt("Ingrese el número de veces que quiere que se repita."))
var salida = ""
numeroVeces = parseInt(numeroVeces, 10)

for(i = 1; i <= numeroVeces; i++)
{
	salida += texto + "\n"
}

alert(salida)
*/

//Ejercicio 6
/*
var salida
var suma = 0

for(multiplo = 11; multiplo < 3000; multiplo += 11)
{
	salida = salida + multiplo +' '
	suma += multiplo
}
alert(salida + "\nLa Suma de todos ellos es: " + suma)
*/
/*
//Ejercicio 7

var lista1 = 0
var lista2 = 0
var n_veces = 0
var numero

while(n_veces < 3)
{
    numero = parseInt(prompt("Ingrese un valor para la primera lista:"))
    lista1 += numero
    n_veces += 1
}

n_veces = 0

while(n_veces < 3)
{
    numero = parseInt(prompt("Ingrese un valor para la segunda lista:"))
    lista2 += numero
    n_veces += 1
}

if (lista1 > lista2)
{
	alert("La Lista 1 tiene mayor valor.")
}
else if (lista2 > lista1)
{
	alert("La Lista 2 tiene mayor valor.")
}
else
{
	alert("Las listas poseen el mismo valor.")
}
*/

//Ejercicio 8
/*
var ladoAB = parseInt(prompt("Ingrese la longitud del lado AB"))
var ladoAC = parseInt(prompt("Ingrese la longitud del lado AC"))
var ladoBC = parseInt(prompt("Ingrese la longitud del lado BC"))

if (ladoBC + ladoAC <= ladoBC || ladoAB + ladoBC <= ladoAC || ladoBC + ladoAC <= ladoAB)
{
	alert("No es triángulo.")
}
else if (ladoAB == ladoAC && ladoAC == ladoBC)
{
	alert("El triángulo es equilatero.")
}
else if (ladoAC == ladoAB || ladoBC == ladoAB || ladoBC == ladoAC)
{
	alert("El triángulo es isósceles.")
}
else if (ladoAB * ladoAB + ladoBC * ladoBC == ladoAC * ladoAC || ladoBC * ladoBC + ladoAC * ladoAC == ladoAB * ladoAB)
{
	alert("El triángulo es rectángulo.")
}
else
{
	alert("El triángulo es escaleno.")
}
*/

// Ejercicio 9

/*
var palabra = prompt("Ingrese una de estas palabras: casa, mesa, perro, gato si quiere traducirla al ingles")

switch (palabra)
{
    case "casa":document.write("house")
    break
    case "mesa":document.write("table")
    break
    case "perro":document.write("dog")
    break
    case "gato":document.write("cat")
    break
}
*/

// Ejercicio 10
/*
var numeroDocumento
var edad
var sexo
var totalPersonas = 0
var numeroVarones = 0
var numeroMujeres = 0
var añosCantidadVarones = 0

  do
{
	numeroDocumento = parseInt(prompt("Ingrese su número de documento."))
    if (numeroDocumento > 0)
    {
		edad = parseInt(prompt("Ingrese su edad."))
		sexo = prompt("Ingrese su sexo. (masculino o femenino)")
		if (sexo == "masculino")
		{
        	numeroVarones += 1
	        if (edad >= 16 && edad <= 65)
	        {
				añosCantidadVarones += 1
	        }
        }
		else if (sexo == "femenino")
		{
        	numeroMujeres += 1
		}
		totalPersonas += 1
	}
}

while(numeroDocumento != 0)
document.write("Total de personas censadas: " +totalPersonas+ "<br>")
document.write("Número de varones: " +numeroVarones+ "<br>")
document.write("Numero de mujeres: " +numeroMujeres+ "<br>")
document.write("Cantidad de varones entre los 16 y 65 años: "+añosCantidadVarones+ "<br>")
*/

//-----------------------------EJERCICIO: ARREGLOS----------------------------

// Ejercicio 1
/*
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numero = prompt("Introduce tu número de DNI (sin la letra)")
var letra = prompt("Introduce la letra de tu DNI (en mayúsculas)")
letra = letra.toUpperCase()

if(numero < 0 || numero > 99999999)
{
  alert("El número proporcionado no es válido")
}
else
{
  var letraCalculada = letras[numero % 23]
  if(letraCalculada != letra)
  {
    alert("La letra o el número proporcionados no son correctos")
  }
  else
  {
    alert("El número de DNI y su letra son correctos")
  }
}
*/

//Ejercicio 2
/*
var nombres = [["Javier", "Miguel"], ["Marcelo", "Victor"]]

nombres.push(["Lladocito", "Aldo"])

document.write(nombres)
*/

// Ejercicio 3
/*
var meses = [" Enero", " Febrero", " Marzo", " Abril", " Mayo", " Junio", " Julio", " Agosto", " Setiembre", " Octubre", " Noviembre", " Diciembre"]

alert(meses)
*/

// Ejercicio 4
/*
var valores = [true, 5, false, "hola", "adios", 2]
var valor1 = valores[0]
var valor2 = valores[2]

var resultado = valores[3] > valores[4]
document.write(resultado + "<br>")

resultado = valor1 || valor2
document.write(resultado + "<br>")

resultado = valor1 && valor2
document.write(resultado + "<br>")

var n1 = valores[1]
var n2 = valores[5]

var suma = n1 + n2
document.write(suma + "<br>")

var resta = n1 - n2
document.write(resta + "<br>")

var multiplicacion = n1 * n2
document.write(multiplicacion + "<br>")

var division = n1 / n2
document.write(division + "<br>")

var modulo = n1 % n2
document.write(modulo + "<br>")
/*

// Ejercicio 5
/*
var numero
var suma = 0
var n_veces = 0

while (n_veces < 10)
{
	numero = parseInt(prompt("Ingrese un número:"))
	suma += numero
	n_veces += 1
}

alert("La suma es " + suma)
*/

//------------------------------EJERCICIOS: FUNCIONES---------------------------------------

//Ejercicio 1
/*
var n1 = parseInt(prompt("Ingrese el primer valor:"))
var n2 = parseInt(prompt("Ingrese el segundo valor:"))
var n3 = parseInt(prompt("Ingrese el tercer valor:"))

function numeroMenor(n1, n2, n3)
{
	if (n1 < n2 && n1 < n3)
    {
		document.write("El menor es:" + n1)
    }
    else if (n2 < n3)
    {
		document.write("El menor es:" + n2)
    }
    else
    {
		document.write("El menor es:" + n3)
    }
}

document.write("Los tres números son " + n1 + " " + n2 + " " + n3 + "<br>")
numeroMenor(n1, n2, n3);
*/

// Ejercicio 2
/*
var numero = parseInt(prompt("Introduce un número entero"))

var r = parImpar(numero)

function parImpar(numero)
{
  if(numero % 2 == 0)
  {
    alert("El número " + numero + " es " + "par.")
  }
  else
  {
    alert("El número " + numero + " es " + "impar.")
  }
}
*/

// Ejercicio 3
/*
var a1 = parseInt(prompt("Ingresa el primer valor."))
var a2 = parseInt(prompt("Ingresa el segundo valor."))
var a3 = parseInt(prompt("Ingresa el tercer valor."))

function numerosOrdenados(a1, a2, a3)
{
	if (a1 < a2 && a1 < a3)
	{
		document.write(a1 + " ")
		if (a2 < a3)
		{
			document.write(a2 + " " + a3)
		}
		else
		{
	  	document.write(a3 + " " + a2)
		}
	}
	else if (a2 < a3)
	{
		document.write(a2 + " ")
		if (a1 < a3)
		{
			document.write(a1 + " " + a3)
		}
		else
		{
			document.write(a3 + " " +a1)
	  	}
	}
	else
	{
		document.write(a3 + " ")
		if (a1 < a2)
		{
			document.write(a1 + " " + a2)
		}
		else
		{
			document.write(a2 + " " + a1)
		}
	}
}


document.write("Los tres números que ingresaste fueron " + a1 + " " + a2 + " " + a3 + "<br>")
document.write("Los números ordenados de menor a mayor son: ")
numerosOrdenados(a1, a2, a3)
*/

// Ejercicio 4
/*
function info(cadena)
{
    var resultado = "La cadena \"" + cadena + "\" "
    if(cadena == cadena.toUpperCase())
    {
        resultado += " la forman mayúsculas." + "<br>"
    }
    else if(cadena == cadena.toLowerCase())
    {
        resultado += " la forman minúsculas." + "<br>"
    }
    else
    {
        resultado += " la forman mayúsculas y minúsculas." + "<br>"
    }
    return resultado
}

document.write(info("ONG"))
document.write(info("se acercan las elecciones."))
document.write(info("AaBbCcDdEeFfGgHhIiJjKk"))
*/

// Ejercicio 5

/*
function palindromo(cadena)
{
    var resultado = "La cadena \" " + cadena + " \" \n "
    var cadenaOriginal = cadena.toLowerCase()
    var letrasEspacios = cadenaOriginal.split("")
    //"La ruta blablabla"
    //letrasEspacios = ["La"," ","ruta"," ","blablabla"]

    var cadenaSinEspacios = ""

    for(i in letrasEspacios)
    {
        if(letrasEspacios[i] != " ")
        {
            cadenaSinEspacios += letrasEspacios[i]
        }
    }

    //cadenasSinEspacios = "Larutablablabla"

    var letras = cadenaSinEspacios.split("")

    //letras = ["L","a","r","u"...]
    //letrasAlreves = ["L","a","r",...]

    var letrasAlReves = cadenaSinEspacios.split("").reverse()
    var iguales = true

    for(i in letras)
    {
        if(letras[i] == letrasAlReves[i])
        {
        }
        else
        {
            iguales = false
        }
    }

    if(iguales)
    {
        resultado += " es un palindromo." + "<br>"
    }
    else
    {
        resultado += " no es un palindromo." + "<br>"
    }
    return resultado
}

document.write(palindromo("La ruta nos aporto otro paso natural"))
document.write(palindromo("Esta cadena no es un palindromo"))
*/

// Ejercicio 6

/*
var numero1 = parseInt(prompt("Ingrese el primer número:"))
var numero2 = parseInt(prompt("Ingrese el segundo número:"))
var operacion = prompt("Ingrese la operación que desee efectuar (x,/,+,-):")

function calculadora(numero1,numero2,operacion)
{
	var resultado = 0.0

	if (operacion == 'x')
	{
		resultado = numero1*numero2
	}
	else if (operacion == '/')
	{
		resultado = numero1/numero2
	}
	else if (operacion == '+')
	{
		resultado = numero1 + numero2
	}
	else if (operacion == '-')
	{
		resultado = numero1 - numero2
	}
	else
	{
		alert("Ingrese una operación válida.")
	}

	alert("El resultado es " + resultado)
}

calculadora(numero1,numero2,operacion)
*/

// Ejercicio 7

/*
var numero1 = parseInt(prompt("Ingrese el primer número:"))
var numero2 = parseInt(prompt("Ingrese el segundo número:"))

function suma_cuadrado(numero1,numero2)
{
	var suma = numero1 + numero2
	suma *= suma
	alert("El resultado es " + suma)
}

suma_cuadrado(numero1,numero2)
*/

// Ejercicio 8

/*
var numero = parseInt(prompt("Ingrese un número:"))

function es_primo(numero)
{
	var primo = true

	for (var divisor=2; divisor < numero; divisor++)
	{
		if (numero%divisor == 0)
		{
			primo = false
		}
	}

	if (primo == true)
	{
		alert("Es primo.")
	}
	else
	{
	alert("No es primo.")
	}
}

es_primo(numero)
*/

// Ejercicio 9

/*
var numero = parseInt(prompt("Ingrese un número."))

function multiplos(numero)
{
	for (var multiplo = 0; multiplo <= 9; multiplo++) 
	{
		var resultado = numero * multiplo
		document.write(numero + " x " + multiplo + " = " + resultado + "<br>")
	}
}

multiplos(numero)
*/

// Ejercicio 10

/*
var numero = prompt("Ingrese un número:")

function digitos(numero)
{
	alert(numero + " tiene " + numero.length + " dígitos.")
}

digitos(numero)
*/

// -------------------------------EJERCICIO DE OBJETOS----------------------------

// Ejercicio 1

var factura1 = 
{
	nombre_empresa: 'Entel',
	elementos: [45,56,78],
	//igv: 0.18
	importe_total: 0.0,

	calcular_importe: function()
	{
		for(var indice=0; indice < this.elementos.length; indice++)
		{
			this.importe_total += this.elementos[indice] 
		}
	}

}

alert(factura1.nombre_empresa)

factura1.calcular_importe()
alert(factura1.importe_total)

/*
function Factura(nombre_empresa)
{
	this.nombre_empresa = nombre_empresa
}

var factura2 = new Factura('claro')
alert(factura2.nombre_empresa) 
*/
