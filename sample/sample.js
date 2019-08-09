import React, { Component } from 'react';
import { Switch } from 'react-switch-input';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      switchExternalDomain: 'Activo',
      switchExternalDomainChecked: false
    };
  }

  render() {
    return (
      <div>
        <Switch
          style="two"
          name="switchExternalDomain"
          labelLeft="text left"
          labelRight={this.state.switchExternalDomain}
          onChange={this.handleRulesSwitchChanged}
          checked={this.state.switchExternalDomainChecked}
        />
      </div>
    );
  }

  handleRulesSwitchChanged = e => {
    this.setState({
      [e.target.name]: e.target.checked ? 'Activo' : 'Inactivo',
      [e.target.name + 'Checked']: e.target.checked
    });
  };
}

ReactDOM.render(<App />, document.getElementById('root'));