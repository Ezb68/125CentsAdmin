import logo from '../../public/assets/images/logo.png'
import key from '../../public/assets/images/key.png'
import remove from '../../public/assets/images/remove.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faSearch,
    faAmbulance,
    faTimes,
    faSun,
    faMoon,
    faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {DateChoose} from "../../components";

export default function Result() {
    const [resultDate, setResultDate] = useState(new Date());

    return (
        <>
            <div className="row mx-0">
                <div className="total-bet">
                    <div className="row mx-0">
                        <div className="col-lg-10 mx-auto">
                            <div className="row mx-0 mb-3 mb-lg-4">
                                <img className="logo-title mx-auto" src={logo.src}/>
                            </div>
                            <div className="row mx-0">
                                <div className="head-block mb-3">
                                    <div className="row mx-0">
                                        <div className="col-lg-6 mb-3 mb-lg-0">
                                            <div className="row">
                                                <nav>
                                                    <ul className="nav nav-pills mb-3" id="pills-tab">
                                                        <li className="nav-item me-3 me-lg-4">
                                                            <div className="nav-link active">Results</div>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mx-0">
                                        <div className="col-lg-8">
                                            <div className="row mx-0">
                                                <div className="col-lg-3 mb-3">
                                                    <div className="input-group">
                                                        <DateChoose selected={resultDate} onChange={(date) => {setResultDate(date)}}/>
                                                        <span className="input-group-text bg-white border-start-0">
                                                            <i className="fas fa-calendar-alt"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 mb-3">
                                                    <div className="input-group">
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected="">Footbal</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 mb-3">
                                                    <div className="input-group">
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected="">All</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="row mx-0">
                                                <div className="col-lg-6 mb-3">
                                                    <div className="input-group">
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected="">Normal Sorting</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 mb-3">
                                                    <div className="input-group">
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected="">Outtright</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-dark text-center pb-3 fs-5">First Half Score</div>
                                <div className="border-0 shadow px-0">
                                    <div className="head-block rounded-0 text-center py-3 text-light">JAPAN JI LEAGUE
                                    </div>
                                    <div className="box py-1 mb-1 rounded-0 text-dark box-light">
                                        <div className="row mx-0">
                                            <div className="col-6 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">04/28 18:00</div>
                                            </div>
                                            <div className="col-6 col-lg mb-3 mb-lg-0">
                                                <div className="text-primary">Jublio Iwata</div>
                                                <div className="text-primary">Nagoya Grampus</div>
                                            </div>
                                            <div className="col-4 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">0.1</div>
                                            </div>
                                            <div className="col-4 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">2.1</div>
                                            </div>
                                            <div className="col-4 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">
                                                    <a href="#">
                                                        <FontAwesomeIcon icon={faPlusCircle} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="head-block rounded-0 text-center py-3 text-light">KOREA WOMEN
                                        K-LEAGUE
                                    </div>
                                    <div className="box py-1 mb-1 rounded-0 text-dark box-light">
                                        <div className="row mx-0">
                                            <div className="col-6 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">04/28 18:00</div>
                                            </div>
                                            <div className="col-6 col-lg mb-3 mb-lg-0">
                                                <div className="text-primary">Jublio Iwata</div>
                                                <div className="text-primary">Nagoya Grampus</div>
                                            </div>
                                            <div className="col-4 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">0.1</div>
                                            </div>
                                            <div className="col-4 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">2.1</div>
                                            </div>
                                            <div className="col-4 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100"><a
                                                    href="#">
                                                    <FontAwesomeIcon icon={faPlusCircle} />
                                                </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box py-1 mb-1 rounded-0 text-dark box-light">
                                        <div className="row mx-0">
                                            <div className="col-6 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">04/28 18:00</div>
                                            </div>
                                            <div className="col-6 col-lg mb-3 mb-lg-0">
                                                <div className="text-primary">Jublio Iwata</div>
                                                <div className="text-primary">Nagoya Grampus</div>
                                            </div>
                                            <div className="col-4 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">0.1</div>
                                            </div>
                                            <div className="col-4 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">2.1</div>
                                            </div>
                                            <div className="col-4 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">
                                                    <a href="#">
                                                        <FontAwesomeIcon icon={faPlusCircle} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box py-1 mb-1 rounded-0 text-dark box-light">
                                        <div className="row mx-0">
                                            <div className="col-6 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">04/28 18:00</div>
                                            </div>
                                            <div className="col-6 col-lg mb-3 mb-lg-0">
                                                <div className="text-primary">Jublio Iwata</div>
                                                <div className="text-primary">Nagoya Grampus</div>
                                            </div>
                                            <div className="col-4 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">0.1</div>
                                            </div>
                                            <div className="col-4 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">2.1</div>
                                            </div>
                                            <div className="col-4 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">
                                                    <a href="javascript:void(0)">
                                                        <FontAwesomeIcon icon={faPlusCircle} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box py-1 mb-1 rounded-0 text-dark box-light">
                                        <div className="row mx-0">
                                            <div className="col-6 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">04/28 18:00</div>
                                            </div>
                                            <div className="col-6 col-lg mb-3 mb-lg-0">
                                                <div className="text-primary">Jublio Iwata</div>
                                                <div className="text-primary">Nagoya Grampus</div>
                                            </div>
                                            <div className="col-4 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">0.1</div>
                                            </div>
                                            <div className="col-4 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">2.1</div>
                                            </div>
                                            <div className="col-4 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">
                                                    <a href="javascript:void(0)">
                                                        <FontAwesomeIcon icon={faPlusCircle} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box py-1 mb-1 rounded-0 text-dark box-light">
                                        <div className="row mx-0">
                                            <div className="col-6 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">04/28 18:00</div>
                                            </div>
                                            <div className="col-6 col-lg mb-3 mb-lg-0">
                                                <div className="text-primary">Jublio Iwata</div>
                                                <div className="text-primary">Nagoya Grampus</div>
                                            </div>
                                            <div className="col-4 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">0.1</div>
                                            </div>
                                            <div className="col-4 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">2.1</div>
                                            </div>
                                            <div className="col-4 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">
                                                    <a href="javascript:void(0)">
                                                        <FontAwesomeIcon icon={faPlusCircle} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box py-1 mb-1 rounded-0 text-dark box-light">
                                        <div className="row mx-0">
                                            <div className="col-6 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">04/28 18:00</div>
                                            </div>
                                            <div className="col-6 col-lg mb-3 mb-lg-0">
                                                <div className="text-primary">Jublio Iwata</div>
                                                <div className="text-primary">Nagoya Grampus</div>
                                            </div>
                                            <div className="col-4 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">0.1</div>
                                            </div>
                                            <div className="col-4 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">2.1</div>
                                            </div>
                                            <div className="col-4 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">
                                                    <a href="javascript:void(0)">
                                                        <FontAwesomeIcon icon={faPlusCircle} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box py-1 mb-1 rounded-0 text-dark box-light">
                                        <div className="row mx-0">
                                            <div className="col-6 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">04/28 18:00</div>
                                            </div>
                                            <div className="col-6 col-lg mb-3 mb-lg-0">
                                                <div className="text-primary">Jublio Iwata</div>
                                                <div className="text-primary">Nagoya Grampus</div>
                                            </div>
                                            <div className="col-4 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">0.1</div>
                                            </div>
                                            <div className="col-4 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">2.1</div>
                                            </div>
                                            <div className="col-4 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">
                                                    <a href="javascript:void(0)">
                                                        <FontAwesomeIcon icon={faPlusCircle} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box py-1 mb-1 rounded-0 text-dark box-light">
                                        <div className="row mx-0">
                                            <div className="col-6 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">04/28 18:00</div>
                                            </div>
                                            <div className="col-6 col-lg mb-3 mb-lg-0">
                                                <div className="text-primary">Jublio Iwata</div>
                                                <div className="text-primary">Nagoya Grampus</div>
                                            </div>
                                            <div className="col-4 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">0.1</div>
                                            </div>
                                            <div className="col-4 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">2.1</div>
                                            </div>
                                            <div className="col-4 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">
                                                    <a href="javascript:void(0)">
                                                        <FontAwesomeIcon icon={faPlusCircle} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box py-1 mb-1 rounded-0 text-dark box-light">
                                        <div className="row mx-0">
                                            <div className="col-6 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">04/28 18:00</div>
                                            </div>
                                            <div className="col-6 col-lg mb-3 mb-lg-0">
                                                <div className="text-primary">Jublio Iwata</div>
                                                <div className="text-primary">Nagoya Grampus</div>
                                            </div>
                                            <div className="col-4 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">0.1</div>
                                            </div>
                                            <div className="col-4 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">2.1</div>
                                            </div>
                                            <div className="col-4 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">
                                                    <a href="javascript:void(0)">
                                                        <FontAwesomeIcon icon={faPlusCircle} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box py-1 mb-1 rounded-0 text-dark box-light">
                                        <div className="row mx-0">
                                            <div className="col-6 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">04/28 18:00</div>
                                            </div>
                                            <div className="col-6 col-lg mb-3 mb-lg-0">
                                                <div className="text-primary">Jublio Iwata</div>
                                                <div className="text-primary">Nagoya Grampus</div>
                                            </div>
                                            <div className="col-4 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">0.1</div>
                                            </div>
                                            <div className="col-4 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">2.1</div>
                                            </div>
                                            <div className="col-4 col-lg mb-3 mb-lg-0">
                                                <div className="d-flex align-items-center h-100">
                                                    <a href="javascript:void(0)">
                                                        <FontAwesomeIcon icon={faPlusCircle} />
                                                    </a>
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