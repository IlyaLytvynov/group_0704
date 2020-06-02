import { Button } from './button.js';

class Header {
  constructor(root, buttonLabels) {
    this.root = root;
    this.buttonLabels = buttonLabels;
  }

  render() {
    this.headerElement = document.createElement('header');
    this.headerElement.textContent = this.label;
    this.headerElement.classList.add('page__header');
    for (let label of this.buttonLabels) {
      const btn = new Button(this.headerElement, label, 'success', function () {
        console.log('CLICED IN HEADER');
      });
      btn.render();
    }
    this.root.append(this.headerElement);
  }
}

export { Header };
