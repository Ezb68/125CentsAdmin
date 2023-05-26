import logoGroup from '../../public/assets/images/logo-group.png'
import key from '../../public/assets/images/key.png'
import remove from '../../public/assets/images/remove.png'

export default function Currency() {
    return (
        <>
            <div className="row mx-0">
                <div className="total-bet">
                    <div className="modal fade" id="edit" tabIndex="-1" aria-labelledby="exampleModalLabel"
                         aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-body p-0">
                                    <div className="head-block pt-0 position-relative">
                                        <div className="text-center fs-6 text-light py-3">Update Currency</div>
                                        <div className="position-absolute top-0 end-0">
                                            <button className="btn border-0 p-0 me-3 mt-2 text-light" type="button"
                                                    data-bs-dismiss="modal"><i className="fas fa-times"></i></button>
                                        </div>
                                    </div>
                                    <div className="box py-2 mb-1 rounded-0 text-dark box-light">
                                        <div className="row mx-0">
                                            <div className="col-4 col-lg-3 col-lg-3 offset-lg-1">Currency :</div>
                                            <div className="col-8 col-lg-6">AUD</div>
                                        </div>
                                    </div>
                                    <div className="box py-2 mb-1 rounded-0 text-dark box-light">
                                        <div className="row mx-0">
                                            <div className="col-4 col-lg-3 col-lg-3 offset-lg-1">Exchange Rate:</div>
                                            <div className="col-8 col-lg-6">0.9857</div>
                                        </div>
                                    </div>
                                    <div className="box py-2 mb-1 rounded-0 text-dark box-light">
                                        <div className="row mx-0">
                                            <div className="col-4 col-lg-3 col-lg-3 offset-lg-1">
                                                <div className="d-flex align-items-center h-100">Min Deposit :</div>
                                            </div>
                                            <div className="col-8 col-lg-6">
                                                <div className="input-group"><input className="form-control py-1"
                                                                                    type="text"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box py-2 mb-1 rounded-0 text-dark box-light">
                                        <div className="row mx-0">
                                            <div className="col-4 col-lg-3 col-lg-3 offset-lg-1">
                                                <div className="d-flex align-items-center h-100">Max Deposit :</div>
                                            </div>
                                            <div className="col-8 col-lg-6">
                                                <div className="input-group"><input className="form-control py-1"
                                                                                    type="text"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box py-2 mb-1 rounded-0 text-dark box-light">
                                        <div className="row mx-0">
                                            <div className="col-4 col-lg-3 col-lg-3 offset-lg-1">
                                                <div className="d-flex align-items-center h-100">Min Withdraw:</div>
                                            </div>
                                            <div className="col-8 col-lg-6">
                                                <div className="input-group"><input className="form-control py-1"
                                                                                    type="text"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box py-2 mb-1 rounded-0 text-dark box-light">
                                        <div className="row mx-0">
                                            <div className="col-4 col-lg-3 col-lg-3 offset-lg-1">
                                                <div className="d-flex align-items-center h-100">Max Withdraw :</div>
                                            </div>
                                            <div className="col-8 col-lg-6">
                                                <div className="input-group"><input className="form-control py-1"
                                                                                    type="text"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mx-0 py-2">
                                        <div className="col-4 col-lg-3 col-lg-3 offset-lg-1">
                                            <div className="d-flex align-items-center h-100">Status</div>
                                        </div>
                                        <div className="col-8 col-lg-6">
                                            <div className="form-check form-switch"><input className="form-check-input"
                                                                                           id="flexSwitchCheckChecked"
                                                                                           type="checkbox" role="switch"
                                                                                           checked=""/><label
                                                className="form-check-label"
                                                htmlFor="flexSwitchCheckChecked">Enabled</label></div>
                                        </div>
                                    </div>
                                    <div className="row mx-0 py-2">
                                        <div className="col-4 col-lg-3 col-lg-3 offset-lg-1">
                                            <div className="d-flex align-items-center h-100">Decimal Point for Deposit
                                                and Withdraw
                                            </div>
                                        </div>
                                        <div className="col-8 col-lg-6">
                                            <div className="form-check form-switch"><input className="form-check-input"
                                                                                           id="flexSwitchCheckChecked1"
                                                                                           type="checkbox" role="switch"
                                                                                           checked=""/><label
                                                className="form-check-label"
                                                htmlFor="flexSwitchCheckChecked1">Enabled</label></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer border-top-0">
                                    <button className="btn btn-outline-secondary px-4" type="button"
                                            data-bs-dismiss="modal">Cancel
                                    </button>
                                    <button className="btn btn-greate px-4" type="button" data-bs-toggle="modal"
                                            data-bs-target="#add-user">Update
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mx-0 mb-3 mb-lg-4">
                        <img className="logo-title mx-auto" src={logoGroup.src}/></div>
                    <div className="border-0 shadow mb-3">
                        <div className="head-block mb-1">
                            <div className="row mx-0">
                                <nav>
                                    <ul className="nav nav-pills mb-3">
                                        <li className="nav-item me-3 me-lg-4">
                                            <div className="nav-link active px-4">Currency</div>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-striped mb-0 text-center">
                                <thead className="head-block">
                                <tr className="text-light">
                                    <th scope="col">#</th>
                                    <th scope="col">Currency</th>
                                    <th scope="col">Is Decimal Allow</th>
                                    <th scope="col">Exchange Rate</th>
                                    <th scope="col">Min Deposit</th>
                                    <th scope="col">Max Deposit</th>
                                    <th scope="col">Min Withdraw</th>
                                    <th scope="col">Max Withdraw</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>AUD</td>
                                    <td>
                                        <div className="text-success">Enabled</div>
                                    </td>
                                    <td>0.9857</td>
                                    <td>1.00</td>
                                    <td>1.000.000.00</td>
                                    <td>1.00</td>
                                    <td>1.000.000.00</td>
                                    <td>
                                        <div className="text-danger">Disabled</div>
                                    </td>
                                    <td><a href="#edit" data-bs-toggle="modal"><i className="fas fa-edit"></i></a></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>AUD</td>
                                    <td>
                                        <div className="text-success">Enabled</div>
                                    </td>
                                    <td>0.9857</td>
                                    <td>1.00</td>
                                    <td>1.000.000.00</td>
                                    <td>1.00</td>
                                    <td>1.000.000.00</td>
                                    <td>
                                        <div className="text-danger">Disabled</div>
                                    </td>
                                    <td><a href="#edit" data-bs-toggle="modal"><i className="fas fa-edit"></i></a></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>AUD</td>
                                    <td>
                                        <div className="text-success">Enabled</div>
                                    </td>
                                    <td>0.9857</td>
                                    <td>1.00</td>
                                    <td>1.000.000.00</td>
                                    <td>1.00</td>
                                    <td>1.000.000.00</td>
                                    <td>
                                        <div className="text-danger">Disabled</div>
                                    </td>
                                    <td><a href="#edit" data-bs-toggle="modal"><i className="fas fa-edit"></i></a></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>AUD</td>
                                    <td>
                                        <div className="text-success">Enabled</div>
                                    </td>
                                    <td>0.9857</td>
                                    <td>1.00</td>
                                    <td>1.000.000.00</td>
                                    <td>1.00</td>
                                    <td>1.000.000.00</td>
                                    <td>
                                        <div className="text-danger">Disabled</div>
                                    </td>
                                    <td><a href="#edit" data-bs-toggle="modal"><i className="fas fa-edit"></i></a></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>AUD</td>
                                    <td>
                                        <div className="text-success">Enabled</div>
                                    </td>
                                    <td>0.9857</td>
                                    <td>1.00</td>
                                    <td>1.000.000.00</td>
                                    <td>1.00</td>
                                    <td>1.000.000.00</td>
                                    <td>
                                        <div className="text-danger">Disabled</div>
                                    </td>
                                    <td><a href="#edit" data-bs-toggle="modal"><i className="fas fa-edit"></i></a></td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>AUD</td>
                                    <td>
                                        <div className="text-success">Enabled</div>
                                    </td>
                                    <td>0.9857</td>
                                    <td>1.00</td>
                                    <td>1.000.000.00</td>
                                    <td>1.00</td>
                                    <td>1.000.000.00</td>
                                    <td>
                                        <div className="text-danger">Disabled</div>
                                    </td>
                                    <td><a href="#edit" data-bs-toggle="modal"><i className="fas fa-edit"></i></a></td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>AUD</td>
                                    <td>
                                        <div className="text-success">Enabled</div>
                                    </td>
                                    <td>0.9857</td>
                                    <td>1.00</td>
                                    <td>1.000.000.00</td>
                                    <td>1.00</td>
                                    <td>1.000.000.00</td>
                                    <td>
                                        <div className="text-danger">Disabled</div>
                                    </td>
                                    <td><a href="#edit" data-bs-toggle="modal"><i className="fas fa-edit"></i></a></td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>AUD</td>
                                    <td>
                                        <div className="text-success">Enabled</div>
                                    </td>
                                    <td>0.9857</td>
                                    <td>1.00</td>
                                    <td>1.000.000.00</td>
                                    <td>1.00</td>
                                    <td>1.000.000.00</td>
                                    <td>
                                        <div className="text-danger">Disabled</div>
                                    </td>
                                    <td><a href="#edit" data-bs-toggle="modal"><i className="fas fa-edit"></i></a></td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>AUD</td>
                                    <td>
                                        <div className="text-success">Enabled</div>
                                    </td>
                                    <td>0.9857</td>
                                    <td>1.00</td>
                                    <td>1.000.000.00</td>
                                    <td>1.00</td>
                                    <td>1.000.000.00</td>
                                    <td>
                                        <div className="text-danger">Disabled</div>
                                    </td>
                                    <td><a href="#edit" data-bs-toggle="modal"><i className="fas fa-edit"></i></a></td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>AUD</td>
                                    <td>
                                        <div className="text-success">Enabled</div>
                                    </td>
                                    <td>0.9857</td>
                                    <td>1.00</td>
                                    <td>1.000.000.00</td>
                                    <td>1.00</td>
                                    <td>1.000.000.00</td>
                                    <td>
                                        <div className="text-danger">Disabled</div>
                                    </td>
                                    <td><a href="#edit" data-bs-toggle="modal"><i className="fas fa-edit"></i></a></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end py-3">
                        <button className="btn btn-greate px-4 hvr-grow ms-4" type="button" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">Edit
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}