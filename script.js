const outerRing = document.querySelector(".outer-ring");
const innerWave = document.querySelector(".inner-wave");
const outerCircles = document.querySelectorAll(".outer-circle");

function updateVisualizer(amplitude) {
  const dashOffset = 880 - amplitude * 1200; // Adjust based on input
