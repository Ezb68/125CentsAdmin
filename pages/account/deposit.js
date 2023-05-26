import logoGroup from '../../public/assets/images/logo-group.png'
import {DateChoose} from "../../components";

export default function Deposit() {
    return (
        <>
            <div className="row mx-0">
                <div className="total-bet">
                    <div className="row mx-0 mb-3 mb-lg-4">
                        <img className="logo-title mx-auto" src={logoGroup.src}/></div>
                    <div className="border-0 shadow mb-3">
                        <div className="card-header bg-white pt-0 pb-3 pb-lg-4 border-0 mb-1">
                            <div className="d-flex justify-content-center">
                                <div className="title-block px-4 py-3">Deposit</div>
                            </div>
                        </div>
                        <div className="box p-2 box-light">
                            <div className="row mx-0 py-2">
                                <div className="col-lg-6">
                                    <div className="row mx-0">
                                        <div className="col-lg-6">
                                            <div className="date-block d-flex align-items-center mb-2 mb-lg-0">
                                                <div className="flex-shrink-1"><span>Form</span></div>
                                                <div className="px-3 w-100">
                                                    <DateChoose selected={new Date()} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="date-block d-flex align-items-center mb-2 mb-lg-0">
                                                <div className="flex-shrink-1"><span>To</span></div>
                                                <div className="px-3 w-100">
                                                    <DateChoose selected={new Date()} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row mx-0">
                                        <div className="col-lg-6">
                                            <div className="date-block d-flex align-items-center mb-2 mb-lg-0">
                                                <div className="flex-shrink-1"><span>Status:</span></div>
                                                <div className="px-3 w-100"><select className="form-select"
                                                                                    aria-label="Default select example">
                                                    <option selected="">All</option>
                                                    <option value="1">Pending</option>
                                                    <option value="2">Completed</option>
                                                </select></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="date-block d-flex align-items-center mb-2 mb-lg-0">
                                                <div className="flex-shrink-1"><span>Coin</span></div>
                                                <div className="px-3 w-100"><select className="form-select"
                                                                                    aria-label="Default select example">
                                                    <option selected="">All</option>
                                                    <option value="1">ETH</option>
                                                    <option value="2">VND</option>
                                                    <option value="3">USDT</option>
                                                </select></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center py-3">
                            <button className="btn btn-secondary px-4 hvr-grow ms-3" type="button">Reset</button>
                            <button className="btn btn-greate px-4 hvr-grow ms-3" type="button">Search</button>
                        </div>
                        <div className="head-block text-light py-3 text-center">Deposit List Information</div>
                        <div className="table-responsive">
                            <table className="table table-striped mb-0 text-center">
                                <thead>
                                <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Coin</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Amount USDT</th>
                                    <th scope="col">Payment</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="align-middle">
                                    <td>2022- 11- 09 05: 04: 13</td>
                                    <td>afa86b</td>
                                    <td>VND</td>
                                    <td>4.000.000</td>
                                    <td>0.00</td>
                                    <td>fiat_buy</td>
                                </tr>
                                <tr className="align-middle">
                                    <td>2022- 11- 09 05: 04: 13</td>
                                    <td>afa86b</td>
                                    <td>VND</td>
                                    <td>4.000.000</td>
                                    <td>0.00</td>
                                    <td>fiat_buy</td>
                                </tr>
                                <tr className="align-middle">
                                    <td>2022- 11- 09 05: 04: 13</td>
                                    <td>afa86b</td>
                                    <td>VND</td>
                                    <td>4.000.000</td>
                                    <td>0.00</td>
                                    <td>fiat_buy</td>
                                </tr>
                                <tr className="align-middle">
                                    <td>2022- 11- 09 05: 04: 13</td>
                                    <td>afa86b</td>
                                    <td>VND</td>
                                    <td>4.000.000</td>
                                    <td>0.00</td>
                                    <td>fiat_buy</td>
                                </tr>
                                <tr className="align-middle">
                                    <td>2022- 11- 09 05: 04: 13</td>
                                    <td>afa86b</td>
                                    <td>VND</td>
                                    <td>4.000.000</td>
                                    <td>0.00</td>
                                    <td>fiat_buy</td>
                                </tr>
                                <tr className="align-middle">
                                    <td>2022- 11- 09 05: 04: 13</td>
                                    <td>afa86b</td>
                                    <td>VND</td>
                                    <td>4.000.000</td>
                                    <td>0.00</td>
                                    <td>fiat_buy</td>
                                </tr>
                                <tr className="align-middle">
                                    <td>2022- 11- 09 05: 04: 13</td>
                                    <td>afa86b</td>
                                    <td>VND</td>
                                    <td>4.000.000</td>
                                    <td>0.00</td>
                                    <td>fiat_buy</td>
                                </tr>
                                <tr className="align-middle">
                                    <td>2022- 11- 09 05: 04: 13</td>
                                    <td>afa86b</td>
                                    <td>VND</td>
                                    <td>4.000.000</td>
                                    <td>0.00</td>
                                    <td>fiat_buy</td>
                                </tr>
                                <tr className="align-middle">
                                    <td>2022- 11- 09 05: 04: 13</td>
                                    <td>afa86b</td>
                                    <td>VND</td>
                                    <td>4.000.000</td>
                                    <td>0.00</td>
                                    <td>fiat_buy</td>
                                </tr>
                                <tr className="align-middle">
                                    <td>2022- 11- 09 05: 04: 13</td>
                                    <td>afa86b</td>
                                    <td>VND</td>
                                    <td>4.000.000</td>
                                    <td>0.00</td>
                                    <td>fiat_buy</td>
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
                </div>
            </div>
        </>
    )
}