function createCard(project) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("sm-shadow");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("card-image");

  const image = document.createElement("img");
  image.src = project.imageUrl;
  imageContainer.appendChild(image);

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");
  const cardTitle = document.createElement("h3");
  cardTitle.innerText = project.title;
  const cardDescription = document.createElement("p");
  cardDescription.innerText = project.description;
  cardContent.appendChild(cardTitle);
  cardContent.appendChild(cardDescription);

  const cardLinks = document.createElement("div");
  cardLinks.classList.add("card-links");
  const github = document.createElement("a");
  github.href = project.github;
  github.innerHTML = "<strong>Github</strong>";
  const live = document.createElement("a");
  live.href = project.live;
  live.innerHTML = "<strong>Live</strong>";
  cardLinks.appendChild(github);
  cardLinks.appendChild(live);

  card.appendChild(imageContainer);
  card.appendChild(cardContent);
  card.appendChild(cardLinks);
  return card;
}

const projects = [
  {
    title: "Battleships",
    description: "JavaScript implementation of the classic Battleship game",
    imageUrl: "assets/battleship-thumbnail.png",
    github: "https://github.com/simon8800/top-battleships",
    live: "https://simon8800.github.io/top-battleships/",
  },
  {
    title: "Todo App",
    description:
      "A todo app that utilizes browser storage for persistent storage",
    imageUrl: "assets/todo-thumbnail.png",
    github: "https://github.com/simon8800/TOP-todo",
    live: "https://simon8800.github.io/TOP-todo/",
  },
  {
    title: "Weather App",
    description: "Weather App using data from WeatherAPI",
    imageUrl: "assets/weather-thumbnail.png",
    github: "https://github.com/simon8800/top-weather-app",
    live: "https://simon8800.github.io/top-weather-app/",
  },
];

const projectsCase = document.querySelector(".projects-case");
projects.forEach((project) => {
  const projectCard = createCard(project);
  projectsCase.appendChild(projectCard);
});
