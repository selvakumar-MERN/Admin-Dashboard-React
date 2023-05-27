import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../Navbar';




function Chartarea(props) {
    return (
        <div id='wrapper'>
            <Sidebar/>
        <div id="content-wrapper" className="d-flex flex-column">

                {/* Main Content*/}
        <div id="content">

            {/* Topbar */}
                <Navbar/>
        <div className="container-fluid">

                    {/*Page Heading*/}
                    <h1 className="h3 mb-2 text-gray-800">Charts</h1>
                    <p className="mb-4">Chart.js is a third party plugin that is used to generate the charts in this theme.
                        The charts below have been customized - for further customization options, please visit the <a
                            target="_blank" rel="noreferrer" href="https://www.chartjs.org/docs/latest/">official Chart.js
                            documentation</a>.</p>
                          
                    {/*Content Row */}
                    <div className="row">

                        <div className="col-xl-8 col-lg-7">

                            {/*Area Chart */}
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Area Chart</h6>
                                </div>
                                <div className="card-body">
                                    <div className="chart-area">
                                    <div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                                    <canvas id="myAreaChart" width="334" height="160" style={{display: "block", width: "334px", height: "160px"}} class="chartjs-render-monitor"></canvas>
                                    </div>
                                    <hr></hr>
                                    Styling for the area chart can be found in the
                                    <code>/js/demo/chart-area-demo.js</code> file.
                                </div>
                            </div>

                            {/* Bar Chart */}
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Bar Chart</h6>
                                </div>
                                <div className="card-body">
                                    <div className="chart-bar">
                                        <canvas id="myBarChart"></canvas>
                                    </div>
                                    <hr></hr>
                                    Styling for the bar chart can be found in the
                                    <code>/js/demo/chart-bar-demo.js</code> file.
                                </div>
                            </div>

                        </div>

                        {/*Donut Chart */}
                        <div className="col-xl-4 col-lg-5">
                            <div className="card shadow mb-4">
                                {/* Card Header - Dropdown */}
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Donut Chart</h6>
                                </div>
                                {/*Card Body */}
                                <div className="card-body">
                                    <div className="chart-pie pt-4">
                                        <canvas id="myPieChart"></canvas>
                                    </div>
                                    <hr></hr>
                                    Styling for the donut chart can be found in the
                                    <code>/js/demo/chart-pie-demo.js</code> file.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                </div>
                </div>
                
                </div>
               
          
            
    );
}

export default Chartarea;