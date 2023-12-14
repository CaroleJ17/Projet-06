const urlWorks = "http://localhost:5678/api/works";

fetch(urlWorks)
  .then((response) => response.json())
  .then((data) => alert(JSON.stringify(data)))
  .catch((error) => alert("Erreur : " + error));
