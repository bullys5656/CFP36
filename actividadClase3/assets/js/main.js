function sumando()
{
    var num1=Number( document.getElementById("num1").value);
    var num2=Number(document.getElementById("num2").value);
    var elementoResultado = document.getElementById("resultado");
 


    if(num1>0&&num2>0)
    {
        var resultado= num1+num2;
        elementoResultado.textContent = `el resultado es  (${resultado})`

        document.getElementById('num1').value=``;
        document.getElementById('num2').value=``;
   
    }
    else{
        alert("Los numeros ingresados tienen que ser mayores a 0");
    
}



}

function isEmptyObject(obj) {
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            return false;
        }
    }
    return true;
}