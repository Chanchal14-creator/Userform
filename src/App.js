import React,{useState} from 'react';
import User from './components/Present_user';
import Userform from './components/Userform';

function App() {

  const [userlist,setuserlist]=useState([]);

  return (
    <div>
    <Userform/>
    </div>
  );
}

export default App;
