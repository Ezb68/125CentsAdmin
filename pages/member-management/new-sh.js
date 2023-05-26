import logo from '../../public/assets/images/logo.png'
import key from '../../public/assets/images/key.png'
import remove from '../../public/assets/images/remove.png'

export default function NewSh() {
    return (
        <>
            <div className="row mx-0">
                <div className="total-bet">
                    <div className="row mx-0">
                        <div className="col-lg-12 mx-auto">
                            <div className="row mx-0 mb-3 mb-lg-4">
                                <img className="logo-title mx-auto" src={logo.src}/>
                                </div>
                            <div className="border-0 shadow">
                                <div className="card-header bg-white pt-0 pb-3 pb-lg-4 border-0 mb-1">
                                    <div className="d-flex justify-content-center">
                                        <div className="title-block px-4 py-3">New SH</div>
                                    </div>
                                </div>
                                <div className="head-block rounded-0 text-center py-3 text-light">User Information</div>
                                <div className="card-body">
                                    <div className="row mx-0">
                                        <div className="col-md-6 p-0">
                                            <div className="box py-2 mb-1 rounded-0">
                                                <div className="row mx-0">
                                                    <div className="col-4">
                                                        <div className="d-flex align-items-center h-100">Username :
                                                            <div className="text-danger">*</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-8 col-lg-5">
                                                        <div className="input-group"><input
                                                            className="form-control py-1" type="text"
                                                            placeholder="Wewin247pro"/></div>
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
                                                        <div className="d-flex align-items-center h-100">Password :
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
                                                        <div className="d-flex align-items-center h-100">First Name:
                                                        </div>
                                                    </div>
                                                    <div className="col-8 col-lg-5">
                                                        <div className="input-group"><input
                                                            className="form-control py-1" type="text"/></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box py-2 mb-1 rounded-0 box-light">
                                                <div className="row mx-0">
                                                    <div className="col-4">
                                                        <div className="d-flex align-items-center h-100">Last Name:
                                                        </div>
                                                    </div>
                                                    <div className="col-8 col-lg-5">
                                                        <div className="input-group"><input
                                                            className="form-control py-1" type="text"/></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 p-0">
                                            <div className="box py-2 mb-1 rounded-0">
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
                                            <div className="box py-2 mb-1 rounded-0 box-light">
                                                <div className="row mx-0">
                                                    <div className="col-4">
                                                        <div className="d-flex align-items-center h-100">Email:</div>
                                                    </div>
                                                    <div className="col-8 col-lg-5">
                                                        <div className="input-group"><input
                                                            className="form-control py-1" type="email"/></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box py-2 mb-1 rounded-0">
                                                <div className="row mx-0">
                                                    <div className="col-4">
                                                        <div className="d-flex align-items-center h-100">Currency:</div>
                                                    </div>
                                                    <div className="col-8 col-lg-5">
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
                                            <div className="box py-2 mb-1 rounded-0 box-light">
                                                <div className="row mx-0">
                                                    <div className="col-4">
                                                        <div className="d-flex align-items-center h-100">Phone:</div>
                                                    </div>
                                                    <div className="col-8 col-lg-5">
                                                        <div className="input-group"><input
                                                            className="form-control py-1" type="text"/></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mx-0">
                                    <div className="col-lg-1">
                                        <div className="d-flex align-items-center h-100">Product:</div>
                                    </div>
                                    <div className="col-lg-10">
                                        <div className="product">
                                            <ul className="nav nav-tabs border-bottom-0" role="tablist">
                                                <li className="nav-item me-2" role="presentation">
                                                    <button className="nav-link px-4 active" data-bs-toggle="pill"
                                                            data-bs-target="#sports" type="button" role="tab">Sports
                                                    </button>
                                                </li>
                                                <li className="nav-item me-2" role="presentation">
                                                    <button className="nav-link px-4" data-bs-toggle="pill"
                                                            data-bs-target="#game" type="button" role="tab">Game
                                                    </button>
                                                </li>
                                                <li className="nav-item me-2" role="presentation">
                                                    <button className="nav-link px-4" data-bs-toggle="pill"
                                                            data-bs-target="#casino" type="button" role="tab">Live
                                                        Casino
                                                    </button>
                                                </li>
                                                <li className="nav-item me-2" role="presentation">
                                                    <button className="nav-link px-4" data-bs-toggle="pill"
                                                            data-bs-target="#provider" type="button" role="tab">Game
                                                        Provider
                                                    </button>
                                                </li>
                                                <li className="nav-item me-2" role="presentation">
                                                    <button className="nav-link px-4" data-bs-toggle="pill"
                                                            data-bs-target="#pt" type="button" role="tab">Third Party
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="sports" role="tabpanel"
                                             tabIndex="0">
                                            <div className="head-block rounded-0 text-center py-3 text-light">Max
                                                Credit/ Bet Setting
                                            </div>
                                            <div className="row mx-0 px-3 py-1">
                                                <div className="col-md-6 p-0">
                                                    <div className="box py-2 mb-1 rounded-0">
                                                        <div className="row mx-0">
                                                            <div className="col-4">
                                                                <div
                                                                    className="d-flex align-items-center h-100">Sports:
                                                                </div>
                                                            </div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="text"
                                                                    value="Allowed" readOnly="readonly"/></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="box py-2 mb-1 rounded-0 box-light">
                                                        <div className="row mx-0">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">Credit
                                                                    :
                                                                </div>
                                                            </div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="number"
                                                                    placeholder="Max: 1,800,000.00"/></div>
                                                            </div>
                                                            <div
                                                                className="col-lg-3 d-none d-lg-flex align-items-lg-center justify-content-center">
                                                                <div className="text-secondary">Max: 1,800,000.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="box py-2 mb-1 rounded-0">
                                                        <div className="row mx-0">
                                                            <div className="col-4">
                                                                <div
                                                                    className="d-flex align-items-center h-100">Password:
                                                                    <div className="text-danger">*</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="password"/>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="col-lg-3 d-none d-lg-flex align-items-lg-center justify-content-center">
                                                                <div className="text-secondary">*Required</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 p-0">
                                                    <div className="box py-2 mb-1 rounded-0">
                                                        <div className="row mx-0">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">Min Bet
                                                                    :
                                                                </div>
                                                            </div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="number"
                                                                    placeholder="Max: 1,800,000.00"/></div>
                                                            </div>
                                                            <div
                                                                className="col-lg-3 d-none d-lg-flex align-items-lg-center justify-content-center">
                                                                <div className="text-secondary">Min: 1</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="box py-2 mb-1 rounded-0 box-light">
                                                        <div className="row mx-0">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">Max
                                                                    Bet:
                                                                </div>
                                                            </div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="number"
                                                                    placeholder="Max: 1,800,000.00"/></div>
                                                            </div>
                                                            <div
                                                                className="col-lg-3 d-none d-lg-flex align-items-lg-center justify-content-center">
                                                                <div className="text-secondary">Max: 1,800,000.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="box py-2 mb-1 rounded-0">
                                                        <div className="row mx-0">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">Max Per
                                                                    Match
                                                                </div>
                                                            </div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="number"
                                                                    placeholder="Max: 1,800,000.00"/></div>
                                                            </div>
                                                            <div
                                                                className="col-lg-3 d-none d-lg-flex align-items-lg-center justify-content-center">
                                                                <div className="text-secondary">Max: 20,000,000.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="head-block rounded-0 text-center py-3 text-light">Commission
                                            </div>
                                            <div className="row mx-0 px-3 py-1">
                                                <div className="col-md-6 p-0">
                                                    <div className="box py-2 mb-1 rounded-0">
                                                        <div className="row mx-0">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">Group
                                                                    A:
                                                                </div>
                                                            </div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="text"
                                                                    value="10"/></div>
                                                            </div>
                                                            <div
                                                                className="col-lg-3 d-none d-lg-flex align-items-lg-center justify-content-center">
                                                                <div className="text-secondary">% Max: 10</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="box py-2 mb-1 rounded-0 box-light">
                                                        <div className="row mx-0">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">Group
                                                                    B:
                                                                </div>
                                                            </div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="text"
                                                                    value="10"/></div>
                                                            </div>
                                                            <div
                                                                className="col-lg-3 d-none d-lg-flex align-items-lg-center justify-content-center">
                                                                <div className="text-secondary">% Max: 10</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="box py-2 mb-1 rounded-0">
                                                        <div className="row mx-0">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">Group
                                                                    C:
                                                                </div>
                                                            </div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="text"
                                                                    value="10"/></div>
                                                            </div>
                                                            <div
                                                                className="col-lg-3 d-none d-lg-flex align-items-lg-center justify-content-center">
                                                                <div className="text-secondary">% Max: 10</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 p-0">
                                                    <div className="box py-2 mb-1 rounded-0">
                                                        <div className="row mx-0">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">Other
                                                                    Comm:
                                                                </div>
                                                            </div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="text"
                                                                    value="10"/></div>
                                                            </div>
                                                            <div
                                                                className="col-lg-3 d-none d-lg-flex align-items-lg-center justify-content-center">
                                                                <div className="text-secondary">% Max: 10</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="box py-2 mb-1 rounded-0 box-light">
                                                        <div className="row mx-0">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">1X2
                                                                    Comm:
                                                                </div>
                                                            </div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="text"
                                                                    value="10"/></div>
                                                            </div>
                                                            <div
                                                                className="col-lg-3 d-none d-lg-flex align-items-lg-center justify-content-center">
                                                                <div className="text-secondary">% Max: 10</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="box py-2 mb-1 rounded-0">
                                                        <div className="row mx-0 d-none d-lg-flex invisible">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">Group
                                                                    C:
                                                                </div>
                                                            </div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="text"
                                                                    value="10"/></div>
                                                            </div>
                                                            <div
                                                                className="col-lg-3 d-none d-lg-flex align-items-lg-center justify-content-center">
                                                                <div className="text-secondary">% Max: 10</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="head-block rounded-0 text-center py-3 text-light">Position
                                                Taking
                                            </div>
                                            <div className="row mx-0 px-3 py-1">
                                                <div className="box py-2 mb-1 rounded-0">
                                                    <div className="row mx-0">
                                                        <div className="col-lg-4">
                                                            <div className="row mx-0 mb-2 mb-lg-0">
                                                                <div className="col-4">
                                                                    <div
                                                                        className="d-flex align-items-center h-100">PT1:
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Forced
                                                                        PT
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Total
                                                                        : 100
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
                                                <div className="box py-2 mb-1 rounded-0 box-light">
                                                    <div className="row mx-0">
                                                        <div className="col-lg-4">
                                                            <div className="row mx-0 mb-2 mb-lg-0">
                                                                <div className="col-4">
                                                                    <div
                                                                        className="d-flex align-items-center h-100">PT2:
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Forced
                                                                        PT
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Total
                                                                        : 100
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
                                                <div className="box py-2 mb-1 rounded-0">
                                                    <div className="row mx-0">
                                                        <div className="col-lg-4">
                                                            <div className="row mx-0 mb-2 mb-lg-0">
                                                                <div className="col-4">
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Outight:
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Forced
                                                                        PT
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Total
                                                                        : 100
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
                                                <div className="box py-2 mb-1 rounded-0 box-light">
                                                    <div className="row mx-0">
                                                        <div className="col-lg-4">
                                                            <div className="row mx-0 mb-2 mb-lg-0">
                                                                <div className="col-4">
                                                                    <div className="d-flex align-items-center h-100">AH
                                                                        Live:
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Forced
                                                                        PT
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Total
                                                                        : 100
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
                                                <div className="box py-2 mb-1 rounded-0">
                                                    <div className="row mx-0">
                                                        <div className="col-lg-4">
                                                            <div className="row mx-0 mb-2 mb-lg-0">
                                                                <div className="col-4">
                                                                    <div className="d-flex align-items-center h-100">OU
                                                                        Live:
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Forced
                                                                        PT
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Total
                                                                        : 100
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
                                        <div className="tab-pane fade" id="game" role="tabpanel" tabIndex="0">
                                            <div className="head-block rounded-0 text-center py-3 text-light">Games
                                            </div>
                                            <div className="row mx-0 px-3 py-1">
                                                <div className="col-md-6 p-0">
                                                    <div className="box py-2 mb-1 rounded-0">
                                                        <div className="row mx-0">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">Player
                                                                    Max Win:
                                                                </div>
                                                            </div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group"><select
                                                                    className="form-select py-1"
                                                                    aria-label="Default select example">
                                                                    <option selected="">Unlimited</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                </select></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="box py-2 mb-1 rounded-0 box-light">
                                                        <div className="row mx-0">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">Credit
                                                                    :
                                                                </div>
                                                            </div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group">
                                                                    <div className="input-group"><select
                                                                        className="form-select py-1"
                                                                        aria-label="Default select example">
                                                                        <option selected="">Yes</option>
                                                                        <option value="1">No</option>
                                                                    </select></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 p-0">
                                                    <div className="box py-2 mb-1 rounded-0">
                                                        <div className="row mx-0">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">Player
                                                                    Max Lose:
                                                                </div>
                                                            </div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group">
                                                                    <div className="input-group"><select
                                                                        className="form-select py-1"
                                                                        aria-label="Default select example">
                                                                        <option selected="">Unlimited</option>
                                                                        <option value="1">No</option>
                                                                    </select></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="box py-2 mb-1 rounded-0 box-light">
                                                        <div className="row mx-0 d-none d-lg-flex invisible">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">Max
                                                                    Bet:
                                                                </div>
                                                            </div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="number"
                                                                    placeholder="Max: 1,800,000.00"/></div>
                                                            </div>
                                                            <div
                                                                className="col-lg-3 d-none d-lg-flex align-items-lg-center justify-content-center">
                                                                <div className="text-secondary">Max: 1,800,000.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="head-block rounded-0 text-center py-3 text-light">Commission
                                            </div>
                                            <div className="row mx-0 px-3 py-1">
                                                <div className="col-md-6 p-0">
                                                    <div className="box py-2 mb-1 rounded-0">
                                                        <div className="row mx-0">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">Game:
                                                                </div>
                                                            </div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="text"
                                                                    value="10"/></div>
                                                            </div>
                                                            <div
                                                                className="col-lg-3 d-none d-lg-flex align-items-lg-center justify-content-center">
                                                                <div className="text-secondary">% Max: 10</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 p-0">
                                                    <div className="box py-2 mb-1 rounded-0">
                                                        <div className="row mx-0 d-none d-lg-flex invisible">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">Group
                                                                    C:
                                                                </div>
                                                            </div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="text"
                                                                    value="10"/></div>
                                                            </div>
                                                            <div
                                                                className="col-lg-3 d-none d-lg-flex align-items-lg-center justify-content-center">
                                                                <div className="text-secondary">% Max: 10</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="head-block rounded-0 text-center py-3 text-light">Position
                                                Taking
                                            </div>
                                            <div className="row mx-0 px-3 py-1">
                                                <div className="box py-2 mb-1 rounded-0">
                                                    <div className="row mx-0">
                                                        <div className="col-lg-4">
                                                            <div className="row mx-0 mb-2 mb-lg-0">
                                                                <div className="col-4">
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Game
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Forced
                                                                        PT
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Total
                                                                        : 100
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
                                        <div className="tab-pane fade" id="casino" role="tabpanel" tabIndex="0">
                                            <div className="head-block rounded-0 text-center py-3 text-light">Live
                                                casino
                                            </div>
                                            <div className="row mx-0 px-3 py-1">
                                                <div className="col-md-6 p-0">
                                                    <div className="box py-2 mb-1 rounded-0">
                                                        <div className="row mx-0">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">Player
                                                                    Max Win:
                                                                </div>
                                                            </div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group"><select
                                                                    className="form-select py-1"
                                                                    aria-label="Default select example">
                                                                    <option selected="">Unlimited</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                </select></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="box py-2 mb-1 rounded-0 box-light">
                                                        <div className="row mx-0">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">Live
                                                                    Casio Min Bet :
                                                                </div>
                                                            </div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="number"
                                                                    placeholder="Min :1"/></div>
                                                            </div>
                                                            <div
                                                                className="col-lg-3 d-none d-lg-flex align-items-lg-center justify-content-center">
                                                                <div className="text-secondary">Min: 1</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="box py-2 mb-1 rounded-0">
                                                        <div className="row mx-0">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">Daily
                                                                    Reset :
                                                                </div>
                                                            </div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group"><select
                                                                    className="form-select py-1"
                                                                    aria-label="Default select example">
                                                                    <option selected="">Yes</option>
                                                                    <option value="1">No</option>
                                                                </select></div>
                                                            </div>
                                                            <div
                                                                className="col-lg-3 d-none d-lg-flex align-items-lg-center justify-content-center"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 p-0">
                                                    <div className="box py-2 mb-1 rounded-0">
                                                        <div className="row mx-0">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">Player
                                                                    Max Lose:
                                                                </div>
                                                            </div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="number"
                                                                    placeholder="Min :1"/></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="box py-2 mb-1 rounded-0 box-light">
                                                        <div className="row mx-0">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">Live
                                                                    Casio Max Bet :
                                                                </div>
                                                            </div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="number"
                                                                    placeholder="Min :1"/></div>
                                                            </div>
                                                            <div
                                                                className="col-lg-3 d-none d-lg-flex align-items-lg-center justify-content-center">
                                                                <div className="text-secondary">Min: 1</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="box py-2 mb-1 rounded-0">
                                                        <div className="row mx-0 d-none d-lg-flex invisible">
                                                            <div className="col-4"></div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="number"
                                                                    placeholder="Max: 1000000"/></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="head-block rounded-0 text-center py-3 text-light">Table
                                                Limit
                                            </div>
                                            <div className="row mx-0 px-3 py-1">
                                                <div className="col-md-6 p-0">
                                                    <div className="box py-2 mb-1 rounded-0">
                                                        <div className="row mx-0">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">Table
                                                                    Limit:
                                                                </div>
                                                            </div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="text"
                                                                    value="1"/></div>
                                                            </div>
                                                            <div
                                                                className="col-lg-3 d-none d-lg-flex align-items-lg-center justify-content-center">
                                                                <div className="text-secondary">Max: 4</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 p-0">
                                                    <div className="box py-2 mb-1 rounded-0">
                                                        <div className="row mx-0 d-none d-lg-flex invisible">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">Group
                                                                    C:
                                                                </div>
                                                            </div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="text"
                                                                    value="10"/></div>
                                                            </div>
                                                            <div
                                                                className="col-lg-3 d-none d-lg-flex align-items-lg-center justify-content-center">
                                                                <div className="text-secondary">% Max: 10</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="head-block rounded-0 text-center py-3 text-light">Commission
                                            </div>
                                            <div className="row mx-0 px-3 py-1">
                                                <div className="col-md-6 p-0">
                                                    <div className="box py-2 mb-1 rounded-0">
                                                        <div className="row mx-0">
                                                            <div className="col-4">
                                                                <div
                                                                    className="d-flex align-items-center h-100">Commission:
                                                                </div>
                                                            </div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="text"
                                                                    value="10"/></div>
                                                            </div>
                                                            <div
                                                                className="col-lg-3 d-none d-lg-flex align-items-lg-center justify-content-center">
                                                                <div className="text-secondary">% Max: 10</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 p-0">
                                                    <div className="box py-2 mb-1 rounded-0">
                                                        <div className="row mx-0 d-none d-lg-flex invisible">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">Group
                                                                    C:
                                                                </div>
                                                            </div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="text"
                                                                    value="10"/></div>
                                                            </div>
                                                            <div
                                                                className="col-lg-3 d-none d-lg-flex align-items-lg-center justify-content-center">
                                                                <div className="text-secondary">% Max: 10</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="head-block rounded-0 text-center py-3 text-light">Position
                                                Taking
                                            </div>
                                            <div className="row mx-0 px-3 py-1">
                                                <div className="box py-2 mb-1 rounded-0">
                                                    <div className="row mx-0">
                                                        <div className="col-lg-4">
                                                            <div className="row mx-0 mb-2 mb-lg-0">
                                                                <div className="col-4">
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Game
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Forced
                                                                        PT
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Total
                                                                        : 100
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
                                        <div className="tab-pane fade" id="provider" role="tabpanel" tabIndex="0">
                                            <div className="head-block rounded-0 text-center py-3 text-light">Position
                                                Taking
                                            </div>
                                            <div className="row mx-0 px-3 py-1">
                                                <div className="box py-2 mb-1 rounded-0">
                                                    <div className="row mx-0">
                                                        <div className="col-lg-4">
                                                            <div className="row mx-0 mb-2 mb-lg-0">
                                                                <div className="col-4">
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Game
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Forced
                                                                        PT
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Total
                                                                        : 100
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
                                                <div className="box py-2 mb-1 rounded-0 box-light">
                                                    <div className="row mx-0">
                                                        <div className="col-lg-4">
                                                            <div className="row mx-0 mb-2 mb-lg-0">
                                                                <div className="col-4">
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Game
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Forced
                                                                        PT
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Total
                                                                        : 100
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
                                                <div className="box py-2 mb-1 rounded-0">
                                                    <div className="row mx-0">
                                                        <div className="col-lg-4">
                                                            <div className="row mx-0 mb-2 mb-lg-0">
                                                                <div className="col-4">
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Game
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Forced
                                                                        PT
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Total
                                                                        : 100
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
                                                <div className="box py-2 mb-1 rounded-0 box-light">
                                                    <div className="row mx-0">
                                                        <div className="col-lg-4">
                                                            <div className="row mx-0 mb-2 mb-lg-0">
                                                                <div className="col-4">
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Game
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Forced
                                                                        PT
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Total
                                                                        : 100
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
                                                <div className="box py-2 mb-1 rounded-0">
                                                    <div className="row mx-0">
                                                        <div className="col-lg-4">
                                                            <div className="row mx-0 mb-2 mb-lg-0">
                                                                <div className="col-4">
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Game
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Forced
                                                                        PT
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Total
                                                                        : 100
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
                                                <div className="box py-2 mb-1 rounded-0 box-light">
                                                    <div className="row mx-0">
                                                        <div className="col-lg-4">
                                                            <div className="row mx-0 mb-2 mb-lg-0">
                                                                <div className="col-4">
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Game
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Forced
                                                                        PT
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Total
                                                                        : 100
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
                                                <div className="box py-2 mb-1 rounded-0">
                                                    <div className="row mx-0">
                                                        <div className="col-lg-4">
                                                            <div className="row mx-0 mb-2 mb-lg-0">
                                                                <div className="col-4">
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Game
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Forced
                                                                        PT
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Total
                                                                        : 100
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
                                                <div className="box py-2 mb-1 rounded-0 box-light">
                                                    <div className="row mx-0">
                                                        <div className="col-lg-4">
                                                            <div className="row mx-0 mb-2 mb-lg-0">
                                                                <div className="col-4">
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Game
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Forced
                                                                        PT
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Total
                                                                        : 100
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
                                                <div className="box py-2 mb-1 rounded-0">
                                                    <div className="row mx-0">
                                                        <div className="col-lg-4">
                                                            <div className="row mx-0 mb-2 mb-lg-0">
                                                                <div className="col-4">
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Game
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Forced
                                                                        PT
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Total
                                                                        : 100
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
                                                <div className="box py-2 mb-1 rounded-0 box-light">
                                                    <div className="row mx-0">
                                                        <div className="col-lg-4">
                                                            <div className="row mx-0 mb-2 mb-lg-0">
                                                                <div className="col-4">
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Game
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Forced
                                                                        PT
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Total
                                                                        : 100
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
                                                <div className="box py-2 mb-1 rounded-0">
                                                    <div className="row mx-0">
                                                        <div className="col-lg-4">
                                                            <div className="row mx-0 mb-2 mb-lg-0">
                                                                <div className="col-4">
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Game
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Forced
                                                                        PT
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Total
                                                                        : 100
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
                                                <div className="box py-2 mb-1 rounded-0 box-light">
                                                    <div className="row mx-0">
                                                        <div className="col-lg-4">
                                                            <div className="row mx-0 mb-2 mb-lg-0">
                                                                <div className="col-4">
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Game
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Forced
                                                                        PT
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Total
                                                                        : 100
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
                                                <div className="box py-2 mb-1 rounded-0">
                                                    <div className="row mx-0">
                                                        <div className="col-lg-4">
                                                            <div className="row mx-0 mb-2 mb-lg-0">
                                                                <div className="col-4">
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Game
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Forced
                                                                        PT
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Total
                                                                        : 100
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
                                                <div className="box py-2 mb-1 rounded-0 box-light">
                                                    <div className="row mx-0">
                                                        <div className="col-lg-4">
                                                            <div className="row mx-0 mb-2 mb-lg-0">
                                                                <div className="col-4">
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Game
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Forced
                                                                        PT
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Total
                                                                        : 100
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
                                                <div className="box py-2 mb-1 rounded-0">
                                                    <div className="row mx-0">
                                                        <div className="col-lg-4">
                                                            <div className="row mx-0 mb-2 mb-lg-0">
                                                                <div className="col-4">
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Game
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Forced
                                                                        PT
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Total
                                                                        : 100
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
                                                <div className="box py-2 mb-1 rounded-0 box-light">
                                                    <div className="row mx-0">
                                                        <div className="col-lg-4">
                                                            <div className="row mx-0 mb-2 mb-lg-0">
                                                                <div className="col-4">
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Game
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Forced
                                                                        PT
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Total
                                                                        : 100
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
                                                <div className="box py-2 mb-1 rounded-0">
                                                    <div className="row mx-0">
                                                        <div className="col-lg-4">
                                                            <div className="row mx-0 mb-2 mb-lg-0">
                                                                <div className="col-4">
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Game
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Forced
                                                                        PT
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Total
                                                                        : 100
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
                                                <div className="box py-2 mb-1 rounded-0 box-light">
                                                    <div className="row mx-0">
                                                        <div className="col-lg-4">
                                                            <div className="row mx-0 mb-2 mb-lg-0">
                                                                <div className="col-4">
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Game
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Forced
                                                                        PT
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Total
                                                                        : 100
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
                                                <div className="box py-2 mb-1 rounded-0">
                                                    <div className="row mx-0">
                                                        <div className="col-lg-4">
                                                            <div className="row mx-0 mb-2 mb-lg-0">
                                                                <div className="col-4">
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Game
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Forced
                                                                        PT
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Total
                                                                        : 100
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
                                                <div className="box py-2 mb-1 rounded-0 box-light">
                                                    <div className="row mx-0">
                                                        <div className="col-lg-4">
                                                            <div className="row mx-0 mb-2 mb-lg-0">
                                                                <div className="col-4">
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Game
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Forced
                                                                        PT
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Total
                                                                        : 100
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
                                        <div className="tab-pane fade" id="pt" role="tabpanel" tabIndex="0">
                                            <div className="head-block rounded-0 text-center py-3 text-light">Third
                                                Party Sports
                                            </div>
                                            <div className="row mx-0 px-3 py-1">
                                                <div className="col-md-6 p-0">
                                                    <div className="box py-2 mb-1 rounded-0">
                                                        <div className="row mx-0">
                                                            <div className="col-4">
                                                                <div
                                                                    className="d-flex align-items-center h-100">Sports:
                                                                </div>
                                                            </div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group"><select
                                                                    className="form-select py-1"
                                                                    aria-label="Default select example">
                                                                    <option selected="">Saba Sports</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                </select></div>
                                                            </div>
                                                            <div
                                                                className="col-lg-3 d-none d-lg-flex align-items-lg-center justify-content-center">
                                                                <div className="text-secondary">Max: 4</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 p-0">
                                                    <div className="box py-2 mb-1 rounded-0">
                                                        <div className="row mx-0 d-none d-lg-flex invisible">
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="text"
                                                                    value="10"/></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="head-block rounded-0 text-center py-3 text-light">Commission
                                            </div>
                                            <div className="row mx-0 px-3 py-1">
                                                <div className="col-md-6 p-0">
                                                    <div className="box py-2 mb-1 rounded-0">
                                                        <div className="row mx-0">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">Group
                                                                    A:
                                                                </div>
                                                            </div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="text"
                                                                    value="10"/></div>
                                                            </div>
                                                            <div
                                                                className="col-lg-3 d-none d-lg-flex align-items-lg-center justify-content-center">
                                                                <div className="text-secondary">% Max: 10</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="box py-2 mb-1 rounded-0 box-light">
                                                        <div className="row mx-0">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">Group
                                                                    B:
                                                                </div>
                                                            </div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="text"
                                                                    value="10"/></div>
                                                            </div>
                                                            <div
                                                                className="col-lg-3 d-none d-lg-flex align-items-lg-center justify-content-center">
                                                                <div className="text-secondary">% Max: 10</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="box py-2 mb-1 rounded-0">
                                                        <div className="row mx-0">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">Group
                                                                    C:
                                                                </div>
                                                            </div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="text"
                                                                    value="10"/></div>
                                                            </div>
                                                            <div
                                                                className="col-lg-3 d-none d-lg-flex align-items-lg-center justify-content-center">
                                                                <div className="text-secondary">% Max: 10</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 p-0">
                                                    <div className="box py-2 mb-1 rounded-0">
                                                        <div className="row mx-0">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">Other
                                                                    Comm:
                                                                </div>
                                                            </div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="text"
                                                                    value="10"/></div>
                                                            </div>
                                                            <div
                                                                className="col-lg-3 d-none d-lg-flex align-items-lg-center justify-content-center">
                                                                <div className="text-secondary">% Max: 10</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="box py-2 mb-1 rounded-0 box-light">
                                                        <div className="row mx-0">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">1X2
                                                                    Comm:
                                                                </div>
                                                            </div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="text"
                                                                    value="10"/></div>
                                                            </div>
                                                            <div
                                                                className="col-lg-3 d-none d-lg-flex align-items-lg-center justify-content-center">
                                                                <div className="text-secondary">% Max: 10</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="box py-2 mb-1 rounded-0">
                                                        <div className="row mx-0 d-none d-lg-flex invisible">
                                                            <div className="col-4">
                                                                <div className="d-flex align-items-center h-100">Group
                                                                    C:
                                                                </div>
                                                            </div>
                                                            <div className="col-8 col-lg-5">
                                                                <div className="input-group"><input
                                                                    className="form-control py-1" type="text"
                                                                    value="10"/></div>
                                                            </div>
                                                            <div
                                                                className="col-lg-3 d-none d-lg-flex align-items-lg-center justify-content-center">
                                                                <div className="text-secondary">% Max: 10</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="head-block rounded-0 text-center py-3 text-light">Position
                                                Taking
                                            </div>
                                            <div className="row mx-0 px-3 py-1">
                                                <div className="box py-2 mb-1 rounded-0">
                                                    <div className="row mx-0">
                                                        <div className="col-lg-4">
                                                            <div className="row mx-0 mb-2 mb-lg-0">
                                                                <div className="col-4">
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Game
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Forced
                                                                        PT
                                                                    </div>
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
                                                                    <div
                                                                        className="d-flex align-items-center h-100">Total
                                                                        : 100
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
                                    </div>
                                </div>
                                <div className="row mx-0">
                                    <div className="col-lg-11 mx-auto">
                                        <div className="d-flex justify-content-center py-3">
                                            <button className="btn btn-greate hvr-grow">Create Account</button>
                                        </div>
                                        <div className="py-5">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-1">
                                                    <img className="policy-icon" src={key.src}/></div>
                                                <div className="px-2">Password policy</div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-1">
                                                    <img className="policy-icon" src={remove.src}/>
                                                </div>
                                                <div className="px-2">Your password length must between 6-20
                                                    characters
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-1">
                                                    <img className="policy-icon" src={remove.src}/>
                                                </div>
                                                <div className="px-2">Your password must include a combination of
                                                    characters (uppercase or lowercase letters) and numbers
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-1">
                                                    <img className="policy-icon" src={remove.src}/>
                                                </div>
                                                <div className="px-2">Your password must not contain your login name
                                                    first and last name
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