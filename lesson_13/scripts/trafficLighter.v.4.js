const ACTIVE_CLASS_NAME = 'active';

function createLight(color) {
  const light = document.createElement('div');
  light.classList.add('traffic-lighter__light', color);
  return light;
}

function createLights(rootElement) {
  const lights = [];
  const colors = ['red', 'red', 'red', 'yellow', 'yellow', 'green', 'green'];
  for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    const light = createLight(color);
    lights.push(light);
    rootElement.appendChild(light);
  }
  return lights;
}

function trafficLighter(rootElement) {
  const lights = createLights(rootElement);

  rootElement.classList.add('traffic-lighter');

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
}

export { trafficLighter };
