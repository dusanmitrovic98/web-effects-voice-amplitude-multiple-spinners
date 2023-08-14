const outerRing = document.querySelector(".outer-ring");
const innerWave = document.querySelector(".inner-wave");
const outerCircles = document.querySelectorAll(".outer-circle");

function updateVisualizer(amplitude) {
  const dashOffset = 880 - amplitude * 1200; // Adjust based on input

  document.querySelectorAll(".outer-ring").forEach((ring, index) => {
    ring.style.strokeDashoffset = dashOffset + index * 20; // Adjust the multiplier for spacing
  });
