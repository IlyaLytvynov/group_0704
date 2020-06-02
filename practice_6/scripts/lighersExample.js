function randomRgba() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return (
    'rgba(' +
    o(r() * s) +
    ',' +
    o(r() * s) +
    ',' +
    o(r() * s) +
    ',' +
    r().toFixed(1) +
    ')'
  );
}

export function createLights(count, rootElement) {
  while (count > 0) {
    const light = document.createElement('div');
    light.classList.add('light');
    rootElement.append(light);
    count--;
  }

  rootElement.addEventListener('click', (e) => {
    if (e.target.classList.contains('light')) {
      e.target.style.backgroundColor = randomRgba();
    }
  });
}
