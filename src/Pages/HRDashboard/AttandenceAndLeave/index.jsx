import React from 'react'
import { Layout } from '../../../components/Layout/DashboardLayout'
import { useState } from 'react'
import Button from '../../../components/Button'
import ApplyLeaveDialog from '../../UserDashboard/AttendanceAndLeave/ApplyLeave'
import ReviweLeaveDialog from '../../UserDashboard/AttendanceAndLeave/ReviewLeaveDialog'
import Calendar from '../../UserDashboard/AttendanceAndLeave/Calendar'
import RoundedCard from '../../../components/Elements/RoundedCard'
import { Blueline, Countone, Countthree, Counttwo, Greenline, Plus, Plusfour } from '../../../assets/svgs/Index'
import Editlogintime from './Editlogintime'

function AttendanceAndLeave() {
    const cardData=[
        {
         
          icon: <Countone/>,
          padding_x: 'px-6',
          border_b: 'border-b-[1px]',
          padding_y: 'py-4',
          
        },
        {
         
          icon: <Counttwo/>,
          padding_x: 'px-6',
          border_b: 'border-b-[1px]',
          padding_y: 'py-4',
          status: 'Approved',
          bgColor: 'bg-[#e5f6ea]',
          textColor: 'text-[#00b037]',
          

        },
        {
          icon: <Countthree/>,
          padding_x: 'px-6',
          padding_y: 'pt-4',
         
        },
       
      ]

      const topcard=[
        {
            images: 'images/anna1.png',
            team_memebers: 'Anna',
            postion_applied: 'Python developer',
             Attandence: 'Present',
             time: '10:00AM',
             padding_y: 'py-4',
        },
        {
            images: 'images/catherine.png',
            team_memebers: 'Catherine',
            postion_applied: 'Web developer',
            Attandence: 'Present',
             time: '10:00AM',
             space: 'bb',
             padding_y: 'py-4',
        },
        {
            images: 'images/anna1.png',
            team_memebers: 'Anna',
            postion_applied: 'Python developer',
             Attandence: 'Present',
              time: '10:00AM',
              padding_y: 'py-4',
        },
        {
            images: 'images/catherine.png',
            team_memebers: 'Catherine',
            postion_applied: 'Web developer',
            Attandence: 'Present',
             time: '10:00AM',
             space: 'bb',
             padding_y: 'py-4',
  
        },
        {
            images: 'images/anna1.png',
            team_memebers: 'Anna',
            postion_applied: 'Python developer',
             Attandence: 'Present',
              time: '10:00AM',
              padding_y: 'py-4',
        }
      ]

      const attandence_activity =[
        {
          login_time: '18:05',
          login : 'LOGGED OUT',
          present_time: '8 H 5 Min',
          svg:  <Blueline/>,
          bg_color: 'bg-[#edf2ff]'
        },
        {
            login_time: '09:00',
            login : 'LOGIN',
            present_time: 'Present',
            svg:  <Greenline/>,
            bg_color: 'bg-[#e5f7eb]'
          },
          {
            login_time: '18:05',
            login : 'LOGGED OUT',
            present_time: '8 H 5 Min',
            svg:  <Blueline/>,
            bg_color: 'bg-[#edf2ff]'
          },
          {
              login_time: '09:00',
              login : 'LOGIN',
              present_time: 'Present',
              svg:  <Greenline/>,
              bg_color: 'bg-[#e5f7eb]'
            },
            {
                login_time: '18:05',
                login : 'LOGGED OUT',
                present_time: '8 H 5 Min',
                svg:  <Blueline/>,
                bg_color: 'bg-[#edf2ff]'
              },
              {
                  login_time: '09:00',
                  login : 'LOGIN',
                  present_time: 'Present',
                  svg:  <Greenline/>,
                  bg_color: 'bg-[#e5f7eb]'
                },
                {
                    login_time: '18:05',
                    login : 'LOGGED OUT',
                    present_time: '8 H 5 Min',
                    svg:  <Blueline/>,
                    bg_color: 'bg-[#edf2ff]'
                  },
                  {
                      login_time: '09:00',
                      login : 'LOGIN',
                      present_time: 'Present',
                      svg:  <Greenline/>,
                      bg_color: 'bg-[#e5f7eb]'
                    },
                    {
                        login_time: '18:05',
                        login : 'LOGGED OUT',
                        present_time: '8 H 5 Min',
                        svg:  <Blueline/>,
                        bg_color: 'bg-[#edf2ff]'
                      },
                      {
                          login_time: '09:00',
                          login : 'LOGIN',
                          present_time: 'Present',
                          svg:  <Greenline/>,
                          bg_color: 'bg-[#e5f7eb]'
                        },
          
      ]
    
      const [showPopup, setShowPopup] = useState(false)
      const [popupindex, setPopupindex] = useState(null)
      
      const handleShowPopup=(index)=>{
        setShowPopup(true)
        setPopupindex(index)
      }
    
      const handleClosePopup=(index)=>{
        setShowPopup(false)
        setPopupindex(index)
      }
    
    
      const [showApplyLeave, setShowApplyLeave] = useState(false)
    
      const handleShowApplyLeave=(index)=>{
        setShowApplyLeave(true)
      
      }
    
      const handleCloseApplyLeave=(index)=>{
        setShowApplyLeave(false)
     
      }
      const attendanceData = {
        attendancePercentage: 98,
        present: 24,
        onLeave: 0,
        absent: 1,
      };
      const circleRadius = 50;
      const circleCircumference = 2 * Math.PI * circleRadius;
      const progress = (attendanceData.attendancePercentage / 100) * circleCircumference;
    
  return (
    
      <Layout active={'Attendance & Leave'}>
    <div className='my-4 md:my-0'>
        <div className='flex flex-wrap items-center justify-center sm:justify-between gap-3'>
            <div className='flex flex-col gap-4'>
                <div>
                    <h1 className=' text-2xl font-bold font-public-sans text-gray-1'>Team memeber</h1>
                </div>
                <div className='flex items-center'>
                    <img src='images/member1.png' alt="" />
                    <img src='images/member2.png' width={'32px'} alt="" />
                    <img src='images/member3 (2).png' width={'32px'} alt="" />
                    <img src='images/member4 (2).png' width={'32px'} alt="" />
                    <span className='w-[32px] h-[32px] flex items-center justify-center bg-[#f3f3f3] rounded-full'><Plusfour/></span>
                </div>
            </div>
            <div className='flex flex-wrap items-center justify-center md:justify-start gap-5 my-3 md:my-0'>
              <Button handleClick={handleShowApplyLeave} className={' text-sm font-semibold font-public-sans text-white flex items-center gap-3'} customPadding={'px-3 py-2'} text={<><Plus/> Apply leave</>} />
              {showApplyLeave && (<ApplyLeaveDialog  show={showApplyLeave} onClose={handleCloseApplyLeave}/>)}
            </div>
        </div>
    </div>
    <div className='grid grid-cols-12 gap-5 my-8'>
      <div className=' col-span-12 lg:col-span-8 overflow-x-auto'>
      <RoundedCard customPadding={''} className={' px-[24px] min-w-[500px]'}>
     {/* e here leave attdenc */}
   <div className='px-[24px] '>
   <h3 className=" text-gray-1 text-base font-public-sans font-semibold">Employees Attendance</h3>
   </div>
   <div className='py-6'>
     <div className="flex  sm:gap-[23px] gap-[10px] items-center p-4 bg-[#f6f6f6] rounded-lg    ">
        <div className="relative ">
          <svg width="120" height="120" className="transform -rotate-90">
        
            <circle
              cx="60"
              cy="60"
              r={circleRadius}
              stroke="#00B037"
              strokeWidth="14"
              fill="none"
              strokeDasharray={circleCircumference}
              strokeDashoffset={circleCircumference - progress}
              className="text-[#00B037]"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center flex-col ">
            <span className="text-2xl font-bold text-[#333333] font-public-sans">{attendanceData.attendancePercentage}%</span><span className='text-gray-4 font-public-sans text-[12px] '>attendance</span>
          </div>
        </div>
        <div className='w-full'>  
          
        <div className='flex justify-between items-center  border-[#E0E0E0] border-b '><h6 className='font-public-sans text-[12px] text-[#4F4F4F] '>Present</h6> <span><h6 className='font-public-sans text-[14px] text-[#333333]'>24</h6></span>
        
        </div>
        <div className='flex justify-between items-center border-[#E0E0E0] border-b'><h6 className='font-public-sans text-[12px] text-[#4F4F4F] '>On leave</h6> <span><h6 className=' font-public-sans text-[14px] text-[#333333]'>0</h6></span>
        
        </div>
        <div className='flex justify-between items-center  '><h6 className='font-public-sans text-[12px] text-[#4F4F4F] '>Absent</h6> <span><h6 className='font-public-sans text-[14px] text-[#333333]'>1</h6></span>
        
        </div>
        
        </div>
       
      </div>
      </div>
        
        {topcard.map((value, index)=>(
        <div key={index} className={`  ${value.border_b} ${value.padding_y} flex items-center justify-between  border-b overflow-auto min-w-[450px]`}>
          <div className='1 flex items-center gap-3'>
            <div>
              <img className='w-[42px] h-[42px]' src={value.images} alt="" />
            </div>
            <div className='flex flex-col gap-[4px]'>
              <h1 className=' text-sm font-semibold font-public-sans text-gray-1'>{value.team_memebers}</h1>
              <div className='flex'><h1 className=' text-sm font-normal font-public-sans text-gray-2'>{value.postion_applied}</h1>
              <span className='text-white'>{value.space}</span>
              </div>
            </div>
          </div>
          <div className=''>
          <h1 className={`text-sm font-semibold font-public-sans text-gray-1 `}>{value.Attandence}</h1>
         
          </div>
          <div className='3 flex flex-col gap-1'>
          <h1 className=' text-sm font-semibold font-public-sans text-[#04AA77]'>{value.time}</h1>
           
          </div>
          <div className='4'>
            <div>
              <button onClick={()=>{handleShowPopup(index)}} className='flex items-center justify-center text-sm font-semibold font-public-sans text-gray-1 px-[12.5px] py-[7px] rounded-lg border border-gray-1 w-[72px]'>Edit</button>
              { popupindex===index && showPopup && (<Editlogintime  show={showPopup} onClose={handleClosePopup}/>)}
            </div>
          </div>
        </div>
        ))}
        <div className='flex justify-center items-center mt-6'><button className='border border-gray-2 rounded-lg font-public-sans py-[7px] px-[12px]
        text-gray-2 text-sm font-semibold cursor-pointer' >View all</button></div>
      </RoundedCard>
      <div className='overflow-x-auto '>
      <RoundedCard className={' my-6 min-w-[650px]'} customPadding={'py-6'}>
        <div className=' mb-8 px-6 flex items-center justify-between  '>
          <div className='flex items-center gap-8'>
          <div>
          <h1 className=' text-base font-semibold font-epilogue text-gray-1'>My Leave</h1>
          </div>
          <div className='flex items-center gap-6 bg-[#f5f5f5] rounded-full py-[2px] px-[16px]'>
            <h1 className='text-sm font-normal font-public-sans text-gray-1 flex items-center gap-2'><span className=' text-base font-semibold font-public-sans text-gray-1'>5</span>Casual leave</h1>
            <h1 className='text-sm font-normal font-public-sans text-gray-1 flex items-center gap-2'><span className=' text-base font-semibold font-public-sans text-gray-1'>8</span>Medical leave</h1>

          </div>
          </div>
          <div>
            <Button text={'Apply for leave'} customPadding={'px-[16px] py-[8px]'}/>
          </div>
        </div>
        {cardData.map((value, index)=>(
        <div key={index} className={` ${value.padding_x} ${value.border_b} ${value.padding_y} flex items-center justify-between  `}>
          <div className='1 flex items-center gap-3'>
            <div>
              {value.icon}
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
              <h1 className={` px-[12px] py-[5px] rounded-full ${value.bgColor? value.bgColor: 'bg-[#fff7ea]'}  ${value.textColor? value.textColor: 'text-[#F4A012]'} text-xs font-semibold font-public-sans`}>{`${value.status ? value.status : 'Pending'  }`}</h1>
            </div>
          </div>
          <div className='4'>
            <div>
              {/* <button className='flex items-center justify-center text-sm font-semibold font-public-sans text-gray-1 px-[12.5px] py-[7px] rounded-lg border w-[72px]'>Review</button> */}
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
      <Calendar/>
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
                <Greenline/>
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
        {attandence_activity.map((value,index)=>(

           
           <div key={index} className={`${value.bg_color} rounded-xl py-4 px-6 flex items-center gap-4 my-3`}>
           <div>
               <h1 className=' text-xl font-semibold font-public-sans text-gray-1'>{value.login_time}</h1>
           </div>
           <div className='flex items-center gap-[27px]'>
           <div>
               {value.svg}
           </div>
           <div> 
                 <h1 className=' text-[13px] font-medium font-Libre-franklin text-[#4F4F4F]'>{value.login}</h1>
               <h1 className=' text-lg font-semibold font-public-sans text-gray-1'>{value.present_time}</h1>
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
    
    
  )
}

export default AttendanceAndLeave
