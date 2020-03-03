import React from 'react';
import ProfileE from './components/Profile-E/profile-e';
import HomeE from './components/Home-E/home-e';


function App() {
  return (
    <div className="App row">
      <div className="col-xl-4">
        <ProfileE/>
      </div>
      <div className="col-xl-8">
        <HomeE/>
      </div>
    </div>
  );
}

export default App;
