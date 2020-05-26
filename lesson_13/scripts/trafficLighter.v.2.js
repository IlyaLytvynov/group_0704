const lights = document.querySelectorAll('.traffic-lighter__light');
const ACTIVE_CLASS_NAME = 'active';

function toggleOffAll() {
  for (let i = 0; i < lights.length; i++) {
    const light = lights[i];
    light.classList.remove(ACTIVE_CLASS_NAME);
  }
}

for (let i = 0; i < lights.length; i++) {
  const light = lights[i];
  light.addEventListener('click', function () {
    toggleOffAll();
    light.classList.add(ACTIVE_CLASS_NAME);
  });
}
