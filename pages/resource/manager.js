import logoGroup from '../../public/assets/images/logo-group.png'
import loading from '../../public/assets/images/loading.png'

export default function Manager() {
    return (
        <>
            <div className="row mx-0">
                <div className="total-bet">
                    <div className="modal fade" id="confirm" tabIndex="-1" aria-labelledby="exampleModalLabel"
                         aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-body p-0">
                                    <div className="head-block pt-0 position-relative">
                                        <div className="text-center fs-6 text-light py-3">Notification</div>
                                        <div className="position-absolute top-0 end-0">
                                            <button className="btn border-0 p-0 me-3 mt-2 text-light" type="button"
                                                    data-bs-dismiss="modal"><i className="fas fa-times"></i></button>
                                        </div>
                                    </div>
                                    <div className="row mx-0">
                                        <div className="col-lg-6 mx-auto pt-3">
                                            <img className="w-100" src={loading.src}/>
                                        </div>
                                    </div>
                                    <div className="text-center py-3">Update resource permission sucessfully</div>
                                    <div className="d-flex justify-content-center pb-3">
                                        <button className="btn btn-greate px-4" type="button"
                                                data-bs-dismiss="modal">Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="add-group" tabIndex="-1" aria-labelledby="exampleModalLabel"
                         aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-body p-0">
                                    <div className="head-block pt-0 position-relative">
                                        <div className="text-center fs-6 text-light py-3">Add New Group</div>
                                        <div className="position-absolute top-0 end-0">
                                            <button className="btn border-0 p-0 me-3 mt-2 text-light" type="button"
                                                    data-bs-dismiss="modal"><i className="fas fa-times"></i></button>
                                        </div>
                                    </div>
                                    <div className="box py-2 mb-1 rounded-0 text-dark box-light">
                                        <div className="row mx-0">
                                            <div className="col-4 col-lg-3 col-lg-3 offset-lg-1">
                                                <div className="d-flex align-items-center h-100">Group Name</div>
                                            </div>
                                            <div className="col-8 col-lg-6">
                                                <div className="input-group"><input className="form-control py-1"
                                                                                    type="text"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box py-2 mb-1 rounded-0 text-dark box-light">
                                        <div className="row mx-0">
                                            <div className="col-4 col-lg-3 col-lg-3 offset-lg-1">Remarks</div>
                                            <div className="col-8 col-lg-6">
                                                <div className="input-group"><textarea className="form-control py-1"
                                                                                       style={{height: '150px'}}></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer border-top-0">
                                    <button className="btn btn-outline-secondary px-4" type="button"
                                            data-bs-dismiss="modal">Cancel
                                    </button>
                                    <button className="btn btn-greate px-4" type="button" data-bs-toggle="modal"
                                            data-bs-target="#add-user">Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="add-user" tabIndex="-1" aria-labelledby="exampleModalLabel"
                         aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-body p-0">
                                    <div className="head-block pt-0 position-relative">
                                        <div className="text-center fs-6 text-light py-3">Your Group</div>
                                        <div className="position-absolute top-0 end-0">
                                            <button className="btn border-0 p-0 me-3 mt-2 text-light" type="button"
                                                    data-bs-dismiss="modal"><i className="fas fa-times"></i></button>
                                        </div>
                                    </div>
                                    <div className="box py-2 mb-1 rounded-0 text-dark box-light">
                                        <div className="row mx-0">
                                            <div className="col-lg-5">
                                                <p className="mb-1 fs-6">Available User</p><select
                                                className="form-select" size="10" aria-label="size 3 select example">
                                                <option selected="">User 1</option>
                                                <option value="1">User 2</option>
                                                <option value="2">User 3</option>
                                                <option value="3">User 4</option>
                                            </select>
                                            </div>
                                            <div className="col-lg-2">
                                                <div className="d-flex align-items-center h-100 py-4">
                                                    <div className="d-none d-lg-grid w-100">
                                                        <button className="btn btn-outline-secondary mb-4"
                                                                type="button"><i
                                                            className="fas fa-angle-double-right fa-2x"></i></button>
                                                        <button className="btn btn-outline-secondary" type="button"><i
                                                            className="fas fa-angle-double-left fa-2x"></i></button>
                                                    </div>
                                                    <div className="d-block d-lg-none w-100">
                                                        <div className="row mx-0">
                                                            <div className="col-6 text-center">
                                                                <button className="btn btn-outline-secondary"
                                                                        type="button"><i
                                                                    className="fas fa-angle-double-down fa-2x"></i>
                                                                </button>
                                                            </div>
                                                            <div className="col-6 text-center">
                                                                <button className="btn btn-outline-secondary"
                                                                        type="button"><i
                                                                    className="fas fa-angle-double-up fa-2x"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <p className="mb-1 fs-6">Assigned User</p><select
                                                className="form-select" size="10" aria-label="size 3 select example">
                                                <option selected="">User 1</option>
                                                <option value="1">User 2</option>
                                                <option value="2">User 3</option>
                                                <option value="3">User 4</option>
                                            </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer border-top-0">
                                    <button className="btn btn-greate px-4" type="button" data-bs-toggle="modal"
                                            data-bs-target="#confirm">Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mx-0">
                        <div className="col-lg-12 mx-auto">
                            <div className="row mx-0 mb-3 mb-lg-4">
                                <img className="logo-title mx-auto" src={logoGroup.src}/></div>
                            <div className="card border-0 shadow">
                                <div className="card-header bg-white pt-0 pb-3 pb-lg-4 border-0 mb-2">
                                    <div className="d-flex justify-content-center">
                                        <div className="title-block px-4 py-3">Manage</div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row mx-0">
                                        <div className="col-lg-3">
                                            <p>Group List :</p>
                                            <div className="d-grid">
                                                <button className="btn mb-1 btn-outline-secondary" type="button"
                                                        data-bs-toggle="modal" data-bs-target="#add-group">Add New Group
                                                </button>
                                                <button
                                                    className="btn mb-1 box box-light border-0 d-flex justify-content-between align-items-center"
                                                    type="button">Transaction AndReport<i
                                                    className="fas fa-user-plus ms-2"></i></button>
                                                <button
                                                    className="btn mb-1 box box-light border-0 d-flex justify-content-between align-items-center"
                                                    type="button">ThemeManagement<i
                                                    className="fas fa-user-plus ms-2"></i></button>
                                                <button
                                                    className="btn mb-1 box box-light border-0 d-flex justify-content-between align-items-center"
                                                    type="button">MemberManagement<i
                                                    className="fas fa-user-plus ms-2"></i></button>
                                                <button
                                                    className="btn mb-1 box box-light border-0 d-flex justify-content-between align-items-center"
                                                    type="button">PromotionManagement<i
                                                    className="fas fa-user-plus ms-2"></i></button>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <p>Active Resource :</p>
                                            <div className="overflow-scroll">
                                                <table className="table table-bordered">
                                                    <thead>
                                                    <tr className="align-middle text-center">
                                                        <th rowSpan="2">Resource Name</th>
                                                        <th colSpan="5">Permission</th>
                                                        <th rowSpan="2">Remove</th>
                                                    </tr>
                                                    <tr className="align-middle text-center">
                                                        <th scope="col">
                                                            <div className="btn btn-outline-dark py-0 px-1">C</div>
                                                        </th>
                                                        <th scope="col">
                                                            <div className="btn btn-outline-dark py-0 px-1">R</div>
                                                        </th>
                                                        <th scope="col">
                                                            <div className="btn btn-outline-dark py-0 px-1">U</div>
                                                        </th>
                                                        <th scope="col">
                                                            <div className="btn btn-outline-dark py-0 px-1">D</div>
                                                        </th>
                                                        <th scope="col">Modified</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr className="text-center">
                                                        <td>Report</td>
                                                        <td><i className="fas fa-check"></i></td>
                                                        <td><i className="fas fa-check"></i></td>
                                                        <td><i className="fas fa-check"></i></td>
                                                        <td><i className="fas fa-check"></i></td>
                                                        <td>
                                                            <div className="d-flex justify-content-center"><input
                                                                className="form-check-input" type="checkbox" value=""/>
                                                            </div>
                                                        </td>
                                                        <td><a href="javascript:void(0)"><i
                                                            className="fas fa-trash-alt"></i></a></td>
                                                    </tr>
                                                    <tr className="text-center">
                                                        <td>Report/win_lose</td>
                                                        <td><i className="fas fa-check"></i></td>
                                                        <td><i className="fas fa-check"></i></td>
                                                        <td><i className="fas fa-check"></i></td>
                                                        <td><i className="fas fa-check"></i></td>
                                                        <td>
                                                            <div className="d-flex justify-content-center"><input
                                                                className="form-check-input" type="checkbox" value=""/>
                                                            </div>
                                                        </td>
                                                        <td><a href="javascript:void(0)"><i
                                                            className="fas fa-trash-alt"></i></a></td>
                                                    </tr>
                                                    <tr className="text-center">
                                                        <td>Transactions</td>
                                                        <td><i className="fas fa-check"></i></td>
                                                        <td><i className="fas fa-check"></i></td>
                                                        <td><i className="fas fa-check"></i></td>
                                                        <td><i className="fas fa-check"></i></td>
                                                        <td>
                                                            <div className="d-flex justify-content-center"><input
                                                                className="form-check-input" type="checkbox" value=""/>
                                                            </div>
                                                        </td>
                                                        <td><a href="javascript:void(0)"><i
                                                            className="fas fa-trash-alt"></i></a></td>
                                                    </tr>
                                                    <tr className="text-center">
                                                        <td>Transactions/deposit</td>
                                                        <td><i className="fas fa-check"></i></td>
                                                        <td><i className="fas fa-check"></i></td>
                                                        <td><i className="fas fa-check"></i></td>
                                                        <td><i className="fas fa-check"></i></td>
                                                        <td>
                                                            <div className="d-flex justify-content-center"><input
                                                                className="form-check-input" type="checkbox" value=""/>
                                                            </div>
                                                        </td>
                                                        <td><a href="javascript:void(0)"><i
                                                            className="fas fa-trash-alt"></i></a></td>
                                                    </tr>
                                                    <tr className="text-center">
                                                        <td>Transactions/withdrawal</td>
                                                        <td><i className="fas fa-check"></i></td>
                                                        <td><i className="fas fa-check"></i></td>
                                                        <td><i className="fas fa-check"></i></td>
                                                        <td><i className="fas fa-check"></i></td>
                                                        <td>
                                                            <div className="d-flex justify-content-center"><input
                                                                className="form-check-input" type="checkbox" value=""/>
                                                            </div>
                                                        </td>
                                                        <td><a href="javascript:void(0)"><i
                                                            className="fas fa-trash-alt"></i></a></td>
                                                    </tr>
                                                    <tr className="text-center">
                                                        <td>Monitor</td>
                                                        <td><i className="fas fa-check"></i></td>
                                                        <td><i className="fas fa-check"></i></td>
                                                        <td><i className="fas fa-check"></i></td>
                                                        <td><i className="fas fa-check"></i></td>
                                                        <td>
                                                            <div className="d-flex justify-content-center"><input
                                                                className="form-check-input" type="checkbox" value=""/>
                                                            </div>
                                                        </td>
                                                        <td><a href="javascript:void(0)"><i
                                                            className="fas fa-trash-alt"></i></a></td>
                                                    </tr>
                                                    <tr className="text-center">
                                                        <td>Transactions/withdrawal</td>
                                                        <td><i className="fas fa-check"></i></td>
                                                        <td><i className="fas fa-check"></i></td>
                                                        <td><i className="fas fa-check"></i></td>
                                                        <td><i className="fas fa-check"></i></td>
                                                        <td>
                                                            <div className="d-flex justify-content-center"><input
                                                                className="form-check-input" type="checkbox" value=""/>
                                                            </div>
                                                        </td>
                                                        <td><a href="javascript:void(0)"><i
                                                            className="fas fa-trash-alt"></i></a></td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <p>Available Resource</p>
                                            <div className="box box-light shadow p-2 p-lg-3 resource">
                                                <div className="fw-bold fs-6">Member Management</div>
                                                <div className="ps-3 mb-3">
                                                    <ul className="list-unstyled">
                                                        <li><a className="p-1"
                                                               href="javascript:void(0)">member_mgmt/account</a></li>
                                                        <li><a className="p-1"
                                                               href="javascript:void(0)">member_mgmt/bet_setting</a>
                                                        </li>
                                                        <li><a className="p-1"
                                                               href="javascript:void(0)">member_mgmt/commission</a></li>
                                                        <li><a className="p-1"
                                                               href="javascript:void(0)">member_mgmt/credit</a></li>
                                                        <li><a className="p-1"
                                                               href="javascript:void(0)">member_mgmt/effective</a></li>
                                                        <li><a className="p-1"
                                                               href="javascript:void(0)">member_mgmt/new_sharing</a>
                                                        </li>
                                                        <li><a className="p-1"
                                                               href="javascript:void(0)">member_mgmt/new_ssm</a></li>
                                                        <li><a className="p-1" href="javascript:void(0)">member_mgmt/credit
                                                            and balcance</a></li>
                                                        <li><a className="p-1" href="javascript:void(0)">member_mgmt/new
                                                            _shareholder</a></li>
                                                        <li><a className="p-1"
                                                               href="javascript:void(0)">member_mgmt/ssma</a></li>
                                                        <li><a className="p-1"
                                                               href="javascript:void(0)">member_mgmt/third_party_game_bet_setting</a>
                                                        </li>
                                                        <li><a className="p-1"
                                                               href="javascript:void(0)">member_mgmt/update_language_bet_setting</a>
                                                        </li>
                                                        <li><a className="p-1"
                                                               href="javascript:void(0)">member_mgmt/update_language_group_bet_setting</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="fw-bold fs-6">Transfer</div>
                                                <div className="ps-3 mb-3">
                                                    <ul className="list-unstyled">
                                                        <li><a className="p-1" href="javascript:void(0)">Transfer</a>
                                                        </li>
                                                        <li><a className="p-1" href="javascript:void(0)">Full
                                                            Transfer</a></li>
                                                    </ul>
                                                </div>
                                                <div className="fw-bold fs-6">Account</div>
                                                <div className="ps-3 mb-3">
                                                    <ul className="list-unstyled">
                                                        <li><a className="p-1" href="javascript:void(0)">Account</a>
                                                        </li>
                                                        <li><a className="p-1"
                                                               href="javascript:void(0)">Account/Balance</a></li>
                                                        <li><a className="p-1"
                                                               href="javascript:void(0)">Account/Sign_out</a></li>
                                                    </ul>
                                                </div>
                                                <div className="fw-bold fs-6">Report</div>
                                                <div className="ps-3 mb-3">
                                                    <ul className="list-unstyled">
                                                        <li><a className="p-1"
                                                               href="javascript:void(0)">report/wl_match_resource</a>
                                                        </li>
                                                        <li><a className="p-1" href="javascript:void(0)">report/
                                                            win_lose_by_player</a></li>
                                                        <li><a className="p-1"
                                                               href="javascript:void(0)">report/win_lose-chart</a></li>
                                                        <li><a className="p-1"
                                                               href="javascript:void(0)">report/win_lose_simple</a></li>
                                                        <li><a className="p-1" href="javascript:void(0)">report/
                                                            cancel_best_list</a></li>
                                                        <li><a className="p-1"
                                                               href="javascript:void(0)">report/wl_win_lose_chart</a>
                                                        </li>
                                                        <li><a className="p-1"
                                                               href="javascript:void(0)">report/wl_win_lose-simple</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="fw-bold fs-6">Monitor</div>
                                                <div className="ps-3 mb-3">
                                                    <ul className="list-unstyled">
                                                        <li><a className="p-1" href="javascript:void(0)">Monitor</a>
                                                        </li>
                                                        <li><a className="p-1"
                                                               href="javascript:void(0)">Monitor/Forcecast</a></li>
                                                        <li><a className="p-1"
                                                               href="javascript:void(0)">Monitor/general_running</a>
                                                        </li>
                                                        <li><a className="p-1"
                                                               href="javascript:void(0)">Monitor/last-50_page</a></li>
                                                        <li><a className="p-1" href="javascript:void(0)">Monitor/
                                                            online_player_list</a></li>
                                                        <li><a className="p-1"
                                                               href="javascript:void(0)">Monitor/Ruuning_order_by_player_and_betty</a>
                                                        </li>
                                                        <li><a className="p-1"
                                                               href="javascript:void(0)">report/wl_win_lose-simple</a>
                                                        </li>
                                                    </ul>
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