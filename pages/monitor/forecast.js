import logo from '../../public/assets/images/logo.png'
import error404 from '../../public/assets/images/404.png'

export default function Forecast() {
    return (
        <>
            <div className="row mx-0">
                <div className="total-bet">
                    <div className="row mx-0">
                        <div className="col-lg-10 mx-auto">
                            <div className="row mx-0 mb-3 mb-lg-4">
                                <img className="logo-title mx-auto" src={logo.src}/></div>
                            <div className="row mx-0">
                                <div className="head-block mb-3">
                                    <div className="row mx-0">
                                        <div className="col-lg-6 mb-3 mb-lg-0">
                                            <div className="row mx-0">
                                                <nav>
                                                    <ul className="nav nav-pills mb-3" id="pills-tab">
                                                        <li className="nav-item me-3 me-lg-4">
                                                            <div className="nav-link active">ForeCast</div>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-3 mb-lg-0">
                                            <div className="row mx-0">
                                                <div className="col-lg-5 my-3 offset-lg-7">
                                                    <div className="input-group"><select className="form-select"
                                                                                         aria-label="Default select example">
                                                        <option selected="">Handicap</option>
                                                        <option value="1">Handicap Live</option>
                                                        <option value="2">Handicap First - Half</option>
                                                        <option value="3">Handicap First - Half Live</option>
                                                        <option value="2">Over Under</option>
                                                        <option value="3">Over Under Live</option>
                                                        <option value="2">Over Under First - Half</option>
                                                        <option value="3">Over Under First - Half Live</option>
                                                        <option value="2">1X2, Live</option>
                                                    </select></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card px-0">
                                    <div className="card-body p-0">
                                        <div className="box">
                                            <div className="d-flex justify-content-center py-3">
                                                <button className="btn btn-greate px-4 hvr-grow ms-3" type="button"
                                                        data-bs-toggle="modal" data-bs-target="#exampleModal">Pop up the
                                                    window
                                                </button>
                                            </div>
                                        </div>
                                        <div className="row mx-0">
                                            <img className="w-50 mx-auto mb-3" src={error404.src}/>
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