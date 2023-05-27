import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import Footer from '../../Footer';

function Errorpage(props) {
    return (
        <div id='wrapper'>
        <Sidebar/>
    <div id="content-wrapper" className="d-flex flex-column">

            {/* Main Content*/}
    <div id="content">

        {/* Topbar */}
            <Navbar/>
        <div className="container-fluid">

                    {/* 404 Error Text */}
                    <div className="text-center">
                        <div className="error mx-auto" data-text="404">404</div>
                        <p className="lead text-gray-800 mb-5">Page Not Found</p>
                        <p className="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
                        <Link to="/">
                        <a href="/">&larr; Back to Dashboard</a>
                        </Link>
                    </div>

                </div>
                </div>
                <Footer/>

                </div>
                </div>

               
    );
}

export default Errorpage;