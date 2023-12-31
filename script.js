const outerRing = document.querySelector(".outer-ring");
const innerWave = document.querySelector(".inner-wave");
const outerCircles = document.querySelectorAll(".outer-circle");

function updateVisualizer(amplitude) {
  const dashOffset = 880 - amplitude * 1200; // Adjust based on input

  document.querySelectorAll(".outer-ring").forEach((ring, index) => {
    ring.style.strokeDashoffset = dashOffset + index * 20; // Adjust the multiplier for spacing
  });

  innerWave.style.opacity = amplitude;
  innerWave.style.transform = `scale(${amplitude})`;
}

function simulateVoiceInput() {
  const maxAmplitude = 0.8;
  const randomAmplitude = Math.random() * maxAmplitude;
  updateVisualizer(randomAmplitude);
}

setInterval(simulateVoiceInput, 400);

