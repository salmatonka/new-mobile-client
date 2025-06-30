import React, { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
const DashboardMenu = () => {
      const [open, setOpen] = useState(false);
    const menuHandler = () => {
        setOpen(!open);
    }
    
    const { user } = useContext(AuthContext);
  
    console.log(user);
    // const [isSeller] = useSeller(user.email);
    return (
        <div>
             <div>
                <DashNav />
                {/* <Header /> */}
                <div className='lg:grid lg:grid-cols-12 lg:pt-20'>
                    <div className='lg:col-span-3'>
                        <DashboardMenu />
                    </div>
                    <div className='col-span-12 lg:col-span-9 container mx-auto'>
                        <Outlet />
                        {/* <Footer />s */}
                    </div>
                </div>
            </div>
            {/* <Navbar /> */}
            
            <Footer />
        </div>

    )
}

export default DashboardMenu
