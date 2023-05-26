import logoGroup from '../../public/assets/images/logo-group.png'
import loading from '../../public/assets/images/loading.png'

export default function TransactionLog() {
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
                                        <div className="title-block px-4 py-3">Transaction Logs</div>
                                    </div>
                                </div>
                                <div className="card-body bg-white">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="box box-light p-2 mb-2">
                                                <div className="row">
                                                    <div className="col-lg-3">
                                                        <div className="d-flex align-items-center h-100">Day trading
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-9">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <input className="form-control py-1"
                                                                      type="text"
                                                                      placeholder="2022-05-01 Monday 00: 00: 00 "/>
                                                            </div>
                                                            <div className="col-6">
                                                                <input className="form-control py-1"
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
                                                            <div className="flex-shrink-1">Minimum amount</div>
                                                            <div className="ps-3 w-50"><input
                                                                className="form-control py-1" type="text"/></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="box box-light p-2 mb-2">
                                                        <div
                                                            className="d-flex align-items-center justify-content-between">
                                                            <div className="flex-shrink-1">Maximum amount:</div>
                                                            <div className="ps-3 w-50"><input
                                                                className="form-control py-1" type="text"/></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
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
                                                            type="button">Deposits
                                                    </button>
                                                    <button className="btn btn-outline-light mb-1 me-2"
                                                            type="button">Withdraw money
                                                    </button>
                                                    <button className="btn btn-outline-light mb-1 me-2"
                                                            type="button">Successful offer
                                                    </button>
                                                    <button className="btn btn-outline-light mb-1 me-2"
                                                            type="button">Add money manually
                                                    </button>
                                                    <button className="btn btn-outline-light mb-1 me-2"
                                                            type="button">Minus manual money
                                                    </button>
                                                    <button className="btn btn-outline-light mb-1 me-2"
                                                            type="button">Minus manual money
                                                    </button>
                                                    <button className="btn btn-outline-light mb-1 me-2"
                                                            type="button">The proposal is accepted
                                                    </button>
                                                    <button className="btn btn-outline-light mb-1 me-2"
                                                            type="button">Refund
                                                    </button>
                                                    <button className="btn btn-outline-light mb-1 me-2"
                                                            type="button">The proposal is accepted
                                                    </button>
                                                    <button className="btn btn-outline-light mb-1 me-2"
                                                            type="button">Complementary
                                                    </button>
                                                    <button className="btn btn-outline-light mb-1 me-2"
                                                            type="button">Proposal Rewards
                                                    </button>
                                                    <button className="btn btn-outline-light mb-1 me-2"
                                                            type="button">Referral Bonus
                                                    </button>
                                                    <button className="btn btn-outline-light mb-1 me-2"
                                                            type="button">Sales commissions
                                                    </button>
                                                    <button className="btn btn-outline-light mb-1 me-2"
                                                            type="button">Quest reward
                                                    </button>
                                                    <button className="btn btn-outline-light mb-1 me-2"
                                                            type="button">Activity rewards
                                                    </button>
                                                    <button className="btn btn-outline-light mb-1 me-2"
                                                            type="button">VIP birthday gift
                                                    </button>
                                                    <button className="btn btn-outline-light mb-1 me-2"
                                                            type="button">Activity rewards
                                                    </button>
                                                    <button className="btn btn-outline-light mb-1 me-2"
                                                            type="button">VIP birthday bonus
                                                    </button>
                                                    <button className="btn btn-outline-light mb-1 me-2"
                                                            type="button">Honus recovery
                                                    </button>
                                                    <button className="btn btn-outline-light mb-1" type="button">Extra
                                                        wallet bonus
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center py-3 flex-wrap">
                                        <button className="btn btn-outline-secondary hvr-grow px-4 mb-2 mb-lg-0">Reset
                                        </button>
                                        <button className="btn btn-greate hvr-grow px-4 ms-4 mb-2 mb-lg-0">Search
                                        </button>
                                    </div>
                                    <div className="head-block py-2 text-light text-center">Player Report</div>
                                    <div className="table-responsive">
                                        <table className="table table-striped mb-0 text-center">
                                            <thead>
                                            <tr>
                                                <th>Day trading</th>
                                                <th>Transaction type</th>
                                                <th>Member account</th>
                                                <th>Transaction amount</th>
                                                <th>Before settlement</th>
                                                <th>Balance after transaction</th>
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