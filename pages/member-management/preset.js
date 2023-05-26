import logo from '../../public/assets/images/logo.png'
import key from '../../public/assets/images/key.png'
import remove from '../../public/assets/images/remove.png'
import logoGroup from "@/public/assets/images/logo-group.png";

export default function Preset() {
    return (
        <>
            <div className="row mx-0">
                <div className="total-bet">
                    <div className="row mx-0">
                        <div className="col-lg-12 mx-auto">
                            <div className="row mx-0 mb-3 mb-lg-4">
                                <img className="logo-title mx-auto" src={logoGroup.src}/>
                            </div>
                            <div className="head-block mb-3">
                                <div className="row mx-0">
                                    <div className="col-lg-2 mb-3 mb-lg-0">
                                        <div className="row mx-0">
                                            <nav>
                                                <ul className="nav nav-pills mb-3" id="pills-tab">
                                                    <li className="nav-item me-3 me-lg-4">
                                                        <div className="nav-link active">Preset PT</div>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div
                                            className="d-flex align-items-center h-100 text-light justify-content-between flex-wrap">
                                            <div className="form-check me-3"><input
                                                className="form-check-input rounded-circle" id="check1" type="checkbox"
                                                value=""/><label className="form-check-label" htmlFor="check1">PT
                                                1</label></div>
                                            <div className="form-check me-3"><input
                                                className="form-check-input rounded-circle" id="check2" type="checkbox"
                                                value=""/><label className="form-check-label" htmlFor="check2">PT
                                                2</label></div>
                                            <div className="form-check me-3"><input
                                                className="form-check-input rounded-circle" id="live" type="checkbox"
                                                value=""/><label className="form-check-label" htmlFor="live">AH
                                                Live</label></div>
                                            <div className="form-check me-3"><input
                                                className="form-check-input rounded-circle" id="outright"
                                                type="checkbox" value=""/><label className="form-check-label"
                                                                                 htmlFor="outright">Outright</label>
                                            </div>
                                            <div className="form-check me-3"><input
                                                className="form-check-input rounded-circle" id="all" type="checkbox"
                                                value=""/><label className="form-check-label" htmlFor="all">Changes all
                                                PT groups</label></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 mb-3 mb-lg-0">
                                        <div className="input-group my-3"><select className="form-select"
                                                                                  aria-label="Default select example">
                                            <option selected="">Sport</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select></div>
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
                                            <th scope="col">Min PT</th>
                                            <th scope="col">Force PT</th>
                                            <th scope="col">Take Remaining</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>IND</td>
                                            <td>SH India</td>
                                            <td>Sunny</td>
                                            <td><input className="form-check-input" type="checkbox" value=""/></td>
                                            <td>100</td>
                                            <td>100,000</td>
                                            <td>Yes</td>
                                            <td>Done</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>IND</td>
                                            <td>SH India</td>
                                            <td>Sunny</td>
                                            <td><input className="form-check-input" type="checkbox" value=""/></td>
                                            <td>100</td>
                                            <td>100,000</td>
                                            <td>Yes</td>
                                            <td>Done</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>IND</td>
                                            <td>SH India</td>
                                            <td>Sunny</td>
                                            <td><input className="form-check-input" type="checkbox" value=""/></td>
                                            <td>100</td>
                                            <td>100,000</td>
                                            <td>Yes</td>
                                            <td>Done</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>IND</td>
                                            <td>SH India</td>
                                            <td>Sunny</td>
                                            <td><input className="form-check-input" type="checkbox" value=""/></td>
                                            <td>100</td>
                                            <td>100,000</td>
                                            <td>Yes</td>
                                            <td>Done</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>IND</td>
                                            <td>SH India</td>
                                            <td>Sunny</td>
                                            <td><input className="form-check-input" type="checkbox" value=""/></td>
                                            <td>100</td>
                                            <td>100,000</td>
                                            <td>Yes</td>
                                            <td>Done</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>IND</td>
                                            <td>SH India</td>
                                            <td>Sunny</td>
                                            <td><input className="form-check-input" type="checkbox" value=""/></td>
                                            <td>100</td>
                                            <td>100,000</td>
                                            <td>Yes</td>
                                            <td>Done</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">7</th>
                                            <td>IND</td>
                                            <td>SH India</td>
                                            <td>Sunny</td>
                                            <td><input className="form-check-input" type="checkbox" value=""/></td>
                                            <td>100</td>
                                            <td>100,000</td>
                                            <td>Yes</td>
                                            <td>Done</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">8</th>
                                            <td>IND</td>
                                            <td>SH India</td>
                                            <td>Sunny</td>
                                            <td><input className="form-check-input" type="checkbox" value=""/></td>
                                            <td>100</td>
                                            <td>100,000</td>
                                            <td>Yes</td>
                                            <td>Done</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">9</th>
                                            <td>IND</td>
                                            <td>SH India</td>
                                            <td>Sunny</td>
                                            <td><input className="form-check-input" type="checkbox" value=""/></td>
                                            <td>100</td>
                                            <td>100,000</td>
                                            <td>Yes</td>
                                            <td>Done</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">10</th>
                                            <td>IND</td>
                                            <td>SH India</td>
                                            <td>Sunny</td>
                                            <td><input className="form-check-input" type="checkbox" value=""/></td>
                                            <td>100</td>
                                            <td>100,000</td>
                                            <td>Yes</td>
                                            <td>Done</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
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
                            <div className="border-0 shadow mb-3">
                                <div className="head-block rounded-0 text-center py-3 text-light">Preset PT Settings
                                </div>
                                <div className="row mx-0 px-3 py-1">
                                    <div className="box py-2 mb-1 rounded-0">
                                        <div className="row mx-0">
                                            <div className="col-lg-4">
                                                <div className="row mx-0 mb-2 mb-lg-0">
                                                    <div className="col-4">
                                                        <div className="d-flex align-items-center h-100">Game</div>
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="input-group"><select
                                                            className="form-select py-1"
                                                            aria-label="Default select example">
                                                            <option selected="">Min PT</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                        </select></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="row mx-0 mb-2 mb-lg-0">
                                                    <div className="col-4">
                                                        <div className="d-flex align-items-center h-100">Forced PT</div>
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="input-group"><select
                                                            className="form-select py-1"
                                                            aria-label="Default select example">
                                                            <option selected="">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                        </select></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="row mx-0 mb-2 mb-lg-0">
                                                    <div className="col-4">
                                                        <div className="d-flex align-items-center h-100">Is Take All:
                                                        </div>
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="input-group"><select
                                                            className="form-select py-1"
                                                            aria-label="Default select example">
                                                            <option selected="">Take Remaining</option>
                                                            <option value="1">Yes</option>
                                                            <option value="2">No</option>
                                                        </select></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center py-3">
                                <button className="btn btn-greate px-4 hvr-grow">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}