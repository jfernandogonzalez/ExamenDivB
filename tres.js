function mostrar()
{
    let origen,
    cantidad,
    costo,
    acumCostos=0,
    acumCant=0,
    acumAsia=0,
    acumUsa=0,
    acumEu=0,
	acumVAsia=0,
    origenMaxVac,
    cantMaxVac,
    importeBruto,
    importeNeto,
    descuento=0,
    promedioVacAsia,
    seguir;

    do
    {
        origen=prompt("Por favor ingrese el origen de las vacunas(Asia, Europa, USA").toLowerCase();
        while(origen!="asia" && origen!="USA" && origen!="europa")
        {
            origen=prompt("El origen es incorrecto, por favor ingrese el origen de las vacunas. (Asia, Europa, USA").toLowerCase();
        }
        cantidad=parseInt(prompt("Por favor ingrese la cantidad de vacunas"));
        while(isNaN(cantidad) || cantidad<1)
        {
            cantidad=parseInt(prompt("Cantidad invalida, por favor reingrese la cantidad de vacunas"));
        }
        costo=parseInt(prompt("Por favor ingrese el costo del vuelo"));
        while(isNaN(costo) || (costo<1000000 || costo>5000000))
        {
            costo=parseInt(prompt("Costo invalido, por favor reingrese el costo del vuelo"));
        }
        if(origen=="Asia")
        {
            acumAsia+=cantidad;
			acumVAsia++;
        }
        else if(origen=="Europa")
        {
            acumEu+=cantidad;
        }
        else
        {
            acumUsa+=cantidad
        }
        acumCostos+=costo
        acumCant+=cantidad

        seguir=prompt("¿Quiere seguir ingresando datos?(Si/No").toLowerCase();
    }while(seguir=="si");

    if(acumEu>acumAsia && acumEu>acumUsa)
	{
		origenMaxVac="Europa";
        cantMaxVac=acumEu;
	}
	else if(acumAsia>acumEu && acumAsia>acumUsa)
	{
		origenMaxVac="Asia";
        cantMaxVac=acumAsia;
	}
	else
	{
		origenMaxVac="USA";
        cantMaxVac=acumUsa;
    }

    if(acumCant>4000000)
    {
        descuento=importeBruto*.30;
    }
    else if(acumCant>2000000)
    {
        descuento=importeBruto*.20;
    }
    else{
        descuento=0;
    }
    importeNeto=importeBruto-descuento;
	promedioVacAsia=acumAsia/acumVAsia;
    importeBruto=acumCostos;
 alert("El origen con mayor cantidad de vacunas es: "+origenMaxVac+" con una cantidad de: "+cantMaxVac+" vacunas" +"\nEl promedio de vacunas llegadas de Asia es: "+promedioVacAsia+"\nEl total sin descuentos es: "+importeBruto+"\n" +"\nTiene un descuento de: "+descuento+" y el importe total a pagar seria: "+importeNeto);   
}