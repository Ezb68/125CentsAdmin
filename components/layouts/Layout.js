import {Footer, Header, Menu} from "@/components";
import user from '../../public/assets/images/user.png'
import $ from "jquery";
import {useEffect} from "react";

const Layout = ({ children }) => {
    useEffect(() => {
        require('@/public/assets/js/menu-toggle.js')
    }, [children.type.name]);
    return (
        <>
            <section>
                <div className="container-fluid px-0 h-100">
                    <div className="wrapper">
                        {/*Side-Nav*/}
                        <div id="sidebar" className="side-navbar active-nav menu-bg">
                            <div className="navbar-brand p-3">
                                <a href="#">
                                    <div className="user-block p-3">
                                        <div className="d-flex">
                                            <div className="flex-shrink-1">
                                                <img src={user.src} alt="" className="user-icon"/>
                                            </div>
                                            <div className="ps-3 text-light">
                                                <div className="text-uppercase">
                                                    WELCOME BACK
                                                </div>
                                                <p className="mb-0">
                                                    Username
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <Menu />
                        </div>
                        {/*Main Wrapper*/}
                        <div className="main active-cont position-relative">
                            <Header />
                            <div className="content">
                                {children}
                            </div>
                            <Footer />
                            <button id="backtop" className="hvr-float" onClick={() => {backtotop}} title='Go to top'>
                                <i className="fas fa-chevron-up fa-2x"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Layout;
