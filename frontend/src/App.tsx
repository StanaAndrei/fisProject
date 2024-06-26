import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Navigate
} from "react-router-dom";
import Nav from './components/Nav/Nav';
import Login from './Pages/Auth/Login';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Logout from './Pages/Auth/Logout';
import Profile from './Pages/Profile/Profile';
import Me from './Pages/Profile/Me';
import EditProfile from './Pages/EditProfile/EditProfile';
import RegisterOther from './Pages/RegisterOther/RegisterOther';
import Newbies from './Pages/Newbies/Newbies';
import Emps from './Pages/Emps/Emps';
import ChPassword from './Pages/ChPassword/ChPassword';
import CreateOther from './Pages/CreateOther/CreateOther';

function App(): ReturnType<React.FC> {

  return <Router>
    <Nav />
    <Routes>

      <Route index path='' element={ <Home /> } />
      <Route path='/home' element={ <Home /> } />
      <Route path='/edit-profile/:userId' element={ <EditProfile /> } />
      <Route path='/logout' element={ <Logout /> } />
      <Route path='/profile/:userId' element={ <Profile /> } />
      <Route path='/me' element={ <Me /> } />
      <Route path='/mk-other' element={ <RegisterOther /> } />
      <Route path='/newbies/:userId' element={ <Newbies /> } />
      <Route path='/emps' element={ <Emps /> } />
      <Route path='/change-password' element={ <ChPassword /> } />
      <Route path='/create-other' element={ <CreateOther /> } />


      <Route path='/login' element={ <Login /> } />
      <Route path='/register' element={ <Register /> } />

    </Routes>
  </Router>
}

export default App
