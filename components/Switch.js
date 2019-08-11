import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './switch.css';

class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
    this.handleOnChanged = this.handleOnChanged.bind(this);
  }

  render() {
    return (
      <div className={"input-switch" + ( this.props.disabled ? " disabled" : "") + " style-switch-" + this.props.theme}>
        { this.props.labelLeft
          ? <label htmlFor={this.props.name}>{this.props.labelLeft}</label>
          : null
        }
        <input 
          type="checkbox"
          id={this.props.name}
          name={this.props.name}
          checked={this.props.onChange ? this.props.checked : this.state.checked}
          disabled={this.props.disabled}
          onChange={this.props.onChange ? this.props.onChange : this.handleOnChanged}/>
        <label htmlFor={this.props.name}></label>
        { this.props.labelRight
          ? <label htmlFor={this.props.name}>{this.props.labelRight}</label>
          : null
        }
      </div>
    );
  }

  handleOnChanged(e) {
    this.setState({
      checked: e.target.checked
    });
  }

}

Switch.defaultProps = {
  name: "switch",
  theme: "one"
}

Switch.propTypes = {
  id: PropTypes.string,
  disabled: PropTypes.bool,
  theme: PropTypes.string,
  name: PropTypes.string,
  labelLeft: PropTypes.string,
  onChange: PropTypes.func,
  labelRight: PropTypes.string
}

export default Switch;