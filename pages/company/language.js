import logoGroup from '../../public/assets/images/logo-group.png'
import key from '../../public/assets/images/key.png'
import remove from '../../public/assets/images/remove.png'

export default function Language() {
    return (
        <>
            <div className="row mx-0">
                <div className="total-bet">
                    <div className="row mx-0 mb-3 mb-lg-4">
                        <img className="logo-title mx-auto" src={logoGroup.src}/></div>
                    <div className="border-0 shadow mb-3">
                        <div className="head-block mb-1">
                            <div className="row mx-0">
                                <nav>
                                    <ul className="nav nav-pills mb-3">
                                        <li className="nav-item me-3 me-lg-4">
                                            <div className="nav-link active px-4">Language List</div>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-striped mb-0 text-center">
                                <thead className="head-block">
                                <tr className="text-light">
                                    <th scope="col">#</th>
                                    <th scope="col">ISO</th>
                                    <th scope="col">Language</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Modified By</th>
                                    <th scope="col">Modified On</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" value=""/></td>
                                    <td>EN</td>
                                    <td>Enghlish</td>
                                    <td>
                                        <div className="text-success">Enabled</div>
                                    </td>
                                    <td>System init</td>
                                    <td>2022/02/09 22: 20</td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" value=""/></td>
                                    <td>EN</td>
                                    <td>Enghlish</td>
                                    <td>
                                        <div className="text-success">Enabled</div>
                                    </td>
                                    <td>System init</td>
                                    <td>2022/02/09 22: 20</td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" value=""/></td>
                                    <td>EN</td>
                                    <td>Enghlish</td>
                                    <td>
                                        <div className="text-success">Enabled</div>
                                    </td>
                                    <td>System init</td>
                                    <td>2022/02/09 22: 20</td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" value=""/></td>
                                    <td>EN</td>
                                    <td>Enghlish</td>
                                    <td>
                                        <div className="text-success">Enabled</div>
                                    </td>
                                    <td>System init</td>
                                    <td>2022/02/09 22: 20</td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" value=""/></td>
                                    <td>EN</td>
                                    <td>Enghlish</td>
                                    <td>
                                        <div className="text-success">Enabled</div>
                                    </td>
                                    <td>System init</td>
                                    <td>2022/02/09 22: 20</td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" value=""/></td>
                                    <td>EN</td>
                                    <td>Enghlish</td>
                                    <td>
                                        <div className="text-success">Enabled</div>
                                    </td>
                                    <td>System init</td>
                                    <td>2022/02/09 22: 20</td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" value=""/></td>
                                    <td>EN</td>
                                    <td>Enghlish</td>
                                    <td>
                                        <div className="text-success">Enabled</div>
                                    </td>
                                    <td>System init</td>
                                    <td>2022/02/09 22: 20</td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" value=""/></td>
                                    <td>EN</td>
                                    <td>Enghlish</td>
                                    <td>
                                        <div className="text-success">Enabled</div>
                                    </td>
                                    <td>System init</td>
                                    <td>2022/02/09 22: 20</td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" value=""/></td>
                                    <td>EN</td>
                                    <td>Enghlish</td>
                                    <td>
                                        <div className="text-success">Enabled</div>
                                    </td>
                                    <td>System init</td>
                                    <td>2022/02/09 22: 20</td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" value=""/></td>
                                    <td>EN</td>
                                    <td>Enghlish</td>
                                    <td>
                                        <div className="text-success">Enabled</div>
                                    </td>
                                    <td>System init</td>
                                    <td>2022/02/09 22: 20</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end py-3">
                        <button className="btn btn-secondary" type="button">Enable All</button>
                        <button className="btn btn-secondary ms-3" type="button">Disabled All</button>
                        <button className="btn btn-greate px-4 hvr-grow ms-3" type="button" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">Edit
                        </button>
                    </div>
                    <div className="py-5">
                        <div className="d-flex align-items-center">
                            <div className="flex-shrink-1">
                                <img className="policy-icon" src={key.src}/>
                            </div>
                            <div className="px-2">Remark</div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="flex-shrink-1">
                                <img className="policy-icon" src={remove.src}/>
                            </div>
                            <div className="px-2">Enable/Disable the language that allow users to choose on the
                                website.
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="flex-shrink-1">
                                <img className="policy-icon" src={remove.src}/>
                            </div>
                            <div className="px-2">If a langauge disabled. 12.1 Customise Themes & 12.3 Customize Company
                                Flow will not show that language as an option.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}