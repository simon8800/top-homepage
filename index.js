function createCard() {
  const card = document.createElement("div");
  card.classList.add("card");

  const imageContainer = document.createElement("div");
  const image = document.createElement("img");

  return card;
}

const projects = [
  {
    title: "Battleships",
    description: "JavaScript implementation of the classic Battleship game",
    image: "test.jpeg",
    github: "https://github.com/simon8800/top-battleships",
    live: "https://simon8800.github.io/top-battleships/",
  },
  {
    title: "Todo App",
    description:
      "A todo app that utilizes browser storage for persistent storage",
    image: "test.jpeg",
    github: "https://github.com/simon8800/TOP-todo",
    live: "https://simon8800.github.io/TOP-todo/",
  },
  {
    title: "Weather App",
    description: "Weather App using data from WeatherAPI",
    image: "test.jpeg",
    github: "https://github.com/simon8800/top-weather-app",
    live: "https://simon8800.github.io/top-weather-app/",
  },
];
