import React from 'react';
import './Dropdown.scss';

export class Dropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: true,
      activeElementIndex: 0,
    };
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  activateItem(index) {
    this.setState({ activeElementIndex: index, isOpen: false });
  }
  render() {
    const items = [];
    for (let i = 0; i < this.props.options.length; i++) {
      const item = this.props.options[i];
      let classNames = 'drop-down__item ';
      if (i === this.state.activeElementIndex) {
        classNames += 'drop-down__item_active';
      }
      const el = (
        <li className={classNames} onClick={() => this.activateItem(i)}>
          {item}
        </li>
      );
      items.push(el);
    }
    return (
      <div className='drop-down'>
        <button className='drop-down__title' onClick={() => this.toggle()}>
          {this.props.options[this.state.activeElementIndex]}
        </button>
        {this.state.isOpen ? (
          <ul className='drop-down__options'>{items}</ul>
        ) : null}
      </div>
    );
  }
}
