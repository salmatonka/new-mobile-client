import React from 'react'
import Recharts from './Recharts'
import Reviews from './Reviews'
import useTitle from '../../../Hooks/useTitle'

const DashboardHome = () => {
  useTitle('DashboardHome')
  return (
    <div className='max-w-[1240px] mx-auto'>
      <div>Hello from dashboad hoome</div>
      <Reviews />

      <div className=''>
        <Recharts />
      </div>
    </div>
  )
}

export default DashboardHome
