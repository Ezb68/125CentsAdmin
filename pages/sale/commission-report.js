import logoGroup from '../../public/assets/images/logo-group.png'
import loading from '../../public/assets/images/loading.png'
import {DateChoose} from "../../components";
import {useState} from "react";

export default function CommissionReport() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return (
        <>
            <div className="row mx-0">
                <div className="total-bet">
                    <div className="row mx-0">
                        <div className="col-lg-10 mx-auto">
                            <div className="row mx-0 mb-3 mb-lg-4">
                                <img className="logo-title mx-auto" src={logoGroup.src}/>
                            </div>
                            <div className="card bg-transparent border-0">
                                <div className="card-header bg-white pt-0 pb-3 pb-lg-4 border-0 mb-2">
                                    <div className="d-flex justify-content-center">
                                        <div className="title-block px-4 py-3">Commission Report</div>
                                    </div>
                                </div>
                                <div className="card-body bg-white">
                                    <div className="row py-2">
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
                                    <div className="row mx-0 mb-3">
                                        <p className="mb-1 px-0">Shortcut Date Selector :</p>
                                        <div className="product px-0">
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
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="box box-light p-2 mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="flex-shrink-1">Filter :</div>
                                                    <div className="ps-3 w-50"><select className="form-select py-1"
                                                                                       aria-label="Default select example">
                                                        <option selected="">ID Agent</option>
                                                        <option value="1">Agent Level</option>
                                                    </select></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="box box-light p-2 mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="flex-shrink-1">Time zone</div>
                                                    <div className="ps-3 w-50"><select className="form-select py-1"
                                                                                       aria-label="Default select example">
                                                        <option selected="">GMT+ 0800</option>
                                                        <option value="1">Activated</option>
                                                        <option value="2">Delayed</option>
                                                        <option value="3">Disabled</option>
                                                    </select></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="box box-light p-2 mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="flex-shrink-1">Report type:</div>
                                                    <div className="ps-3 w-50"><select className="form-select py-1"
                                                                                       aria-label="Default select example">
                                                        <option selected="">All</option>
                                                        <option value="1">SMA</option>
                                                        <option value="2">MA</option>
                                                    </select></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="box box-light p-2 mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="flex-shrink-1">Data filter:</div>
                                                    <div className="ps-3 w-50"><select className="form-select py-1"
                                                                                       aria-label="Default select example">
                                                        <option selected="">No</option>
                                                        <option value="1">Yes</option>
                                                    </select></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center py-3">
                                        <button className="btn btn-outline-secondary hvr-grow px-4">Reset</button>
                                        <button className="btn btn-greate hvr-grow px-4 ms-4">Next</button>
                                    </div>
                                    <div className="head-block text-light py-3 text-center">Total details %</div>
                                    <div className="text-danger text-center py-2">Report at 14:00 GMT + 8 Every day/
                                        Every week/ Every month
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-striped mb-0 text-center">
                                            <thead>
                                            <tr>
                                                <th scope="col">ID Agent</th>
                                                <th scope="col">Agent Level</th>
                                                <th scope="col">Active Users</th>
                                                <th scope="col">Effective Bets</th>
                                                <th scope="col">Total Affiliated Revenue</th>
                                                <th scope="col">Total online member profit</th>
                                                <th scope="col">Cost Allocation</th>
                                                <th scope="col">System Fee</th>
                                                <th scope="col">IB</th>
                                                <th scope="col">Subordinate Commission</th>
                                                <th scope="col">Total bonus</th>
                                                <th scope="col"><i className="fas fa-eye"></i></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className="align-middle">
                                                <td>afa86b</td>
                                                <td>SSMA</td>
                                                <td>1</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td><a href="#"><i className="fas fa-plus"></i></a>
                                                </td>
                                            </tr>
                                            <tr className="align-middle">
                                                <td>afa86b</td>
                                                <td>SSMA</td>
                                                <td>1</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td><a href="#"><i className="fas fa-plus"></i></a>
                                                </td>
                                            </tr>
                                            <tr className="align-middle">
                                                <td>afa86b</td>
                                                <td>SSMA</td>
                                                <td>1</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td><a href="#"><i className="fas fa-plus"></i></a>
                                                </td>
                                            </tr>
                                            <tr className="align-middle">
                                                <td>afa86b</td>
                                                <td>SSMA</td>
                                                <td>1</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td><a href="#"><i className="fas fa-plus"></i></a>
                                                </td>
                                            </tr>
                                            <tr className="align-middle">
                                                <td>afa86b</td>
                                                <td>SSMA</td>
                                                <td>1</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td><a href="#"><i className="fas fa-plus"></i></a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
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