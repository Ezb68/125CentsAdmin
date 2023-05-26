import logo from '../../public/assets/images/logo.png'
import sgd from '../../public/assets/images/sgd.png'
import lightning from '../../public/assets/images/lightning.svg'
import err404 from '../../public/assets/images/404.png'

export default function HtFt() {
    return (
        <>
            <div className="row mx-0">
                <div className="total-bet">
                    <div className="row mx-0">
                        <div className="col-lg-10 mx-auto">
                            <div className="row mx-0 mb-3 mb-lg-4">
                                <img className="logo-title mx-auto" src={logo.src}/></div>
                            <div className="row mx-0">
                                <div className="head-block mb-3">
                                    <div className="row mx-0">
                                        <div className="col-lg-6 mb-3 mb-lg-0">
                                            <div className="row mx-0">
                                                <nav>
                                                    <ul className="nav nav-pills mb-3" id="pills-tab">
                                                        <li className="nav-item me-3 me-lg-4">
                                                            <div className="nav-link active">HT/FT</div>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                            <div className="row mx-0">
                                                <div className="col-lg-4 mt-3">
                                                    <div className="input-group">
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected="">Mode</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 mt-3">
                                                    <div className="input-group">
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected="">Language</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 mt-3">
                                                    <div className="input-group">
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected="">Monitor</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-3 mb-lg-0">
                                            <div className="row mx-0">
                                                <div className="col-lg-5">
                                                    <div className="head-box my-4 p-3">
                                                        <div className="d-flex align-items-center">
                                                            <div className="px-0 w-100">
                                                                <p className="mb-0 lh-1">Currency</p>
                                                                <div className="fs-5 text-light">SGD</div>
                                                            </div>
                                                            <div className="flex-shrink-1">
                                                                <div className="head-icon">
                                                                    <img className="icon" src={sgd.src}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 offset-lg-1">
                                                    <div className="head-box my-4 p-3">
                                                        <div className="d-flex align-items-center">
                                                            <div className="px-0 w-100">
                                                                <p className="mb-0 lh-1">Loading</p>
                                                                <div className="fs-5 text-light">Refresh</div>
                                                            </div>
                                                            <div className="flex-shrink-1">
                                                                <div className="head-icon">
                                                                    <img className="icon" src={lightning.src}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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
                                                        <th scope="col">Time</th>
                                                        <th scope="col">Teams</th>
                                                        <th scope="col">Best List</th>
                                                        <th scope="col">HH</th>
                                                        <th scope="col">HD</th>
                                                        <th scope="col">HA</th>
                                                        <th scope="col">DH</th>
                                                        <th scope="col">DD</th>
                                                        <th scope="col">DA</th>
                                                        <th scope="col">AH</th>
                                                        <th scope="col">AD</th>
                                                        <th scope="col">AA</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody className="text-center"></tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="row mx-0">
                                            <img className="w-50 mx-auto mb-3" src={err404.src}/>
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