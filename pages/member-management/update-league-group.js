import logo from '../../public/assets/images/logo.png'
import key from '../../public/assets/images/key.png'
import remove from '../../public/assets/images/remove.png'

export default function UpdateLeagueGroup() {
    return (
        <>
            <div className="row mx-0">
                <div className="total-bet">
                    <div className="row mx-0">
                        <div className="col-lg-12 mx-auto">
                            <div className="row mx-0 mb-3 mb-lg-4">
                                <img className="logo-title mx-auto" src={logo.src}/>
                            </div>
                            <div className="card border-0 shadow mb-4">
                                <div className="card-header bg-white pt-0 pb-3 pb-lg-4 mb-1 border-bottom-0">
                                    <div className="d-flex justify-content-center">
                                        <div className="title-block px-4 py-3">Update League Bet Setting</div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="box py-2 mb-1 rounded-0">
                                        <div className="row mx-0">
                                            <div className="col-lg-3">
                                                <div
                                                    className="d-flex align-items-center justify-content-lg-end h-100">Group
                                                    Type:
                                                </div>
                                            </div>
                                            <div className="col-lg-6"><select className="form-select"
                                                                              aria-label="Default select example">
                                                <option selected="">Medium</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select></div>
                                        </div>
                                    </div>
                                    <div className="box py-2 mb-1 rounded-0">
                                        <div className="row mx-0">
                                            <div className="col-lg-3">
                                                <div
                                                    className="d-flex align-items-center justify-content-lg-end h-100">Currency:
                                                </div>
                                            </div>
                                            <div className="col-lg-6"><select className="form-select"
                                                                              aria-label="Default select example">
                                                <option selected="">USD</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select></div>
                                        </div>
                                    </div>
                                    <div className="box py-2 mb-1 rounded-0">
                                        <div className="row mx-0">
                                            <div className="col-lg-3">
                                                <div
                                                    className="d-flex align-items-center justify-content-lg-end h-100">Is
                                                    Live:
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="d-flex">
                                                    <div className="form-check me-3"><input className="form-check-input"
                                                                                            id="flexRadioDefault1"
                                                                                            type="radio"
                                                                                            name="flexRadioDefault"
                                                                                            checked=""/><label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioDefault1">Yes</label></div>
                                                    <div className="form-check"><input className="form-check-input"
                                                                                       id="flexRadioDefault2"
                                                                                       type="radio"
                                                                                       name="flexRadioDefault"/><label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioDefault2">No</label></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mx-0">
                                        <div className="col-lg-11 mx-auto">
                                            <div className="d-flex justify-content-center py-3">
                                                <button className="btn btn-greate px-4 hvr-grow">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-0 shadow">
                                <div className="table-responsive">
                                    <table className="table table-striped mb-0 text-center">
                                        <thead className="head-block">
                                        <tr className="text-light">
                                            <th scope="col">Group Type</th>
                                            <th scope="col">Currency</th>
                                            <th scope="col">Is Live</th>
                                            <th scope="col">Min Bet</th>
                                            <th scope="col">Max Bet</th>
                                            <th scope="col">Min Bet Ratio</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody></tbody>
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
                                            <button className="btn btn-greate px-4 hvr-grow">Update</button>
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