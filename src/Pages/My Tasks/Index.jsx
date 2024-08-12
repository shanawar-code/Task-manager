import React from 'react'
import Button from '../../components/Button'
import { Layout } from '../../components/Layout/DashboardLayout'

function Tasks() {
  return (
    <>
    <Layout active={'My Tasks'}>
    <div className=' p-5'>
        <div className='flex items-center justify-between'>
            <div className='flex flex-col gap-4'>
                <div>
                    <h1 className=' text-2xl font-bold font-public-sans text-gray-1'>Team memeber</h1>
                </div>
                <div>
                    <img src='images/Members.png' alt="" />
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <img src='images/addpeople.png' alt="" />
                <img src='images/shareicon.png' alt="" />
                
                <button className="flex items-center justify-center w-[149px] h-[40px] gap-3 bg-btn-gradient text-white text-sm font-semibold font-public-sans rounded-lg"><img src={'images/Icon.png'} alt="" />Add new Card</button>
              
            </div>
        </div>
    </div>
    </Layout>
    </>
  )
}

export default Tasks