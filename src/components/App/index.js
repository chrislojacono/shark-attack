import React from 'react';
import SharkTank from '../SharkTank';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h2>Shark Tank</h2>
        <button>Test</button>
        <div className="sharkTank">
         <SharkTank />
        </div>
        <div></div>
      </div>
    );
  }
}

export default App;
