import { Outlet } from 'react-router-dom';
import Header from '../components/commons/Header';
import Navbar from '../components/commons/Navbar';
import Footer from '../components/commons/Footer';
import Main from '../pages/Main';

function Layout() {

    return (
        <div>
            <Main/>
            <Header/>
            <Outlet/>
            <Footer/>
            
        </div>
    );
}

export default Layout;
