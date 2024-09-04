import React, { useState } from 'react'
import { Layout } from 'components/Layout/DashboardLayout';
import Button from 'components/Button';
import Svgs from 'assets/svgs/Index.js'
import RoundedCard from 'components/Elements/RoundedCard.jsx';
import ShareGroceryDialog from './Elements/ShareGroceryDialog.jsx';

function DocumentsHR() {
  const [activeButton, setActiveButton] = useState('Dashboard');
  const handleButtonClick = (button) => {
    setActiveButton(button);
    console.log(`Navigating to ${button}`);
  };
  const handleButtonClicks = (buttons) => {
    setActiveButton(buttons);
    console.log(`Navigating to ${buttons}`);
  };

  const [showPopup, setShowPopup] = useState(false);
  const [popupindex, setPopupindex] = useState(null)

  const handleShowPopup = (index) => {
    setShowPopup(true)
    setPopupindex(index)
  }

  const handleClosePopup = (index) => {
    setShowPopup(false)
    setPopupindex(index)
  }
  const contract = [
    {
      name: 'Non disclosure agreement'
    },
    {
      name: 'Domain registration form'
    },
    {
      name: 'Contract with ABC company'
    },
    {
      name: 'Legal contract with ABC company'
    },
    {
      name: 'Legal contract with ABC company'
    },
    {
      name: 'Legal contract with ABC company'
    },
    {
      name: 'Legal contract with ABC company'
    },
    {
      name: 'Legal contract with ABC company'
    },
    {
      name: 'Legal contract with ABC company'
    },

  ]


  return (
    <Layout active={'Documents'}>
      <div className='min-h-screen'>
        <div className="flex flex-wrap  gap-[10px] sm:gap-[0px]      sm:flex-row justify-between  sm:items-center   sm:space-y-0">
          <h2 className="lg:text-2xl sm:text-lg text-base font-bold font-public-sans text-gray-1 ">Official documents</h2>
          <div className="flex sm:space-x-4  flex-col sm:flex-row  items-center space-y-4 sm:space-y-0 ">
            <div className='text-sm'>
              <Button className={'flex items-center gap-2 text-sm  py-[8px] px-[16px] '} text={<> < Svgs.Plus /> Add list</>} />
            </div>
          </div>
        </div>

        <div className='flex gap-[8px] py-6 flex-wrap '>
          <button onClick={() => handleButtonClick('All documents')}
            className={`cursor-pointer py-[8px] px-[12px] sm:text-sm text-xs rounded-lg hover:scale-105 ease-in-out duration-300 border ${activeButton === 'All documents' ? 'bg-btn-gradient text-white' : 'bg-white text-gray-2 border border-gray-2 font-public-sans font-semibold '}`}>All documents</button>
          <button onClick={() => handleButtonClick('Finance')}
            className={`cursor-pointer py-[8px] px-[12px] rounded-lg  sm:text-sm text-xs font-public-sans hover:scale-105 ease-in-out duration-300 font-semibold ${activeButton === 'Finance' ? 'bg-btn-gradient text-white' : 'bg-white text-gray-2 border border-gray-2'}   `}>Finance</button>
          <button onClick={() => handleButtonClick('Domains')}
            className={`cursor-pointer py-[8px] px-[12px] rounded-lg sm:text-sm text-xs font-public-sans hover:scale-105 ease-in-out duration-300 font-semibold ${activeButton === 'Domains' ? 'bg-btn-gradient text-white' : 'bg-white text-gray-2 border border-gray-2'}   `}>Domains</button>
          <button onClick={() => handleButtonClick('Legal documents')}
            className={`cursor-pointer py-[8px] px-[12px] rounded-lg sm:text-sm text-xs font-public-sans hover:scale-105 ease-in-out duration-300 font-semibold ${activeButton === 'Legal documents' ? 'bg-btn-gradient text-white' : 'bg-white text-gray-2 border border-gray-2'}  `}>Legal documents</button>
          <button onClick={() => handleButtonClick('Quality assurance')}
            className={`cursor-pointer py-[8px] px-[12px] rounded-lg sm:text-sm text-xs font-public-sans hover:scale-105 ease-in-out duration-300 font-semibold ${activeButton === 'Quality assurance' ? 'bg-btn-gradient text-white' : 'bg-white text-gray-2 border border-gray-2'}  `}>Quality assurance</button>
          <button onClick={() => handleButtonClick('Subscriptions')}
            className={`cursor-pointer py-[8px] px-[12px] rounded-lg sm:text-sm text-xs  font-public-sans hover:scale-105 ease-in-out duration-300 font-semibold ${activeButton === 'Subscriptions' ? 'bg-btn-gradient text-white' : 'bg-white text-gray-2 border border-gray-2'}  `}>Subscriptions</button>
          <button onClick={() => handleButtonClick('Employees data')}
            className={`cursor-pointer py-[8px] px-[12px] rounded-lg sm:text-sm text-xs  font-public-sans hover:scale-105 ease-in-out duration-300 font-semibold ${activeButton === 'Employees data' ? 'bg-btn-gradient text-white' : 'bg-white text-gray-2 border border-gray-2'}  `}>Employees data</button>

        </div>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[21px]'>
          {contract.map((value, index) => (

            <RoundedCard className={'h-full'}>
              <div key={index} className='flex justify-between'>
                <div>
                  <h5 className='font-public-sans font-semibold md:text-xl text-base text-gray-1'>Legal contract...</h5>
                </div>
                <div><Svgs.Threedots /></div>
              </div>
              <div className='flex flex-col justify-center items-center mt-[48px]'>
                <div>
                  <Svgs.Bifilepdf />
                </div>
                <div className='flex justify-center items-center text-center py-[17px]'>
                  <h6 className='font-public-sans md:text-xl text-base text-gray-1 w-[182px] font-semibold '>{value.name}</h6>
                </div>
              </div>
              <div className='flex justify-center items-center '>
                <p className='font-public-sans md:text-base text-sm text-gray-4 '>Created:(12/04/24)</p>
              </div>
              <div className='flex justify-center gap-[16px] my-[17px]'>
                <div>
                  <button onClick={() => { handleShowPopup(index) }} className='font-public-sans py-[8px] px-[12px] bg-btn-gradient font-semibold hover:scale-105 ease-in-out duration-300 sm:text-sm text-xs rounded-lg cursor-pointer text-white '>View document</button>
                  {popupindex === index && showPopup && (<ShareGroceryDialog show={showPopup} onClose={handleClosePopup} />)}

                </div>
                <div className='flex gap-[4px]'>
                  <button className='flex justify-center items-center border gap-[4px] hover:scale-105 ease-in-out duration-300 p-[8px] cursor-pointer text-xs sm:text-sm border-gray-2 text-gray-2 rounded-lg'><span><Svgs.Smbifilepdf /></span>Download</button>
                </div>
              </div>

            </RoundedCard>
          ))}
        </div>


      </div>
    </Layout>
  )
}

export default DocumentsHR;
