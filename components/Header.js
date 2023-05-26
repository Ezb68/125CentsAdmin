import {Menu} from './index'
import user from '../public/assets/images/user.jpeg'
import userPng from '../public/assets/images/user.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faSearch,
    faTimes,
    faSun,
    faMoon,
    faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
    faBell
} from "@fortawesome/free-regular-svg-icons"
import {useEffect, useState} from "react";
import {Router, useRouter} from "next/router";

export default function Header () {
    let startDate = new Date()
    let strDate = String(startDate)
    
    const dateString = String(startDate);
    let day = startDate.getDate();
    let year = startDate.getFullYear();
    const dateTemp = 
        `
            ${dateString.slice(0, 3)}, 
            ${day} 
            ${dateString.slice(4, 7)}, 
            ${year}
        `;

    const [time, setTime] = useState('')
    const [date, setDate] = useState(dateTemp)

    const router = useRouter()

    function logoutHandle() {
        var menu_btn = document.querySelector("#menu-btn");
        menu_btn.removeEventListener("click", () => {
            sidebar.classList.toggle("active-nav");
            container.classList.toggle("active-cont");
        });
        router.push('/login');
    }

    useEffect(() => {
        const r = setInterval(() => {
            let date = new Date();
            let hour = date.getHours();
            let minitues = date.getMinutes();
            let second = date.getSeconds();
            const timeTemp = 
                `
                    ${(hour < 10 ? '0' : '') + hour} :
                    ${(minitues < 10 ? '0' : '') + minitues} :
                    ${(second < 10 ? '0' : '') + second}
                `;

            if(timeTemp === '00 : 00 : 01') {
                const dateString = String(date);
                let day = date.getDate();
                let year = date.getFullYear();
                const dateTemp = `${dateString.slice(0, 3)}, ${day} ${dateString.slice(4, 7)}, ${year}`;
                setDate(dateTemp);
            }
            setTime(timeTemp);
        }, 1000);

        return () => {
            clearInterval(r);
        };
    }, [time, date])
    return (
        <>
            <div id="menu-mb" className="offcanvas offcanvas-start menu-bg" tabIndex='-1' aria-labelledby='offcanvasExampleLabel'>
                <div className="offcanvas-header align-items-start">
                    <div className="user-block p-3 w-100">
                        <div className="d-flex">
                            <div className="flex-shrink-1">
                                <img src={userPng.src} alt="" className="user-icon"/>
                            </div>
                            <div className="ps-3 text-light">
                                <div className="text-uppercase">
                                    WELCOME BACK
                                </div>
                                <p className="mb-0">Username</p>
                            </div>
                        </div>
                    </div>
                    <button className="btn p-0 ms-2 border-0" type='button' data-bs-dismiss='offcanvas' aria-label='Close'>
                        <FontAwesomeIcon className="text-light" icon={faTimes}/>
                    </button>
                </div>
                <div className="offcanvas-body p-0">
                    <Menu />
                </div>
            </div>
            <header>
                <nav className="navbar top-navbar navbar-light px-3 justify-content-start">
                    <button id="menu-btn" className="navbar-toggler d-none d-lg-block p-0 border-0" type="button">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <button className="navbar-toggler d-lg-none p-0 border-0" type="button" data-bs-toggle="offcanvas" data-bs-target='#menu-mb'>
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="time-block d-none d-lg-flex align-items-center ms-4">
                        {
                            new Date().getHours() < 12 ?
                                <>
                                    <FontAwesomeIcon className="me-3 text-warning" icon={faSun}/>
                                    <span className="mx-4">Good Morning</span>
                                    <span className="me-4">{time}</span>
                                    <span>{date}</span>
                                </> :
                                <>
                                    <FontAwesomeIcon className="text-dark" icon={faMoon}/>
                                    <span className="mx-4">Good Afternoon</span>
                                    <span className="me-4">{time}</span>
                                    <span>{date}</span>
                                </>

                        }

                    </div>
                    <div className="search-block mx-lg-auto col-lg-3 d-none d-lg-flex">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search"/>
                            <span className="input-group-text">
                                <button className="btn border-0 p-0" type="button">
                                    <FontAwesomeIcon className="text-dark" icon={faSearch}/>
                                </button>
                            </span>
                        </div>
                    </div>
                    <div className="setting-block d-flex align-items-center ms-auto">
                        <div className="dropdown me-3">
                            <button className="text-dark position-relative bg-transparent border-0" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                <FontAwesomeIcon className="fa-2x" icon={faBell}/>
                                <span
                                className="position-absolute top-50 start-75 translate-middle p-1 bg-danger border border-light rounded-circle"></span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-lg-end">
                                <li><a className="dropdown-item" href="#">You have new messeger</a></li>
                                <li><a className="dropdown-item" href="#">You have new messeger</a></li>
                            </ul>
                        </div>
                        <div className="dropdown me-3"><a className="dropdown-toggle text-dark" href="#" role="button"
                                                          data-bs-toggle="dropdown" aria-expanded="false">English</a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="#">Span</a></li>
                                <li><a className="dropdown-item" href="#">China</a></li>
                            </ul>
                        </div>
                        <div className="dropdown me-3">
                            <a className="me-3 text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img className="user-avt border" src={user.src} alt=""/>
                                </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="#">Account Information</a></li>
                                <li><a className="dropdown-item" href="#">Change Password</a></li>
                            </ul>
                        </div>
                        <button className="btn btn-outline-secondary" type="button" onClick={() => logoutHandle()}>
                            <FontAwesomeIcon className="me-3" icon={faSignOutAlt}/>
                            Logout
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )
}
