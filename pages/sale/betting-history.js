import logoGroup from '../../public/assets/images/logo-group.png'
import loading from '../../public/assets/images/loading.png'

export default function BettingHistory() {
    return (
        <>
            <div className="row mx-0">
                <div className="total-bet">
                    <div className="row mx-0">
                        <div className="col-lg-12 mx-auto">
                            <div className="row mx-0 mb-3 mb-lg-4">
                                <img className="logo-title mx-auto" src={logoGroup.src}/></div>
                            <div className="card bg-transparent border-0">
                                <div className="card-header bg-white pt-0 pb-3 pb-lg-4 border-0 mb-2">
                                    <div className="d-flex justify-content-center">
                                        <div className="title-block px-4 py-3">Betting history</div>
                                    </div>
                                </div>
                                <div className="card-body bg-white">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="box box-light p-2 mb-2">
                                                <div className="row">
                                                    <div className="col-lg-3">
                                                        <div className="d-flex align-items-center h-100">Bet time</div>
                                                    </div>
                                                    <div className="col-lg-9">
                                                        <div className="row">
                                                            <div className="col-6"><input className="form-control py-1"
                                                                                          type="text"
                                                                                          placeholder="2022-05-01 Monday 00: 00: 00 "/>
                                                            </div>
                                                            <div className="col-6"><input className="form-control py-1"
                                                                                          type="text"
                                                                                          placeholder="2022-05-01 Monday 00: 00: 00 "/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="box box-light p-2 mb-2">
                                                        <div
                                                            className="d-flex align-items-center justify-content-between">
                                                            <div className="flex-shrink-1">Game provider</div>
                                                            <div className="ps-3 w-50"><select
                                                                className="form-select py-1"
                                                                aria-label="Default select example">
                                                                <option selected="">All</option>
                                                                <option value="1">Agent Level</option>
                                                            </select></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="box box-light p-2 mb-2">
                                                        <div
                                                            className="d-flex align-items-center justify-content-between">
                                                            <div className="flex-shrink-1">Product type</div>
                                                            <div className="ps-3 w-50"><select
                                                                className="form-select py-1"
                                                                aria-label="Default select example">
                                                                <option selected="">All</option>
                                                                <option value="1">Agent Level</option>
                                                            </select></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="box box-light p-2 mb-2">
                                                        <div
                                                            className="d-flex align-items-center justify-content-between">
                                                            <div className="flex-shrink-1">Transaction ID</div>
                                                            <div className="ps-3 w-50"><input
                                                                className="form-control py-1" type="text"/></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="box box-light p-2 mb-2">
                                                        <div
                                                            className="d-flex align-items-center justify-content-between">
                                                            <div className="flex-shrink-1">Match ID</div>
                                                            <div className="ps-3 w-50"><input
                                                                className="form-control py-1" type="text"/></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="box box-light p-2 mb-2">
                                                        <div className="row">
                                                            <div className="col-lg-3">
                                                                <div
                                                                    className="d-flex align-items-center h-100">Win/lose
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-9">
                                                                <div className="row">
                                                                    <div className="col-6"><select
                                                                        className="form-select py-1"
                                                                        aria-label="Default select example">
                                                                        <option selected="">{'>='}</option>
                                                                        <option value="1">Agent Level</option>
                                                                    </select></div>
                                                                    <div className="col-6"><input
                                                                        className="form-control py-1" type="text"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="box box-light p-2 mb-2">
                                                        <div className="row">
                                                            <div className="col-lg-3">
                                                                <div className="d-flex align-items-center h-100">Bonus
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-9">
                                                                <div className="row">
                                                                    <div className="col-6"><select
                                                                        className="form-select py-1"
                                                                        aria-label="Default select example">
                                                                        <option selected="">{'>='}</option>
                                                                        <option value="1">Agent Level</option>
                                                                    </select></div>
                                                                    <div className="col-6"><input
                                                                        className="form-control py-1" type="text"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="box box-light p-2 mb-2">
                                                <div className="row">
                                                    <div className="col-lg-2">
                                                        <div className="d-flex align-items-center h-100">Total Bet</div>
                                                    </div>
                                                    <div className="col-lg-5">
                                                        <div className="row">
                                                            <div className="col-6"><select className="form-select py-1"
                                                                                           aria-label="Default select example">
                                                                <option selected="">{'>='}</option>
                                                                <option value="1">Agent Level</option>
                                                            </select></div>
                                                            <div className="col-6"><input className="form-control py-1"
                                                                                          type="text"/></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <select className="form-select py-1" aria-label="Default select example">
                                                                    <option selected="">
                                                                        {'<='}
                                                                        < /option>
                                                                    <option value="1">Agent Level</option>
                                                                </select>
                                                                </div>
                                                            <div className="col-6"><input className="form-control py-1"
                                                                                          type="text"/></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="box box-light p-2 mb-2">
                                                        <div
                                                            className="d-flex align-items-center justify-content-between">
                                                            <div className="flex-shrink-1">Time zone</div>
                                                            <div className="ps-3 w-50"><select
                                                                className="form-select py-1"
                                                                aria-label="Default select example">
                                                                <option selected="">All</option>
                                                                <option value="1">Agent Level</option>
                                                            </select></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="box box-light p-2 mb-2">
                                                        <div
                                                            className="d-flex align-items-center justify-content-between">
                                                            <div className="flex-shrink-1">Game group</div>
                                                            <div className="ps-3 w-50"><select
                                                                className="form-select py-1"
                                                                aria-label="Default select example">
                                                                <option selected="">All</option>
                                                                <option value="1">Agent Level</option>
                                                            </select></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="box box-light p-2 mb-2">
                                                        <div
                                                            className="d-flex align-items-center justify-content-between">
                                                            <div className="flex-shrink-1">Member account</div>
                                                            <div className="ps-3 w-50"><input
                                                                className="form-control py-1" type="text"/></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="box box-light p-2 mb-2">
                                                        <div
                                                            className="d-flex align-items-center justify-content-between">
                                                            <div className="flex-shrink-1">Game</div>
                                                            <div className="ps-3 w-50"><select
                                                                className="form-select py-1"
                                                                aria-label="Default select example">
                                                                <option selected="">All</option>
                                                                <option value="1">Agent Level</option>
                                                            </select></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="box box-light p-2 mb-2">
                                                        <div className="row">
                                                            <div className="col-lg-5">
                                                                <div className="d-flex align-items-center h-100">Jackpot
                                                                    betting
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-7">
                                                                <div className="row">
                                                                    <div className="col-6 px-0"><select
                                                                        className="form-select py-1"
                                                                        aria-label="Default select example">
                                                                        <option selected="">{'>='}</option>
                                                                        <option value="1">Agent Level</option>
                                                                    </select></div>
                                                                    <div className="col-6"><input
                                                                        className="form-control py-1" type="text"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="box box-light p-2 mb-2">
                                                        <div className="row">
                                                            <div className="col-lg-5">
                                                                <div className="d-flex align-items-center h-100">Jackpot
                                                                    prize
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-7">
                                                                <div className="row">
                                                                    <div className="col-6 px-0"><select
                                                                        className="form-select py-1"
                                                                        aria-label="Default select example">
                                                                        <option selected="">{'>='}</option>
                                                                        <option value="1">Agent Level</option>
                                                                    </select></div>
                                                                    <div className="col-6"><input
                                                                        className="form-control py-1" type="text"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="head-block">
                                        <div className="row mx-0 py-3">
                                            <div className="col-lg-2 mb-3 mb-lg-0">
                                                <div className="text-light fs-6">Status</div>
                                            </div>
                                            <div className="col-lg-10">
                                                <div className="d-flex align-items-center h-100 text-light flex-wrap">
                                                    <button className="btn btn-outline-light mb-1 me-2"
                                                            type="button">All
                                                    </button>
                                                    <button className="btn btn-outline-light mb-1 me-2"
                                                            type="button">Solved
                                                    </button>
                                                    <button className="btn btn-outline-light mb-1 me-2"
                                                            type="button">Refuse
                                                    </button>
                                                    <button className="btn btn-outline-light mb-1 me-2"
                                                            type="button">Cancel
                                                    </button>
                                                    <button className="btn btn-outline-light mb-1 me-2"
                                                            type="button">Order cancellation system
                                                    </button>
                                                    <button className="btn btn-outline-light mb-1 me-2"
                                                            type="button">Active
                                                    </button>
                                                    <button className="btn btn-outline-light mb-1" type="button">The
                                                        player cancels
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center py-3 flex-wrap">
                                        <button className="btn btn-outline-secondary hvr-grow px-4 mb-2 mb-lg-0">Reset
                                        </button>
                                        <button className="btn btn-greate hvr-grow px-4 ms-4 mb-2 mb-lg-0">Yesterday
                                        </button>
                                        <button className="btn btn-greate hvr-grow px-4 ms-4 mb-2 mb-lg-0">Today
                                        </button>
                                        <button className="btn btn-warning hvr-grow px-4 ms-4 mb-2 mb-lg-0">Search
                                        </button>
                                    </div>
                                    <div className="head-block py-2 text-light text-center">Player Report</div>
                                    <div className="table-responsive">
                                        <table className="table table-striped mb-0 text-center">
                                            <thead>
                                            <tr>
                                                <th>Bet time</th>
                                                <th>Statistical time</th>
                                                <th>Transaction ID</th>
                                                <th>Match ID</th>
                                                <th>Game house</th>
                                                <th>Game</th>
                                                <th>Member account</th>
                                                <th>Bet amount</th>
                                                <th>Valid bets</th>
                                                <th>Win/ Lose</th>
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