import Layout from "./Layout";
import LayoutLogin from "./LayoutLogin";

const LayoutMain = ({ children }) => {
    let namePage = children.type.name
    return (
        <>
            {
                namePage === 'Login' ?
                    <LayoutLogin>
                        {children}
                    </LayoutLogin>
                    :
                    <Layout>
                        {children}
                    </Layout>
            }
        </>

    )
}

export default LayoutMain;