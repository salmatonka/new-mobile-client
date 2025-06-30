import React from 'react'
import Recharts from './Recharts'
import Reviews from './Reviews'
import useTitle from '../../../Hooks/useTitle'

const DashboardHome = () => {
  useTitle('DashboardHome')
  return (
    <div className=' bg-gray-100'>
      <div>
        <h1 className='text-2xl pt-8 mb-5 font-bold text-center '>Hello from dashboad home</h1>
      </div>
        
      <Reviews />

      <div className=''>
        <Recharts />
      </div>
    </div>
  )
}

export default DashboardHome
