import logo from '../../public/assets/images/logo.png'
import key from '../../public/assets/images/key.png'
import remove from '../../public/assets/images/remove.png'
import {DateChoose} from "../../components";
import {useState} from "react";

export default function AccountList() {
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
                                        <div className="title-block px-4 py-3">Account List</div>
                                    </div>
                                </div>
                                <div className="head-block rounded-0 text-center py-3 text-light">User Information</div>
                                <div className="card-body">
                                    <div className="row mx-0 py-2">
                                        <div className="col-lg-4">
                                            <div className="date-block d-flex align-items-center">
                                                <div className="flex-shrink-1"><span>From</span></div>
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
                                            <div className="box py-2 mb-1 rounded-0">
                                                <div className="row mx-0">
                                                    <div className="col-4">
                                                        <div className="d-flex align-items-center h-100">Username:</div>
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="input-group">
                                                            <input className="form-control py-1" type="text"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box py-2 mb-1 rounded-0 box-light">
                                                <div className="row mx-0">
                                                    <div className="col-4">
                                                        <div className="d-flex align-items-center h-100">Status:</div>
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
                                                        <div className="d-flex align-items-center h-100">Suspend:</div>
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
                                            <div className="box py-2 mb-1 rounded-0 box-light">
                                                <div className="row mx-0">
                                                    <div className="col-4">
                                                        <div className="d-flex align-items-center h-100">Currency:</div>
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
                                        </div>
                                        <div className="col-lg-6 px-0">
                                            <div className="box py-2 mb-1 rounded-0">
                                                <div className="row mx-0">
                                                    <div className="col-4">
                                                        <div className="d-flex align-items-center h-100">Order By:</div>
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="input-group">
                                                            <select
                                                            className="form-select py-1"
                                                            aria-label="Default select example">
                                                                <option selected="">Username</option>
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
                                                        <div className="d-flex align-items-center h-100">Order By Dir:
                                                        </div>
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="input-group">
                                                            <select
                                                            className="form-select py-1"
                                                            aria-label="Default select example">
                                                                <option selected="">ASC</option>
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
                                                        <div className="d-flex align-items-center h-100">Last Login
                                                            IP:
                                                        </div>
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="input-group"><input
                                                            className="form-control py-1" type="text"/></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box py-2 mb-1 rounded-0 box-light">
                                                <div className="row mx-0">
                                                    <div className="col-4">
                                                        <div className="d-flex align-items-center h-100">Player Type
                                                        </div>
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="input-group">
                                                            <select
                                                            className="form-select py-1"
                                                            aria-label="Default select example">
                                                                <option selected="">Credit Player</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mx-0 px-3 mb-3">
                                        <p className="mb-1 px-0">Shortcut Date Selector :</p>
                                        <div className="product">
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
                                    <div className="row mx-0">
                                        <div className="col-lg-11 mx-auto">
                                            <div className="d-flex justify-content-center py-3">
                                                <button className="btn btn-greate px-4 hvr-grow me-4">Submit</button>
                                                <button className="btn btn-outline-danger hvr-grow"><i
                                                    className="fa-solid fa-download me-2"></i>Export to Excel
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-0 shadow">
                                <div className="head-block rounded-0 text-center py-3 text-light">Account List</div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped mb-0">
                                            <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Account Type</th>
                                                <th scope="col">Username</th>
                                                <th scope="col">Login Name</th>
                                                <th scope="col">Edit</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Suspend</th>
                                                <th scope="col">Currency</th>
                                                <th scope="col">Fist Name</th>
                                                <th scope="col">Last Name</th>
                                                <th scope="col">Phone</th>
                                                <th scope="col">Greate Time</th>
                                                <th scope="col">Login IP</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>SH</td>
                                                <td>
                                                    <div className="text-primary">IND</div>
                                                </td>
                                                <td>IND</td>
                                                <td><a href="javascript:void(0)"><i className="fa-solid fa-pencil"></i></a>
                                                </td>
                                                <td>
                                                    <div className="text-success">Open</div>
                                                </td>
                                                <td>
                                                    <div className="text-success">No</div>
                                                </td>
                                                <td>SGD</td>
                                                <td>Fist</td>
                                                <td>Last</td>
                                                <td>090983121</td>
                                                <td>2022-04-11/08:22 AM</td>
                                                <td>27.64.22.71</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>SH</td>
                                                <td>
                                                    <div className="text-primary">IND</div>
                                                </td>
                                                <td>IND</td>
                                                <td><a href="javascript:void(0)"><i className="fa-solid fa-pencil"></i></a>
                                                </td>
                                                <td>
                                                    <div className="text-success">Open</div>
                                                </td>
                                                <td>
                                                    <div className="text-success">No</div>
                                                </td>
                                                <td>SGD</td>
                                                <td>Fist</td>
                                                <td>Last</td>
                                                <td>090983121</td>
                                                <td>2022-04-11/08:22 AM</td>
                                                <td>27.64.22.71</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>SH</td>
                                                <td>
                                                    <div className="text-primary">IND</div>
                                                </td>
                                                <td>IND</td>
                                                <td><a href="javascript:void(0)"><i className="fa-solid fa-pencil"></i></a>
                                                </td>
                                                <td>
                                                    <div className="text-success">Open</div>
                                                </td>
                                                <td>
                                                    <div className="text-success">No</div>
                                                </td>
                                                <td>SGD</td>
                                                <td>Fist</td>
                                                <td>Last</td>
                                                <td>090983121</td>
                                                <td>2022-04-11/08:22 AM</td>
                                                <td>27.64.22.71</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>SH</td>
                                                <td>
                                                    <div className="text-primary">IND</div>
                                                </td>
                                                <td>IND</td>
                                                <td><a href="javascript:void(0)"><i className="fa-solid fa-pencil"></i></a>
                                                </td>
                                                <td>
                                                    <div className="text-success">Open</div>
                                                </td>
                                                <td>
                                                    <div className="text-success">No</div>
                                                </td>
                                                <td>SGD</td>
                                                <td>Fist</td>
                                                <td>Last</td>
                                                <td>090983121</td>
                                                <td>2022-04-11/08:22 AM</td>
                                                <td>27.64.22.71</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">5</th>
                                                <td>SH</td>
                                                <td>
                                                    <div className="text-primary">IND</div>
                                                </td>
                                                <td>IND</td>
                                                <td><a href="javascript:void(0)"><i className="fa-solid fa-pencil"></i></a>
                                                </td>
                                                <td>
                                                    <div className="text-success">Open</div>
                                                </td>
                                                <td>
                                                    <div className="text-success">No</div>
                                                </td>
                                                <td>SGD</td>
                                                <td>Fist</td>
                                                <td>Last</td>
                                                <td>090983121</td>
                                                <td>2022-04-11/08:22 AM</td>
                                                <td>27.64.22.71</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">6</th>
                                                <td>SH</td>
                                                <td>
                                                    <div className="text-primary">IND</div>
                                                </td>
                                                <td>IND</td>
                                                <td><a href="javascript:void(0)"><i className="fa-solid fa-pencil"></i></a>
                                                </td>
                                                <td>
                                                    <div className="text-success">Open</div>
                                                </td>
                                                <td>
                                                    <div className="text-success">No</div>
                                                </td>
                                                <td>SGD</td>
                                                <td>Fist</td>
                                                <td>Last</td>
                                                <td>090983121</td>
                                                <td>2022-04-11/08:22 AM</td>
                                                <td>27.64.22.71</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">7</th>
                                                <td>SH</td>
                                                <td>
                                                    <div className="text-primary">IND</div>
                                                </td>
                                                <td>IND</td>
                                                <td><a href="javascript:void(0)"><i className="fa-solid fa-pencil"></i></a>
                                                </td>
                                                <td>
                                                    <div className="text-success">Open</div>
                                                </td>
                                                <td>
                                                    <div className="text-success">No</div>
                                                </td>
                                                <td>SGD</td>
                                                <td>Fist</td>
                                                <td>Last</td>
                                                <td>090983121</td>
                                                <td>2022-04-11/08:22 AM</td>
                                                <td>27.64.22.71</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">8</th>
                                                <td>SH</td>
                                                <td>
                                                    <div className="text-primary">IND</div>
                                                </td>
                                                <td>IND</td>
                                                <td><a href="javascript:void(0)"><i className="fa-solid fa-pencil"></i></a>
                                                </td>
                                                <td>
                                                    <div className="text-success">Open</div>
                                                </td>
                                                <td>
                                                    <div className="text-success">No</div>
                                                </td>
                                                <td>SGD</td>
                                                <td>Fist</td>
                                                <td>Last</td>
                                                <td>090983121</td>
                                                <td>2022-04-11/08:22 AM</td>
                                                <td>27.64.22.71</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">9</th>
                                                <td>SH</td>
                                                <td>
                                                    <div className="text-primary">IND</div>
                                                </td>
                                                <td>IND</td>
                                                <td><a href="javascript:void(0)"><i className="fa-solid fa-pencil"></i></a>
                                                </td>
                                                <td>
                                                    <div className="text-success">Open</div>
                                                </td>
                                                <td>
                                                    <div className="text-success">No</div>
                                                </td>
                                                <td>SGD</td>
                                                <td>Fist</td>
                                                <td>Last</td>
                                                <td>090983121</td>
                                                <td>2022-04-11/08:22 AM</td>
                                                <td>27.64.22.71</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">10</th>
                                                <td>SH</td>
                                                <td>
                                                    <div className="text-primary">IND</div>
                                                </td>
                                                <td>IND</td>
                                                <td><a href="javascript:void(0)"><i className="fa-solid fa-pencil"></i></a>
                                                </td>
                                                <td>
                                                    <div className="text-success">Open</div>
                                                </td>
                                                <td>
                                                    <div className="text-success">No</div>
                                                </td>
                                                <td>SGD</td>
                                                <td>Fist</td>
                                                <td>Last</td>
                                                <td>090983121</td>
                                                <td>2022-04-11/08:22 AM</td>
                                                <td>27.64.22.71</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center py-3">
                                        <button className="btn btn-outline-secondary"> {'<'}
                                        </button>
                                        <div className="px-3">Page 1</div>
                                        <button className="btn btn-outline-secondary"> {'>'}
                                        </button>
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