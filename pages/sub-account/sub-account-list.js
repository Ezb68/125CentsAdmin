import logo from '../../public/assets/images/logo.png'
import remove from '../../public/assets/images/remove.png'
import key from '../../public/assets/images/key.png'
export default function SubAccountList() {
    return (
        <>
            <div className="row mx-0">
                <div className="total-bet">
                    {/*Modal*/}
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                         aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-body p-0">
                                    <div className="head-block pt-0">
                                        <div className="row mx-0 w-100">
                                            <nav>
                                                <ul className="nav nav-pills mb-1">
                                                    <li className="nav-item me-3 me-lg-4">
                                                        <div className="nav-link active">Transfer</div>
                                                    </li>
                                                </ul>
                                            </nav>
                                            <div className="text-center fs-6 text-light pb-3">Company</div>
                                        </div>
                                    </div>
                                    <div className="box py-2 mb-1 rounded-0 text-dark box-light">
                                        <div className="row mx-0">
                                            <div className="col-4 col-lg-3 offset-lg-1">Cash Balance</div>
                                            <div className="col-8">9,999,999,000</div>
                                        </div>
                                    </div>
                                    <div className="head-block rounded-0 text-center py-3 text-light">SH</div>
                                    <div className="box py-2 mb-1 rounded-0 text-dark box-light">
                                        <div className="row mx-0">
                                            <div className="col-4 col-lg-3 offset-lg-1">Username</div>
                                            <div className="col-8">Kie</div>
                                        </div>
                                    </div>
                                    <div className="box py-2 mb-1 rounded-0 text-dark box-light">
                                        <div className="row mx-0">
                                            <div className="col-4 col-lg-3 offset-lg-1">Cash Balance</div>
                                            <div className="col-8">9,999,999,000</div>
                                        </div>
                                    </div>
                                    <div className="box py-2 mb-1 rounded-0 text-dark box-light">
                                        <div className="row mx-0">
                                            <div className="col-4 col-lg-3 offset-lg-1">Credit</div>
                                            <div className="col-8">9,999,999,000</div>
                                        </div>
                                    </div>
                                    <div className="box py-2 mb-1 rounded-0 text-dark box-light">
                                        <div className="row mx-0">
                                            <div className="col-4 col-lg-3 offset-lg-1">Outstanding</div>
                                            <div className="col-8">9,999,999,000</div>
                                        </div>
                                    </div>
                                    <div className="box py-1 mb-1 rounded-0 text-dark box-light">
                                        <div className="row mx-0">
                                            <div className="col-4 col-lg-3 offset-lg-1">
                                                <div className="d-flex align-items-center h-100">Transfer Amount</div>
                                            </div>
                                            <div className="col-8">
                                                <div className="input-group"><input className="form-control py-1"
                                                                                    type="text" value="10"/></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer border-top-0">
                                    <button className="btn btn-outline-secondary px-4" type="button"
                                            data-bs-dismiss="modal">Cancel
                                    </button>
                                    <button className="btn btn-greate px-4" type="button">Transfer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mx-0">
                        <div className="col-lg-12 mx-auto">
                            <div className="row mx-0 mb-3 mb-lg-4">
                                <img className="logo-title mx-auto" src={logo.src}/></div>
                            <div className="head-block mb-1">
                                <div className="row mx-0">
                                    <div className="col-lg-8 mb-3 mb-lg-0">
                                        <div className="row mx-0">
                                            <nav>
                                                <ul className="nav nav-pills mb-3" id="pills-tab">
                                                    <li className="nav-item me-3 me-lg-4">
                                                        <div className="nav-link active">Sub Account List</div>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-0 shadow mb-3">
                                <div className="table-responsive">
                                    <table className="table table-striped mb-0 text-center">
                                        <thead className="head-block">
                                        <tr className="text-light">
                                            <th scope="col">#</th>
                                            <th scope="col">Username</th>
                                            <th scope="col">Edit</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Suspend</th>
                                            <th scope="col">Lock</th>
                                            <th scope="col">First Name</th>
                                            <th scope="col">Last Name</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Time Login</th>
                                            <th scope="col">Last Login IP</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>PL2022</td>
                                            <td><a href="javascript:void(0)"><i className="fas fa-edit"></i></a></td>
                                            <td>Open</td>
                                            <td>No</td>
                                            <td>Unlock</td>
                                            <td>PL2022</td>
                                            <td>PL2022</td>
                                            <td>321312498</td>
                                            <td>2022-04-09 01: 30 AM</td>
                                            <td>113.161.57.178</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>PL2022</td>
                                            <td><a href="javascript:void(0)"><i className="fas fa-edit"></i></a></td>
                                            <td>Open</td>
                                            <td>No</td>
                                            <td>Unlock</td>
                                            <td>PL2022</td>
                                            <td>PL2022</td>
                                            <td>321312498</td>
                                            <td>2022-04-09 01: 30 AM</td>
                                            <td>113.161.57.178</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>PL2022</td>
                                            <td><a href="javascript:void(0)"><i className="fas fa-edit"></i></a></td>
                                            <td>Open</td>
                                            <td>No</td>
                                            <td>Unlock</td>
                                            <td>PL2022</td>
                                            <td>PL2022</td>
                                            <td>321312498</td>
                                            <td>2022-04-09 01: 30 AM</td>
                                            <td>113.161.57.178</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>PL2022</td>
                                            <td><a href="javascript:void(0)"><i className="fas fa-edit"></i></a></td>
                                            <td>Open</td>
                                            <td>No</td>
                                            <td>Unlock</td>
                                            <td>PL2022</td>
                                            <td>PL2022</td>
                                            <td>321312498</td>
                                            <td>2022-04-09 01: 30 AM</td>
                                            <td>113.161.57.178</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>PL2022</td>
                                            <td><a href="javascript:void(0)"><i className="fas fa-edit"></i></a></td>
                                            <td>Open</td>
                                            <td>No</td>
                                            <td>Unlock</td>
                                            <td>PL2022</td>
                                            <td>PL2022</td>
                                            <td>321312498</td>
                                            <td>2022-04-09 01: 30 AM</td>
                                            <td>113.161.57.178</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>PL2022</td>
                                            <td><a href="javascript:void(0)"><i className="fas fa-edit"></i></a></td>
                                            <td>Open</td>
                                            <td>No</td>
                                            <td>Unlock</td>
                                            <td>PL2022</td>
                                            <td>PL2022</td>
                                            <td>321312498</td>
                                            <td>2022-04-09 01: 30 AM</td>
                                            <td>113.161.57.178</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">7</th>
                                            <td>PL2022</td>
                                            <td><a href="javascript:void(0)"><i className="fas fa-edit"></i></a></td>
                                            <td>Open</td>
                                            <td>No</td>
                                            <td>Unlock</td>
                                            <td>PL2022</td>
                                            <td>PL2022</td>
                                            <td>321312498</td>
                                            <td>2022-04-09 01: 30 AM</td>
                                            <td>113.161.57.178</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">8</th>
                                            <td>PL2022</td>
                                            <td><a href="javascript:void(0)"><i className="fas fa-edit"></i></a></td>
                                            <td>Open</td>
                                            <td>No</td>
                                            <td>Unlock</td>
                                            <td>PL2022</td>
                                            <td>PL2022</td>
                                            <td>321312498</td>
                                            <td>2022-04-09 01: 30 AM</td>
                                            <td>113.161.57.178</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">9</th>
                                            <td>PL2022</td>
                                            <td><a href="javascript:void(0)"><i className="fas fa-edit"></i></a></td>
                                            <td>Open</td>
                                            <td>No</td>
                                            <td>Unlock</td>
                                            <td>PL2022</td>
                                            <td>PL2022</td>
                                            <td>321312498</td>
                                            <td>2022-04-09 01: 30 AM</td>
                                            <td>113.161.57.178</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">10</th>
                                            <td>PL2022</td>
                                            <td><a href="javascript:void(0)"><i className="fas fa-edit"></i></a></td>
                                            <td>Open</td>
                                            <td>No</td>
                                            <td>Unlock</td>
                                            <td>PL2022</td>
                                            <td>PL2022</td>
                                            <td>321312498</td>
                                            <td>2022-04-09 01: 30 AM</td>
                                            <td>113.161.57.178</td>
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
                                <div className="row mx-0">
                                    <div className="col-lg-11 mx-auto">
                                        <div className="d-flex justify-content-center py-3">
                                            <button className="btn btn-greate px-4 hvr-grow" type="button"
                                                    data-bs-toggle="modal" data-bs-target="#exampleModal">Transfer
                                            </button>
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