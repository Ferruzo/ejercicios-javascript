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

// TAREA

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

// -------------------------------------------------------------------

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

// TAREA
