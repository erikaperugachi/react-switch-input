import React, { Component } from 'react';
import { Switch } from 'react-switch-input';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { basicSwitch, getValueSwitch, controlSwitch, someSwitches, labelSwitch, disabledSwitch, themeSwitch } from './code';
import './sample.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basicChecked: false,
      controlChecked: true,
      firstChecked: true,
      secondChecked: false,
      lightChecked: true,
      lightLabel: 'On'
    };
  }

  render() {
    return (
      <div>
        <nav>
        <svg height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
        </nav>
        <header>
          <h1>react-switch-input</h1>
          <p>A simple input switch.<br/>
          Easy to install and set up.<br/>
          Beautiful themes.<br/>
          </p>
        </header>
        <section>
          <div id="section-installation">
            <h2>Installation</h2>
            <p>
              <span>NPM</span><code>npm install react-switch-input</code><br/>
              <span>YARN</span><code>yarn add react-switch-input</code><br/>
              <span>import</span><code>{"import { Switch } from 'react-switch-input';"}</code>
            </p>
          </div>
          <div>
            <h2>How use it?</h2>
            <article>
              <div>
                <h3>Basic usage</h3>
                <p>Just adding switch component without props</p>
                <div>
                  <Switch/>
                </div>
              </div>
              <SyntaxHighlighter language="javascript" style={docco}>
                {basicSwitch}
              </SyntaxHighlighter>
            </article>
            <article id="article-value">
              <div>
                <h3>Get value</h3>
                <p>Get switch value to each change</p>
                <div>
                  <Switch
                    name="basic"
                    onChange={this.handleChangeSwitch}
                  />
                  <span>{`Value: ${this.state.basicChecked}`}</span>
                </div>
              </div>
              <SyntaxHighlighter language="javascript" style={docco}>
                {getValueSwitch}
              </SyntaxHighlighter>
            </article>
            <article>
              <div>
                <h3>Control value</h3>
                <p>Get and set value to each change.<br/>
                In this case, you can initialize the checked value.</p>
                <div>
                  <Switch
                    name="control"
                    checked={this.state.controlChecked}
                    onChange={this.handleChangeSwitch}
                  />
                </div>
              </div>
              <SyntaxHighlighter language="javascript" style={docco}>
                {controlSwitch}
              </SyntaxHighlighter>
            </article>
            <article id="article-switches">
              <div>
                <h3>Handle some switches</h3>
                <p>To handle differents switches with the same onChange function, you can define each switch by props name.</p>
                <div>
                  <Switch
                    name="first"
                    checked={this.state.firstChecked}
                    onChange={this.handleChangeSwitch}
                  />
                  <Switch
                    name="second"
                    checked={this.state.secondChecked}
                    onChange={this.handleChangeSwitch}
                  />
                </div>
              </div>
              <SyntaxHighlighter language="javascript" style={docco}>
                {someSwitches}
              </SyntaxHighlighter>
            </article>
            <article>
              <div>
                <h3>Using left and right label</h3>
                <p>You can define text to left or right of switch</p>
                <Switch
                    name="light"
                    labelLeft="Light: "
                    labelRight={this.state.lightLabel}
                    checked={this.state.lightChecked}
                    onChange={this.handleChangeSwitch}
                  />
              </div>
              <SyntaxHighlighter language="javascript" style={docco}>
                {labelSwitch}
              </SyntaxHighlighter>
            </article>
            <article>
              <div>
                <h3>Set disabled</h3>
                <p>You can enabled/disabled the switch</p>
                <Switch
                  disabled={true}
                />
              </div>
              <SyntaxHighlighter language="javascript" style={docco}>
                {disabledSwitch}
              </SyntaxHighlighter>
            </article>
            <article id="article-theme">
              <div>
                <h3>Set theme</h3>
                <p>You can select differents themes</p>
                <Switch
                  name={"themeOne"}
                  theme={"one"}
                />
                <Switch
                  name={"themeTwo"}
                  theme={"two"}
                />
              </div>
              <SyntaxHighlighter language="javascript" style={docco}>
                {themeSwitch}
              </SyntaxHighlighter>
            </article>
          </div>
        </section>
      </div>
    );
  }

  handleChangeSwitch = e => {
    this.setState({
      [`${e.target.name}Label`]: e.target.checked ? 'On' : 'Off',
      [`${e.target.name}Checked`]: e.target.checked
    });
  }
}

ReactDOM.render(<App />, document.getElementById('root'));