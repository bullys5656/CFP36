async function getPais(){
var pais= document.getElementById(`pais`).value;
var consultaPais=await fetch(`https://restcountries.com/v3.1/name/${pais}`);
var consultaPaisJson= await consultaPais.json();
//console.log(pais);
//console.log(consultaPaisJson[0]);

const paisTotal=` <h2>${consultaPaisJson[0].name.official}</h2>
<div id="box-bandera"><img src="${consultaPaisJson[0].flags.png}"></div>
<h3>Capital: ${consultaPaisJson[0].capital[0]}</h3>
<h3>Region: ${consultaPaisJson[0].subregion}</h3>

    


`

document.getElementById("box-info").innerHTML=paisTotal;


}