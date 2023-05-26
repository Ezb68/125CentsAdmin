import logo from '../public/assets/images/logo.png'
import error404 from '../public/assets/images/404.png'
import {useState} from "react";
import {DateChoose} from "../components";


export default function Transaction() {
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
                            <div className="border-0 shadow">
                                <div className="card-header bg-white pt-0 pb-3 pb-lg-4 border-0 mb-1">
                                    <div className="d-flex justify-content-center">
                                        <div className="title-block px-4 py-3">Transaction</div>
                                    </div>
                                </div>
                                <div className="head-block rounded-0 text-center py-3 text-light">Setting</div>
                                <div className="card-body">
                                    <div className="row mx-0">
                                        <div className="col-md-6 p-0">
                                            <div className="box py-2 mb-1 rounded-0">
                                                <div className="row mx-0">
                                                    <div className="col-4">
                                                        <div className="d-flex align-items-center h-100">From Date :
                                                            <div className="text-danger">*</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-8 col-lg-5">
                                                        <div className="input-group">
                                                            <DateChoose selected={startDate} onChange={(date) => {setStartDate(date)}}/>
                                                            <span
                                                            className="input-group-text bg-white border-start-0"><i
                                                            className="fas fa-calendar-alt"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="col-lg-3 d-none d-lg-flex align-items-lg-center justify-content-center">
                                                        <div className="text-secondary">*Required</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box py-2 mb-1 rounded-0 box-light">
                                                <div className="row mx-0">
                                                    <div className="col-4">
                                                        <div className="d-flex align-items-center h-100">Username :
                                                            <div className="text-danger">*</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-8 col-lg-5">
                                                        <div className="input-group"><input
                                                            className="form-control py-1" type="password"/></div>
                                                    </div>
                                                    <div
                                                        className="col-lg-3 d-none d-lg-flex align-items-lg-center justify-content-center">
                                                        <div className="text-secondary">*Required</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box py-2 mb-1 rounded-0">
                                                <div className="row mx-0">
                                                    <div className="col-4">
                                                        <div className="d-flex align-items-center h-100">Transaction ID
                                                            :
                                                        </div>
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="input-group"><input
                                                            className="form-control py-1" type="text"
                                                            placeholder="Wewin247pro"/></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 p-0">
                                            <div className="box py-2 mb-1 rounded-0">
                                                <div className="row mx-0">
                                                    <div className="col-4">
                                                        <div className="d-flex align-items-center h-100">To Date:</div>
                                                    </div>
                                                    <div className="col-8 col-lg-5">
                                                        <div className="input-group">
                                                            <DateChoose selected={endDate} onChange={(date) => {setEndDate(date)}}/>
                                                            <span
                                                            className="input-group-text bg-white border-start-0"><i
                                                            className="fas fa-calendar-alt"></i></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box py-2 mb-1 rounded-0 box-light">
                                                <div className="row mx-0">
                                                    <div className="col-4">
                                                        <div className="d-flex align-items-center h-100">Account Type:
                                                        </div>
                                                    </div>
                                                    <div className="col-8 col-lg-5">
                                                        <div className="input-group"><select
                                                            className="form-select py-1"
                                                            aria-label="Default select example">
                                                            <option selected="">Share Holder</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box py-2 mb-1 rounded-0">
                                                <div className="row mx-0">
                                                    <div className="col-8 col-lg-5 invisible">
                                                        <div className="input-group"><select
                                                            className="form-select py-1"
                                                            aria-label="Default select example">
                                                            <option selected="">SGD</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mx-0 mb-3">
                                    <div className="col-lg-11 mx-auto">
                                        <div className="d-flex justify-content-center py-3">
                                            <button className="btn btn-greate hvr-grow">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card px-0">
                                <div className="card-body p-0">
                                    <div className="box">
                                        <div className="table-responsive">
                                            <table className="table table-bordered mb-0">
                                                <thead className="text-center">
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Username</th>
                                                    <th scope="col">Modified Date</th>
                                                    <th scope="col">Action Type</th>
                                                    <th scope="col">Transaction ID</th>
                                                    <th scope="col">Currency</th>
                                                    <th scope="col">Producr Type Name</th>
                                                    <th scope="col">Before Cash Balance</th>
                                                    <th scope="col">Cash Balance Delta</th>
                                                    <th scope="col">Before Out Standing</th>
                                                    <th scope="col">After Out Standing</th>
                                                    <th scope="col">Before User Balance</th>
                                                    <th scope="col">After User Balance</th>
                                                    <th scope="col">Remark</th>
                                                </tr>
                                                </thead>
                                                <tbody className="text-center"></tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="row mx-0">
                                        <img className="w-50 mx-auto mb-3" src={error404.src}/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}