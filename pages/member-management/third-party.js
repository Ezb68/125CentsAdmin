import logo from '../../public/assets/images/logo.png'
import key from '../../public/assets/images/key.png'
import remove from '../../public/assets/images/remove.png'

export default function ThirdParty() {
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
                                                    className="d-flex align-items-center justify-content-lg-end h-100">Game
                                                    Provider :
                                                </div>
                                            </div>
                                            <div className="col-lg-6"><select className="form-select"
                                                                              aria-label="Default select example">
                                                <option selected="">WM</option>
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
                                                    className="d-flex align-items-center justify-content-lg-end h-100">Game
                                                    Type:
                                                </div>
                                            </div>
                                            <div className="col-lg-6"><select className="form-select"
                                                                              aria-label="Default select example">
                                                <option selected="">AndarBahar</option>
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
                                                <option selected="">INR</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card border-0 shadow mb-4">
                                <div className="card-header bg-white pt-0 pb-3 pb-lg-4 mb-1 border-bottom-0">
                                    <div className="d-flex justify-content-center">
                                        <div className="title-block px-4 py-3">Bet Setting</div>
                                    </div>
                                </div>
                                <div className="card-body py-0">
                                    <div className="row mx-0">
                                        <div className="col-lg-6 px-0">
                                            <div className="box py-2 mb-1 rounded-0">
                                                <div className="row mx-0">
                                                    <div className="col-lg-3">
                                                        <div
                                                            className="d-flex align-items-center justify-content-lg-end h-100">Min
                                                            :
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6"><select className="form-select"
                                                                                      aria-label="Default select example">
                                                        <option selected="">100</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 px-0">
                                            <div className="box py-2 mb-1 rounded-0">
                                                <div className="row mx-0">
                                                    <div className="col-lg-3">
                                                        <div
                                                            className="d-flex align-items-center justify-content-lg-end h-100">Max
                                                            :
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6"><select className="form-select"
                                                                                      aria-label="Default select example">
                                                        <option selected="">1000</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mx-0">
                                        <div
                                            className="box py-3 mb-1 rounded-0 d-flex justify-content-center align-content-center-center h-100">
                                            <a href="javascript:void(0)"><i
                                                className="fas fa-plus-circle me-2"></i><span>Add 1 Row</span></a></div>
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
        </>
    )
}