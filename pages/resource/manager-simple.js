import logo from '../../public/assets/images/logo.png'

export default function ManagerSimple() {
    return (
        <>
            <div className="row mx-0">
                <div className="total-bet">
                    <div className="row mx-0">
                        <div className="col-lg-12 mx-auto">
                            <div className="row mx-0 mb-3 mb-lg-4">
                                <img className="logo-title mx-auto" src={logo.src}/></div>
                            <div className="head-block mb-1">
                                <div className="row mx-0">
                                    <div className="col-lg-8 mb-3 mb-lg-0">
                                        <div className="row mx-0">
                                            <nav>
                                                <ul className="nav nav-pills mb-3">
                                                    <li className="nav-item me-3 me-lg-4">
                                                        <div className="nav-link active">Manage Simple</div>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-0 shadow mb-3">
                                <div className="table-responsive">
                                    <table className="table table-striped mb-0 text-center">
                                        <thead className="head-block">
                                        <tr className="text-light">
                                            <th scope="col">Add Group</th>
                                            <th scope="col">Group</th>
                                            <th scope="col">Account</th>
                                            <th scope="col">Company</th>
                                            <th scope="col">Game and Providers</th>
                                            <th scope="col">Member Management</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><a href="#"><i className="fas fa-user-plus"></i></a>
                                            </td>
                                            <td>TransactionAndReport</td>
                                            <td>
                                                <div className="input-group"><select
                                                    className="form-select form-select">
                                                    <option selected="">Status</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                                    <button className="input-group-text bg-white" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseExample"
                                                            aria-expanded="false" aria-controls="collapseExample"><i
                                                        className="fas fa-th-list"></i></button>
                                                </div>
                                                <div className="collapse mx-0 mx-auto" id="collapseExample"
                                                     style={{width: '200px'}}>
                                                    <div className="text-start pt-2">Account</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check1" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check1">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check2" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check2">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check3" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check3">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check4" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check4">D</label></div>
                                                    </div>
                                                    <div className="text-start pt-2">Account/Balance</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check5" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check5">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check6" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check6">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check7" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check7">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check8" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check8">D</label></div>
                                                    </div>
                                                    <div className="text-start pt-2">Account/Sign out</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check9" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check9">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check10" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check10">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check11" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check11">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check12" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check12">D</label></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><select className="form-select form-select"
                                                        aria-label=".form-select-sm example">
                                                <option selected="">Status</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select></td>
                                            <td>
                                                <div className="input-group"><select className="form-select form-select"
                                                                                     aria-label=".form-select-sm example">
                                                    <option selected="">Status</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                                    <button className="input-group-text bg-white" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseExample1"
                                                            aria-expanded="false" aria-controls="collapseExample"><i
                                                        className="fas fa-th-list"></i></button>
                                                </div>
                                                <div className="collapse mx-auto" id="collapseExample1"
                                                     style={{width: '200px'}}>
                                                    <div className="text-start pt-2">Game and Providers</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck1" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check1">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck2" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check2">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck3" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check3">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck4" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check4">D</label></div>
                                                    </div>
                                                    <div className="text-start pt-2">Game and Provider/ game_lists</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck5" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check5">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck6" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check6">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck7" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check7">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck8" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check8">D</label></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><select className="form-select form-select"
                                                        aria-label=".form-select-sm example">
                                                <option selected="">Status</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select></td>
                                        </tr>
                                        <tr>
                                            <td><a href="#"><i className="fas fa-user-plus"></i></a>
                                            </td>
                                            <td>TransactionAndReport</td>
                                            <td>
                                                <div className="input-group"><select
                                                    className="form-select form-select">
                                                    <option selected="">Status</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                                    <button className="input-group-text bg-white" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseExample"
                                                            aria-expanded="false" aria-controls="collapseExample"><i
                                                        className="fas fa-th-list"></i></button>
                                                </div>
                                                <div className="collapse mx-0 mx-auto" id="collapseExample"
                                                     style={{width: '200px'}}>
                                                    <div className="text-start pt-2">Account</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check1" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check1">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check2" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check2">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check3" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check3">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check4" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check4">D</label></div>
                                                    </div>
                                                    <div className="text-start pt-2">Account/Balance</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check5" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check5">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check6" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check6">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check7" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check7">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check8" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check8">D</label></div>
                                                    </div>
                                                    <div className="text-start pt-2">Account/Sign out</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check9" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check9">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check10" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check10">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check11" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check11">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check12" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check12">D</label></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><select className="form-select form-select"
                                                        aria-label=".form-select-sm example">
                                                <option selected="">Status</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select></td>
                                            <td>
                                                <div className="input-group"><select className="form-select form-select"
                                                                                     aria-label=".form-select-sm example">
                                                    <option selected="">Status</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                                    <button className="input-group-text bg-white" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseExample1"
                                                            aria-expanded="false" aria-controls="collapseExample"><i
                                                        className="fas fa-th-list"></i></button>
                                                </div>
                                                <div className="collapse mx-auto" id="collapseExample1"
                                                     style={{width: '200px'}}>
                                                    <div className="text-start pt-2">Game and Providers</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck1" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check1">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck2" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check2">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck3" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check3">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck4" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check4">D</label></div>
                                                    </div>
                                                    <div className="text-start pt-2">Game and Provider/ game_lists</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck5" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check5">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck6" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check6">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck7" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check7">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck8" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check8">D</label></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><select className="form-select form-select"
                                                        aria-label=".form-select-sm example">
                                                <option selected="">Status</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="d-flex justify-content-center align-items-center py-3">
                                    <button className="btn btn-outline-secondary">
                                        {'<'}
                                    < /button>
                                    <div className="px-3">Page 1</div>
                                    <button className="btn btn-outline-secondary">
                                        {'>'}
                                    </button>
                                </div>
                            </div>
                            <div className="border-0 shadow mb-3">
                                <div className="table-responsive">
                                    <table className="table table-striped mb-0 text-center">
                                        <thead className="head-block">
                                        <tr className="text-light">
                                            <th scope="col">Add Group</th>
                                            <th scope="col">Group</th>
                                            <th scope="col">Account</th>
                                            <th scope="col">Company</th>
                                            <th scope="col">Game and Providers</th>
                                            <th scope="col">Member Management</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><a href="#"><i className="fas fa-user-plus"></i></a>
                                            </td>
                                            <td>TransactionAndReport</td>
                                            <td>
                                                <div className="input-group"><select
                                                    className="form-select form-select">
                                                    <option selected="">Status</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                                    <button className="input-group-text bg-white" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseExample"
                                                            aria-expanded="false" aria-controls="collapseExample"><i
                                                        className="fas fa-th-list"></i></button>
                                                </div>
                                                <div className="collapse mx-0 mx-auto" id="collapseExample"
                                                     style={{width: '200px'}}>
                                                    <div className="text-start pt-2">Account</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check1" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check1">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check2" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check2">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check3" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check3">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check4" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check4">D</label></div>
                                                    </div>
                                                    <div className="text-start pt-2">Account/Balance</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check5" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check5">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check6" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check6">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check7" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check7">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check8" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check8">D</label></div>
                                                    </div>
                                                    <div className="text-start pt-2">Account/Sign out</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check9" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check9">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check10" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check10">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check11" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check11">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check12" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check12">D</label></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><select className="form-select form-select"
                                                        aria-label=".form-select-sm example">
                                                <option selected="">Status</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select></td>
                                            <td>
                                                <div className="input-group"><select className="form-select form-select"
                                                                                     aria-label=".form-select-sm example">
                                                    <option selected="">Status</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                                    <button className="input-group-text bg-white" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseExample1"
                                                            aria-expanded="false" aria-controls="collapseExample"><i
                                                        className="fas fa-th-list"></i></button>
                                                </div>
                                                <div className="collapse mx-auto" id="collapseExample1"
                                                     style={{width: '200px'}}>
                                                    <div className="text-start pt-2">Game and Providers</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck1" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check1">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck2" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check2">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck3" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check3">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck4" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check4">D</label></div>
                                                    </div>
                                                    <div className="text-start pt-2">Game and Provider/ game_lists</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck5" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check5">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck6" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check6">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck7" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check7">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck8" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check8">D</label></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><select className="form-select form-select"
                                                        aria-label=".form-select-sm example">
                                                <option selected="">Status</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select></td>
                                        </tr>
                                        <tr>
                                            <td><a href="#"><i className="fas fa-user-plus"></i></a>
                                            </td>
                                            <td>TransactionAndReport</td>
                                            <td>
                                                <div className="input-group"><select
                                                    className="form-select form-select">
                                                    <option selected="">Status</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                                    <button className="input-group-text bg-white" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseExample"
                                                            aria-expanded="false" aria-controls="collapseExample"><i
                                                        className="fas fa-th-list"></i></button>
                                                </div>
                                                <div className="collapse mx-0 mx-auto" id="collapseExample"
                                                     style={{width: '200px'}}>
                                                    <div className="text-start pt-2">Account</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check1" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check1">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check2" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check2">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check3" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check3">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check4" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check4">D</label></div>
                                                    </div>
                                                    <div className="text-start pt-2">Account/Balance</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check5" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check5">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check6" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check6">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check7" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check7">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check8" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check8">D</label></div>
                                                    </div>
                                                    <div className="text-start pt-2">Account/Sign out</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check9" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check9">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check10" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check10">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check11" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check11">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check12" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check12">D</label></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><select className="form-select form-select"
                                                        aria-label=".form-select-sm example">
                                                <option selected="">Status</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select></td>
                                            <td>
                                                <div className="input-group"><select className="form-select form-select"
                                                                                     aria-label=".form-select-sm example">
                                                    <option selected="">Status</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                                    <button className="input-group-text bg-white" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseExample1"
                                                            aria-expanded="false" aria-controls="collapseExample"><i
                                                        className="fas fa-th-list"></i></button>
                                                </div>
                                                <div className="collapse mx-auto" id="collapseExample1"
                                                     style={{width: '200px'}}>
                                                    <div className="text-start pt-2">Game and Providers</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck1" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check1">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck2" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check2">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck3" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check3">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck4" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check4">D</label></div>
                                                    </div>
                                                    <div className="text-start pt-2">Game and Provider/ game_lists</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck5" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check5">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck6" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check6">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck7" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check7">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck8" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check8">D</label></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><select className="form-select form-select"
                                                        aria-label=".form-select-sm example">
                                                <option selected="">Status</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="d-flex justify-content-center align-items-center py-3">
                                    <button className="btn btn-outline-secondary">
                                        {'<'}
                                    < /button>
                                    <div className="px-3">Page 1</div>
                                    <button className="btn btn-outline-secondary">
                                        {'>'}
                                    </button>
                                </div>
                                <div className="row mx-0">
                                    <div className="col-lg-11 mx-auto">
                                        <div className="d-flex justify-content-center py-3">
                                            <button className="btn btn-greate px-4 hvr-grow" type="button"
                                                    data-bs-toggle="modal" data-bs-target="#exampleModal">Update
                                                permission
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="head-block mb-1">
                                <div className="row mx-0">
                                    <div className="col-lg-8 mb-3 mb-lg-0">
                                        <div className="row mx-0">
                                            <nav>
                                                <ul className="nav nav-pills mb-3">
                                                    <li className="nav-item me-3 me-lg-4">
                                                        <div className="nav-link active">Sub Account</div>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-0 shadow mb-3">
                                <div className="table-responsive">
                                    <table className="table table-striped mb-0 text-center">
                                        <thead className="head-block">
                                        <tr className="text-light">
                                            <th scope="col">Add Group</th>
                                            <th scope="col">Group</th>
                                            <th scope="col">Account</th>
                                            <th scope="col">Company</th>
                                            <th scope="col">Game and Providers</th>
                                            <th scope="col">Member Management</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><a href="#"><i className="fas fa-user-plus"></i></a>
                                            </td>
                                            <td>TransactionAndReport</td>
                                            <td>
                                                <div className="input-group"><select
                                                    className="form-select form-select">
                                                    <option selected="">Status</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                                    <button className="input-group-text bg-white" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseExample"
                                                            aria-expanded="false" aria-controls="collapseExample"><i
                                                        className="fas fa-th-list"></i></button>
                                                </div>
                                                <div className="collapse mx-0 mx-auto" id="collapseExample"
                                                     style={{width: '200px'}}>
                                                    <div className="text-start pt-2">Account</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check1" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check1">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check2" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check2">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check3" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check3">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check4" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check4">D</label></div>
                                                    </div>
                                                    <div className="text-start pt-2">Account/Balance</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check5" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check5">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check6" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check6">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check7" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check7">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check8" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check8">D</label></div>
                                                    </div>
                                                    <div className="text-start pt-2">Account/Sign out</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check9" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check9">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check10" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check10">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check11" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check11">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check12" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check12">D</label></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><select className="form-select form-select"
                                                        aria-label=".form-select-sm example">
                                                <option selected="">Status</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select></td>
                                            <td>
                                                <div className="input-group"><select className="form-select form-select"
                                                                                     aria-label=".form-select-sm example">
                                                    <option selected="">Status</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                                    <button className="input-group-text bg-white" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseExample1"
                                                            aria-expanded="false" aria-controls="collapseExample"><i
                                                        className="fas fa-th-list"></i></button>
                                                </div>
                                                <div className="collapse mx-auto" id="collapseExample1"
                                                     style={{width: '200px'}}>
                                                    <div className="text-start pt-2">Game and Providers</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck1" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check1">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck2" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check2">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck3" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check3">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck4" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check4">D</label></div>
                                                    </div>
                                                    <div className="text-start pt-2">Game and Provider/ game_lists</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck5" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check5">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck6" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check6">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck7" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check7">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck8" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check8">D</label></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><select className="form-select form-select"
                                                        aria-label=".form-select-sm example">
                                                <option selected="">Status</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select></td>
                                        </tr>
                                        <tr>
                                            <td><a href="#"><i className="fas fa-user-plus"></i></a>
                                            </td>
                                            <td>TransactionAndReport</td>
                                            <td>
                                                <div className="input-group"><select
                                                    className="form-select form-select">
                                                    <option selected="">Status</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                                    <button className="input-group-text bg-white" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseExample"
                                                            aria-expanded="false" aria-controls="collapseExample"><i
                                                        className="fas fa-th-list"></i></button>
                                                </div>
                                                <div className="collapse mx-0 mx-auto" id="collapseExample"
                                                     style={{width: '200px'}}>
                                                    <div className="text-start pt-2">Account</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check1" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check1">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check2" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check2">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check3" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check3">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check4" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check4">D</label></div>
                                                    </div>
                                                    <div className="text-start pt-2">Account/Balance</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check5" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check5">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check6" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check6">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check7" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check7">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check8" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check8">D</label></div>
                                                    </div>
                                                    <div className="text-start pt-2">Account/Sign out</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check9" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check9">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check10" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check10">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check11" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check11">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check12" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check12">D</label></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><select className="form-select form-select"
                                                        aria-label=".form-select-sm example">
                                                <option selected="">Status</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select></td>
                                            <td>
                                                <div className="input-group"><select className="form-select form-select"
                                                                                     aria-label=".form-select-sm example">
                                                    <option selected="">Status</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                                    <button className="input-group-text bg-white" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseExample1"
                                                            aria-expanded="false" aria-controls="collapseExample"><i
                                                        className="fas fa-th-list"></i></button>
                                                </div>
                                                <div className="collapse mx-auto" id="collapseExample1"
                                                     style={{width: '200px'}}>
                                                    <div className="text-start pt-2">Game and Providers</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck1" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check1">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck2" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check2">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck3" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check3">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck4" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check4">D</label></div>
                                                    </div>
                                                    <div className="text-start pt-2">Game and Provider/ game_lists</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck5" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check5">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck6" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check6">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck7" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check7">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck8" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check8">D</label></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><select className="form-select form-select"
                                                        aria-label=".form-select-sm example">
                                                <option selected="">Status</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="d-flex justify-content-center align-items-center py-3">
                                    <button className="btn btn-outline-secondary">
                                        {'<'}
                                    < /button>
                                    <div className="px-3">Page 1</div>
                                    <button className="btn btn-outline-secondary">
                                        {'>'}
                                    </button>
                                </div>
                            </div>
                            <div className="border-0 shadow mb-3">
                                <div className="table-responsive">
                                    <table className="table table-striped mb-0 text-center">
                                        <thead className="head-block">
                                        <tr className="text-light">
                                            <th scope="col">Add Group</th>
                                            <th scope="col">Group</th>
                                            <th scope="col">Account</th>
                                            <th scope="col">Company</th>
                                            <th scope="col">Game and Providers</th>
                                            <th scope="col">Member Management</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><a href="#"><i className="fas fa-user-plus"></i></a>
                                            </td>
                                            <td>TransactionAndReport</td>
                                            <td>
                                                <div className="input-group"><select
                                                    className="form-select form-select">
                                                    <option selected="">Status</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                                    <button className="input-group-text bg-white" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseExample"
                                                            aria-expanded="false" aria-controls="collapseExample"><i
                                                        className="fas fa-th-list"></i></button>
                                                </div>
                                                <div className="collapse mx-0 mx-auto" id="collapseExample"
                                                     style={{width: '200px'}}>
                                                    <div className="text-start pt-2">Account</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check1" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check1">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check2" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check2">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check3" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check3">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check4" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check4">D</label></div>
                                                    </div>
                                                    <div className="text-start pt-2">Account/Balance</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check5" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check5">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check6" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check6">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check7" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check7">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check8" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check8">D</label></div>
                                                    </div>
                                                    <div className="text-start pt-2">Account/Sign out</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check9" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check9">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check10" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check10">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check11" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check11">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check12" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check12">D</label></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><select className="form-select form-select"
                                                        aria-label=".form-select-sm example">
                                                <option selected="">Status</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select></td>
                                            <td>
                                                <div className="input-group"><select className="form-select form-select"
                                                                                     aria-label=".form-select-sm example">
                                                    <option selected="">Status</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                                    <button className="input-group-text bg-white" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseExample1"
                                                            aria-expanded="false" aria-controls="collapseExample"><i
                                                        className="fas fa-th-list"></i></button>
                                                </div>
                                                <div className="collapse mx-auto" id="collapseExample1"
                                                     style={{width: '200px'}}>
                                                    <div className="text-start pt-2">Game and Providers</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck1" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check1">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck2" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check2">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck3" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check3">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck4" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check4">D</label></div>
                                                    </div>
                                                    <div className="text-start pt-2">Game and Provider/ game_lists</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck5" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check5">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck6" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check6">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck7" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check7">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck8" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check8">D</label></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><select className="form-select form-select"
                                                        aria-label=".form-select-sm example">
                                                <option selected="">Status</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select></td>
                                        </tr>
                                        <tr>
                                            <td><a href="#"><i className="fas fa-user-plus"></i></a>
                                            </td>
                                            <td>TransactionAndReport</td>
                                            <td>
                                                <div className="input-group"><select
                                                    className="form-select form-select">
                                                    <option selected="">Status</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                                    <button className="input-group-text bg-white" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseExample"
                                                            aria-expanded="false" aria-controls="collapseExample"><i
                                                        className="fas fa-th-list"></i></button>
                                                </div>
                                                <div className="collapse mx-0 mx-auto" id="collapseExample"
                                                     style={{width: '200px'}}>
                                                    <div className="text-start pt-2">Account</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check1" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check1">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check2" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check2">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check3" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check3">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check4" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check4">D</label></div>
                                                    </div>
                                                    <div className="text-start pt-2">Account/Balance</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check5" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check5">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check6" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check6">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check7" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check7">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check8" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check8">D</label></div>
                                                    </div>
                                                    <div className="text-start pt-2">Account/Sign out</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check9" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check9">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check10" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check10">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check11" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check11">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="check12" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check12">D</label></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><select className="form-select form-select"
                                                        aria-label=".form-select-sm example">
                                                <option selected="">Status</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select></td>
                                            <td>
                                                <div className="input-group"><select className="form-select form-select"
                                                                                     aria-label=".form-select-sm example">
                                                    <option selected="">Status</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                                    <button className="input-group-text bg-white" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseExample1"
                                                            aria-expanded="false" aria-controls="collapseExample"><i
                                                        className="fas fa-th-list"></i></button>
                                                </div>
                                                <div className="collapse mx-auto" id="collapseExample1"
                                                     style={{width: '200px'}}>
                                                    <div className="text-start pt-2">Game and Providers</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck1" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check1">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck2" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check2">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck3" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check3">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck4" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check4">D</label></div>
                                                    </div>
                                                    <div className="text-start pt-2">Game and Provider/ game_lists</div>
                                                    <div className="d-flex p-1">
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck5" type="checkbox"
                                                            value="" checked=""/><label className="form-check-label"
                                                                                        htmlFor="check5">C</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck6" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check6">R</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck7" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check7">U</label></div>
                                                        <div className="form-check me-3"><input
                                                            className="form-check-input" id="checck8" type="checkbox"
                                                            value=""/><label className="form-check-label"
                                                                             htmlFor="check8">D</label></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><select className="form-select form-select"
                                                        aria-label=".form-select-sm example">
                                                <option selected="">Status</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="d-flex justify-content-center align-items-center py-3">
                                    <button className="btn btn-outline-secondary">
                                        {'<'}
                                    < /button>
                                    <div className="px-3">Page 1</div>
                                    <button className="btn btn-outline-secondary">
                                        {'>'}
                                    </button>
                                </div>
                                <div className="row mx-0">
                                    <div className="col-lg-11 mx-auto">
                                        <div className="d-flex justify-content-center py-3">
                                            <button className="btn btn-greate px-4 hvr-grow" type="button"
                                                    data-bs-toggle="modal" data-bs-target="#exampleModal">Update
                                                permission
                                            </button>
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