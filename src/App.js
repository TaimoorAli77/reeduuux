import React from 'react';
import NavBar from './component/NavBar';
import UserName from './component/UserName';

const App = () => {
  return (
    <div>
      <NavBar name="Who is using"/>
      <div className="container">
      <h1 className='my-5'>Change the User-Identity using Redux</h1>
      <UserName />
      </div>
    </div>
  );
}

export default App;


