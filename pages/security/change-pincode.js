import logo from '../../public/assets/images/logo.png'
import remove from '../../public/assets/images/remove.png'
import key from '../../public/assets/images/key.png'
export default function ChangePincode() {
    return (
        <>
            <div className="row mx-0">
                <div className="total-bet">
                    <div className="row mx-0">
                        <div className="col-lg-10 mx-auto">
                            <div className="row mx-0 mb-3 mb-lg-4">
                                <img className="logo-title mx-auto"  src={logo.src}/></div>
                            <div className="card border-0 shadow bg-transparent">
                                <div className="card-header bg-white pt-0 pb-3 pb-lg-4 border-0 mb-1">
                                    <div className="d-flex justify-content-center">
                                        <div className="title-block px-4 py-3">Change Security Code</div>
                                    </div>
                                </div>
                                <div className="card-body bg-white">
                                    <div className="px-lg-5 py-3">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-1">
                                                <img className="policy-icon" src={key.src}/></div>
                                            <div className="px-2">Your six- digit numerical Pin Code ( PC ) must:</div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-1">
                                                <img className="policy-icon" src={remove.src}/></div>
                                            <div className="px-2">Cointain at least two different digits</div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-1">
                                                <img className="policy-icon" src={remove.src}/></div>
                                            <div className="px-2">Not include consecutive numbers, forwards or backwards
                                                e.g 123456, 654321
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mx-0">
                                        <div className="box py-2 mb-1 rounded-0 box-light">
                                            <div className="row mx-0">
                                                <div className="col-5 col-lg-4">
                                                    <div className="d-flex align-items-center h-100">Old Pin Code :
                                                    </div>
                                                </div>
                                                <div className="col-7 col-lg-4">
                                                    <div className="d-flex justify-content-between"><input
                                                        className="pincode" type="text" aria-describedby="basic-addon3"
                                                        maxLength="1"/><input className="pincode" type="text"
                                                                              aria-describedby="basic-addon3"
                                                                              maxLength="1"/><input className="pincode"
                                                                                                    type="text"
                                                                                                    aria-describedby="basic-addon3"
                                                                                                    maxLength="1"/><input
                                                        className="pincode" type="text" aria-describedby="basic-addon3"
                                                        maxLength="1"/><input className="pincode" type="text"
                                                                              aria-describedby="basic-addon3"
                                                                              maxLength="1"/><input className="pincode"
                                                                                                    type="text"
                                                                                                    aria-describedby="basic-addon3"
                                                                                                    maxLength="1"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box py-2 mb-1 rounded-0 box-light">
                                            <div className="row mx-0">
                                                <div className="col-5 col-lg-4">
                                                    <div className="d-flex align-items-center h-100">Pin Code :</div>
                                                </div>
                                                <div className="col-7 col-lg-4">
                                                    <div className="d-flex justify-content-between"><input
                                                        className="pincode" type="text" aria-describedby="basic-addon3"
                                                        maxLength="1"/><input className="pincode" type="text"
                                                                              aria-describedby="basic-addon3"
                                                                              maxLength="1"/><input className="pincode"
                                                                                                    type="text"
                                                                                                    aria-describedby="basic-addon3"
                                                                                                    maxLength="1"/><input
                                                        className="pincode" type="text" aria-describedby="basic-addon3"
                                                        maxLength="1"/><input className="pincode" type="text"
                                                                              aria-describedby="basic-addon3"
                                                                              maxLength="1"/><input className="pincode"
                                                                                                    type="text"
                                                                                                    aria-describedby="basic-addon3"
                                                                                                    maxLength="1"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box py-2 mb-1 rounded-0 box-light">
                                            <div className="row mx-0">
                                                <div className="col-5 col-lg-4">
                                                    <div className="d-flex align-items-center h-100">Confirm Pin Code:
                                                    </div>
                                                </div>
                                                <div className="col-7 col-lg-4">
                                                    <div className="d-flex justify-content-between"><input
                                                        className="pincode" type="text" aria-describedby="basic-addon3"
                                                        maxLength="1"/><input className="pincode" type="text"
                                                                              aria-describedby="basic-addon3"
                                                                              maxLength="1"/><input className="pincode"
                                                                                                    type="text"
                                                                                                    aria-describedby="basic-addon3"
                                                                                                    maxLength="1"/><input
                                                        className="pincode" type="text" aria-describedby="basic-addon3"
                                                        maxLength="1"/><input className="pincode" type="text"
                                                                              aria-describedby="basic-addon3"
                                                                              maxLength="1"/><input className="pincode"
                                                                                                    type="text"
                                                                                                    aria-describedby="basic-addon3"
                                                                                                    maxLength="1"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mx-0">
                                    <div className="col-lg-11 mx-auto">
                                        <div className="d-flex justify-content-end py-3">
                                            <button className="btn btn-outline-secondary hvr-grow px-4">Reset</button>
                                            <button className="btn btn-greate hvr-grow ms-4">Change Pin code</button>
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