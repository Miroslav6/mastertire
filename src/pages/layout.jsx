import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../Files/Images/logo.png'

const Layout = () => {
    return (
        <>
            <header>
                <div className='container'>
                    <div className='row'>
                        <div className='col col-sm-2'>
                            <img src={Logo} alt="Logo" />
                        </div>
                        <div className='col col-sm-10'>
                            <nav>
                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/products">Products</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    )
};

export default Layout;