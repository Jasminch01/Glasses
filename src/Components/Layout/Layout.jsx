import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Toaster } from "react-hot-toast";


const Layout = () => {
    return (
        <> 
            <Header></Header>
           <Outlet></Outlet> 
           <div><Toaster/></div>
        </>
    );
};

export default Layout;