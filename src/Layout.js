
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";


const Layout = () => {
    return (
        <>

            <div className="navbar">
                <Link to="shopname" className="nabbtn1">Styleshop</Link>
                <Link to="home" className="nabbtn2">Home</Link>
                <Link to="men" className="nabbtn2">Men</Link>
                <Link to="women" className="nabbtn4">Women</Link>
                <Link to="baby" className="nabbtn5">Baby collection</Link>
                <Link to="blog" className="nabbtn6">Blog</Link>
                <Link to="contact" className="nabbtn7">Contact</Link>
            </div>
            <div className="dropdown">
            <Link to="shopname" className="dropbtn1">Baby cloths</Link><br />
                <Link to="home" className="dropbtn2">Boby food</Link><br />
                <Link to="men" className="dropbtn3">Khilone</Link>
            </div>
               
            <hr size="2" color="black" />

            <Outlet />
            <hr size="2" color="black" />
            <Footer />
        </>
    );
}

export default Layout;