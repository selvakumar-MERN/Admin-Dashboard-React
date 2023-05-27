import React from 'react';
import "./sb-admin-2.min.css"
import { Link } from 'react-router-dom';

function Sidebar(props) {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            { /*Sidebar - Brand*/ }
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">My admin </div>
            </a>

           {/*Divider*/}
            <hr className="sidebar-divider my-0"></hr>

            {/*Nav Item - Dashboard*/}
            <li className="nav-item active">
                <Link to="/">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
                    </Link>
            </li>

            {/*Divider*/}
            <hr className="sidebar-divider"></hr>

            {/*Heading */}
            <div className="sidebar-heading">
                Interface
            </div>

            {/*Nav Item - Pages Collapse Menu */}
            <li class="nav-item">
                <a class="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Components</span>
                </a>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Custom Components:</h6>
                        <Link to="/button">
                        <a class="collapse-item" href="/">Buttons</a>
                        </Link>
                        <Link to="/card">
                        <a class="collapse-item" href="/">Cards</a>
                        </Link>
                    </div>
                </div>
            </li>

            {/*Nav Item - Utilities Collapse Menu*/}
            <li class="nav-item">
                <a class="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                    <i class="fas fa-fw fa-wrench"></i>
                    <span>Utilities</span>
                </a>
                <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Custom Utilities:</h6>
                        <Link to="/color">
                        <a class="collapse-item" href="utilities-color.html">Colors</a>
                        </Link>
                        <Link to="/border">
                        <a class="collapse-item" href="utilities-border.html">Borders</a>
                        </Link>
                        <Link to="/animation">
                        <a class="collapse-item" href="utilities-animation.html">Animations</a>
                        </Link>
                        <Link to="/other">
                        <a class="collapse-item" href="utilities-other.html">Other</a>
                        </Link>
                    </div>
                </div>
            </li>

            {/*Divider*/}
            <hr class="sidebar-divider"></hr>

            {/*Heading */}
            <div class="sidebar-heading">
                Addons
            </div>

            {/*Nav Item - Pages Collapse Menu*/}
            <li class="nav-item">
                <a class="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </a>
                <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Login Screens:</h6>
                        <Link to="/login">
                        <a class="collapse-item" href="/">Login</a>
                        </Link>
                        <Link to="/registration">
                        <a class="collapse-item" href="/">Register</a>
                        </Link>
                        <Link to="/forgotpassword">
                        <a class="collapse-item" href="/">Forgot Password</a>
                        </Link>
                        <div class="collapse-divider"></div>
                        <h6 class="collapse-header">Other Pages:</h6>
                        <Link to="/error">
                        <a class="collapse-item" href="/">404 Page</a>
                        </Link>
                        <Link to="/blank">
                        <a class="collapse-item" href="/">Blank Page</a>
                        </Link>
                    </div>
                </div>
            </li>

            {/* Nav Item - Charts */}
            <li class="nav-item">
                <Link to="/chart">
                <a class="nav-link" href="/">
                 <i class="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span></a>
                    </Link>
            </li>

            {/* Nav Item - Tables*/}
            <li class="nav-item">
                <Link to="/table">
                <a class="nav-link" href="/">
                    <i class="fas fa-fw fa-table"></i>
                    <span>Tables</span></a>
                    </Link>
            </li>

            {/*Divider*/} 
            <hr class="sidebar-divider d-none d-md-block"></hr>

            { /*  Sidebar Toggler (Sidebar)*/}
            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

           { /* Sidebar Message */}
            <div class="sidebar-card d-none d-lg-flex">
                <img class="sidebar-card-illustration mb-2" src="img\undraw_rocket.svg" alt="..."></img>
                <p class="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a class="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
            </div>

        </ul>
    )
}

export default Sidebar;