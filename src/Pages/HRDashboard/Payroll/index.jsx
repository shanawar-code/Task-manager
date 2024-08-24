import React,{useState} from 'react'
import { Layout } from '../../../components/Layout/DashboardLayout';
import Button from '../../../components/Button';
import ShareGroceryDialog from './ShareGroceryDialog';
import Svgs, { Arrows, Threedots } from '../../../assets/svgs/Index.js'
import Moreoptions from './Moreoptions.jsx';

function Payroll() {
    const [showPopup, setShowPopup] = useState(false);
   

const handleShowPopup = () => {
  setShowPopup(true);
};

const handleClosePopup = () => {
  setShowPopup(false);
}



const [showPopups, setShowPopups] = useState(false)
const [popupsindex, setPopupsindex] = useState(null)

const handleShowPopups=(index)=>{
  setShowPopups(true)
  setPopupsindex(index)
}

const handleClosePopups=(index)=>{
  setShowPopups(false)
  setPopupsindex(index)
}



const Payroll = [
    {
      name: 'Catherine',
      email: 'Catherine14@gmail.com',
      position: 'Python developer',
      rate: 'Fix Amount',
      date: '3/08/2024',
      period_status: 'In progress',
      statusColor: 'bg-[#faf2e4] text-[#F4A012]',
      positionColor: 'bg-[#e9eefb] text-[#497CFF]',
     amount_rate: '$1200',
     period_date: '3/08/24 to 2/09/24',
     period: 'MONTHLY'
    },
    {
      name: 'Catherine',
      email: 'Catherine14@gmail.com',
      position:'Web developer' ,
      rate: 'Fix Amount',
      date: '3/08/2024',
      period_status: 'Paid',
      statusColor: 'bg-[#e2f3e7] text-[#00B037]',
      positionColor: 'bg-[#faf2e4] text-[#F4A012]',
      amount_rate: '$1000',
       period_date: '3/08/24 to 2/09/24',
       period: 'MONTHLY'
    },
    {
      name: 'Catherine',
      email: 'Catherine14@gmail.com',
      position: 'Python developer',
      rate: 'Fix Amount',
      date: '3/08/2024',
      period_status: 'In progress',
      statusColor: 'bg-[#faf2e4] text-[#F4A012]',
      positionColor: 'bg-[#e9eefb] text-[#497CFF]',
       amount_rate: '$1200',
        period_date: '3/08/24 to 2/09/24',
        period: 'MONTHLY'
    },
    {
      name: 'Catherine',
      email: 'Catherine14@gmail.com',
      position: 'UI/UX developer',
      rate: 'HOURLY',
      date: '3/08/2024',
      period_status: 'Pending',
      statusColor: 'bg-[#faeaea] text-[#F54D4D]',
      positionColor: 'bg-[#e2f3e7] text-[#00B037]',
       amount_rate: '$25',
        period_date: '3/08/24 to 2/09/24',
        period: 'MONTHLY'
    },
    {
      name: 'Catherine',
      email: 'Catherine14@gmail.com',
      position: 'Python developer',
      rate: 'Fix Amount',
      date: '3/08/2024',
      period_status: 'In progress',
      statusColor:'bg-[#faf2e4] text-[#F4A012]' ,
      positionColor: 'bg-[#e9eefb] text-[#497CFF]',
       amount_rate: '$900',
        period_date: '3/08/24 to 2/09/24',
        period: 'MONTHLY'
    },
    {
      name: 'Catherine',
      email: 'Catherine14@gmail.com',
      position: 'QA Tester',
      rate: 'Fix Amount',
      date: '3/08/2024',
      period_status: 'Paid',
      statusColor: 'bg-[#e2f3e7] text-[#00B037]',
      positionColor: 'bg-[#faf2e4] text-[#F4A012]',
       amount_rate: '$800',
       period_date: '3/08/24 to 2/09/24',
       period: 'MONTHLY'
    },
    {
        name: 'Catherine',
        email: 'Catherine14@gmail.com',
        position: 'UI/UX developer',
        rate: 'HOURLY',
        date: '3/08/2024',
        period_status: 'In progress',
        statusColor:'bg-[#faf2e4] text-[#F4A012]' ,
        positionColor: 'bg-[#e2f3e7] text-[#00B037]',
         amount_rate: '$25',
          period_date: '3/08/24 to 2/09/24',
          period: 'MONTHLY'
      },                                                                               
     
      {
        name: 'Catherine',
        email: 'Catherine14@gmail.com',
        position: 'Digital marketing',
        rate: 'Fix Amount',
        date: '3/08/2024',
        period_status: 'Pending',
        statusColor: 'bg-[#faeaea] text-[#F54D4D]',
        positionColor: 'bg-[#e9eefb] text-[#497CFF]',
         amount_rate: '$900',
          period_date: '3/08/24 to 2/09/24',
          period: 'MONTHLY'
      },
      {
        name: 'Catherine',
        email: 'Catherine14@gmail.com',
        position: 'QA Tester',
        rate: 'Fix Amount',
        date: '3/08/2024',
        period_status: 'Paid',
        statusColor: 'bg-[#e2f3e7] text-[#00B037]',
        positionColor: 'bg-[#faf2e4] text-[#F4A012]',
         amount_rate: '$800',
         period_date: '3/08/24 to 2/09/24',
         period: 'MONTHLY'
      },
  ];

  return (
    <Layout active={'Payroll'}>
    <div className='min-h-screen'>
    <div className="flex flex-wrap  gap-[10px] sm:gap-[0px] px-8     sm:flex-row justify-between  sm:items-center   sm:space-y-0">
          <h2 className="lg:text-2xl sm:text-lg text-base font-bold font-public-sans text-gray-1 ">Payroll</h2>
          <div className="flex sm:space-x-4  flex-col sm:flex-row  items-center space-y-4 sm:space-y-0 ">
            <div className='border border-gray-1 rounded-lg  py-[8px] px-[12px] md:text-sm text-xs font-public-sans font-semibold text-gray-1'>
            <select  className="bg-[#fbfbfb]  sm:w-auto">
              <option>Designation</option>
              <option>Web designer</option>
              <option>Python developer</option>
              <option>UI/UX designer</option>
              <option>Web developer</option>
              <option>Digital marketing</option>
            </select>
            </div>

            <div    className=''>
           
            
            <Button handleClick={handleShowPopup} className={'flex items-center gap-2   py-[8px] px-[16px] '} text={<> <Svgs.Plus/> Add salary</>} />
            {showPopup && (<ShareGroceryDialog show={showPopup} onClose={handleClosePopup}/>)}

            </div>
            
          </div>
        </div>

        <div>
      <div className="container min-w-full ">
  <div className="overflow-auto  min-w-full">
    <div className="flex gap-4 flex-col min-w-[700px]">
      <div className='py-[24px] min-w-[900px]'>
      <div className="flex font-bold bg-[#f3f3f3] border  rounded-lg justify-between w-[100%] py-5">
       <div className='flex items-center gap-[9px] text-sm text-gray-1 font-public-sans px-[46px]'> <h1 className=" ">Name</h1><span><Arrows/></span></div>
        <h1 className=" p-2 text-gray-1 font-medium text-sm font-public-sans">Position </h1>
        <div className='flex items-center gap-[9px] text-sm text-gray-1 font-public-sans'> <h1 className="  ">Rate</h1><span><Arrows/></span></div>
        <h1 className="text-gray-1 font-public-sans text-sm p-2">Period</h1>
        <h1 className="text-gray-1 font-public-sans text-sm p-2">Period</h1>
        <h1 className="text-gray-1 font-public-sans text-sm  p-2 px-[20px]">Action</h1>
      </div>
      </div>
      {Payroll.map((payroll, index) => (
        <div
          key={index}
          className={`flex  justify-between w-[100%] items-center ${index === payroll.length - 1 ? '' : ''} border-b  hover:bg-gray-100`}
        >
          <div className="py-[10px] mx-[16px]  flex  flex-wrap items-center w-full  ">
            <img
              src="images/catherine.png"
              alt="profile"
              className="w-[42px] h-[42px] rounded-full mr-3"
            />
            <div className=''>
              <p className='lg:text-sm text-xs font-public-sans text-gray-1 font-medium'>{payroll.name}</p>
              <p className="lg:text-xs text-[10px] text-[#00B037] font-public-sans">{payroll.email}</p>
            </div>
          </div>
          
          <div className=" lg: p-2 w-full  min-w-[186px] ">
            <span className={`ml-6  px-[12px] py-[6px] lg:text-sm text-[10px] font-public-sans font-medium rounded-full ${payroll.positionColor}`}>
              {payroll.position}
            </span>
          </div>
          <div className='w-  flex flex-col text-center w-full  min-w-[140px]'>
              <p className='mr-6 lg:text-xs text-[10px] font-public-sans text-gray-4 '>{payroll.rate}</p>
              <p className="mr-6 lg:text-sm font-medium text-xs text-gray-1 font-public-sans">{payroll.amount_rate}</p>
            </div>
            <div className='ml-12  w-full  min-w-[156px]'>
              <p className=' lg:text-xs text-[10px] font-public-sans text-gray-4 '>{payroll.date}</p>
              <p className=" lg:text-sm font-medium text-xs text-gray-1 font-public-sans">{payroll.period_date}</p>
            </div>
          <div className="lg: p-2  text-gray-1 font-medium font-public-sans lg:text-sm text-xs"></div>
          <div className="lg: p-2   font-medium font-public-sans text-sm w-full min-w-[156px]">
            <span className={`px-[12px] py-[6px] rounded-full lg:text-sm text-xs font-public-sans font-medium ${payroll.statusColor}`}>
              {payroll.period_status}
            </span>
          </div>
          

          <div className='className="px-[20px] p-2 text-right w-3/12"'>
              <button onClick={()=>{handleShowPopups(index)}} className="text-gray-500 hover:text-gray-700"><Threedots/></button>
              { popupsindex===index && showPopups && (<Moreoptions  show={showPopups} onClose={handleClosePopups}/>)}
            </div>
        </div>
      ))}
    </div>
  </div>
</div>


      </div>
    </div>
    </Layout>
  )
}

export default Payroll;
