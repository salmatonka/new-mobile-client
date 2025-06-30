import { Outlet } from 'react-router-dom';
import Navbar from '../Shares/Navbar/Navbar';
import Footer from '../Shares/Footer/Footer';
import Header from '../Shares/Header/Header';
import TopBar from '../Shares/TopBar/TopBar';
import HeadLine from '../Pages/HomePages/HeadLine';

const Main = () => {
    return (
        <div
        // className='max-w-7xl mx-auto lg:px-4'
        // className='max-w-7xl mx-auto px-4'
        >
            {/* <HeadLine /> */}
            <TopBar />
            {/* <Navbar /> */}
            <Header />
            <div className='max-w-screen-xl lg:mx-auto px-4'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Main;