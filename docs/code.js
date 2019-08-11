export const basicSwitch = `
import React from 'react';
import { Switch } from 'react-switch-input';

const App = () => (
  <Switch/>
)

ReactDOM.render(<App />, document.getElementById('root'));
`

export const getValueSwitch = `
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: undefined,
    };
  }

  render() {
    return (
      <div>
        <Switch
          onChange={this.handleChangeSwitch}
        />
        <span>{`+'`Value: ${this.state.value}`'+`}</span>
      </div>
    );
  }

  handleChangeSwitch = e => {
    const value = e.target.checked;
    this.setState({value});
  }
}
`

export const controlSwitch = `
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true
    };
  }

  render() {
    return (
      <div>
        <Switch
          checked={this.state.checked}
          onChange={this.handleChangeSwitch}
        />
      </div>
    );
  }

  handleChangeSwitch = e => {
    const checked = e.target.checked;
    this.setState({checked});
  }
}
`

export const someSwitches = `
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstChecked: true,
      secondChecked: false
    };
  }

  render() {
    return (
      <div>
        <Switch
          name={"first"}
          checked={this.state.firstChecked}
          onChange={this.handleChangeSwitch}
        />
        <Switch
          name={"second"}
          checked={this.state.secondChecked}
          onChange={this.handleChangeSwitch}
        />
      </div>
    );
  }

  handleChangeSwitch = e => {
    this.setState({
      [`+'`${e.target.name}Checked`'+`]: e.target.checked
    });
  }
}
`

export const labelSwitch = `
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      label: 'On'
    };
  }

  render() {
    return (
      <div>
        <Switch
          name="light"
          labelLeft="Light: "
          labelRight={this.state.lightLabel}
          checked={this.state.checked}
          onChange={this.handleChangeSwitch}
        />
      </div>
    );
  }

  handleChangeSwitch = e => {
    const checked = e.target.checked;
    const lightLabel = checked ? 'On' : 'Off';
    this.setState({checked, lightLabel});
  }
}
`

export const disabledSwitch = `
<Switch
  disabled={true}
/>
`

export const themeSwitch = `
<Switch
  name={"themeOne"}
  theme={"one"}
/>
<Switch
  name={"themeTwo"}
  theme={"two"}
/>
`