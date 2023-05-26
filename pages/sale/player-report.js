 import logoGroup from '../../public/assets/images/logo-group.png'
import loading from '../../public/assets/images/loading.png'

export default function PlayerReport() {
    return (
        <>
            <div className="row mx-0">
                <div className="total-bet">
                    <div className="row mx-0">
                        <div className="col-lg-12 mx-auto">
                            <div className="row mx-0 mb-3 mb-lg-4">
                                <img className="logo-title mx-auto"  src={logoGroup.src}/></div>
                            <div className="card bg-transparent border-0">
                                <div className="card-header bg-white pt-0 pb-3 pb-lg-4 border-0 mb-2">
                                    <div className="d-flex justify-content-center">
                                        <div className="title-block px-4 py-3">Player list</div>
                                    </div>
                                </div>
                                <div className="card-body bg-white">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="box box-light p-2 mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="flex-shrink-1">Member account</div>
                                                    <div className="ps-3 w-50"><select className="form-select py-1"
                                                                                       aria-label="Default select example">
                                                        <option selected="">Time of last login</option>
                                                        <option value="1">Agent Level</option>
                                                    </select></div>
                                                </div>
                                            </div>
                                            <div className="box box-light p-2 mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="flex-shrink-1">Time zone</div>
                                                    <div className="ps-3 w-50"><select className="form-select py-1"
                                                                                       aria-label="Default select example">
                                                        <option selected="">Member account</option>
                                                        <option value="1">Agent Level</option>
                                                    </select></div>
                                                </div>
                                            </div>
                                            <div className="box box-light p-2 mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="flex-shrink-1">Lowest deposit</div>
                                                    <div className="ps-3 w-50"><input className="form-control py-1"
                                                                                      type="text"/></div>
                                                </div>
                                            </div>
                                            <div className="box box-light p-2 mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="flex-shrink-1">More valid bet</div>
                                                    <div className="ps-3 w-50"><input className="form-control py-1"
                                                                                      type="text"/></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="box box-light p-2 mb-2">
                                                <div className="row">
                                                    <div className="col-lg-6"><input className="form-control py-1"
                                                                                     type="text"
                                                                                     placeholder="2022-05-01 Monday 00: 00: 00 "/>
                                                    </div>
                                                    <div className="col-lg-6"><input className="form-control py-1"
                                                                                     type="text"
                                                                                     placeholder="2022-05-01 Monday 00: 00: 00 "/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box box-light p-2 mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="flex-shrink-1">Name Label</div>
                                                    <div className="ps-3 w-50"><select className="form-select py-1"
                                                                                       aria-label="Default select example">
                                                        <option selected="">Enter to slect</option>
                                                        <option value="1">Agent Level</option>
                                                    </select></div>
                                                </div>
                                            </div>
                                            <div className="box box-light p-2 mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="flex-shrink-1">Top deposit</div>
                                                    <div className="ps-3 w-50"><input className="form-control py-1"
                                                                                      type="text"/></div>
                                                </div>
                                            </div>
                                            <div className="box box-light p-2 mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="flex-shrink-1">Smaller valid bet</div>
                                                    <div className="ps-3 w-50"><input className="form-control py-1"
                                                                                      type="text"/></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="box box-light p-2 mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="flex-shrink-1">Real name:</div>
                                                    <div className="ps-3 w-50"><input className="form-control py-1"
                                                                                      type="text"/></div>
                                                </div>
                                            </div>
                                            <div className="box box-light p-2 mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="flex-shrink-1">Lowest withdrawal</div>
                                                    <div className="ps-3 w-50"><input className="form-control py-1"
                                                                                      type="text"/></div>
                                                </div>
                                            </div>
                                            <div className="box box-light p-2 mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="flex-shrink-1">Top withdrawal</div>
                                                    <div className="ps-3 w-50"><input className="form-control py-1"
                                                                                      type="text"/></div>
                                                </div>
                                            </div>
                                            <div className="box box-light p-2 mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="flex-shrink-1">Lowest win/loss</div>
                                                    <div className="ps-3 w-50"><input className="form-control py-1"
                                                                                      type="text"/></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="box box-light p-2 mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="flex-shrink-1">Highest win/loss</div>
                                                    <div className="ps-3 w-50"><input className="form-control py-1"
                                                                                      type="text"/></div>
                                                </div>
                                            </div>
                                            <div className="box box-light p-2 mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="flex-shrink-1">Agent Level</div>
                                                    <div className="ps-3 w-50"><select className="form-select py-1"
                                                                                       aria-label="Default select example">
                                                        <option selected="">All</option>
                                                        <option value="1">Daily</option>
                                                        <option value="2">Weekly</option>
                                                        <option value="3">Monthly</option>
                                                    </select></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center py-3">
                                        <button className="btn btn-outline-secondary hvr-grow px-4">Reset</button>
                                        <button className="btn btn-greate hvr-grow px-4 ms-4">Next</button>
                                    </div>
                                    <div className="head-block py-2 text-light text-center">Player Report</div>
                                    <div className="table-responsive">
                                        <table className="table table-striped mb-0 text-center">
                                            <thead>
                                            <tr>
                                                <th>Member account</th>
                                                <th>Agent Level</th>
                                                <th>Agent Level</th>
                                                <th>Name Label</th>
                                                <th>New agent group</th>
                                                <th>Number of recharges</th>
                                                <th>Deposit</th>
                                                <th>Number of withdrawals</th>
                                                <th>Withdrawal</th>
                                                <th>Manual adjustment</th>
                                                <th>Total Bet</th>
                                                <th><i className="fas fa-eye"></i></th>
                                            </tr>
                                            </thead>
                                            <tbody></tbody>
                                        </table>
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