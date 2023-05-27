import React from 'react';
import Dashboard from './components/Dashboard';
import Sidebar from './components/sidebar/Sidebar';

function Home(props) {
    return (
        <div id='wrapper' >
            <Sidebar/><Dashboard/>
        </div>
    );
}

export default Home;
