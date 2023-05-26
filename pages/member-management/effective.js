import logo from '../../public/assets/images/logo.png'
import key from '../../public/assets/images/key.png'
import remove from '../../public/assets/images/remove.png'
import logoGroup from '../../public/assets/images/logo-group.png'

export default function Effective() {
    return (
        <>
            <div className="row mx-0">
                <div className="total-bet">
                    <div className="row mx-0">
                        <div className="col-lg-12 mx-auto">
                            <div className="row mx-0 mb-3 mb-lg-4">
                                <img className="logo-title mx-auto" src={logoGroup.src}/></div>
                            <div className="border-0 shadow mb-3">
                                <div className="card-header bg-white pt-0 pb-3 pb-lg-4 border-0 mb-1">
                                    <div className="d-flex justify-content-center">
                                        <div className="title-block px-4 py-3">Select</div>
                                    </div>
                                </div>
                                <div className="head-block rounded-0 text-center py-3 text-light">User Information</div>
                                <div className="card-body">
                                    <div className="row mx-0">
                                        <div className="col-md-6 p-0">
                                            <div className="box py-2 mb-1 rounded-0">
                                                <div className="row mx-0">
                                                    <div className="col-4">
                                                        <div className="d-flex align-items-center h-100">Select SH:
                                                        </div>
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="input-group"><select
                                                            className="form-select py-1"
                                                            aria-label="Default select example">
                                                            <option selected="">-- Select SH --</option>
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
                                                        <div className="d-flex align-items-center h-100">Select SSMA:
                                                        </div>
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="input-group"><select
                                                            className="form-select py-1"
                                                            aria-label="Default select example">
                                                            <option selected="">-- Select SSMA --</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box py-2 mb-1 rounded-0">
                                                <div className="row mx-0">
                                                    <div className="col-4">
                                                        <div className="d-flex align-items-center h-100">Select SMA:
                                                        </div>
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="input-group"><select
                                                            className="form-select py-1"
                                                            aria-label="Default select example">
                                                            <option selected="">-- Select SH --</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 p-0">
                                            <div className="box py-2 mb-1 rounded-0">
                                                <div className="row mx-0">
                                                    <div className="col-4">
                                                        <div className="d-flex align-items-center h-100">Select MA:
                                                        </div>
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="input-group"><select
                                                            className="form-select py-1"
                                                            aria-label="Default select example">
                                                            <option selected="">-- Select SH --</option>
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
                                                        <div className="d-flex align-items-center h-100">Select Agent:
                                                        </div>
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="input-group"><select
                                                            className="form-select py-1"
                                                            aria-label="Default select example">
                                                            <option selected="">-- Select SSMA --</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box py-2 mb-1 rounded-0">
                                                <div className="row mx-0">
                                                    <div className="col-4">
                                                        <div className="d-flex align-items-center h-100"><a
                                                            href="javascript:void(0)">Show Member</a></div>
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="input-group invisible"><select
                                                            className="form-select py-1"
                                                            aria-label="Default select example">
                                                            <option selected="">-- Select SSMA --</option>
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
                                <div className="box py-2 mb-1 rounded-0 box-light">
                                    <div className="row mx-0">
                                        <div className="col-lg-1">
                                            <div className="d-flex align-items-center h-100">Product:</div>
                                        </div>
                                        <div className="col-lg-10">
                                            <div
                                                className="d-flex align-items-center h-100 text-light justify-content-between flex-wrap">
                                                <div className="form-check text-dark me-3"><input
                                                    className="form-check-input rounded-circle" id="check1"
                                                    type="checkbox" value=""/><label className="form-check-label"
                                                                                     htmlFor="check1">PT 1</label></div>
                                                <div className="form-check text-dark me-3"><input
                                                    className="form-check-input rounded-circle" id="check2"
                                                    type="checkbox" value=""/><label className="form-check-label"
                                                                                     htmlFor="check2">PT 2</label></div>
                                                <div className="form-check text-dark me-3"><input
                                                    className="form-check-input rounded-circle" id="live"
                                                    type="checkbox" value=""/><label className="form-check-label"
                                                                                     htmlFor="live">AH Live</label>
                                                </div>
                                                <div className="form-check text-dark me-3"><input
                                                    className="form-check-input rounded-circle" id="outright"
                                                    type="checkbox" value=""/><label className="form-check-label"
                                                                                     htmlFor="outright">Outright</label>
                                                </div>
                                                <div className="form-check text-dark me-3"><input
                                                    className="form-check-input rounded-circle" id="all" type="checkbox"
                                                    value=""/><label className="form-check-label" htmlFor="all">Changes
                                                    all PT groups</label></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-5 px-3">
                                    <div className="d-flex align-items-center mb-1">
                                        <div className="flex-shrink-1"><img className="policy-icon"
                                                                            src="client/images/remove.png"/></div>
                                        <div className="px-2">Remark</div>
                                    </div>
                                    <p>Please verify the results if you choose to update all bet types or sport
                                        types</p>
                                </div>
                            </div>
                            <div className="border-0 shadow mb-3">
                                <div className="card-header bg-white pt-0 pb-3 pb-lg-4 border-0 mb-1">
                                    <div className="d-flex justify-content-center">
                                        <div className="title-block px-4 py-3">Effective PT</div>
                                    </div>
                                </div>
                                <div className="card-body py-0 px-3">
                                    <div className="box">
                                        <div className="table-responsive">
                                            <table className="table table-bordered mb-0">
                                                <thead className="text-center">
                                                <tr>
                                                    <th className="align-middle" scope="col" rowSpan="2">Time</th>
                                                    <th className="align-middle" scope="col" rowSpan="2">Teams</th>
                                                    <th className="align-middle" scope="col" colSpan="2">First Goal</th>
                                                    <th className="align-middle" scope="col" colSpan="2">First Half</th>
                                                    <th className="align-middle" scope="col" rowSpan="2">No Goal</th>
                                                </tr>
                                                <tr>
                                                    <th scope="col">Home</th>
                                                    <th scope="col">Away</th>
                                                    <th scope="col">Home</th>
                                                    <th scope="col">Away</th>
                                                </tr>
                                                </thead>
                                                <tbody className="text-center"></tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="row mx-0"><img className="w-50 mx-auto mb-3"
                                                                   src="client/images/404.png"/></div>
                                </div>
                            </div>
                            <div className="border-0 shadow mb-3">
                                <div className="card-header bg-white pt-0 pb-3 pb-lg-4 border-0 mb-1">
                                    <div className="d-flex justify-content-center">
                                        <div className="title-block px-4 py-3">Effect PT Settings</div>
                                    </div>
                                </div>
                                <div className="row mx-0 px-3 py-1">
                                    <div className="box py-2 mb-1 rounded-0">
                                        <div className="row mx-0">
                                            <div className="col-lg-4">
                                                <div className="row mx-0 mb-2 mb-lg-0">
                                                    <div className="col-4">
                                                        <div className="d-flex align-items-center h-100">Min PT:</div>
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
                            <div className="row mx-0">
                                <div className="col-lg-11 mx-auto">
                                    <div className="d-flex justify-content-center py-3">
                                        <button className="btn btn-greate px-4 hvr-grow">Update</button>
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