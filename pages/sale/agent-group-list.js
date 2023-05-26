import logoGroup from '../../public/assets/images/logo-group.png'
import loading from '../../public/assets/images/loading.png'

export default function AgentGroupList() {
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
                                        <div className="title-block px-4 py-3">Agent Group</div>
                                    </div>
                                </div>
                                <div className="card-body bg-white">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="box box-light p-2 mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="flex-shrink-1">Filter :</div>
                                                    <div className="ps-3 w-50"><select className="form-select py-1"
                                                                                       aria-label="Default select example">
                                                        <option selected="">ID Agent</option>
                                                        <option value="1">Agent Level</option>
                                                    </select></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="box box-light p-2 mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="flex-shrink-1">Agent Level:</div>
                                                    <div className="ps-3 w-50"><select className="form-select py-1"
                                                                                       aria-label="Default select example">
                                                        <option selected="">SSMA</option>
                                                        <option value="1">SMA</option>
                                                        <option value="2">MA</option>
                                                    </select></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="box box-light p-2 mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="flex-shrink-1">Status:</div>
                                                    <div className="ps-3 w-50"><select className="form-select py-1"
                                                                                       aria-label="Default select example">
                                                        <option selected="">All</option>
                                                        <option value="1">Activated</option>
                                                        <option value="2">Delayed</option>
                                                        <option value="3">Disabled</option>
                                                    </select></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="box box-light p-2 mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="flex-shrink-1">Payment:</div>
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
                                    <div className="head-block text-light py-3 text-center">Agent Group</div>
                                    <div className="table-responsive">
                                        <table className="table table-striped mb-0 text-center">
                                            <thead>
                                            <tr>
                                                <th scope="col">ID Agent</th>
                                                <th scope="col">Agent Level</th>
                                                <th scope="col">Real name</th>
                                                <th scope="col">Payment cycle</th>
                                                <th scope="col">Low number of agents</th>
                                                <th scope="col">Total number of players</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Last Updated</th>
                                                <th scope="col">Note</th>
                                                <th scope="col">Operation</th>
                                                <th scope="col"><i className="fas fa-eye"></i></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className="align-middle">
                                                <td>afa86b</td>
                                                <td>SSMA</td>
                                                <td></td>
                                                <td>Daily</td>
                                                <td>2021-11-19 19:22:56</td>
                                                <td>5834</td>
                                                <td>Activated</td>
                                                <td>2022-11-19 19:22:56</td>
                                                <td></td>
                                                <td></td>
                                                <td><a href="#"><i className="fas fa-plus"></i></a>
                                                </td>
                                            </tr>
                                            <tr className="align-middle">
                                                <td>afa86b</td>
                                                <td>SSMA</td>
                                                <td></td>
                                                <td>Daily</td>
                                                <td>2021-11-19 19:22:56</td>
                                                <td>5834</td>
                                                <td>Activated</td>
                                                <td>2022-11-19 19:22:56</td>
                                                <td></td>
                                                <td></td>
                                                <td><a href="#"><i className="fas fa-plus"></i></a>
                                                </td>
                                            </tr>
                                            <tr className="align-middle">
                                                <td>afa86b</td>
                                                <td>SSMA</td>
                                                <td></td>
                                                <td>Daily</td>
                                                <td>2021-11-19 19:22:56</td>
                                                <td>5834</td>
                                                <td>Activated</td>
                                                <td>2022-11-19 19:22:56</td>
                                                <td></td>
                                                <td></td>
                                                <td><a href="#"><i className="fas fa-plus"></i></a>
                                                </td>
                                            </tr>
                                            <tr className="align-middle">
                                                <td>afa86b</td>
                                                <td>SSMA</td>
                                                <td></td>
                                                <td>Daily</td>
                                                <td>2021-11-19 19:22:56</td>
                                                <td>5834</td>
                                                <td>Activated</td>
                                                <td>2022-11-19 19:22:56</td>
                                                <td></td>
                                                <td></td>
                                                <td><a href="#"><i className="fas fa-plus"></i></a>
                                                </td>
                                            </tr>
                                            <tr className="align-middle">
                                                <td>afa86b</td>
                                                <td>SSMA</td>
                                                <td></td>
                                                <td>Daily</td>
                                                <td>2021-11-19 19:22:56</td>
                                                <td>5834</td>
                                                <td>Activated</td>
                                                <td>2022-11-19 19:22:56</td>
                                                <td></td>
                                                <td></td>
                                                <td><a href="#"><i className="fas fa-plus"></i></a>
                                                </td>
                                            </tr>
                                            <tr className="align-middle">
                                                <td>afa86b</td>
                                                <td>SSMA</td>
                                                <td></td>
                                                <td>Daily</td>
                                                <td>2021-11-19 19:22:56</td>
                                                <td>5834</td>
                                                <td>Activated</td>
                                                <td>2022-11-19 19:22:56</td>
                                                <td></td>
                                                <td></td>
                                                <td><a href="#"><i className="fas fa-plus"></i></a>
                                                </td>
                                            </tr>
                                            <tr className="align-middle">
                                                <td>afa86b</td>
                                                <td>SSMA</td>
                                                <td></td>
                                                <td>Daily</td>
                                                <td>2021-11-19 19:22:56</td>
                                                <td>5834</td>
                                                <td>Activated</td>
                                                <td>2022-11-19 19:22:56</td>
                                                <td></td>
                                                <td></td>
                                                <td><a href="#"><i className="fas fa-plus"></i></a>
                                                </td>
                                            </tr>
                                            <tr className="align-middle">
                                                <td>afa86b</td>
                                                <td>SSMA</td>
                                                <td></td>
                                                <td>Daily</td>
                                                <td>2021-11-19 19:22:56</td>
                                                <td>5834</td>
                                                <td>Activated</td>
                                                <td>2022-11-19 19:22:56</td>
                                                <td></td>
                                                <td></td>
                                                <td><a href="#"><i className="fas fa-plus"></i></a>
                                                </td>
                                            </tr>
                                            <tr className="align-middle">
                                                <td>afa86b</td>
                                                <td>SSMA</td>
                                                <td></td>
                                                <td>Daily</td>
                                                <td>2021-11-19 19:22:56</td>
                                                <td>5834</td>
                                                <td>Activated</td>
                                                <td>2022-11-19 19:22:56</td>
                                                <td></td>
                                                <td></td>
                                                <td><a href="#"><i className="fas fa-plus"></i></a>
                                                </td>
                                            </tr>
                                            <tr className="align-middle">
                                                <td>afa86b</td>
                                                <td>SSMA</td>
                                                <td></td>
                                                <td>Daily</td>
                                                <td>2021-11-19 19:22:56</td>
                                                <td>5834</td>
                                                <td>Activated</td>
                                                <td>2022-11-19 19:22:56</td>
                                                <td></td>
                                                <td></td>
                                                <td><a href="#"><i className="fas fa-plus"></i></a>
                                                </td>
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