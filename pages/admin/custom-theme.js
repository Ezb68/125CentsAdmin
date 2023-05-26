import logoGroup from '../../public/assets/images/logo-group.png'

export default function CustomTheme() {
    return (
        <>
            <div className="row mx-0">
                <div className="total-bet">
                    <div className="row mx-0 mb-3 mb-lg-4">
                        <img className="logo-title mx-auto" src={logoGroup.src}/></div>
                    <div className="head-block mb-3 pb-1 pb-lg-0">
                        <div className="row mx-0">
                            <nav>
                                <ul className="nav nav-pills mb-3" id="pills-tab">
                                    <li className="nav-item me-3 me-lg-4">
                                        <div className="nav-link active px-4">Settings</div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="row mx-0 mb-3 text-light">
                            <div className="col-lg-6">
                                <div className="row mx-0">
                                    <div className="col-lg-6 mb-3">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-1">Desktop Theme</div>
                                            <div className="px-2"><select className="form-select"
                                                                          aria-label="Default select example">
                                                <option selected="">Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-1">Desktop Theme</div>
                                            <div className="px-2"><select className="form-select"
                                                                          aria-label="Default select example">
                                                <option selected="">Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mx-0">
                                    <div className="col-lg-6 mb-3">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-1">Platform</div>
                                            <div className="px-2"><select className="form-select"
                                                                          aria-label="Default select example">
                                                <option selected="">Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-1">Theme</div>
                                            <div className="px-2"><select className="form-select"
                                                                          aria-label="Default select example">
                                                <option selected="">Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row mx-0">
                                    <div className="col-lg-6 mb-3">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-1">Language</div>
                                            <div className="px-2"><select className="form-select"
                                                                          aria-label="Default select example">
                                                <option selected="">English</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-1">Domain</div>
                                            <div className="px-2"><select className="form-select"
                                                                          aria-label="Default select example">
                                                <option selected="">www.wewin247.com</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mx-0">
                                    <div className="col-lg-6 mt-3">
                                        <div className="d-flex align-items-center"><a className="text-light"
                                                                                      href="javascript:void(0)">Copy
                                            Theme From Orther Domain</a></div>
                                    </div>
                                    <div className="col-lg-6 mt-3">
                                        <div className="d-flex align-items-center"><a className="text-light"
                                                                                      href="javascript:void(0)">Copy
                                            Theme From Orther Domain</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="text-warning mb-2 mb-lg-0">* Noted : File size cannot larger than 2MB</div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex justify-content-end pb-3 flex-wrap">
                                <div className="col-12 col-lg-5 mb-3 mb-lg-0 px-3">
                                    <div className="d-grid">
                                        <button className="btn btn-secondary" type="button">Change this Theme</button>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-2 mb-3 mb-lg-0 px-3">
                                    <div className="d-grid">
                                        <button className="btn btn-secondary" type="button">Save</button>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-2 mb-3 mb-lg-0 px-3">
                                    <div className="d-grid">
                                        <button className="btn btn-greate" type="button"> Edit</button>
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
                                            <div className="nav-link active px-4">Customise Themes</div>
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
                                    <th scope="col">GuideLine</th>
                                    <th scope="col">Html ID</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">HyperLink</th>
                                    <th scope="col">Text</th>
                                    <th scope="col">Resource Key</th>
                                    <th scope="col">Hidden</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="align-middle">
                                    <td>1</td>
                                    <td><img src={logoGroup.src} style={{width: '50px'}}/></td>
                                    <td>agent_ cooperation</td>
                                    <td>
                                        <button className="btn btn-greate py-0 px-1">Upload</button>
                                    </td>
                                    <td><input className="form-control" type="text"/></td>
                                    <td><input className="form-control" type="text"/></td>
                                    <td><input className="form-control" type="text"/></td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <div className="form-check"><input className="form-check-input"
                                                                               id="flexCheckDefault" type="checkbox"
                                                                               value=""/></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="align-middle">
                                    <td>2</td>
                                    <td><img src={logoGroup.src} style={{width: '50px'}}/></td>
                                    <td>agent_ cooperation</td>
                                    <td>
                                        <button className="btn btn-greate py-0 px-1">Upload</button>
                                    </td>
                                    <td><input className="form-control" type="text"/></td>
                                    <td><input className="form-control" type="text"/></td>
                                    <td><input className="form-control" type="text"/></td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <div className="form-check"><input className="form-check-input"
                                                                               id="flexCheckDefault" type="checkbox"
                                                                               value=""/></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="align-middle">
                                    <td>3</td>
                                    <td><img src={logoGroup.src} style={{width: '50px'}}/></td>
                                    <td>agent_ cooperation</td>
                                    <td>
                                        <button className="btn btn-greate py-0 px-1">Upload</button>
                                    </td>
                                    <td><input className="form-control" type="text"/></td>
                                    <td><input className="form-control" type="text"/></td>
                                    <td><input className="form-control" type="text"/></td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <div className="form-check"><input className="form-check-input"
                                                                               id="flexCheckDefault" type="checkbox"
                                                                               value=""/></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="align-middle">
                                    <td>4</td>
                                    <td><img src={logoGroup.src} style={{width: '50px'}}/></td>
                                    <td>agent_ cooperation</td>
                                    <td>
                                        <button className="btn btn-greate py-0 px-1">Upload</button>
                                    </td>
                                    <td><input className="form-control" type="text"/></td>
                                    <td><input className="form-control" type="text"/></td>
                                    <td><input className="form-control" type="text"/></td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <div className="form-check"><input className="form-check-input"
                                                                               id="flexCheckDefault" type="checkbox"
                                                                               value=""/></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="align-middle">
                                    <td>5</td>
                                    <td><img src={logoGroup.src} style={{width: '50px'}}/></td>
                                    <td>agent_ cooperation</td>
                                    <td>
                                        <button className="btn btn-greate py-0 px-1">Upload</button>
                                    </td>
                                    <td><input className="form-control" type="text"/></td>
                                    <td><input className="form-control" type="text"/></td>
                                    <td><input className="form-control" type="text"/></td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <div className="form-check"><input className="form-check-input"
                                                                               id="flexCheckDefault" type="checkbox"
                                                                               value=""/></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="align-middle">
                                    <td>6</td>
                                    <td><img src={logoGroup.src} style={{width: '50px'}}/></td>
                                    <td>agent_ cooperation</td>
                                    <td>
                                        <button className="btn btn-greate py-0 px-1">Upload</button>
                                    </td>
                                    <td><input className="form-control" type="text"/></td>
                                    <td><input className="form-control" type="text"/></td>
                                    <td><input className="form-control" type="text"/></td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <div className="form-check"><input className="form-check-input"
                                                                               id="flexCheckDefault" type="checkbox"
                                                                               value=""/></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="align-middle">
                                    <td>7</td>
                                    <td><img src={logoGroup.src} style={{width: '50px'}}/></td>
                                    <td>agent_ cooperation</td>
                                    <td>
                                        <button className="btn btn-greate py-0 px-1">Upload</button>
                                    </td>
                                    <td><input className="form-control" type="text"/></td>
                                    <td><input className="form-control" type="text"/></td>
                                    <td><input className="form-control" type="text"/></td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <div className="form-check"><input className="form-check-input"
                                                                               id="flexCheckDefault" type="checkbox"
                                                                               value=""/></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="align-middle">
                                    <td>8</td>
                                    <td><img src={logoGroup.src} style={{width: '50px'}}/></td>
                                    <td>agent_ cooperation</td>
                                    <td>
                                        <button className="btn btn-greate py-0 px-1">Upload</button>
                                    </td>
                                    <td><input className="form-control" type="text"/></td>
                                    <td><input className="form-control" type="text"/></td>
                                    <td><input className="form-control" type="text"/></td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <div className="form-check"><input className="form-check-input"
                                                                               id="flexCheckDefault" type="checkbox"
                                                                               value=""/></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="align-middle">
                                    <td>9</td>
                                    <td><img src={logoGroup.src} style={{width: '50px'}}/></td>
                                    <td>agent_ cooperation</td>
                                    <td>
                                        <button className="btn btn-greate py-0 px-1">Upload</button>
                                    </td>
                                    <td><input className="form-control" type="text"/></td>
                                    <td><input className="form-control" type="text"/></td>
                                    <td><input className="form-control" type="text"/></td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <div className="form-check"><input className="form-check-input"
                                                                               id="flexCheckDefault" type="checkbox"
                                                                               value=""/></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="align-middle">
                                    <td>10</td>
                                    <td><img src={logoGroup.src} style={{width: '50px'}}/></td>
                                    <td>agent_ cooperation</td>
                                    <td>
                                        <button className="btn btn-greate py-0 px-1">Upload</button>
                                    </td>
                                    <td><input className="form-control" type="text"/></td>
                                    <td><input className="form-control" type="text"/></td>
                                    <td><input className="form-control" type="text"/></td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <div className="form-check"><input className="form-check-input"
                                                                               id="flexCheckDefault" type="checkbox"
                                                                               value=""/></div>
                                        </div>
                                    </td>
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