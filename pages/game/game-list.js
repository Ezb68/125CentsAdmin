import logoGroup from '../../public/assets/images/logo-group.png'

export default function GameList() {
    return (
        <>
            <div className="row mx-0">
                <div className="total-bet">
                    <div className="row mx-0 mb-3 mb-lg-4">
                        <img className="logo-title mx-auto" src={logoGroup.src}/></div>
                    <div className="head-block mb-3">
                        <div className="row mx-0">
                            <nav>
                                <ul className="nav nav-pills mb-3" id="pills-tab">
                                    <li className="nav-item me-3 me-lg-4">
                                        <div className="nav-link active px-4">Settings</div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="row mx-0 mb-3">
                            <div className="col-lg-2 mb-3 mb-lg-0">
                                <div className="text-light">Game Provider</div>
                            </div>
                            <div className="col-lg-10">
                                <div className="d-flex align-items-center h-100 text-light flex-wrap">
                                    <button className="btn btn-outline-light mb-1 me-2" type="button">SBO ( Slots)
                                    </button>
                                    <button className="btn btn-outline-light mb-1 me-2" type="button">SBO ( Slots)
                                    </button>
                                    <button className="btn btn-outline-light mb-1 me-2" type="button">SBO ( Slots)
                                    </button>
                                    <button className="btn btn-outline-light mb-1 me-2" type="button">SBO ( Slots)
                                    </button>
                                    <button className="btn btn-outline-light mb-1 me-2" type="button">SBO ( Slots)
                                    </button>
                                    <button className="btn btn-outline-light mb-1 me-2" type="button">SBO ( Slots)
                                    </button>
                                    <button className="btn btn-outline-light mb-1 me-2" type="button">SBO ( Slots)
                                    </button>
                                    <button className="btn btn-outline-light mb-1 me-2" type="button">SBO ( Slots)
                                    </button>
                                    <button className="btn btn-outline-light mb-1 me-2" type="button">SBO ( Slots)
                                    </button>
                                    <button className="btn btn-outline-light mb-1 me-2" type="button">SBO ( Slots)
                                    </button>
                                    <button className="btn btn-outline-light mb-1 me-2" type="button">SBO ( Slots)
                                    </button>
                                    <button className="btn btn-outline-light mb-1 me-2" type="button">SBO ( Slots)
                                    </button>
                                    <button className="btn btn-outline-light mb-1 me-2" type="button">SBO ( Slots)
                                    </button>
                                    <button className="btn btn-outline-light mb-1 me-2" type="button">SBO ( Slots)
                                    </button>
                                    <button className="btn btn-outline-light mb-1 me-2" type="button">SBO ( Slots)
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row mx-0 mb-3">
                            <div className="col-lg-2 mb-3 mb-lg-0">
                                <div className="text-light">Game Type</div>
                            </div>
                            <div className="col-lg-10">
                                <div className="d-flex align-items-center h-100 text-light flex-wrap">
                                    <button className="btn btn-outline-light mb-1 me-2" type="button">Slots</button>
                                    <button className="btn btn-outline-light mb-1 me-2" type="button">Slots</button>
                                    <button className="btn btn-outline-light mb-1 me-2" type="button">Slots</button>
                                    <button className="btn btn-outline-light mb-1 me-2" type="button">Slots</button>
                                    <button className="btn btn-outline-light mb-1 me-2" type="button">Slots</button>
                                    <button className="btn btn-outline-light mb-1 me-2" type="button">Slots</button>
                                    <button className="btn btn-outline-light mb-1 me-2" type="button">Slots</button>
                                    <button className="btn btn-outline-light mb-1 me-2" type="button">Slots</button>
                                    <button className="btn btn-outline-light mb-1 me-2" type="button">Slots</button>
                                    <button className="btn btn-outline-light mb-1 me-2" type="button">Slots</button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6"></div>
                            <div className="col-lg-6">
                                <div className="d-flex justify-content-end pb-3 flex-wrap">
                                    <div className="col-6 col-lg-5 mb-3 mb-lg-0 px-3">
                                        <div className="d-grid">
                                            <button className="btn btn-secondary" type="button">Change Display</button>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-2 mb-3 mb-lg-0 px-3">
                                        <div className="d-grid">
                                            <button className="btn btn-secondary" type="button">Edit</button>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-2 mb-3 mb-lg-0 px-3">
                                        <div className="d-grid">
                                            <button className="btn btn-greate" type="button">Save</button>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-3 mb-3 mb-lg-0 px-3">
                                        <div className="d-grid">
                                            <button className="btn btn-warning" type="button">Clear Filter</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-0 shadow mb-3">
                        <div className="head-block mb-1">
                            <div className="row mx-0">
                                <nav>
                                    <ul className="nav nav-pills mb-3">
                                        <li className="nav-item me-3 me-lg-4">
                                            <div className="nav-link active px-4">Game list</div>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-striped mb-0 text-center">
                                <thead className="head-block">
                                <tr className="text-light">
                                    <th scope="col">Game Name</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Game Provider</th>
                                    <th scope="col">Game Type</th>
                                    <th scope="col">Platform</th>
                                    <th scope="col">Enabled</th>
                                    <th scope="col">Maintain by Game Provider</th>
                                    <th scope="col">Enabled by Game Provider</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">(SBO) Slots</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><i className="fas fa-check"></i></td>
                                    <td><i className="fas fa-check"></i></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">(SBO) Slots</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><i className="fas fa-check"></i></td>
                                    <td><i className="fas fa-check"></i></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">(SBO) Slots</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><i className="fas fa-check"></i></td>
                                    <td><i className="fas fa-check"></i></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">(SBO) Slots</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><i className="fas fa-check"></i></td>
                                    <td><i className="fas fa-check"></i></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">(SBO) Slots</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><i className="fas fa-check"></i></td>
                                    <td><i className="fas fa-check"></i></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">(SBO) Slots</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><i className="fas fa-check"></i></td>
                                    <td><i className="fas fa-check"></i></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">(SBO) Slots</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><i className="fas fa-check"></i></td>
                                    <td><i className="fas fa-check"></i></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">(SBO) Slots</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><i className="fas fa-check"></i></td>
                                    <td><i className="fas fa-check"></i></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">(SBO) Slots</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><i className="fas fa-check"></i></td>
                                    <td><i className="fas fa-check"></i></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">(SBO) Slots</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><i className="fas fa-check"></i></td>
                                    <td><i className="fas fa-check"></i></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}