import React from 'react'
import { Layout } from '../../../components/Layout/DashboardLayout'
import RoundedCard from '../../../components/Elements/RoundedCard'
import Svgs from '../../../assets/svgs/Index.js'
function MyProfile() {

  const skills=[
    {
      skill: 'Project Management',
    },
    {
      skill: 'Team leadership',
    },
    {
      skill: 'Python development',
    },
    {
      skill: 'CSS',
    },
    {
      skill: 'APIs',
    },
    {
      skill: 'Data structure',
    },
    {
      skill: 'Python skills',
    },
    {
      skill: 'Python libraries',
    },
    {
      skill: 'Analytical skills',
    },
    {
      skill: 'Django',
    },
    {
      skill: 'Data science',
    },
    {
      skill: 'Cloud computing',
    },
    {
      skill: 'Data types',
    },
    {
      skill: 'GitHub',
    },
  ]


  return (
    <>
    <Layout active={'My profile'}>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5'>
       <RoundedCard>
        <div className='flex items-center gap-5'>
          <div>
            <img src="images/olivia.png" alt="" />
          </div>
          <div className='flex flex-col gap-[10px]'>
            <h1 className=' text-xl font-semibold font-public-sans text-gray-1'>Olivia Williams</h1>
            <h1 className=' text-sm font-medium font-public-sans text-[#497CFF] bg-[#ecf1fe] rounded-full py-[5px] px-[12px] text-center' >Team Manager</h1>
          </div>
        </div>
        <div className=' px-6 my-4'>
          <div className='flex items-center justify-between'>
            <h1 className=' text-xs font-normal font-public-sans text-gray-4'>DEPARTMENT</h1>
            <h1 className=' text-sm font-medium font-public-sans text-gray-1'>Web development</h1>
          </div>
          <div className='flex items-center justify-between'>
          <h1 className=' text-xs font-normal font-public-sans text-gray-4'>DATE OF JOINING</h1>
          <h1 className=' text-sm font-medium font-public-sans text-gray-1'>Jan 19, 2023</h1>
          </div>
        </div>
        <div className=' rounded-xl border p-4 bg-[#f5f5f5]'>
          <div className='flex items-center gap-2'>
             <span><Svgs.Email/></span>
             <h1 className=' text-sm font-medium font-public-sans text-gray-2'>o.williams@email.com</h1>
          </div>
          <div className='py-3'>
            <hr className=' border' />
          </div>
          <div className='flex items-center gap-2'>
          <span><Svgs.TextMessage/></span>
          <h1 className=' text-sm font-medium font-public-sans text-gray-2'>12 Apr, 2024</h1>
          </div>
        </div>
       </RoundedCard>
       <RoundedCard>
        <div className='flex items-center justify-between'>
          <h1 className=' text-xl font-semibold font-public-sans text-gray-1'>Personal Info</h1>
          <Svgs.WritingPencil/>
        </div>
        <div className='mt-6'>
          <div className=' border-b flex items-center justify-between py-[13px]'>
            <h1 className=' text-xs font-normal font-public-sans text-gray-2'>PASSPORT NO.</h1>
            <h1 className=' text-sm font-medium font-public-sans text-gray-1'>QW3342981</h1>
          </div>
          <div className=' border-b flex items-center justify-between py-[13px]'>
            <h1 className=' text-xs font-normal font-public-sans text-gray-2 uppercase'>Passport Exp Date.</h1>
            <h1 className=' text-sm font-medium font-public-sans text-gray-1'>12/12/28</h1>
          </div>
          <div className=' border-b flex items-center justify-between py-[13px]'>
            <h1 className=' text-xs font-normal font-public-sans text-gray-2 uppercase'>Phone Number</h1>
            <h1 className=' text-sm font-medium font-public-sans text-gray-1'>(380)-322-4422</h1>
          </div>
          <div className=' border-b flex items-center justify-between py-[13px]'>
            <h1 className=' text-xs font-normal font-public-sans text-gray-2 uppercase'>Birthday</h1>
            <h1 className=' text-sm font-medium font-public-sans text-gray-1'>12/01/1988</h1>
          </div>
          <div className=' flex items-center justify-between py-[13px]'>
            <h1 className=' text-xs font-normal font-public-sans text-gray-2 uppercase'>Marital status</h1>
            <h1 className=' text-sm font-medium font-public-sans text-gray-1'>Married</h1>
          </div>
        </div>
       </RoundedCard>
       <RoundedCard>
        <div className='flex items-center justify-between'>
          <h1 className=' text-xl font-semibold font-public-sans text-gray-1'>Bank information</h1>
          <Svgs.WritingPencil/>
        </div>
        <div className='mt-6'>
          <div className=' border-b flex items-center justify-between py-[13px]'>
            <h1 className=' text-xs font-normal font-public-sans text-gray-2 uppercase'>Bank account no.</h1>
            <h1 className=' text-sm font-medium font-public-sans text-gray-1'>003433422234454</h1>
          </div>
          <div className=' border-b flex items-center justify-between py-[13px]'>
            <h1 className=' text-xs font-normal font-public-sans text-gray-2 uppercase'>ifsc code</h1>
            <h1 className=' text-sm font-medium font-public-sans text-gray-1'>SBIN0003222</h1>
          </div>
          <div className=' border-b flex items-center justify-between py-[13px]'>
            <h1 className=' text-xs font-normal font-public-sans text-gray-2 uppercase'>Pan no.</h1>
            <h1 className=' text-sm font-medium font-public-sans text-gray-1'>HFESW4532U</h1>
          </div>
          <div className=' border-b flex items-center justify-between py-[13px]'>
            <h1 className=' text-xs font-normal font-public-sans text-gray-2 uppercase'>Bank name</h1>
            <h1 className=' text-sm font-medium font-public-sans text-gray-1'>SBI</h1>
          </div>
          <div className=' flex items-center justify-between py-[13px]'>
            <h1 className=' text-xs font-normal font-public-sans text-gray-2 uppercase'>Name on acc.</h1>
            <h1 className=' text-sm font-medium font-public-sans text-gray-1'>Olivia Williams</h1>
          </div>
        </div>
       </RoundedCard>
      </div>
      <div className='grid grid-cols-12 my-6 gap-5'>
        <div className=' col-span-12 md:col-span-8'>
          <RoundedCard >
          <div className='flex items-center justify-between'>
          <h1 className=' text-xl font-semibold font-public-sans text-gray-1'>Skills</h1>
          <Svgs.WritingPencil/>
          </div>
          <div className=' flex items-center justify-start flex-wrap '>
            {skills.map((value, index)=>(
          <div key={index} className=' rounded-full border w-fit my-3 mx-1 md:mx-5'>
            <h1 className=' text-[10px] sm:text-sm font-normal font-public-sans text-gray-1 py-[7px] px-[14px]'>{value.skill}</h1>
          </div>
            ))}
          </div>
          </RoundedCard>
          <RoundedCard className={'my-6'}>
            <div>
              <h1 className=' text-xl font-semibold font-public-sans text-gray-1'>Documents</h1>
            </div>

            <div className='my-4 flex flex-wrap items-center justify-center  md:justify-between gap-2'>
              {Array(6).fill().map(()=>(
              <div className='bg-[#f5f5f5] px-[16px] py-[18px] rounded-xl shadow flex items-center justify-between w-[200px] my-2'>
                <div className='flex items-center gap-[14px]'>
                <span><Svgs.PDF/></span>
                <h1 className=' text-sm font-medium font-public-sans text-[#17243E]'>Offer letter</h1>
                </div>
                <div>
                  <Svgs.WritingPencil/>
                </div>
              </div>
              ))}
            </div>
          </RoundedCard>
        </div>
        <div className=' col-span-12 md:col-span-4'>
        <RoundedCard>
        <div className='flex items-center justify-between'>
          <h1 className=' text-xl font-semibold font-public-sans text-gray-1'>Salary information</h1>
          {/* <Svgs.WritingPencil/> */}
        </div>
        <div className='mt-6'>
          <div className=' border-b flex items-center justify-between py-[13px]'>
            <h1 className=' text-xs font-normal font-public-sans text-gray-2 uppercase'>Salary basis</h1>
            <h1 className=' text-sm font-medium font-public-sans text-gray-1'>Bi-Weekly</h1>
          </div>
          <div className=' border-b flex items-center justify-between py-[13px]'>
            <h1 className=' text-xs font-normal font-public-sans text-gray-2 uppercase'>Salary per month</h1>
            <h1 className=' text-sm font-medium font-public-sans text-gray-1'>$1200</h1>
          </div>
          <div className=' border-b flex items-center justify-between py-[13px]'>
            <h1 className=' text-xs font-normal font-public-sans text-gray-2 uppercase'>effective date</h1>
            <h1 className=' text-sm font-medium font-public-sans text-gray-1'>01-04-2023</h1>
          </div>
          <div className=' border-b flex items-center justify-between py-[13px]'>
            <h1 className=' text-xs font-normal font-public-sans text-gray-2 uppercase'>Payment type</h1>
            <h1 className=' text-sm font-medium font-public-sans text-gray-1'>Online transfer</h1>
          </div>
          <div className=' flex items-center justify-between py-[13px]'>
            <h1 className=' text-xs font-normal font-public-sans text-gray-2 uppercase'>Apr salary slip</h1>
            <span className=' text-sm font-normal font-public-sans text-[#497CFF] underline flex items-center gap-[6px]'><Svgs.PDF/> Download</span>
          </div>
          <div className=' flex items-center justify-between py-[13px]'>
            <h1 className=' text-xs font-normal font-public-sans text-gray-2 uppercase'>Mar salary slip</h1>
            <span className=' text-sm font-normal font-public-sans text-[#497CFF] underline flex items-center gap-[6px]'><Svgs.PDF/> Download</span>
          </div>
          <div className=' flex items-center justify-between py-[13px]'>
            <h1 className=' text-xs font-normal font-public-sans text-gray-2 uppercase'>Feb salary slip</h1>
            <span className=' text-sm font-normal font-public-sans text-[#497CFF] underline flex items-center gap-[6px]'><Svgs.PDF/> Download</span>
          </div>
          <div className=' flex items-center justify-between py-[13px]'>
            <h1 className=' text-xs font-normal font-public-sans text-gray-2 uppercase'>Jan salary slip</h1>
            <span className=' text-sm font-normal font-public-sans text-[#497CFF] underline flex items-center gap-[6px]'><Svgs.PDF/> Download</span>
          </div>
        </div>
       </RoundedCard>
        </div>
      </div>
    </Layout>
    </>
  )
}

export default MyProfile