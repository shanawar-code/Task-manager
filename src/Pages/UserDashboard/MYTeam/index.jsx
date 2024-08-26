import React from 'react'
import { Layout } from '../../../components/Layout/DashboardLayout.jsx'
import Svgs from '../../../assets/svgs/Index.js'
import RoundedCard from '../../../components/Elements/RoundedCard.jsx'
import Button from '../../../components/Button.jsx'
import { useState } from 'react'
import SuccessfulDialog from '../../../components/Elements/SuccessfulDialog.jsx'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CreateNewTeamDialog from './CreateNewTeamDialog.jsx'
import AddNewMemberDialog from './AddNewMemberDialog.jsx'
import Collaborate from './Collaborative.jsx'
import { useNavigate } from 'react-router-dom'


function MyTeam() {

  const navigate = useNavigate()
  const cardData=[
    {
      src: 'images/catherine.png',
      padding_x: 'px-6',
      border_b: 'border-b-[1px]',
      padding_y: 'py-4',
      stats: 'Team Manager'
    },
    {
      src: 'images/annaa.png',
      padding_x: 'px-6',
      border_b: 'border-b-[1px]',
      padding_y: 'py-4',
      status: 'Approved',
      bgColor: 'bg-[#e5f6ea]',
      textColor: 'text-[#00b037]',
    },
    {
      src: 'images/ortan.png',
      padding_x: 'px-6',
      padding_y: 'py-4',
      border_b: 'border-b-[1px]',
    },
    {
      src: 'images/jessy.png',
      padding_x: 'px-6',
      padding_y: 'pt-4',
    },
  ]

  const [showPopup, setShowPopup] = useState(false)
 
  
  const handleShowPopup=()=>{
    setShowPopup(true)
   
  }

  const handleClosePopup=()=>{
    setShowPopup(false)
   
  }


  const [showApplyLeave, setShowApplyLeave] = useState(false)

  const handleShowApplyLeave=()=>{
    setShowApplyLeave(true)
  
  }

  const handleCloseApplyLeave=()=>{
    setShowApplyLeave(false)
 
  }


  const [showCollaborative, setShowCollaborative] = useState(false)

  const handleShowCollaborative=()=>{
    setShowCollaborative(true)
  
  }

  const handleCloseCollaborative=()=>{
    setShowCollaborative(false)
 
  }


  return (
    <>
    <Layout active={'My Team'}>
    <div className='my-4 md:my-0'>
        <div className='flex flex-wrap items-center justify-center sm:justify-between'>
            <div className='flex flex-col gap-4'>
                <div>
                    <h1 className=' text-2xl font-bold font-public-sans text-gray-1'>Team Memeber</h1>
                </div>
                <div onClick={()=>{navigate('/myteamlast')}} className='flex items-center justify-center md:justify-start cursor-pointer'>
                    <img src='images/member1.png' alt="" />
                    <img src='images/member2.png' width={'32px'} alt="" />
                    <img src='images/member3 (2).png' width={'32px'} alt="" />
                    <img src='images/member4 (2).png' width={'32px'} alt="" />
                    <span  className='  w-[32px] h-[32px] flex items-center justify-center bg-[#f3f3f3] rounded-full'><Svgs.Four/></span>
                </div>
            </div>
            <div className='flex flex-wrap items-center justify-center md:justify-start gap-5  my-3 md:my-0'>
              <Button handleClick={handleShowApplyLeave} className={' text-sm font-semibold font-public-sans text-white flex items-center gap-3'} customPadding={'px-3 py-2'} text={<><Svgs.AddWhiteIcon/> Create team</>} />
              {showApplyLeave && (<CreateNewTeamDialog  show={showApplyLeave} onClose={handleCloseApplyLeave}/>)}
            </div>
        </div>
    </div>
    <div className='grid grid-cols-12 gap-5 my-8'>
      <div className=' col-span-12 lg:col-span-8'>
        <div className='overflow-x-auto '>
      <RoundedCard customPadding={'py-6'} className={'min-w-[500px]'}>
        <div className=' mb-8 px-6 flex items-center justify-between'>
          <div className='flex items-center gap-[11px]'>
          <h1 className=' text-base font-semibold font-public-sans text-gray-1'>Python developer team</h1>
          <span><Svgs.WritingPencil/></span>
          </div>
          <div>
          <Button handleClick={handleShowPopup} text={'Add new member'} customPadding={'px-[12px] py-[8px]'}/>
          {showPopup && (<AddNewMemberDialog  show={showPopup} onClose={handleClosePopup}/>)}
          </div>
        </div>
        {cardData.map((value, index)=>(
        <div key={index} className={` ${value.padding_x} ${value.border_b} ${value.padding_y} flex items-center justify-between `}>
          <div className='1 flex items-center gap-3'>
            <div>
              <img src={value.src} alt="" />
            </div>
            <div className='flex flex-col gap-[6px]'>
              <h1 className=' text-sm font-medium font-public-sans text-gray-1'>Anna</h1>
              <h1 className={` text-xs font-normal font-public-sans text-[#00B037]`}>{value.stats}</h1>
            </div>
          </div>
          <div className='2 flex '>
          <h1 className=' text-sm font-medium font-public-sans text-gray-1'><span className='text-sm font-medium font-public-sans text-gray-1'>14</span> Tasks</h1>
          {/* <h1 className=' text-sm font-normal font-public-sans text-gray-2'>22-8-2024</h1> */}
          </div>
          <div className='3 flex flex-col gap-1'>
          <h1 className=' text-sm font-medium font-public-sans text-gray-1'>Python developer</h1>
            {/* <div className='flex items-center justify-center'>
              <h1 className=' px-[12px] py-[5px] rounded-full bg-[#fff7ea] text-[#F4A012] text-xs font-semibold font-public-sans'>Pending</h1>
            </div> */}
          </div>
          <div className='4'>
          <h1 className=' text-sm font-medium font-public-sans text-[#00B037]'>98%  pts</h1>
          </div>
          <div className=' cursor-pointer'>
            <Svgs.Verticaldots/>
          </div>
        </div>
        ))}
      </RoundedCard>
      </div>
      <div className='overflow-x-scroll '>
      <RoundedCard customPadding={'py-6'} className={' my-6 min-w-[500px]'}>
        <div className=' mb-8 px-6 flex items-center justify-between'>
          <div className='flex items-center gap-[11px]'>
          <h1 className=' text-base font-semibold font-public-sans text-gray-1'>Other teams</h1>
          {/* <span><Svgs.WritingPencil/></span> */}
          </div>
          <div>
          <Button handleClick={handleShowCollaborative} text={'Collaborate'} customPadding={'px-[12px] py-[8px]'}/>
          {showCollaborative && (<Collaborate  show={showCollaborative} onClose={handleCloseCollaborative}/>)}
          </div>
        </div>
        {cardData.map((value, index)=>(
        <div key={index} className={` ${value.padding_x} ${value.border_b} ${value.padding_y} flex items-center justify-between `}>
          <div className='1 flex items-center gap-3'>
            <div>
              <img src={value.src} alt="" />
            </div>
            <div className='flex flex-col gap-[6px]'>
              <h1 className=' text-sm font-medium font-public-sans text-gray-1'>Graphic & UI/UX</h1>
              {/* <h1 className={` text-xs font-normal font-public-sans text-[#00B037]`}>{value.stats}</h1> */}
            </div>
          </div>
          <div className='2 flex '>
          <h1 className=' text-sm font-medium font-public-sans text-gray-1'><span className='text-sm font-medium font-public-sans text-gray-1'>14</span> Tasks</h1>
          {/* <h1 className=' text-sm font-normal font-public-sans text-gray-2'>22-8-2024</h1> */}
          </div>
          <div className='3 flex flex-col gap-1'>
          <h1 className=' text-sm font-medium font-public-sans text-gray-1'>Python developer</h1>
            {/* <div className='flex items-center justify-center'>
              <h1 className=' px-[12px] py-[5px] rounded-full bg-[#fff7ea] text-[#F4A012] text-xs font-semibold font-public-sans'>Pending</h1>
            </div> */}
          </div>
          <div className='4'>
          <h1 className=' text-sm font-medium font-public-sans text-[#00B037]'>98%  pts</h1>
          </div>
          <div className=' cursor-pointer'>
            <Svgs.Verticaldots/>
          </div>
        </div>
        ))}
      </RoundedCard>
      </div>
      </div>
      <div className=' col-span-12 lg:col-span-4'>
      <RoundedCard customPadding={'p-3'}>
      <div className="flex justify-between items-center mb-4">
                    <h2 className="text-sm md:text-base font-semibold font-public-sans text-gray-1">
                    Team performance
                    </h2>
                    <button className=" rounded-lg px-3 py-1 flex items-center gap-3 border">
                      <span className=" hidden sm:block text-base font-normal font-public-sans text-gray-2">
                        Weekly
                      </span>
                      <Svgs.CalendarIcon />
                    </button>
                  </div>
      <div className=' calender flex items-center justify-center my-[48px]'>
      <div className="w-40 h-40 relative">
                        <CircularProgressbar
                          value={75}
                        //   text="100%"
                          strokeWidth='12'
                          styles={buildStyles({
                            pathColor: "#0BB783",
                            textColor: "#000",
                          })}
                        />
                        <div className=" absolute flex flex-col items-center justify-center top-0 inset-0">
                        <p className=" text-[30px] font-bold text-gray-1 font-public-sans">75%</p>
                      <p className="text-xs font-normal font-public-sans text-gray-4 text-center">
                      Task completed
                      </p>
                        </div>
                      </div>
      </div>
      <div className=''>
    <div className=' my-6'>
    <h1 className=' text-[22px] font-semibold font-public-sans text-[#23272C]'>
    Tasks activity
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
                <Svgs.VerticalGreenLine/>
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
        {Array(10).fill().map(()=>(
           <div className='bg-[#e5f7eb] rounded-xl py-4 px-6 flex items-center gap-4 my-3'>
           <div>
               <h1 className=' text-xl font-semibold font-public-sans text-gray-1'>100%</h1>
           </div>
           <div className='flex items-center gap-[27px]'>
           <div>
               <Svgs.VerticalGreenLine/>
           </div>
           <div> 
                 <h1 className=' text-[13px] font-medium font-Libre-franklin text-[#4F4F4F]'>ABC task</h1>
               <h1 className=' text-lg font-semibold font-public-sans text-gray-1'>Completed</h1>
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

export default MyTeam