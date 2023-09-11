function sumar()
{
    //obtiene los valores de los campos de entrada
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    //Verifica que los campos no estén vacios
    if(isNaN(num1) || isNaN(num2))
    {
        alert("Por favor, ingresa números válidos en ambos campos.");
        return;
    }
    else{

        //Realiza la suma
        let suma = num1 + num2;
        //muestra el resultado
        let alert = document.getElementById('alertResul');
        let resultado = document.getElementById('resul');
        resultado.innerHTML = Math.round(suma,2);
        alert.hidden = false;

        //cambia el color de la alerta según el resultado
    if(suma > 10)
    {
        alert.className = "alert alert-success mostrar";
    }
    else {
        alert.className = "alert alert-danger mostrar";
    }
    }
}

function multiplicar()
{
    //obtiene los valores de los campos de entrada
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    //Verifica que los campos no estén vacios
    if(isNaN(num1) || isNaN(num2))
    {
        alert("Por favor, ingresa números válidos en ambos campos.");
        return;
    }
    else{

        //Realiza la suma
        let mul = num1 * num2;
        //muestra el resultado
        let alert = document.getElementById('alertResul');
        let resultado = document.getElementById('resul');
        resultado.innerHTML = Math.round(mul,2);
        alert.hidden = false;

        //cambia el color de la alerta según el resultado
    if(mul > 10)
    {
        alert.className = "alert alert-success mostrar";
    }
    else {
        alert.className = "alert alert-danger mostrar";
    }
    }
}

function dividir()
{
    //obtiene los valores de los campos de entrada
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    //Verifica que los campos no estén vacios
    if(isNaN(num1) || isNaN(num2))
    {
        alert("Por favor, ingresa números válidos en ambos campos.");
        return;
    }
    else{

        //Realiza la suma
        let div = num1 / num2;
        //muestra el resultado
        let alert = document.getElementById('alertResul');
        let resultado = document.getElementById('resul');
        resultado.innerHTML = Math.round(div,2);
        alert.hidden = false; 

        //cambia el color de la alerta según el resultado
    if(div > 10)
    {
        alert.className = "alert alert-success mostrar";
    }
    else {
        alert.className = "alert alert-danger mostrar";
    }
    }
}