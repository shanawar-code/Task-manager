import React, { useState } from 'react'
import RoundedCard from 'components/Elements/RoundedCard'
import Svgs from 'assets/svgs/Index'
import { Layout } from 'components/Layout/DashboardLayout'
import Button from 'components/Button'
import { useNavigate } from 'react-router-dom'
import ShareGroceryDialog from './Elements/ShareGroceryDialog'

function Employeesdetail() {
  const Skills = [
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
      skill: 'Python libraries',
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

  const documents = [
    { documentsname: 'Offer letter', svg: <Svgs.Pdficon />, editsvg: <Svgs.Editicon /> },
    { documentsname: '12th certificate copy', svg: <Svgs.Pdficon />, editsvg: <Svgs.Editicon /> },
    { documentsname: 'Resume', svg: <Svgs.Pdficon />, editsvg: <Svgs.Editicon /> },
    { documentsname: 'Graduation degree', svg: <Svgs.Pdficon />, editsvg: <Svgs.Editicon /> },
    { documentsname: 'Experience letter 1', svg: <Svgs.Pdficon />, editsvg: <Svgs.Editicon /> },
    { documentsname: 'Experience letter 2', svg: <Svgs.Pdficon />, editsvg: <Svgs.Editicon /> },
  ]

  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  }


  const nevigate = useNavigate()
  return (
    <>
      <Layout active={'Employees'}>
        <div className="flex   gap-[10px] sm:gap-[0px]      sm:flex-row justify-between  sm:items-center   sm:space-y-0">
          <div className='flex items-center gap-[8px]'>
            <span onClick={() => { nevigate('/hr/employees') }} className='cursor-pointer'><Svgs.LeftArrowShape /></span>
            <h2 className="lg:text-2xl sm:text-lg text-base font-bold font-public-sans text-gray-1 ">Olivia Williams</h2>
          </div>
          <div className="flex sm:space-x-4  flex-col sm:flex-row  items-center space-y-4 sm:space-y-0 ">
            <div className='border border-gray-1 rounded-lg px-[12px] py-[8px] md:text-sm text-xs font-public-sans font-semibold text-gray-1'>
              <select className="bg-[#fbfbfb]  sm:w-auto outline-none">
                <option>Active</option>
                <option>Disconect</option>

              </select>
            </div>

            <div className=''>


              <Button handleClick={handleShowPopup} className={'flex items-center gap-2   py-[8px] px-[16px] '} text={<> <Svgs.Plus /> Add new employee</>} />
              {showPopup && (<ShareGroceryDialog show={showPopup} onClose={handleClosePopup} />)}

            </div>

          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[32px]'>

          <RoundedCard>
            <div className='flex items-center gap-5'>
              <div>
                <img src="/images/olivia.png" alt="" />
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
                <span><Svgs.Email /></span>
                <h1 className=' text-sm font-medium font-public-sans text-gray-2'>o.williams@email.com</h1>
              </div>
              <div className='py-3'>
                <hr className=' border' />
              </div>
              <div className='flex items-center gap-2'>
                <span><Svgs.Textmessage /></span>
                <h1 className=' text-sm font-medium font-public-sans text-gray-2'>12 Apr, 2024</h1>
              </div>
            </div>
          </RoundedCard>
          <RoundedCard>
            <div className='flex items-center justify-between'>
              <h1 className=' text-xl font-semibold font-public-sans text-gray-1'>Personal Info</h1>
              <Svgs.Editicon />
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
                <h1 className=' text-xs font-normal font-public-sans text-gray-2 uppercase'>Date of birth</h1>
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
              <Svgs.Editicon />
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
            <RoundedCard>
              <div className='flex items-center justify-between'>
                <h1 className=' text-xl font-semibold font-public-sans text-gray-1'>Skills</h1>
                <Svgs.Editicon />
              </div>
              <div className=' flex items-center justify-start flex-wrap '>
                {Skills.map((value, index) => (
                  <div key={index} className=' rounded-full border w-fit my-3 mr-2'>
                    <h1 className=' text-[10px] sm:text-sm font-normal font-public-sans text-gray-1 py-[7px] px-[14px]'>{value.skill}</h1>
                  </div>
                ))}
              </div>
            </RoundedCard>

            <RoundedCard className={'my-6'}>
              <div>
                <h1 className=' text-xl font-semibold font-public-sans text-gray-1'>Documents</h1>
              </div>

              <div className='my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {documents.map((value, index) => (
                  <div key={index} className=' px-[16px] py-[18px] bg-[#f5f5f5] border border-gray-5 rounded-xl shadow flex items-center justify-between min-w-[200px] h-[52px] my-2'>
                    <div className='flex items-center gap-[14px]'>
                      <span>{value.svg}</span>
                      <h1 className=' text-sm font-medium font-public-sans text-[#17243E]'>{value.documentsname}</h1>
                    </div>
                    <div>
                      {value.editsvg}
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
                  <span className=' text-sm font-normal font-public-sans text-[#497CFF] underline flex items-center gap-[6px]'><Svgs.Pdficon /> Download</span>
                </div>
                <div className=' flex items-center justify-between py-[13px]'>
                  <h1 className=' text-xs font-normal font-public-sans text-gray-2 uppercase'>Mar salary slip</h1>
                  <span className=' text-sm font-normal font-public-sans text-[#497CFF] underline flex items-center gap-[6px]'><Svgs.Pdficon /> Download</span>
                </div>
                <div className=' flex items-center justify-between py-[13px]'>
                  <h1 className=' text-xs font-normal font-public-sans text-gray-2 uppercase'>Feb salary slip</h1>
                  <span className=' text-sm font-normal font-public-sans text-[#497CFF] underline flex items-center gap-[6px]'><Svgs.Pdficon /> Download</span>
                </div>
                <div className=' flex items-center justify-between py-[13px]'>
                  <h1 className=' text-xs font-normal font-public-sans text-gray-2 uppercase'>Jan salary slip</h1>
                  <span className=' text-sm font-normal font-public-sans text-[#497CFF] underline flex items-center gap-[6px]'><Svgs.Pdficon /> Download</span>
                </div>
              </div>
            </RoundedCard>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Employeesdetail
