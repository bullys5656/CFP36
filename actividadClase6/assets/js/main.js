function saveAlbum() {
  //capturo el valor de los input del html
  const userId = document.getElementById("userId").value;
  const title = document.getElementById("title").value;
  //Verifico que no esten vacios
  //title==""
  if (userId == 0 || title.length == 0) {
    return alert("Complete los campos");
  }
  //POST
  //https://jsonplaceholder.typicode.com/albums
  //{
  //"userId": 1,
  //"id": 1,
  //  "title": "quidem molestiae enim"
  //}


  
}
