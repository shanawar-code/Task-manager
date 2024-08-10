import React from 'react'
import MyTeamCard from './MyTeamCard'
import Cards from '../../components/Elements/DashboardCard.jsx'
import MeetingCard from './MeetingCard'
import { useState } from 'react'
import VerifiedSuccessful from './VerifiedSuccessful'
import Svgs from '../../assets/svgs/Index.js'
import Button from '../../components/Button.jsx'
import TaskCompletionScore from './TaskCompletionScore.jsx'
import UltimateCard from '../../components/Elements/UltimateCard.jsx'



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
                <TaskCompletionScore/>
            </div>
        </div>
    </div>
    <div className=' grid grid-cols-12 my-5 gap-5'>
        <div className=' col-span-12 lg:col-span-6 '>
            <MeetingCard onClick={handleShowPopup} buttonTitle={'Create new meeting'} title={'Meeting'} meeting={'Daily meeting'} time={'2:30 PM'} src={'images/verticaldots.png'}/>
            {showPopup && <VerifiedSuccessful show={showPopup} onClose={handleClosePopup} />}
        </div>
        <div className=' col-span-12 lg:col-span-6 '>
            <MeetingCard buttonTitle={'Create new task'} title={'Tasks'} meeting={'Website design'}/>
        </div>
    </div>
   </div>
   </>
  )
}

