import logo from '../../public/assets/images/logo.png'
import error404 from '../../public/assets/images/404.png'

export default function Order() {
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
                                            <div className="row mx-0">
                                                <nav>
                                                    <ul className="nav nav-pills mb-3" id="pills-tab">
                                                        <li className="nav-item me-3 me-lg-4">
                                                            <div className="nav-link active">Running Order</div>
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
                                                        <option selected="">Sports</option>
                                                        <option value="1">Live Casino</option>
                                                        <option value="2">Game</option>
                                                        <option value="3">Virtual Sports</option>
                                                        <option value="2">Third Party GameProvider</option>
                                                        <option value="3">Third Party Sports</option>
                                                    </select></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card px-0">
                                    <div className="card-body p-0">
                                        <div className="box">
                                            <div className="table-responsive">
                                                <table className="table table-bordered mb-0">
                                                    <thead className="text-center align-middle">
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Information</th>
                                                        <th scope="col">Selection</th>
                                                        <th scope="col">Odds</th>
                                                        <th scope="col">Stake</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Associate PT<br/>Stake Risk</th>
                                                        <th scope="col">MA<br/>Stake Risk</th>
                                                        <th scope="col">SMA<br/>Stake Risk</th>
                                                        <th scope="col">SSMA<br/>Stake Risk</th>
                                                        <th scope="col">SH<br/>Stake Risk</th>
                                                        <th scope="col">IP</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody className="text-center"></tbody>
                                                </table>
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