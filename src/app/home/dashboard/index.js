import React, { useRef, useEffect, useState } from 'react';
import './dashboard.scss';
import CanvasJSReact from '@canvasjs/react-charts';
import { Table } from 'reactstrap';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
// import ReactApexChart from 'react-apexcharts';
// import ApexCharts from 'apexcharts'
// import ReactApexChart from 'react-apexcharts';

export default function Dashboard() {

    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.chart.render();
        }
    }, []);

    const toggleDataSeries = (e) => {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        chartRef.current.chart.render();
    }

    const options = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Evening Sales in a Restaurant"
        },
        axisX: {
            valueFormatString: "DDD"
        },
        axisY: {
            prefix: "$"
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
            type: "stackedBar",
            name: "Meals",
            showInLegend: true,
            xValueFormatString: "DD, MMM",
            yValueFormatString: "$#,##0",
            dataPoints: [
                { x: new Date(2018, 5, 25), y: 56 },
                { x: new Date(2018, 5, 26), y: 45 },
                { x: new Date(2018, 5, 27), y: 71 },
                { x: new Date(2018, 5, 28), y: 41 },
                { x: new Date(2018, 5, 29), y: 60 },
                { x: new Date(2018, 5, 30), y: 75 },
                { x: new Date(2018, 6, 1), y: 98 }
            ]
        }
        ],
        // ...
    };

    return (
        <div className='dashboard-main'>
            <div className="container">
                <div className="chart">
                    <CanvasJSChart options={options} ref={chartRef} />
                </div>
                <div className="table">
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    Table heading
                                </th>
                                <th>
                                    Table heading
                                </th>
                                <th>
                                    Table heading
                                </th>
                                <th>
                                    Table heading
                                </th>
                                <th>
                                    Table heading
                                </th>
                                <th>
                                    Table heading
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    1
                                </th>
                                <td>
                                    Table cell
                                </td>
                                <td>
                                    Table cell
                                </td>
                                <td>
                                    Table cell
                                </td>
                                <td>
                                    Table cell
                                </td>
                                <td>
                                    Table cell
                                </td>
                                <td>
                                    Table cell
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    2
                                </th>
                                <td>
                                    Table cell
                                </td>
                                <td>
                                    Table cell
                                </td>
                                <td>
                                    Table cell
                                </td>
                                <td>
                                    Table cell
                                </td>
                                <td>
                                    Table cell
                                </td>
                                <td>
                                    Table cell
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    3
                                </th>
                                <td>
                                    Table cell
                                </td>
                                <td>
                                    Table cell
                                </td>
                                <td>
                                    Table cell
                                </td>
                                <td>
                                    Table cell
                                </td>
                                <td>
                                    Table cell
                                </td>
                                <td>
                                    Table cell
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
};

