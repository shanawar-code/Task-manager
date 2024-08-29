import React from 'react'
import { Layout } from '../../../components/Layout/DashboardLayout.jsx'
import Svgs from '../../../assets/svgs/index.js'
import RoundedCard from '../../../components/Elements/RoundedCard.jsx'
import Button from '../../../components/Button.jsx'
import Calendar from './Element/Calendar.jsx'
import ReviweLeaveDialog from './Element/ReviewLeaveDialog.jsx'
import { useState } from 'react'
import ApplyLeaveDialog from './Element/ApplyLeave.jsx'
import CalendarDialog from '../Dashboard/Element/CalendarDialog.jsx'
import { useNavigate } from 'react-router-dom'


function AttendanceAndLeaveUser() {

  const navigate = useNavigate()


  const cardData = [
    {
      icon: <Svgs.Count1 />,
      padding_x: 'px-6',
      border_b: 'border-b-[1px]',
      padding_y: 'py-4',
    },
    {
      icon: <Svgs.Count2 />,
      padding_x: 'px-6',
      border_b: 'border-b-[1px]',
      padding_y: 'py-4',
      status: 'Approved',
      bgColor: 'bg-[#e5f6ea]',
      textColor: 'text-[#00b037]',
    },
    {
      icon: <Svgs.Count3 />,
      padding_x: 'px-6',
      padding_y: 'pt-4',
    },
  ]

  const [showPopup, setShowPopup] = useState(false)
  const [popupindex, setPopupindex] = useState(null)

  const handleShowPopup = (index) => {
    setShowPopup(true)
    setPopupindex(index)
  }

  const handleClosePopup = (index) => {
    setShowPopup(false)
    setPopupindex(index)
  }


  const [showApplyLeave, setShowApplyLeave] = useState(false)

  const handleShowApplyLeave = (index) => {
    setShowApplyLeave(true)

  }

  const handleCloseApplyLeave = (index) => {
    setShowApplyLeave(false)

  }


  return (
    <>
      <Layout active={'Attendance & Leave'}>
        <div className='my-4 md:my-0'>
          <div className='flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3'>
            <div className='flex flex-col gap-4'>
              <div>
                <h1 className=' text-2xl font-bold font-public-sans text-gray-1'>Team Memebers</h1>
              </div>
              <div onClick={() => { navigate('/user/my-teammembers') }} className='flex items-center cursor-pointer justify-center md:justify-start'>
                <img src='/images/member1.png' alt="" />
                <img src='/images/member2.png' width={'32px'} alt="" />
                <img src='/images/member3 (2).png' width={'32px'} alt="" />
                <img src='/images/member4 (2).png' width={'32px'} alt="" />
                <span className='w-[32px] h-[32px] flex items-center justify-center bg-[#f3f3f3] rounded-full'><Svgs.Four /></span>
              </div>
            </div>
            <div className='flex flex-wrap items-center justify-center md:justify-start gap-5 my-3 md:my-0'>
              <Button handleClick={handleShowApplyLeave} className={' text-sm font-semibold font-public-sans text-white flex items-center gap-3'} customPadding={'px-3 py-2'} text={<><Svgs.AddWhiteIcon /> Apply leave</>} />
              {showApplyLeave && (<ApplyLeaveDialog show={showApplyLeave} onClose={handleCloseApplyLeave} />)}
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 gap-5 my-8'>
          <div className=' col-span-12 lg:col-span-8'>
            <div className=' overflow-x-auto'>
              <RoundedCard customPadding={'py-6'} className={' min-w-[500px]'}>
                <div className=' mb-8 px-6'>
                  <h1 className=' text-base font-semibold font-epilogue text-gray-1'>Leave requests</h1>
                </div>
                {cardData.map((value, index) => (
                  <div key={index} className={` ${value.padding_x} ${value.border_b} ${value.padding_y} flex items-center justify-between `}>
                    <div className='1 flex items-center gap-3'>
                      <div className=' border rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold font-public-sans text-gray-4 '>
                        {index + 1}
                      </div>
                      <div className='flex flex-col gap-3'>
                        <h1 className=' text-sm font-semibold font-public-sans text-gray-1'>Anna</h1>
                        <h1 className=' text-sm font-normal font-public-sans text-gray-2'>Urgent leave</h1>
                      </div>
                    </div>
                    <div className='2 flex flex-col gap-3'>
                      <h1 className=' text-sm font-semibold font-public-sans text-gray-1'>Date</h1>
                      <h1 className=' text-sm font-normal font-public-sans text-gray-2'>22-8-2024</h1>
                    </div>
                    <div className='3 flex flex-col gap-1'>
                      <h1 className=' text-sm font-semibold font-public-sans text-gray-1'>Leave Status</h1>
                      <div className='flex items-center justify-center'>
                        <h1 className=' px-[12px] py-[5px] rounded-full bg-[#fff7ea] text-[#F4A012] text-xs font-semibold font-public-sans'>Pending</h1>
                      </div>
                    </div>
                    <div className='4'>
                      <div>
                        <button onClick={() => { handleShowPopup(index) }} className='flex items-center justify-center text-sm font-semibold font-public-sans text-gray-1 px-[12.5px] py-[7px] rounded-lg border border-gray-1 w-[72px] h-[30px]'>Review</button>
                        {popupindex === index && showPopup && (<ReviweLeaveDialog show={showPopup} onClose={handleClosePopup} />)}
                      </div>
                    </div>
                  </div>
                ))}
              </RoundedCard>
            </div>
            <div className='overflow-x-auto'>
              <RoundedCard className={' my-6'} customPadding={'py-6 min-w-[600px]'}>
                <div className=' mb-8 px-6 flex items-center justify-between'>
                  <div className='flex items-center gap-8'>
                    <div>
                      <h1 className=' text-base font-semibold font-epilogue text-gray-1'>My Leave</h1>
                    </div>
                    <div className='flex items-center gap-6 bg-[#f5f5f5] rounded-full py-[2px] px-[16px]'>
                      <h1 className='text-sm font-normal font-public-sans text-gray-1 flex items-center gap-2'><span className=' text-base font-semibold font-public-sans text-gray-1'>5</span>Casual leave</h1>
                      <h1 className='text-sm font-normal font-public-sans text-gray-1 flex items-center gap-2'><span className=' text-base font-semibold font-public-sans text-gray-1'>8</span>Medical leave</h1>

                    </div>
                  </div>

                </div>
                {cardData.map((value, index) => (
                  <div key={index} className={` ${value.padding_x} ${value.border_b} ${value.padding_y} flex items-start justify-between`}>
                    <div className='1 flex items-center gap-3'>
                      <div className='w-6 h-6 border border-gray-5 rounded-full flex items-center justify-center'>
                        <span className=' text-xs font-semibold font-public-sans text-gray-4'>{index + 1}</span>
                      </div>
                      <div className='flex flex-col gap-3'>
                        <h1 className=' text-sm font-semibold font-public-sans text-gray-1'>Urgent Leave</h1>
                        <h1 className=' text-sm font-normal font-public-sans text-gray-2'>To - senior Manager - Jass</h1>
                      </div>
                    </div>
                    <div className='2 flex flex-col gap-3'>
                      <h1 className=' text-sm font-semibold font-public-sans text-gray-1'>Date</h1>
                      <h1 className=' text-sm font-normal font-public-sans text-gray-2'>22-8-2024</h1>
                    </div>
                    <div className='3 flex flex-col gap-1'>
                      <h1 className=' text-sm font-semibold font-public-sans text-gray-1'>Leave Status</h1>
                      <div className='flex items-center justify-center'>
                        <h1 className={` px-[12px] py-[5px] rounded-full ${value.bgColor ? value.bgColor : 'bg-[#fff7ea]'}  ${value.textColor ? value.textColor : 'text-[#F4A012]'} text-xs font-semibold font-public-sans`}>{`${value.status ? value.status : 'Pending'}`}</h1>
                      </div>
                    </div>
                    <div className='4'>
                      <div>
                        <h1 className=' text-xs font-normal font-public-sans text-gray-4'>5 hours ago</h1>
                      </div>
                    </div>
                  </div>
                ))}
              </RoundedCard>
            </div>
          </div>
          <div className=' col-span-12 lg:col-span-4'>
            <RoundedCard customPadding={'p-3'}>
              <div className=' calender'>
                <Calendar />
                {/* <CalendarDialog/> */}
              </div>
              <div className=''>
                <div className=' my-6'>
                  <h1 className=' text-[22px] font-semibold font-public-sans text-[#23272C]'>
                    Attendance activity
                  </h1>
                </div>
                <div className=' overflow-x-auto h-[50vh] pr-3'>
                  <div className='today'>
                    <div className='my-3'>
                      <h1 className=' text-xs font-normal font-public-sans text-[#343942]'>Today</h1>
                    </div>
                    <div className='bg-[#e5f7eb] rounded-xl py-4 px-6 flex items-center gap-4'>
                      <div>
                        <h1 className=' text-xl font-semibold font-public-sans text-gray-1'>09:00</h1>
                      </div>
                      <div className='flex items-center gap-[27px]'>
                        <div>
                          <Svgs.VerticalGreenLine />
                        </div>
                        <div>
                          <h1 className=' text-[13px] font-medium font-Libre-franklin text-[#4F4F4F]'>LOGIN</h1>
                          <h1 className=' text-lg font-semibold font-public-sans text-gray-1'>Present</h1>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='yesterday my-5'>
                    <div className='my-3'>
                      <h1 className=' text-xs font-normal font-public-sans text-[#343942]'>Yesterday</h1>
                    </div>
                    {Array(10).fill().map(() => (
                      <div className='bg-[#e5f7eb] rounded-xl py-4 px-6 flex items-center gap-4 my-3'>
                        <div>
                          <h1 className=' text-xl font-semibold font-public-sans text-gray-1'>09:00</h1>
                        </div>
                        <div className='flex items-center gap-[27px]'>
                          <div>
                            <Svgs.VerticalGreenLine />
                          </div>
                          <div>
                            <h1 className=' text-[13px] font-medium font-Libre-franklin text-[#4F4F4F]'>LOGIN</h1>
                            <h1 className=' text-lg font-semibold font-public-sans text-gray-1'>Present</h1>
                          </div>
                        </div>
                      </div>
                    ))}

                  </div>
                </div>

              </div>
            </RoundedCard>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default AttendanceAndLeaveUser