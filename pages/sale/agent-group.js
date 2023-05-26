import logoGroup from '../../public/assets/images/logo-group.png'
import loading from '../../public/assets/images/loading.png'

export default function AgentGroup() {
    return (
        <>
            <div className="row mx-0">
                <div className="total-bet">
                    <div className="row mx-0">
                        <div className="col-lg-10 mx-auto">
                            <div className="row mx-0 mb-3 mb-lg-4">
                                <img className="logo-title mx-auto" src={logoGroup.src}/></div>
                            <div className="row mx-0">
                                <div className="head-block mb-3">
                                    <div className="row mx-0">
                                        <div className="col-lg-6 mb-3 mb-lg-0">
                                            <div className="row mx-0">
                                                <nav>
                                                    <ul className="nav nav-pills mb-3">
                                                        <li className="nav-item me-3 me-lg-4">
                                                            <button className="nav-link active">Agent Account</button>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mx-0">
                                        <div className="tab-list px-3">
                                            <nav>
                                                <ul className="nav nav-pills mb-3 justify-content-start" role="tablist">
                                                    <li className="nav-item me-3 me-lg-4" role="presentation">
                                                        <button className="nav-link rounded active"
                                                                data-bs-toggle="pill" data-bs-target="#infor"
                                                                type="button" role="tab">Agent information
                                                        </button>
                                                    </li>
                                                    <li className="nav-item me-3 me-lg-4" role="presentation">
                                                        <button className="nav-link rounded" data-bs-toggle="pill"
                                                                data-bs-target="#capital" type="button"
                                                                role="tab">Capital percentage
                                                        </button>
                                                    </li>
                                                    <li className="nav-item me-3 me-lg-4" role="presentation">
                                                        <button className="nav-link rounded" data-bs-toggle="pill"
                                                                data-bs-target="#custom" type="button" role="tab">Custom
                                                            %
                                                        </button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link rounded" data-bs-toggle="pill"
                                                                data-bs-target="#setting" type="button" role="tab">Game
                                                            settings
                                                        </button>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div className="card px-0">
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="infor" role="tabpanel"
                                             aria-labelledby="home-tab" tabIndex="0">
                                            <div className="head-block text-center rounded-0 py-2 text-light">Basic
                                                information
                                            </div>
                                            <div className="card-body">
                                                <div className="d-flex">
                                                    <div className="form-check me-4"><input className="form-check-input"
                                                                                            id="flexRadioDefault2"
                                                                                            type="radio"
                                                                                            name="flexRadioDefault"
                                                                                            checked=""/><label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioDefault2">Agent</label></div>
                                                    <div className="form-check"><input className="form-check-input"
                                                                                       id="flexRadioDefault1"
                                                                                       type="radio"
                                                                                       name="flexRadioDefault"/><label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioDefault1">Menber</label></div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-6 px-0">
                                                        <div className="row mx-0">
                                                            <div className="col-lg-6">
                                                                <div className="box box-light p-2 mb-2">
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
                                                                        <div className="flex-shrink-1">Level</div>
                                                                        <div className="ps-3 w-50"><select
                                                                            className="form-select py-1"
                                                                            aria-label="Default select example">
                                                                            <option selected="">SMA</option>
                                                                            <option value="1">One</option>
                                                                            <option value="2">Two</option>
                                                                            <option value="3">Three</option>
                                                                        </select></div>
                                                                    </div>
                                                                </div>
                                                                <div className="box box-light p-2 mb-2">
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
                                                                        <div className="flex-shrink-1">Password</div>
                                                                        <div className="ps-3 w-50"><input
                                                                            className="form-control py-1"
                                                                            type="password"/></div>
                                                                    </div>
                                                                </div>
                                                                <div className="box box-light p-2 mb-2">
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
                                                                        <div className="flex-shrink-1">Code</div>
                                                                        <div className="ps-3 w-50"><select
                                                                            className="form-select py-1"
                                                                            aria-label="Default select example">
                                                                            <option selected="">fa8032q2</option>
                                                                            <option value="1">One</option>
                                                                            <option value="2">Two</option>
                                                                            <option value="3">Three</option>
                                                                        </select></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="box box-light p-2 mb-2">
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
                                                                        <div className="flex-shrink-1">Name</div>
                                                                        <div className="ps-3 w-50"><input
                                                                            className="form-control py-1" type="text"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="box box-light p-2 mb-2">
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
                                                                        <div className="flex-shrink-1">Confirm
                                                                            Password
                                                                        </div>
                                                                        <div className="ps-3 w-50"><input
                                                                            className="form-control py-1" type="text"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="box box-light p-2 mb-2">
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
                                                                        <div className="flex-shrink-1">Payment cycle
                                                                        </div>
                                                                        <div className="ps-3 w-50"><select
                                                                            className="form-select py-1"
                                                                            aria-label="Default select example">
                                                                            <option selected="">fa8032q2</option>
                                                                            <option value="1">One</option>
                                                                            <option value="2">Two</option>
                                                                            <option value="3">Three</option>
                                                                        </select></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="row mx-0">
                                                            <div className="col-lg-6">
                                                                <div className="box box-light p-2 mb-2">
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
                                                                        <div className="flex-shrink-1">ID Agent:</div>
                                                                        <div className="ps-3 w-50"><select
                                                                            className="form-select py-1"
                                                                            aria-label="Default select example">
                                                                            <option selected="">SMA</option>
                                                                            <option value="1">One</option>
                                                                            <option value="2">Two</option>
                                                                            <option value="3">Three</option>
                                                                        </select></div>
                                                                    </div>
                                                                </div>
                                                                <div className="box box-light p-2 mb-2">
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
                                                                        <div className="flex-shrink-1">Phone</div>
                                                                        <div className="ps-3 w-50"><input
                                                                            className="form-control py-1" type="text"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="box box-light p-2 mb-2">
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
                                                                        <div className="flex-shrink-1">Currency</div>
                                                                        <div className="ps-3 w-50"><select
                                                                            className="form-select py-1"
                                                                            aria-label="Default select example">
                                                                            <option selected="">VND</option>
                                                                            <option value="1">One</option>
                                                                            <option value="2">Two</option>
                                                                            <option value="3">Three</option>
                                                                        </select></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="box box-light p-2 mb-2">
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
                                                                        <div className="flex-shrink-1">Member Level
                                                                        </div>
                                                                        <div className="ps-3 w-50"><select
                                                                            className="form-select py-1"
                                                                            aria-label="Default select example">
                                                                            <option selected="">fa8032q2</option>
                                                                            <option value="1">One</option>
                                                                            <option value="2">Two</option>
                                                                            <option value="3">Three</option>
                                                                        </select></div>
                                                                    </div>
                                                                </div>
                                                                <div className="box box-light p-2 mb-2">
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
                                                                        <div className="flex-shrink-1">Note</div>
                                                                        <div className="ps-3 w-50"><input
                                                                            className="form-control py-1" type="text"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center py-3">
                                                    <button className="btn btn-outline-secondary hvr-grow px-4">Reset
                                                    </button>
                                                    <button className="btn btn-greate hvr-grow px-4 ms-4">Next</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="capital" role="tabpanel"
                                             aria-labelledby="profile-tab" tabIndex="0">
                                            <div className="head-block text-center rounded-0 py-2 text-light">Agent
                                                capital
                                            </div>
                                            <div className="card-body px-0">
                                                <table className="table table-striped">
                                                    <thead>
                                                    <tr>
                                                        <th scope="col">Deposit bonus %</th>
                                                        <th scope="col">Other bonus %</th>
                                                        <th scope="col">Return %</th>
                                                        <th scope="col">Jackpot bonus %</th>
                                                        <th scope="col">Marketing bonus %</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <th scope="row">100</th>
                                                        <td>100</td>
                                                        <td>100</td>
                                                        <td>100</td>
                                                        <td>0</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="head-block text-center rounded-0 py-2 text-light">System fee
                                                (system fee = total winnings and losing customers * % system fee)
                                            </div>
                                            <div className="box box-light py-2 px-3 rounded-0">100</div>
                                            <div className="d-flex justify-content-center py-3">
                                                <button className="btn btn-outline-secondary hvr-grow px-4">Reset
                                                </button>
                                                <button className="btn btn-greate hvr-grow px-4 ms-4">Next</button>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="custom" role="tabpanel"
                                             aria-labelledby="profile-tab" tabIndex="0">
                                            <div className="head-block text-center rounded-0 py-2 text-light">Agent
                                                capital
                                            </div>
                                            <div className="card-body box box-light">
                                                <div className="d-flex">
                                                    <div className="form-check me-4"><input className="form-check-input"
                                                                                            id="check1" type="radio"
                                                                                            name="flexRadioDefault"
                                                                                            checked=""/><label
                                                        className="form-check-label" htmlFor="check1">Daily ( 00: 00 ~
                                                        23: 59 GMT +8)</label></div>
                                                    <div className="form-check me-4"><input className="form-check-input"
                                                                                            id="check2" type="radio"
                                                                                            name="flexRadioDefault"/><label
                                                        className="form-check-label" htmlFor="check2">Weekly ( 00: 00
                                                        Monday~ 23: 59 Sunday GMT +8)</label></div>
                                                    <div className="form-check"><input className="form-check-input"
                                                                                       id="check3" type="radio"
                                                                                       name="flexRadioDefault"/><label
                                                        className="form-check-label" htmlFor="check3">Monthly</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="head-block text-center rounded-0 py-2 text-light">Statistical
                                                conditions
                                            </div>
                                            <div className="row mx-0">
                                                <div className="col-lg-6">
                                                    <div className="box py-2 mb-1 box-light">
                                                        <div className="row mx-0">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">Total
                                                                    operating revenue:
                                                                </div>
                                                            </div>
                                                            <div className="col-8">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="text"/></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="box py-2 mb-1 box-light">
                                                        <div className="row mx-0">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">Number
                                                                    of active guests:
                                                                </div>
                                                            </div>
                                                            <div className="col-8">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="text"/></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="head-block text-center rounded-0 py-2 text-light">Customer
                                                operating conditions
                                            </div>
                                            <div className="row mx-0">
                                                <div className="col-lg-6">
                                                    <div className="box py-2 mb-1 box-light">
                                                        <div className="row mx-0">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">Lowest
                                                                    effective bet:
                                                                </div>
                                                            </div>
                                                            <div className="col-8">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="text"/></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="box py-2 mb-1 box-light">
                                                        <div className="row mx-0">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">Lowest
                                                                    charge
                                                                </div>
                                                            </div>
                                                            <div className="col-8">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="text"/></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="head-block text-center rounded-0 py-2 text-light">Customer
                                                operating conditions
                                            </div>
                                            <div className="row mx-0">
                                                <div className="col-lg-6">
                                                    <div className="box py-2 mb-1 box-light">
                                                        <div className="row mx-0">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">Maximum
                                                                    value 8%:
                                                                </div>
                                                            </div>
                                                            <div className="col-8">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="text"/></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center py-3">
                                                <button className="btn btn-outline-secondary hvr-grow px-4">Reset
                                                </button>
                                                <button className="btn btn-greate hvr-grow px-4 ms-4">Next</button>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="setting" role="tabpanel"
                                             aria-labelledby="profile-tab" tabIndex="0">
                                            <div className="table-responsive">
                                                <table className="table table-striped mb-0 text-center">
                                                    <thead className="head-block">
                                                    <tr className="text-light">
                                                        <th scope="col">Livecasino</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Sportbook</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Slot games</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Jackpot</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">MPG</th>
                                                        <th scope="col">Status</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <th scope="row">Game 1</th>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 2</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 3</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 4</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 5</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Game 1</th>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 2</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 3</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 4</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 5</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Game 1</th>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 2</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 3</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 4</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 5</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Game 1</th>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 2</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 3</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 4</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 5</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Game 1</th>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 2</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 3</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 4</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 5</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Game 1</th>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 2</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 3</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 4</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 5</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Game 1</th>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 2</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 3</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 4</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 5</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Game 1</th>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 2</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 3</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 4</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 5</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Game 1</th>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 2</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 3</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 4</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 5</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Game 1</th>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 2</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 3</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 4</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
                                                        <td>Game 5</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check form-switch"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    role="switch" checked=""/></div>
                                                            </div>
                                                        </td>
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
                                            <div className="d-flex justify-content-center py-3">
                                                <button className="btn btn-outline-secondary hvr-grow px-4">Reset
                                                </button>
                                                <button className="btn btn-greate hvr-grow px-4 ms-4">Next</button>
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