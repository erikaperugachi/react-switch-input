import React, { Component } from 'react';
import './switch.css';

class Switch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={"input-switch" + ( this.props.disabled ? " disabled" : "") + " style-switch-" + (this.props.style ? this.props.style : "one")}>
        { this.props.labelLeft
          ? <label htmlFor={this.props.name}>{this.props.labelLeft}</label>
          : null
        }
        <input 
          type="checkbox"
          id={this.props.name}
          name={this.props.name}
          checked={this.props.checked}
          disabled={this.props.disabled}
          onChange={this.props.onChange}/>
        <label htmlFor={this.props.name}></label>
        { this.props.labelRight
          ? <label htmlFor={this.props.name}>{this.props.labelRight}</label>
          : null
        }
      </div>
    );
  }
}

export default Switch;
