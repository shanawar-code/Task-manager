import React from 'react'
import MyTeamCard from './MyTeamCard'
import Cards from '../../components/Elements/Dashboard/Cards'
import MeetingCard from './MeetingCard'
import { useState } from 'react'
import VerifiedSuccessful from './VerifiedSuccessful'
import Svgs from '../../assets/svgs/Index.js'
import Button from '../../components/Button.jsx'
import UltimateCard from '../../components/Elements/Ultimate/UltimateCard.jsx'



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
                <div className=' flex items-center justify-between'>
                    <h1 className=' text-base font-semibold font-public-sans text-gray-1'>Task completion score</h1>
                    <span className=' text-base font-normal font-public-sans text-gray-2 flex items-center gap-2 border rounded-lg py-[2px] px-[4px]'>Weekly <img src='images/calendar.png' alt="" /></span>
                </div>
                <div className='flex flex-wrap items-center justify-between gap-4 my-20 mx-8'>
                    <img src='images/ChartsScore.png' className=' ' alt="" />
                    <img src='images/ChartsAchived.png' className='' alt='' />
                </div>
                <div className='flex items-center justify-between my-5 mx-8'>
                    <div className='flex items-center gap-3'>
                        <div>
                        <img src={'images/playbutton.png'} alt="" />
                        </div>
                        <div>
                            <h1 className=' text-xs font-public-sans font-bold text-gray-1'>Completed Task</h1>
                            <h1 className=' text-[10px] font-public-sans text-gray-2 font-normal'>Development team</h1>
                        </div>
                    </div>
                    <div>
                        <h1 className=' text-[13px] font-epilogue font-bold text-gray-1'>455</h1>
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
            <MeetingCard buttonTitle={'Create new task'} title={'Tasks'} meeting={'Website design'}/>
        </div>
    </div>
   </div>
   </>
  )
}

