const urlWorks = "http://localhost:5678/api/works";

fetch(urlWorks)
  .then((response) => response.json())
  .then((response) => alert(JSON.stringify(response)))
  .catch((error) => alert("Erreur : " + error));
