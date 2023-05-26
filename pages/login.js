import loginImg from '../public/assets/images/login-img.png'
import logo from '../public/assets/images/logo.png'
import {useEffect, useState} from "react";
import PinInput from 'react-pin-input';
import { useRouter } from 'next/router'

export default function Login() {
    const [loginVerify, setLoginVerify] = useState(false);

    const router = useRouter()

    return (
        <>
            <div className="login">
                <div className="row mx-0 h-100">
                    <div className="col-lg-7 px-0 d-none d-lg-block">
                        <div className="login-left">
                            <div className="row mx-0 h-100">
                                <div className="col-lg-8 mx-auto">
                                    <div className="d-flex align-items-center h-100">
                                        <img className="w-100" src={loginImg.src}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        loginVerify ?
                            <div className="col-lg-5 px-0">
                                <div className="login-right d-flex align-items-center justify-content-center">
                                    <div className="login-block">
                                        <div className="row mx-0">
                                            <div className="col-6 col-lg-5 mx-auto pb-4">
                                                <img className="w-100" src={logo.src}/>
                                            </div>
                                        </div>
                                        <div className="login-box p-4 p-lg-5">
                                            <h4 className="pb-4 text-center">SECURITY CODE</h4>
                                            <p className="mb-4 text-center">Please enter your 6-digit security code</p>
                                            <p>Security Code</p>
                                            <PinInput length={6} type="numeric"
                                                      style={{
                                                          display: 'flex',
                                                          justifyContent: 'space-between',
                                                          marginBottom: '20px'
                                                        }}
                                                      inputStyle={{
                                                          width: '40px',
                                                          height: '40px',
                                                          borderRadius: '10px',
                                                          background: 'linear-gradient(123.64deg, rgba(255, 255, 255, 0) -22.38%, rgba(255, 255, 255, 0.039) 70.38%)',
                                                          fontSize: '16px',
                                                          color: 'white'
                                                      }}
                                                      onComplete={(n) => router.push('/')}
                                            />
                                            <a className="text-primary" onClick={() => setLoginVerify(false)}>Back to Login Page</a>
                                        </div>
                                        <div className="w-100 mt-3">
                                            <div className="text-center text-light">@ 2022, Made with BlockGaming Company</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="col-lg-5 px-0">
                                <div className="login-right d-flex align-items-center justify-content-center">
                                    <div className="login-block">
                                        <div className="row mx-0">
                                            <div className="col-6 col-lg-5 mx-auto pb-4">
                                                <img className="w-100" src={logo.src}/>
                                            </div>
                                        </div>
                                        <div className="login-box p-4 p-lg-5"><label className="form-label">Language</label>
                                            <div className="input-group mb-3"><select className="form-select"
                                                                                      aria-label="Default select example">
                                                <option defaultValue="">English</option>
                                                <option value="1">China</option>
                                                <option value="2">Span</option>
                                            </select></div>
                                            <label className="form-label">Username</label>
                                            <div className="input-group mb-3"><input className="form-control" type="text"
                                                                                     aria-describedby="basic-addon3"/></div>
                                            <label className="form-label">Password</label>
                                            <div className="input-group mb-3"><input className="form-control" type="password"
                                                                                     aria-describedby="basic-addon3"/></div>
                                            <label className="form-label">Validation Code</label>
                                            <div className="w-50">
                                                <div className="input-group mb-3"><input
                                                    className="form-control py-2 fs-3 text-center" type="text" value="1234"
                                                    readOnly="readonly"/></div>
                                            </div>
                                            <label className="form-label">Enter the captcha above</label>
                                            <div className="input-group mb-3"><input className="form-control" type="text"
                                                                                     aria-describedby="basic-addon3"/></div>
                                            <div className="form-check form-switch mb-3">
                                                <input className="form-check-input" id="flexSwitchCheckChecked" type="checkbox" role="switch" defaultChecked="true"/><label
                                                className="form-check-label" htmlFor="flexSwitchCheckChecked">Remember
                                                me</label></div>
                                            <div className="d-grid">
                                                <button className="btn btn-login lh-1 hvr-float" onClick={() => setLoginVerify(true)}>
                                                    LOGIN
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}
