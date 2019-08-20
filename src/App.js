import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Switch from '@material-ui/core/Switch';

function App() {
  const [switchState, setSwitchState] = useState([]);
  function handleChange(id, e) {
    let current = [...switchState];
    if (e.target.checked) {
      current.push(id);
    } else {
      debugger;
      var index = current.indexOf(id);
      if (index > -1) {
        current.splice(index, 1);
      }
    }
    setSwitchState(current);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Multilpe Switches example handled with single state</p>
        <Switch
          checked={switchState.includes('A')}
          onChange={e => handleChange('A', e)}
          value="A"
        />
        <Switch
          checked={switchState.includes('B')}
          onChange={e => handleChange('B', e)}
          value="B"
        />
        <Switch
          checked={switchState.includes('C')}
          onChange={e => handleChange('C', e)}
          value="C"
        />
        <Switch
          checked={switchState.includes('D')}
          onChange={e => handleChange('D', e)}
          value="D"
        />
      </header>
    </div>
  );
}

export default App;
