import React from 'react'
import { useAuth } from '../context/ContextProvider';

export default function HeaderDashboard() {
  const { logout } = useAuth();
  return (
    <div className='bg-black fixed w-[100%] top-0 md:p-4 p-2 flex items-center justify-between'>
      <div className='text-[#a9d608] text-xl md:text-3xl font-bold cursor-pointer'>Gymify  💪</div>
      <div>
        <button className='bg-red-600 text-white px-4 py-2 rounded-sm cursor-pointer' onClick={logout}>Logout</button>
      </div>
    </div>
  )
}
