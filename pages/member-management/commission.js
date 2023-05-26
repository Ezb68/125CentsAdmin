import logo from '../../public/assets/images/logo.png'
import key from '../../public/assets/images/key.png'
import remove from '../../public/assets/images/remove.png'

export default function Commission() {
    return (
        <>
            <div className="row mx-0">
                <div className="total-bet">
                    <div className="row mx-0">
                        <div className="col-lg-12 mx-auto">
                            <div className="row mx-0 mb-3 mb-lg-4">
                                <img className="logo-title mx-auto"  src={logo.src}/>
                            </div>
                            <div className="head-block mb-3">
                                <div className="row mx-0">
                                    <div className="col-lg-8 mb-3 mb-lg-0">
                                        <div className="row mx-0">
                                            <nav>
                                                <ul className="nav nav-pills mb-3" id="pills-tab">
                                                    <li className="nav-item me-3 me-lg-4">
                                                        <div className="nav-link active">Commission
                                                        </div>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mb-3 mb-lg-0">
                                        <div className="row mx-0 mt-lg-3">
                                            <div className="col-lg-6 my-2 my-lg-3">
                                                <div className="input-group"><select className="form-select"
                                                                                     aria-label="Default select example">
                                                    <option selected="">Sport</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select></div>
                                            </div>
                                            <div className="col-lg-6 my-2 my-lg-3">
                                                <div className="input-group"><select className="form-select"
                                                                                     aria-label="Default select example">
                                                    <option selected="">Activity</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select></div>
                                            </div>
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
                                            <th scope="col">First Name</th>
                                            <th scope="col">Last Name</th>
                                            <th scope="col">Edit</th>
                                            <th scope="col">Group A</th>
                                            <th scope="col">Group B</th>
                                            <th scope="col">Group C</th>
                                            <th scope="col">1x2</th>
                                            <th scope="col">Orther</th>
                                            <th scope="col">Last Login</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>IND</td>
                                            <td>SH India</td>
                                            <td>Sunny</td>
                                            <td><a href="javascript:void(0)"><i className="fa-solid fa-pencil"></i></a>
                                            </td>
                                            <td>100</td>
                                            <td>100,000</td>
                                            <td>100,000</td>
                                            <td>100</td>
                                            <td>100,000</td>
                                            <td>2022-04-18 12:27 AM</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>IND</td>
                                            <td>SH India</td>
                                            <td>Sunny</td>
                                            <td><a href="javascript:void(0)"><i className="fa-solid fa-pencil"></i></a>
                                            </td>
                                            <td>100</td>
                                            <td>100,000</td>
                                            <td>100,000</td>
                                            <td>100</td>
                                            <td>100,000</td>
                                            <td>2022-04-18 12:27 AM</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>IND</td>
                                            <td>SH India</td>
                                            <td>Sunny</td>
                                            <td><a href="javascript:void(0)"><i className="fa-solid fa-pencil"></i></a>
                                            </td>
                                            <td>100</td>
                                            <td>100,000</td>
                                            <td>100,000</td>
                                            <td>100</td>
                                            <td>100,000</td>
                                            <td>2022-04-18 12:27 AM</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>IND</td>
                                            <td>SH India</td>
                                            <td>Sunny</td>
                                            <td><a href="javascript:void(0)"><i className="fa-solid fa-pencil"></i></a>
                                            </td>
                                            <td>100</td>
                                            <td>100,000</td>
                                            <td>100,000</td>
                                            <td>100</td>
                                            <td>100,000</td>
                                            <td>2022-04-18 12:27 AM</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>IND</td>
                                            <td>SH India</td>
                                            <td>Sunny</td>
                                            <td><a href="javascript:void(0)"><i className="fa-solid fa-pencil"></i></a>
                                            </td>
                                            <td>100</td>
                                            <td>100,000</td>
                                            <td>100,000</td>
                                            <td>100</td>
                                            <td>100,000</td>
                                            <td>2022-04-18 12:27 AM</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>IND</td>
                                            <td>SH India</td>
                                            <td>Sunny</td>
                                            <td><a href="javascript:void(0)"><i className="fa-solid fa-pencil"></i></a>
                                            </td>
                                            <td>100</td>
                                            <td>100,000</td>
                                            <td>100,000</td>
                                            <td>100</td>
                                            <td>100,000</td>
                                            <td>2022-04-18 12:27 AM</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">7</th>
                                            <td>IND</td>
                                            <td>SH India</td>
                                            <td>Sunny</td>
                                            <td><a href="javascript:void(0)"><i className="fa-solid fa-pencil"></i></a>
                                            </td>
                                            <td>100</td>
                                            <td>100,000</td>
                                            <td>100,000</td>
                                            <td>100</td>
                                            <td>100,000</td>
                                            <td>2022-04-18 12:27 AM</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">8</th>
                                            <td>IND</td>
                                            <td>SH India</td>
                                            <td>Sunny</td>
                                            <td><a href="javascript:void(0)"><i className="fa-solid fa-pencil"></i></a>
                                            </td>
                                            <td>100</td>
                                            <td>100,000</td>
                                            <td>100,000</td>
                                            <td>100</td>
                                            <td>100,000</td>
                                            <td>2022-04-18 12:27 AM</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">9</th>
                                            <td>IND</td>
                                            <td>SH India</td>
                                            <td>Sunny</td>
                                            <td><a href="javascript:void(0)"><i className="fa-solid fa-pencil"></i></a>
                                            </td>
                                            <td>100</td>
                                            <td>100,000</td>
                                            <td>100,000</td>
                                            <td>100</td>
                                            <td>100,000</td>
                                            <td>2022-04-18 12:27 AM</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">10</th>
                                            <td>IND</td>
                                            <td>SH India</td>
                                            <td>Sunny</td>
                                            <td><a href="javascript:void(0)"><i className="fa-solid fa-pencil"></i></a>
                                            </td>
                                            <td>100</td>
                                            <td>100,000</td>
                                            <td>100,000</td>
                                            <td>100</td>
                                            <td>100,000</td>
                                            <td>2022-04-18 12:27 AM</td>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}