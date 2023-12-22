const urlWorks = "http://localhost:5678/api/works";

fetch(urlWorks)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Erreur");
    }
    return response.json();
  })

  .then((data) => {
    const gallery = document.querySelector(".gallery");
    for (const elements of data) {
      const project = createWork(elements);
      gallery.appendChild(project);
    }
  });

function createWork(elements) {
  const project = document.createElement("figure");
  const img = document.createElement("img");
  const imgTitle = document.createElement("figcaption");

  img.src = elements.imageUrl;
  imgTitle.innerText = elements.title;

  project.appendChild(img);
  project.appendChild(imgTitle);

  project.classList.add("project");
  project.setAttribute("data-category", elements.category.name);

  return project;
}

// Filtres

fetch("http://localhost:5678/api/categories").then((response) => {
  if (!response.ok) {
    throw new Error("Erreur");
  }
  return response.json();
});
