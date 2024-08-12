import React from 'react'
import Cards from '../../components/Elements/DashboardCard.jsx'
import MeetingCard from './MeetingCard.jsx'
import { useState } from 'react'
import VerifiedSuccessful from './VerifiedSuccessful.jsx'
import Svgs from '../../assets/svgs/Index.js'
import Button from '../../components/Button.jsx'
import UltimateCard from '../../components/Elements/UltimateCard.jsx'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Layout } from '../../components/Layout/DashboardLayout.jsx'



 export function Dashboard() {

    const [showPopup, setShowPopup] = useState(false);

    const handleShowPopup = () => {
      setShowPopup(true);
    };
  
    const handleClosePopup = () => {
      setShowPopup(false);
    };

  return (
   <>
   <Layout active={'Dashboard'}>
   <div className=' md:p-5'>
    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
    <Cards tasks={'My tasks'} tasksCount={'4 new tasks'} value={'5'} svg={<Svgs.Tasks/>}/>
    <Cards tasks={'Meetings'} tasksCount={'Upcoming meeting: 12:00 Pm today'} value={'2'} svg={<Svgs.Meeting/>}/>
    <Cards tasks={'My Attendance'} tasksCount={'Log in: 10:04 AM today'} value={'98%'} svg={<Svgs.Calender/>}/>
    <Cards tasks={'My leaves'} tasksCount={'Last applied: 21st Jan 2024'} value={'12'} svg={<Svgs.MyLeave/>}/>
    </div>
    <div className=' grid grid-cols-12 my-5 gap-5'>
        <div className='col-span-12 lg:col-span-6'>
    <UltimateCard fullname={'Rudolph'} role={'Python developer'} numberoftasks={'14 Tasks'} attendance={'98%'} buttonBtn={<Button text={'Collaborate'} customPadding={'px-[16px] py-[8px]'} className={'text-sm font-semibold font-public-sans'}/>}  heading={'My Team'}/>
        </div>
        <div className='col-span-12 lg:col-span-6 '>
            <div className=' rounded-xl p-5 border bg-white'>
            <div className="">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-semibold font-public-sans text-gray-1">Task completion score</h2>
        <button className=" rounded-lg px-3 py-1 flex items-center gap-3 border">
          <span className=' text-base font-normal font-public-sans text-gray-2'>Weekly</span>
          <Svgs.CalendarIcon/>
        </button>
      </div>

      <div className="flex items-center justify-between mx-10 my-20 space-x-8">
        {/* Expected Score */}
        <div className="flex flex-col items-center">
          <div className="w-36 h-36">
            <CircularProgressbar
              value={100}
              text="100%"
              styles={buildStyles({
                pathColor: '#3b82f6',
                textColor: '#000',
              })}
            />
          </div>
          <p className="text-xs font-normal font-public-sans text-gray-2 text-center mt-2 ">Expected score</p>
        </div>

        {/* Achieved Score */}
        <div className="flex flex-col items-center">
          <div className="w-36 h-36">
            <CircularProgressbar
              value={82}
              text="82%"
              styles={buildStyles({
                pathColor: '#f59e0b',
                textColor: '#000',
                trailColor: '#f3f4f6'
              })}
            />
          </div>
          <p className="text-xs font-normal font-public-sans text-gray-2 text-center mt-2">Achieved score</p>
        </div>
      </div>

      <div className="flex justify-between items-center mx-10 my-2">
        <div className="flex items-center space-x-2">
         <img src='images/playbutton.png' alt="" />
          <div>
            <p className="text-xs font-bold font-public-sans text-gray-1">Completed Task</p>
            <p className="text-[10px] font-normal font-public-sans text-gray-2">Development team</p>
          </div>
        </div>
        <p className="text-[13px] font-bold text-gray-1 font-epilogue">455</p>
      </div>
    </div>
            </div>
        </div>
    </div>
    <div className=' grid grid-cols-12 my-5 gap-5'>
        <div className=' col-span-12 lg:col-span-6 '>
            <MeetingCard onClick={handleShowPopup} buttonTitle={'Create new meeting'} title={'Meeting'} meeting={'Daily meeting'} time={'2:30 PM'} src={'images/verticaldots.png'}/>
            {showPopup && <VerifiedSuccessful show={showPopup} onClose={handleClosePopup} />}
        </div>
        <div className=' col-span-12 lg:col-span-6 '>
            <MeetingCard buttonTitle={'Create new task'} title={'Tasks'} meeting={'Website design'} />
        </div>
    </div>
   </div>
   </Layout>
   </>
  )
}