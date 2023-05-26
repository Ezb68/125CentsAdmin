import logo from '../../public/assets/images/logo.png'
import key from '../../public/assets/images/key.png'
import remove from '../../public/assets/images/remove.png'
import {useState} from "react";
import {DateChoose} from "../../components";

export default function WinloseSimple() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <>
            <div className="row mx-0">
                <div className="total-bet">
                    <div className="row mx-0">
                        <div className="col-lg-12 mx-auto">
                            <div className="row mx-0 mb-3 mb-lg-4">
                                <img className="logo-title mx-auto" src={logo.src}/></div>
                            <div className="border-0 shadow mb-3">
                                <div className="card-header bg-white pt-0 pb-3 pb-lg-4 border-0 mb-1">
                                    <div className="d-flex justify-content-center">
                                        <div className="title-block px-4 py-3">Data Setting</div>
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
                                                            type="button" role="tab">Lass Week
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
                                        <div className="row mx-0">
                                            <div className="col-lg-11 mx-auto">
                                                <div className="d-flex justify-content-center py-3">
                                                    <button className="btn btn-greate px-4 hvr-grow me-4">Submit
                                                    </button>
                                                    <button className="btn btn-outline-danger hvr-grow"><i
                                                        className="fa-solid fa-download me-2"></i>Export to Excel
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mx-0">
                                <div className="head-block mb-2">
                                    <div className="row mx-0">
                                        <div className="col-lg-6 mb-3 mb-lg-0">
                                            <div className="row mx-0">
                                                <nav>
                                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                                        <li className="nav-item me-3 me-lg-4" role="presentation">
                                                            <button className="nav-link active" data-bs-toggle="pill"
                                                                    data-bs-target="#account" type="button"
                                                                    role="tab">Win Lose
                                                            </button>
                                                        </li>
                                                        <li className="nav-item me-3 me-lg-4" role="presentation">
                                                            <button className="nav-link" data-bs-toggle="pill"
                                                                    data-bs-target="#credit" type="button"
                                                                    role="tab">Credit
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card px-0">
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="account" role="tabpanel"
                                             aria-labelledby="home-tab" tabIndex="0">
                                            <div className="table-responsive">
                                                <table className="table table-striped mb-0 text-center">
                                                    <thead className="head-block">
                                                    <tr className="text-light">
                                                        <th scope="col">Username</th>
                                                        <th scope="col">Currency</th>
                                                        <th scope="col">Exchange Rate</th>
                                                        <th scope="col">Turnover</th>
                                                        <th scope="col">Gross Commission</th>
                                                        <th scope="col">Payout</th>
                                                        <th scope="col">Company Win</th>
                                                        <th scope="col">Company Comm</th>
                                                        <th scope="col">Company Total</th>
                                                        <th scope="col">Company</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="text-primary">WeWin247pro</div>
                                                        </td>
                                                        <td>USD</td>
                                                        <td>1.3216</td>
                                                        <td>5,191.00</td>
                                                        <td>0.00</td>
                                                        <td>
                                                            <div className="text-danger">-350.98</div>
                                                        </td>
                                                        <td>0.00</td>
                                                        <td>0.00</td>
                                                        <td>0.00</td>
                                                        <td>0.00</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center py-3">
                                                <button className="btn btn-outline-secondary">
                                                    {'<'}
                                                < /button>
                                                <div className="px-3">Page 1</div>
                                                <button className="btn btn-outline-secondary">
                                                    {'>'}
                                                </button>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="credit" role="tabpanel"
                                             aria-labelledby="profile-tab" tabIndex="0">
                                            <div className="card-header box text-center">Credit</div>
                                            <div className="card-body">
                                                <div className="row mx-0">
                                                    <img className="w-50 mx-auto" src={logo.src}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}