import { Outlet, Link } from "react-router-dom";
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
                        <div className='col col-sm-8'>
                            <nav className='h-100 d-flex justify-content-center'>
                                <ul className='align-items-center'>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/products">Products</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className='col col-sm-2 d-flex'>
                            <a href='tel:+359883378679' className=''>+359883378679</a>
                        </div>
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    )
};

export default Layout;