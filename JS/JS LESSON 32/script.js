const lights = document.querySelectorAll(".light");

const lightDurations = [4, 2, 5];
const colors = ["red", "yellow", "green"];

let currentLight = 0;
let totalTime = 0;

function switchLights() {
  lights.forEach((light) => (light.style.backgroundColor = "black"));

  lights[currentLight].style.backgroundColor = colors[currentLight];

  currentLight = (currentLight + 1) % lights.length;


  totalTime = lightDurations[currentLight] * 1000;
}

function startLight() {
  switchLights();
  setInterval(switchLights, totalTime);
}

startLight();
