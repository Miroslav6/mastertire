import { Outlet, Link } from "react-router-dom";
// import Logo from '../'


const Layout = () => {
    return (
        <>
            <header className='sticky-top'>
                <div className='container'>
                    <div className='row'>
                        <div className='col col-sm-4 col-md-2 order-first'>
                            <a href='/' title='logo'>
                                <img src='/Files/Images/logo.svg' alt="Logo" />
                            </a>
                        </div>
                        <div className='col col-lg-7 order-last order-lg-first'>
                            <nav className='navbar navbar-expand-lg navbar-light'>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                                    <ul className='align-items-center'>
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/products">Гуми</Link>
                                        </li>
                                        <li>
                                            <Link to="/contacts">Contacts</Link>
                                        </li>
                                        <li>
                                            <Link to="/used-tires">Гуми втора употреба</Link>
                                        </li>
                                        <li>
                                            <Link to="/about-us">За Нас</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className='col col-lg-3 d-flex align-items-center justify-content-end'>
                            <a href='tel:+359883378679' className='hd-phone'><i className="bi bi-telephone"></i> +359 883378679</a>
                            <a href='/contact-us' className='hd-contact'><i className="bi bi-pin-map"></i></a>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>

            </footer>
        </>
    )
};

export default Layout;