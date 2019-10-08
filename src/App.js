import React from 'react';
import Profile from './components/Profile/profile';
import Home from './components/Home/home';

function App() {
  return (
    <div className="App row">
      <div className="col-xl-4">
        <Profile/>
      </div>
      <div className="col-xl-8">
        <Home/>
      </div>
    </div>
  );
}

export default App;
