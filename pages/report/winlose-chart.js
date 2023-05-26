import logo from '../../public/assets/images/logo.png'
import key from '../../public/assets/images/key.png'
import remove from '../../public/assets/images/remove.png'
import React, {useEffect} from "react"
import {useState} from "react";
import {DateChoose} from "../../components";

export default function WinloseChart() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    useEffect(() => {

        return(() => {
            var ApexCharts = require('apexcharts')
            var options = {
                chart: {
                    offsetX: 0,
                    offsetY: 0,
                    type: "area",
                    height: '100%'
                },
                stroke: {
                    width: 2,
                },
                grid: {
                    show: false,
                },
                dataLabels: {
                    enabled: true,
                },
                theme: {
                    palette: 'palette1',
                },
                toolbar: {
                    show: false,
                },
                series: [
                    {
                        name: "time 1",
                        data: [45, 52, 38, 45, 19, 23, 2]
                    }
                ],
                fill: {
                    type: "gradient",
                    gradient: {
                        shadeIntensity: 0.5,
                        opacityFrom: 0.5,
                        opacityTo: 0.1,
                        stops: [0, 100, 100]
                    }
                },
                xaxis: {
                    labels: {
                        show: true,
                        style: {
                            colors: '#ffffff',
                        }
                    }
                },
                yaxis: {
                    labels: {
                        show: true,
                        style: {
                            colors: '#ffffff',
                        }
                    }
                }
            };
            var chart1 = null

            chart1 = new ApexCharts(document.querySelector("#chart1"), options);
            chart1.render()
        })
    }, [])

    return (
        <>
            <div className="row mx-0">
                <div className="total-bet">
                    <div className="row mx-0">
                        <div className="col-lg-12 mx-auto">
                            <div className="row mx-0 mb-3 mb-lg-4">
                                <img className="logo-title mx-auto" src={logo.src}/>
                            </div>
                            <div className="border-0 shadow mb-3">
                                <div className="card-header bg-white pt-0 pb-3 pb-lg-4 border-0 mb-1">
                                    <div className="d-flex justify-content-center">
                                        <div className="title-block px-4 py-3">Win Lose By Player</div>
                                    </div>
                                </div>
                                <div className="head-block rounded-0 text-center py-3 text-light">User Information</div>
                                <div className="card-body">
                                    <div className="row mx-0 py-2">
                                        <div className="col-lg-4">
                                            <div className="date-block d-flex align-items-center">
                                                <div className="flex-shrink-1"><span>Form</span></div>
                                                <div className="px-3 w-100">
                                                    <DateChoose selected={startDate} onChange={(date) => {setStartDate(date)}}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="date-block d-flex align-items-center">
                                                <div className="flex-shrink-1"><span>To</span></div>
                                                <div className="px-3 w-100">
                                                    <DateChoose selected={endDate} onChange={(date) => {setEndDate(date)}}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mx-0 px-3 mb-3">
                                        <p className="mb-1 px-0">Filter By:</p>
                                        <div className="col-lg-6 px-0">
                                            <div className="box py-2 mb-1 rounded-0 box-light">
                                                <div className="row mx-0">
                                                    <div className="col-4">
                                                        <div className="d-flex align-items-center h-100">Game Type :
                                                        </div>
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="input-group">
                                                            <select
                                                            className="form-select py-1"
                                                            aria-label="Default select example">
                                                                <option selected="">All</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box py-2 mb-1 rounded-0">
                                                <div className="row mx-0">
                                                    <div className="col-4">
                                                        <div className="d-flex align-items-center h-100">Currency:</div>
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="input-group">
                                                            <select
                                                            className="form-select py-1"
                                                            aria-label="Default select example">
                                                                <option selected="">INR</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box py-2 mb-1 rounded-0 box-light">
                                                <div className="row mx-0">
                                                    <div className="col-4">
                                                        <div className="d-flex align-items-center h-100">Player Type:
                                                        </div>
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="input-group">
                                                            <select
                                                            className="form-select py-1"
                                                            aria-label="Default select example">
                                                                <option selected="">Credit</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 px-0">
                                            <div className="box py-2 mb-1 rounded-0 box-light">
                                                <div className="row mx-0">
                                                    <div className="col-4">
                                                        <div className="d-flex align-items-center h-100">Include/Exclude
                                                            Void:
                                                        </div>
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="input-group">
                                                            <select
                                                            className="form-select py-1"
                                                            aria-label="Default select example">
                                                                <option selected="">Ind. Void Bets</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box py-2 mb-1 rounded-0">
                                                <div className="row mx-0">
                                                    <div className="row mx-0">
                                                        <div className="col-4">
                                                            <div className="d-flex align-items-center h-100">Decimal
                                                                Point Numbers
                                                            </div>
                                                        </div>
                                                        <div className="col-8">
                                                            <div className="input-group">
                                                                <select
                                                                className="form-select py-1"
                                                                aria-label="Default select example">
                                                                    <option selected="">2</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box py-2 mb-1 rounded-0 box-light">
                                                <div className="row mx-0">
                                                    <div className="input-group">
                                                        <select
                                                        className="form-select py-1 invisible"
                                                        aria-label="Default select example">
                                                            <option selected="">Ind. Void Bets</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mx-0 px-3 mb-3">
                                        <p className="mb-1 px-0">Shortcut Date Selector :</p>
                                        <div className="product mb-3">
                                            <ul className="nav nav-tabs border-bottom-0" role="tablist">
                                                <li className="nav-item me-2" role="presentation">
                                                    <button className="nav-link px-4 border-bottom active"
                                                            data-bs-toggle="pill" data-bs-target="#sports" type="button"
                                                            role="tab">All
                                                    </button>
                                                </li>
                                                <li className="nav-item me-2" role="presentation">
                                                    <button className="nav-link px-4 border-bottom"
                                                            data-bs-toggle="pill" data-bs-target="#game" type="button"
                                                            role="tab">Today
                                                    </button>
                                                </li>
                                                <li className="nav-item me-2" role="presentation">
                                                    <button className="nav-link px-4 border-bottom"
                                                            data-bs-toggle="pill" data-bs-target="#casino" type="button"
                                                            role="tab">Yesterday
                                                    </button>
                                                </li>
                                                <li className="nav-item me-2" role="presentation">
                                                    <button className="nav-link px-4 border-bottom"
                                                            data-bs-toggle="pill" data-bs-target="#provider"
                                                            type="button" role="tab">Past 7 Days
                                                    </button>
                                                </li>
                                                <li className="nav-item me-2" role="presentation">
                                                    <button className="nav-link px-4 border-bottom"
                                                            data-bs-toggle="pill" data-bs-target="#pt" type="button"
                                                            role="tab">Past 30 Days
                                                    </button>
                                                </li>
                                                <li className="nav-item me-2" role="presentation">
                                                    <button className="nav-link px-4 border-bottom"
                                                            data-bs-toggle="pill" data-bs-target="#casino" type="button"
                                                            role="tab">This Week
                                                    </button>
                                                </li>
                                                <li className="nav-item me-2" role="presentation">
                                                    <button className="nav-link px-4 border-bottom"
                                                            data-bs-toggle="pill" data-bs-target="#provider"
                                                            type="button" role="tab">Last Week
                                                    </button>
                                                </li>
                                                <li className="nav-item me-2" role="presentation">
                                                    <button className="nav-link px-4 border-bottom"
                                                            data-bs-toggle="pill" data-bs-target="#pt" type="button"
                                                            role="tab">This Month
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="d-flex py-3">
                                            <div className="form-check me-3"><input className="form-check-input"
                                                                                    id="turnover" type="checkbox"
                                                                                    value="" checked=""/><label
                                                className="form-check-label" htmlFor="turnover">Turnover</label></div>
                                            <div className="form-check me-3"><input className="form-check-input"
                                                                                    id="bet-count" type="checkbox"
                                                                                    value=""/><label
                                                className="form-check-label" htmlFor="bet-count">Bet Count</label></div>
                                            <div className="form-check"><input className="form-check-input" id="winlose"
                                                                               type="checkbox" value=""/><label
                                                className="form-check-label" htmlFor="winlose">Winlose</label></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mx-0">
                                <div className="col-lg-11 mx-auto">
                                    <div className="d-flex justify-content-center py-3">
                                        <button className="btn btn-greate px-4 hvr-grow">Submit</button>
                                    </div>
                                </div>
                            </div>
                            <div className="chart-box card border-0 shadow">
                                <div className="chart-head">
                                    <div className="p-3 pb-0 fs-4">Daily Win Lose</div>
                                </div>
                                <div className="chart">
                                    <div id="chart1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}