import logoGroup from '../../public/assets/images/logo-group.png'
import loading from '../../public/assets/images/loading.png'
import {useState} from "react";
import {DateChoose} from "../../components";

export default function PlayerList() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <>
            <div className="row mx-0">
                <div className="total-bet">
                    <div className="row mx-0">
                        <div className="col-lg-10 mx-auto">
                            <div className="row mx-0 mb-3 mb-lg-4">
                                <img className="logo-title mx-auto" src={logoGroup.src}/></div>
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
                                                    <div className="flex-shrink-1">Type of date:</div>
                                                    <div className="ps-3 w-50"><select className="form-select py-1"
                                                                                       aria-label="Default select example">
                                                        <option selected="">Time of last login</option>
                                                        <option value="1">Agent Level</option>
                                                    </select></div>
                                                </div>
                                            </div>
                                            <div className="box box-light p-2 mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="flex-shrink-1">Search type</div>
                                                    <div className="ps-3 w-50"><select className="form-select py-1"
                                                                                       aria-label="Default select example">
                                                        <option selected="">Member account</option>
                                                        <option value="1">Agent Level</option>
                                                    </select></div>
                                                </div>
                                            </div>
                                            <div className="box box-light p-2 mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="flex-shrink-1">Label name</div>
                                                    <div className="ps-3 w-50"><select className="form-select py-1"
                                                                                       aria-label="Default select example">
                                                        <option selected="">Enter to select</option>
                                                        <option value="1">Agent Level</option>
                                                    </select></div>
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
                                            <div className="box box-light p-2 mb-2"><select className="form-select py-1"
                                                                                            aria-label="Default select example">
                                                <option selected="">Exact search</option>
                                                <option value="1">SMA</option>
                                                <option value="2">MA</option>
                                            </select></div>
                                            <div className="box box-light p-2 mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="flex-shrink-1">Confirm sms:</div>
                                                    <div className="ps-3 w-50"><select className="form-select py-1"
                                                                                       aria-label="Default select example">
                                                        <option selected="">All</option>
                                                        <option value="1">SMA</option>
                                                        <option value="2">MA</option>
                                                    </select></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="box box-light p-2 mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="flex-shrink-1">Settlement type:</div>
                                                    <div className="ps-3 w-50"><select className="form-select py-1"
                                                                                       aria-label="Default select example">
                                                        <option selected="">Total amount</option>
                                                        <option value="1">Agent Level</option>
                                                    </select></div>
                                                </div>
                                            </div>
                                            <div className="box box-light p-2 mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="flex-shrink-1">Status:</div>
                                                    <div className="ps-3 w-50"><select className="form-select py-1"
                                                                                       aria-label="Default select example">
                                                        <option selected="">All</option>
                                                        <option value="1">Agent Level</option>
                                                    </select></div>
                                                </div>
                                            </div>
                                            <div className="box box-light p-2 mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="flex-shrink-1">VIP Level:</div>
                                                    <div className="ps-3 w-50"><select className="form-select py-1"
                                                                                       aria-label="Default select example">
                                                        <option selected="">All</option>
                                                        <option value="1">Agent Level</option>
                                                    </select></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="box box-light p-2 mb-2">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="input-group">
                                                            <DateChoose selected={startDate} onChange={(date) => {setStartDate(date)}}/>
                                                            <span
                                                            className="input-group-text bg-white border-start-0"><i
                                                            className="fas fa-calendar-alt"></i></span></div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="input-group">
                                                            <DateChoose selected={endDate} onChange={(date) => {setEndDate(date)}}/>
                                                            <span
                                                            className="input-group-text bg-white border-start-0"><i
                                                            className="fas fa-calendar-alt"></i></span></div>
                                                    </div>
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
                                    <div className="table-responsive">
                                        <table className="table table-striped mb-0 text-center">
                                            <thead className="head-block text-light">
                                            <tr className="align-middle">
                                                <th className="border" colSpan="6">Member information</th>
                                                <th className="border" colSpan="3">Wallet information</th>
                                                <th className="border" colSpan="2">Other</th>
                                                <th className="border" rowSpan="2">Operation</th>
                                            </tr>
                                            <tr>
                                                <th></th>
                                                <th></th>
                                                <th className="border">Group level</th>
                                                <th className="border">Label Name</th>
                                                <th className="border">New agent group</th>
                                                <th className="border">Registration date</th>
                                                <th className="border">Total balance</th>
                                                <th className="border">Total recharge</th>
                                                <th className="border">Total withdrawal</th>
                                                <th className="border">Last login</th>
                                                <th className="border">Status</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className="align-middle">
                                                <td>dung5678</td>
                                                <td>VIP0</td>
                                                <td>Default</td>
                                                <td>SameIP, Eako</td>
                                                <td>dung5678</td>
                                                <td>2021-12-08</td>
                                                <td>0.41</td>
                                                <td>1,000.00</td>
                                                <td>0.00</td>
                                                <td>2022-05-18 00: 34: 06</td>
                                                <td>Activated</td>
                                                <td></td>
                                            </tr>
                                            <tr className="align-middle">
                                                <td>dung5678</td>
                                                <td>VIP0</td>
                                                <td>Default</td>
                                                <td>SameIP, Eako</td>
                                                <td>dung5678</td>
                                                <td>2021-12-08</td>
                                                <td>0.41</td>
                                                <td>1,000.00</td>
                                                <td>0.00</td>
                                                <td>2022-05-18 00: 34: 06</td>
                                                <td>Activated</td>
                                                <td></td>
                                            </tr>
                                            <tr className="align-middle">
                                                <td>dung5678</td>
                                                <td>VIP0</td>
                                                <td>Default</td>
                                                <td>SameIP, Eako</td>
                                                <td>dung5678</td>
                                                <td>2021-12-08</td>
                                                <td>0.41</td>
                                                <td>1,000.00</td>
                                                <td>0.00</td>
                                                <td>2022-05-18 00: 34: 06</td>
                                                <td>Activated</td>
                                                <td></td>
                                            </tr>
                                            <tr className="align-middle">
                                                <td>dung5678</td>
                                                <td>VIP0</td>
                                                <td>Default</td>
                                                <td>SameIP, Eako</td>
                                                <td>dung5678</td>
                                                <td>2021-12-08</td>
                                                <td>0.41</td>
                                                <td>1,000.00</td>
                                                <td>0.00</td>
                                                <td>2022-05-18 00: 34: 06</td>
                                                <td>Activated</td>
                                                <td></td>
                                            </tr>
                                            <tr className="align-middle">
                                                <td>dung5678</td>
                                                <td>VIP0</td>
                                                <td>Default</td>
                                                <td>SameIP, Eako</td>
                                                <td>dung5678</td>
                                                <td>2021-12-08</td>
                                                <td>0.41</td>
                                                <td>1,000.00</td>
                                                <td>0.00</td>
                                                <td>2022-05-18 00: 34: 06</td>
                                                <td>Activated</td>
                                                <td></td>
                                            </tr>
                                            <tr className="align-middle">
                                                <td>dung5678</td>
                                                <td>VIP0</td>
                                                <td>Default</td>
                                                <td>SameIP, Eako</td>
                                                <td>dung5678</td>
                                                <td>2021-12-08</td>
                                                <td>0.41</td>
                                                <td>1,000.00</td>
                                                <td>0.00</td>
                                                <td>2022-05-18 00: 34: 06</td>
                                                <td>Activated</td>
                                                <td></td>
                                            </tr>
                                            <tr className="align-middle">
                                                <td>dung5678</td>
                                                <td>VIP0</td>
                                                <td>Default</td>
                                                <td>SameIP, Eako</td>
                                                <td>dung5678</td>
                                                <td>2021-12-08</td>
                                                <td>0.41</td>
                                                <td>1,000.00</td>
                                                <td>0.00</td>
                                                <td>2022-05-18 00: 34: 06</td>
                                                <td>Activated</td>
                                                <td></td>
                                            </tr>
                                            <tr className="align-middle">
                                                <td>dung5678</td>
                                                <td>VIP0</td>
                                                <td>Default</td>
                                                <td>SameIP, Eako</td>
                                                <td>dung5678</td>
                                                <td>2021-12-08</td>
                                                <td>0.41</td>
                                                <td>1,000.00</td>
                                                <td>0.00</td>
                                                <td>2022-05-18 00: 34: 06</td>
                                                <td>Activated</td>
                                                <td></td>
                                            </tr>
                                            <tr className="align-middle">
                                                <td>dung5678</td>
                                                <td>VIP0</td>
                                                <td>Default</td>
                                                <td>SameIP, Eako</td>
                                                <td>dung5678</td>
                                                <td>2021-12-08</td>
                                                <td>0.41</td>
                                                <td>1,000.00</td>
                                                <td>0.00</td>
                                                <td>2022-05-18 00: 34: 06</td>
                                                <td>Activated</td>
                                                <td></td>
                                            </tr>
                                            <tr className="align-middle">
                                                <td>dung5678</td>
                                                <td>VIP0</td>
                                                <td>Default</td>
                                                <td>SameIP, Eako</td>
                                                <td>dung5678</td>
                                                <td>2021-12-08</td>
                                                <td>0.41</td>
                                                <td>1,000.00</td>
                                                <td>0.00</td>
                                                <td>2022-05-18 00: 34: 06</td>
                                                <td>Activated</td>
                                                <td></td>
                                            </tr>
                                            </tbody>
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