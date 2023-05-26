import logo from '../../public/assets/images/logo.png'
import sgd from '../../public/assets/images/sgd.png'
import lightning from '../../public/assets/images/lightning.svg'
import err404 from '../../public/assets/images/404.png'

export default function MemberTotal() {
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
                                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                                        <li className="nav-item me-3 me-lg-4" role="presentation">
                                                            <button className="nav-link active" data-bs-toggle="pill"
                                                                    data-bs-target="#account" type="button"
                                                                    role="tab">Member Account
                                                            </button>
                                                        </li>
                                                        <li className="nav-item me-3 me-lg-4" role="presentation">
                                                            <button className="nav-link" data-bs-toggle="pill"
                                                                    data-bs-target="#credit" type="button"
                                                                    role="tab">Credit
                                                            </button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button className="nav-link" data-bs-toggle="pill"
                                                                    data-bs-target="#cash" type="button" role="tab">Cash
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-3 mb-lg-0">
                                            <div className="row mx-0">
                                                <div className="col-lg-5">
                                                    <div className="head-box my-4 p-3">
                                                        <div className="d-flex align-items-center">
                                                            <div className="px-0 w-100">
                                                                <p className="mb-0 lh-1">Currency</p>
                                                                <div className="fs-5 text-light">SGD</div>
                                                            </div>
                                                            <div className="flex-shrink-1">
                                                                <div className="head-icon">
                                                                    <img className="icon" src={sgd.src}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 offset-lg-1">
                                                    <div className="head-box my-4 p-3">
                                                        <div className="d-flex align-items-center">
                                                            <div className="px-0 w-100">
                                                                <p className="mb-0 lh-1">Loading</p>
                                                                <div className="fs-5 text-light">Refresh</div>
                                                            </div>
                                                            <div className="flex-shrink-1">
                                                                <div className="head-icon">
                                                                    <img className="icon" src={lightning.src}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card px-0">
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="account" role="tabpanel"
                                             aria-labelledby="home-tab" tabIndex="0">
                                            <div className="card-header box text-center">UserName</div>
                                            <div className="card-body">
                                                <div className="row mx-0">
                                                    <img className="w-50 mx-auto" src={err404.src}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="credit" role="tabpanel"
                                             aria-labelledby="profile-tab" tabIndex="0">
                                            <div className="card-header box text-center">Credit</div>
                                            <div className="card-body">
                                                <div className="row mx-0">
                                                    <img className="w-50 mx-auto" src={err404.src}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="cash" role="tabpanel"
                                             aria-labelledby="profile-tab" tabIndex="0">
                                            <div className="card-header box text-center">Cash</div>
                                            <div className="card-body">
                                                <div className="row mx-0">
                                                    <img className="w-50 mx-auto" src={err404.src}/>
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