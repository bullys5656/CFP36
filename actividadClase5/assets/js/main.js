async function getUser(){
    var apiUser =  await fetch('https://randomuser.me/api/')
    var dataJson =  await apiUser.json()
    var user = dataJson.results[0]

    var fullName= `${user.name.first} ${user.name.last}`
    console.log(fullName)

    const userTotal=` <h2>${fullName}</h2>
    <img src="${user.picture.large}">
    <p>TELEFONO: ${user.phone}</p>
    <p>EMAIL: ${user.email}</p>
    `

document.getElementById("user-muestra").innerHTML=userTotal;
}