import React from 'react';
import Home from './Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Button from './components/Button';
import Card from './components/Card';
import Chartarea from './components/Chart/Chartarea';
import Table from './components/Table';
import Registration from './components/Pages/Registration';
import Errorpage from './components/Pages/Errorpage';
import Blank from './components/Pages/Blank';
import Border from './components/Utilities/Border';
import Color from './components/Utilities/Color';
import Ani from './components/Utilities/Ani';
import Other from './components/Utilities/Other';
import Login from './components/Pages/Login'
import Forgotpassword from './components/Pages/Forgotpassword';


function App() {
  return (
    <div id='page-top' className="sidebar-toggled">
        
       <BrowserRouter>
       <Routes> 
        <Route 
        exact
        path='/'
        element={<Home/>}
        ></Route>
        <Route 
        exact
        path='/button'
        element={<Button/>}
        ></Route>
        <Route 
        exact
        path='/card'
        element={<Card/>}
        ></Route>
        <Route 
        exact
        path='/forgotpassword'
        element={<Forgotpassword/>}
        ></Route>
        <Route 
        exact
        path='/chart'
        element={<Chartarea/>}
        ></Route>
        <Route 
        exact
        path='/table'
        element={<Table/>}
        ></Route>
        <Route 
        exact
        path='/registration'
        element={<Registration/>}
        ></Route>
        <Route 
        exact
        path='/login'
        element={<Login/>}
        ></Route>
        <Route 
        exact
        path='/error'
        element={<Errorpage/>}
        ></Route>
        <Route 
        exact
        path='/blank'
        element={<Blank/>}
        ></Route>
        <Route 
        exact
        path='/border'
        element={<Border/>}
        ></Route>
        <Route 
        exact
        path='/color'
        element={<Color/>}
        ></Route>
        <Route 
        exact
        path='/animation'
        element={<Ani/>}
        ></Route>
        <Route 
        exact
        path='/other'
        element={<Other/>}
        ></Route>
        </Routes>  
       </BrowserRouter>
        
    </div>
  );
}

export default App;
