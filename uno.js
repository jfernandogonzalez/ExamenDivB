
function mostrar()
{
	let nombre;
	let edad;
	let acumEdad=0;
	let tipo;
	let dosis;
	let pDosis=0;
	let sDosis=0;
	let sexo;
	let acumVac=0;
	let acumVR=0;
	let acumVa=0;
	let acumVC=0;
	let edadMax=0;
	let nombreFMaxVac;
	let tipoMaxVac;
	let flag=1;
	let promedioEdadVacR=0;
	let porcentajeDosDosis=0;
	let tipoMenDosis;
	let seguir;
	let porcentajeVacA;

	do
	{
	nombre=prompt("Por favor ingrese su nombre.");
	while(nombre.length <3 || nombre.length>=10)
	{
		nombre=prompt("Numero de caracteres invalidos, por favor ingrese un nombre valido.");
	}
	edad=parseInt(prompt("Por favor ingrese su edad."));
	while(isNaN(edad) || edad<12)
	{
		edad=parseInt(prompt("Edad invalida, por favor reingrese su edad."));
	}
	sexo=prompt("Por favor ingrese su sexo. (f/m)").toLowerCase();
	while(sexo!="f" && sexo!="m")
	{
		sexo=prompt("Sexo invalido, por favor reingrese su sexo");
	}
	dosis=prompt("Por favor ingrese la dosis a aplicar.(Primera/Segunda").toLowerCase();
	while(dosis!="primera" && dosis!="segunda")
	{
		prompt("Dosis invalida, reingrese la dosis.");
	}
	tipo=prompt("Por favor ingrese el tipo de vacuna a colocarse.(Rusa, China, Americana").toLowerCase();
	while(tipo!="rusa" && tipo!="china" && tipo!="americana")
	{
		tipo=prompt("Tipo de vacuna invalido, reingrese el tipo de vacuna.").toLowerCase();
	}
	while(edad<=17 && tipo!="americana")
	{
		tipo=prompt("Usted tiene 17 o menos y solo puede colocarse la americana");
	}
	if(tipo=="rusa")
	{
		acumVR++;
		acumVac++;
		acumEdad+=edad;
		promedioEdadVacR=acumEdad/acumVR;
	}
	else if(tipo=="china")
	{
		acumVC++;
		acumVac++;
	}
	else
	{
		acumVa++;
		acumVac++;
	}
	if(dosis=="primera")
	{
		pDosis++;
	}
	else{
		sDosis++;
	}
	if(flag || (sexo=="f" && edad>edadMAx))
	{
		edadMax=edad;
		nombreFMaxVac=nombre;
		tipoMaxVac=tipo;

	}
	seguir=prompt("¿Quiere ingresar mas pacientes? (Si/No)").toLowerCase();
}while(seguir=="si");
if(acumVR>acumVC && acumVR>acumVa)
	{
		tipoMenDosis="Vacuna rusa";
	}
	else if(acumVC>acumVR && acumVC>acumVa)
	{
		tipoMenDosis="Vacuna china";
	}
	else
	{
		tipoMenDosis="Vacuna americana";
	}
	alert("El promedio de edad de personas con vacuna rusa es: "+promedioEdadVacR+"\nEl nombre de la mujer con mas edad: "+nombreFMaxVac +" y el tipo de vacuna es: "+tipoMaxVac+"\nLa vacuna menos inoculada es: "+tipoMenDosis);
}
