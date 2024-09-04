import React, { useState } from 'react'
import { Layout } from 'components/Layout/DashboardLayout'
import ShareGroceryDialog from './Elements/ShareGroceryDialog';
import Svgs from 'assets/svgs/Index'
import Button from 'components/Button.jsx';
import DashboardCard from 'components/Elements/DashboardCard';


function Applicants() {
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  }



  const applicants = [
    {
      name: 'Catherine',
      email: 'Catherine14@gmail.com',
      position: 'Python developer',
      contact: '6234445654',
      date: '3/08/2024',
      status: 'Interviewing',
      statusColor: 'bg-[#faf2e4] text-[#F4A012]',
      positionColor: 'bg-[#e9eefb] text-[#497CFF]',
    },
    {
      name: 'Catherine',
      email: 'Catherine14@gmail.com',
      position: 'Web developer',
      contact: '6234445654',
      date: '3/08/2024',
      status: 'Hired',
      statusColor: 'bg-[#e2f3e7] text-[#00B037]',
      positionColor: 'bg-[#faf2e4] text-[#F4A012]',
    },
    {
      name: 'Catherine',
      email: 'Catherine14@gmail.com',
      position: 'Python developer',
      contact: '6234445654',
      date: '3/08/2024',
      status: 'Interviewing',
      statusColor: 'bg-[#e2f3e7] text-[#00B037]',
      positionColor: 'bg-[#e9eefb] text-[#497CFF]',
    },
    {
      name: 'Catherine',
      email: 'Catherine14@gmail.com',
      position: 'UI/UX developer',
      contact: '6234445654',
      date: '3/08/2024',
      status: 'Interviewing',
      statusColor: 'bg-[#e2f3e7] text-[#00B037]',
      positionColor: 'bg-[#e2f3e7] text-[#00B037]',
    },
    {
      name: 'Catherine',
      email: 'Catherine14@gmail.com',
      position: 'Digital marketing',
      contact: '6234445654',
      date: '3/08/2024',
      status: 'Rejected',
      statusColor: 'bg-[#faeaea] text-[#F54D4D]',
      positionColor: 'bg-[#e9eefb] text-[#497CFF]',
    },
    {
      name: 'Catherine',
      email: 'Catherine14@gmail.com',
      position: 'QA Tester',
      contact: '6234445654',
      date: '3/08/2024',
      status: 'Hired',
      statusColor: 'bg-[#e2f3e7] text-[#00B037]',
      positionColor: 'bg-[#faf2e4] text-[#F4A012]',
    },
  ];

  return (
    <Layout active={'Applicants'}>
      <div className='min-h-screen'>
        <div className="flex flex-wrap  gap-[10px] sm:gap-[0px]      sm:flex-row justify-between  sm:items-center   sm:space-y-0">
          <h2 className="lg:text-2xl sm:text-lg text-base font-bold font-public-sans text-gray-1 ">Applicants</h2>
          <div className="flex sm:space-x-4  flex-col sm:flex-row  items-center space-y-4 sm:space-y-0 ">
            <div className='border border-gray-1 rounded-lg py-[8px] px-[12px]  md:text-sm text-xs font-public-sans font-semibold text-gray-1'>
              <select className="bg-[#fbfbfb]  sm:w-auto">
                <option>Designation</option>
                <option>Web developer</option>
                <option>Python developer</option>
                <option>UI/UX developer</option>
                <option>Digital marketing</option>
                <option>QA Tester</option>
              </select>
            </div>

            <div className=''>


              <Button handleClick={handleShowPopup} className={'flex items-center gap-2   py-[8px] px-[16px] '} text={<> <Svgs.Plus /> Add new applicant</>} />
              {showPopup && (<ShareGroceryDialog show={showPopup} onClose={handleClosePopup} />)}

            </div>

          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:px-4  lg:px-0 mt-6">
            <DashboardCard
              tasks={'Open positions'}
              value={'5'}
              tasksCount={'4'} taskcountclass={`text-[#00B037] `}
              svg={<Svgs.Employs />}
              employees={'new aplicants'} employeesclass={`text-gray-4`}
            />
            <DashboardCard
              tasks={'Interviewing'}
              value={'4'}
              tasksCount={'1'} taskcountclass={`text-[#F4A012]`}
              svg={<Svgs.Chair />}
              employees={'Interview today'} employeesclass={`text-[#F4A012]`}
            />
            <DashboardCard
              tasks={'This week hired'}
              value={'2'}
              tasksCount={'100%'} taskcountclass={`text-[#00B037]`}
              svg={<Svgs.Attdenence />}
              employees={'target achieved'} employeesclass={`text-gray-4`}

            />
            <DashboardCard
              tasks={'Total aplicants'}
              value={'63'}
              tasksCount={'2'} taskcountclass={`text-[#F54D4D]`}
              svg={<Svgs.Attdenence />}
              employees={'applicants rejected'} employeesclass={`text-gray-4`}
            />

          </div>
        </div>

        <div>
          <div className="container min-w-full ">
            <div className="overflow-auto  min-w-full">
              <div className="flex gap-4 flex-col min-w-[700px]">
                <div className='mt-[24px]'>
                  <div className="flex font-bold bg-[#f3f3f3] border  rounded-lg justify-between w-[100%] py-[19px]">
                    <div className='flex items-center gap-[9px] text-sm text-gray-1 font-public-sans font-normal'> <h1 className="w-[16.2%]  px-[46px]">Name</h1><span><Svgs.Arrows /></span></div>
                    <h1 className=" p-2 text-gray-1 font-medium text-sm font-public-sans">Position applied</h1>
                    <h1 className="text-gray-1 font-public-sans text-sm p-2 font-normal">Contact no</h1>
                    <h1 className="text-gray-1 font-public-sans text-sm p-2 font-medium">Application date</h1>
                    <h1 className="text-gray-1 font-public-sans text-sm p-2 font-medium">Status</h1>
                    <h1 className="text-gray-1 font-public-sans text-sm px-[20px] p-2 font-medium">Action</h1>
                  </div>
                </div>
                <div className='mt-[20px]'>
                  {applicants.map((applicant, index) => (
                    <div
                      key={index}
                      className={`flex  justify-between w-[100%] items-center ${index === applicants.length - 1 ? '' : ''} border-b  hover:bg-gray-100`}
                    >
                      <div className="py-[10px] mx-[16px]  flex  flex-wrap items-center w-[16.2%] ">
                        <img
                          src="/images/catherine.png"
                          alt="profile"
                          className="w-[42px] h-[42px] rounded-full mr-3"
                        />
                        <div>
                          <p className='lg:text-sm text-xs font-public-sans text-gray-1 font-medium'>{applicant.name}</p>
                          <p className="lg:text-xs text-[10px] text-[#00B037] font-public-sans">{applicant.email}</p>
                        </div>
                      </div>
                      <div className=" lg:w-[16.2%] p-2 ">
                        <span className={`px-[12px] py-[6px] lg:text-sm text-[10px] font-public-sans font-medium rounded-full ${applicant.positionColor}`}>
                          {applicant.position}
                        </span>
                      </div>
                      <div className="lg:w-[16.2%] p-2  text-gray-1 font-medium font-public-sans lg:text-sm text-xs">{applicant.contact}</div>
                      <div className="lg:w-[16.2%] p-2  text-gray-1 font-medium font-public-sans lg:text-sm text-xs">{applicant.date}</div>
                      <div className="lg:w-[16.2%] p-2   font-medium font-public-sans text-sm">
                        <span className={`px-[12px] py-[6px] rounded-full lg:text-sm text-xs font-public-sans font-medium ${applicant.statusColor}`}>
                          {applicant.status}
                        </span>
                      </div>
                      <div className="px-[20px] p-2 text-right">
                        <button className="text-gray-500 hover:text-gray-700">
                          <Svgs.Threedots />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>


        </div>

      </div>
    </Layout>
  )
}

export default Applicants;
