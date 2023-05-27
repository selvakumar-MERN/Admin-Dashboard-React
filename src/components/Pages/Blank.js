import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../Navbar';
import Footer from '../../Footer';

function Blank(props) {
    return (
        <div id='wrapper'>
            <Sidebar/>
        <div id="content-wrapper" className="d-flex flex-column">

                {/* Main Content*/}
        <div id="content">

            {/* Topbar */}
                <Navbar/>
        <div className="container-fluid">

                    {/*Page Heading */}
                    <h1 className="h3 mb-4 text-gray-800">Blank Page</h1>

                </div>
                </div>
                <Footer/>
                </div>
                </div>
    );
}

export default Blank;