class Button {
  /**
   * @param {DOMNode} root - элемент куда будет отрисована кнопка
   * @param {String} label - текст внутри кнопки
   * @param {String} type - тип кнопки фозможные вариант 'default'|'success'
   */
  constructor(root, label, type, onClick) {
    this.root = root;
    this.label = label;
    this.type = type;
    this.onClick = onClick;
  }

  render() {
    this.btnElement = document.createElement('button');
    this.btnElement.textContent = this.label;
    this.btnElement.classList.add('btn');
    if (this.type === 'default') {
      this.btnElement.classList.add('btn_default');
    }
    if (this.type === 'success') {
      this.btnElement.classList.add('btn_success');
    }

    this.btnElement.addEventListener('click', this.onClick);
    this.root.append(this.btnElement);
  }
}

export { Button };
