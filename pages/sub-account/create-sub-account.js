import logo from '../../public/assets/images/logo.png'
import remove from '../../public/assets/images/remove.png'
import key from '../../public/assets/images/key.png'
export default function CreateSubAccount() {
    return (
        <>
            <div className="row mx-0">
                <div className="total-bet">
                    <div className="row mx-0">
                        <div className="col-lg-10 mx-auto">
                            <div className="row mx-0 mb-3 mb-lg-4">
                                <img className="logo-title mx-auto" src={logo.src}/></div>
                            <div className="card border-0 shadow bg-transparent">
                                <div className="card-header bg-white pt-0 pb-3 pb-lg-4 border-0 mb-1">
                                    <div className="d-flex justify-content-center">
                                        <div className="title-block px-4 py-3">Create Sub Account</div>
                                    </div>
                                </div>
                                <div className="card-body bg-white">
                                    <div className="row mx-0">
                                        <div className="box py-2 mb-1 rounded-0">
                                            <div className="row mx-0">
                                                <div className="col-4">
                                                    <div className="d-flex align-items-center h-100">Username :
                                                        <div className="text-danger">*</div>
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="input-group"><input className="form-control py-1"
                                                                                        type="text"/></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box py-2 mb-1 rounded-0 box-light">
                                            <div className="row mx-0">
                                                <div className="col-4">
                                                    <div className="d-flex align-items-center h-100">Password :
                                                        <div className="text-danger">*</div>
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="input-group"><input className="form-control py-1"
                                                                                        type="text"/></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mx-0">
                                    <div className="col-lg-11 mx-auto">
                                        <div className="d-flex justify-content-center py-3">
                                            <button className="btn btn-greate px-4 hvr-grow ms-4">Create Account
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