import { Outlet } from 'react-router-dom';
import Navbar from '../Shares/Navbar/Navbar';
import Footer from '../Shares/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;