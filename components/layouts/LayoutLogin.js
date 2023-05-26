import {Footer, Header, Menu} from "@/components";
import user from '../../public/assets/images/user.png'
import $ from "jquery";
import {useEffect} from "react";

const LayoutLogin = ({ children }) => {
    return (
        <>
            <section>
                {children}
            </section>
        </>
    )
}

export default LayoutLogin;
