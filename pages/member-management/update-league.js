import logo from '../../public/assets/images/logo.png'
import key from '../../public/assets/images/key.png'
import remove from '../../public/assets/images/remove.png'
import {useState} from "react";
import {DateChoose} from "../../components";

export default function UpdateLeague() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <>
            <div className="row mx-0">
                <div className="total-bet">
                    <div className="row mx-0">
                        <div className="col-lg-12 mx-auto">
                            <div className="row mx-0 mb-3 mb-lg-4">
                                <img className="logo-title mx-auto" src={logo.src}/></div>
                            <div className="card border-0 shadow">
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
                                                    className="d-flex align-items-center justify-content-lg-end h-100">Sport
                                                    Type:
                                                </div>
                                            </div>
                                            <div className="col-lg-6"><select className="form-select"
                                                                              aria-label="Default select example">
                                                <option selected="">Football</option>
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
                                                    className="d-flex align-items-center justify-content-lg-end h-100">League
                                                    Name Keyword * :
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="input-group"><textarea className="form-control"
                                                                                       aria-label="With textarea"
                                                                                       style={{height: "120px"}}></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box py-2 mb-1 rounded-0">
                                        <div className="row mx-0">
                                            <div className="col-lg-3">
                                                <div
                                                    className="d-flex align-items-center justify-content-lg-end h-100">From
                                                    Date:
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="input-group">
                                                    <DateChoose selected={startDate} onChange={(date) => {setStartDate(date)}}/>
                                                    <span
                                                    className="input-group-text bg-white border-start-0"><i
                                                    className="fas fa-calendar-alt"></i></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box py-2 mb-1 rounded-0">
                                        <div className="row mx-0">
                                            <div className="col-lg-3">
                                                <div
                                                    className="d-flex align-items-center justify-content-lg-end h-100">To
                                                    Date:
                                                </div>
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
                                    <div className="box py-2 mb-1 rounded-0">
                                        <div className="row mx-0">
                                            <div className="col-lg-3">
                                                <div
                                                    className="d-flex align-items-center justify-content-lg-end h-100">League:
                                                </div>
                                            </div>
                                            <div className="col-lg-6"><select className="form-select"
                                                                              aria-label="Default select example">
                                                <option selected="">-- Select League--</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select></div>
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
                </div>
            </div>
        </>
    )
}