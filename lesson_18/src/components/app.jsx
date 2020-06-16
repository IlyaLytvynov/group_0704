import React from 'react';
import ReactDOM from 'react-dom';
import { Dropdown } from './dropdown/Dropdown.jsx';

class Lighter extends React.Component {
  constructor() {
    super();
    this.state = {
      isEnabled: false,
    };
  }
  clickHandler() {
    this.setState({ isEnabled: !this.state.isEnabled });
    console.log(this.state.isEnabled);
  }
  render() {
    console.log(this.props);
    const styles = {
      backgroundColor: this.state.isEnabled ? this.props.color : 'white',
    };
    return (
      <button
        onClick={() => this.clickHandler()}
        className='lighter'
        style={styles}
      >
        {this.props.title}
      </button>
    );
  }
}
const countries = ['USA', 'CANADA', 'UKRAINE', 'UGANDA'];
ReactDOM.render(
  <div>
    {/* JSX TAGS */}
    <Lighter color='red' title='Hello' />
    <Dropdown options={countries} />
  </div>,
  document.querySelector('#root')
);
