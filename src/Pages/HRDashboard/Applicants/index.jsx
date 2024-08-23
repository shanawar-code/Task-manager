import React,{useState} from 'react'
import { Layout } from '../../../components/Layout/DashboardLayout'
import { Arrows, Attdenence, Chair, Employeessvg, Employs, Plus, Threedots ,arrows} from '../../../assets/svgs/Index'
import ShareGroceryDialog from './ShareGroceryDialog';
import Svgs from '../../../assets/svgs/Index.js'
import Button from '../../../components/Button.jsx';
import RoundedCard from '../../../components/Elements/RoundedCard.jsx';


function Applicants() {
    const [showPopup, setShowPopup] = useState(false);

const handleShowPopup = () => {
  setShowPopup(true);
};

const handleClosePopup = () => {
  setShowPopup(false);
}

const applicantsData = [
    {
        Employees: 'Open positions',
        totalEmployees: 5,
        newEmployeesnumber: 4,
        newEmployees: 'new applicants',
        textcolor: 'text-[#00B037]',
        empolyestextcolor: 'text-[#828282]',
         totalempolyescolor: 'text-[#161617]',
         svg: <Employs/>

    },

    {
        Employees: 'Interviewing',
        totalEmployees: 4,
        newEmployeesnumber: 1,
        newEmployees: ' Interview today',
        textcolor: 'text-[#F4A012]',
        empolyestextcolor: 'text-[#F4A012]',
        totalempolyescolor: 'text-[#161617]',
        svg: <Chair/>
    },

    {
        Employees: 'This week hired',
        totalEmployees: '2',
        newEmployeesnumber: '100%',
        newEmployees: ' target achieved',
        textcolor: 'text-[#00B037]',
        empolyestextcolor: 'text-gray-4',
         totalempolyescolor: 'text-[#161617]',
         svg: <Attdenence/>

    },
    {
        Employees: 'Total aplicants',
        totalEmployees: '63',
        newEmployeesnumber: '2:',
        newEmployees: 'applicants rejected',
        textcolor: 'text-[#F54D4D]',
        empolyestextcolor: 'text-gray-4',
        totalempolyescolor: 'text-gray-1',
         svg: <Attdenence/>

    },
]
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
    <div className="flex flex-wrap  gap-[10px] sm:gap-[0px] px-8     sm:flex-row justify-between  sm:items-center   sm:space-y-0">
          <h2 className="lg:text-2xl sm:text-lg text-base font-bold font-public-sans text-gray-1 ">Applicants</h2>
          <div className="flex sm:space-x-4  flex-col sm:flex-row  items-center space-y-4 sm:space-y-0 ">
            <div className='border border-gray-1 rounded-lg p-3 md:text-sm text-xs font-public-sans font-semibold text-gray-1'>
            <select  className="bg-[#fbfbfb]  sm:w-auto">
              <option>Designation</option>
              <option>Web developer</option>
              <option>Python developer</option>
              <option>UI/UX developer</option>
              <option>Digital marketing</option>
              <option>QA Tester</option>
            </select>
            </div>

            <div    className=''>
           
            
            <Button handleClick={handleShowPopup} className={'flex items-center gap-2   py-3 px-[16px] '} text={<> <Svgs.Plus/> Add new applicant</>} />
            {showPopup && (<ShareGroceryDialog show={showPopup} onClose={handleClosePopup}/>)}

            </div>
            
          </div>
        </div>

        <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:px-4  lg:px-0 mt-6">
                {applicantsData.map((items,index) => (
                  <RoundedCard>
                    <div key={index} className=" ">
                        <div>  <h3 className="text-[12px] font-semibold font-public-sans text-[#828282]">{items.Employees}</h3></div>
                        <div className='flex justify-between items-center text-[20px]'><p className={`${items.totalempolyescolor}  font-semibold font-public-sans`}>{items.totalEmployees}</p>
                        <span>{items.svg}</span> </div>
                        <div className='flex items-center'><span className={`${items.textcolor}`}>{items.newEmployeesnumber}</span><p className={`${items.empolyestextcolor}`}> {items.newEmployees}</p></div>
                    </div>
                    </RoundedCard>
                ))}

            </div>
        </div>

      <div>
      <div className="container min-w-full ">
  <div className="overflow-auto  min-w-full">
    <div className="flex gap-4 flex-col min-w-[700px]">
      <div className='py-[24px]'>
      <div className="flex font-bold bg-[#f3f3f3] border  rounded-lg justify-between w-[100%] py-5">
       <div className='flex items-center gap-[9px] text-sm text-gray-1 font-public-sans'> <h1 className="w-[16.2%]  px-[46px]">Name</h1><span><Arrows/></span></div>
        <h1 className=" p-2 text-gray-1 font-medium text-sm font-public-sans">Position applied</h1>
        <h1 className="text-gray-1 font-public-sans text-sm p-2">Contact no</h1>
        <h1 className="text-gray-1 font-public-sans text-sm p-2">Application date</h1>
        <h1 className="text-gray-1 font-public-sans text-sm p-2">Status</h1>
        <h1 className="text-gray-1 font-public-sans text-sm px-[20px] p-2">Action</h1>
      </div>
      </div>
      {applicants.map((applicant, index) => (
        <div
          key={index}
          className={`flex  justify-between w-[100%] items-center ${index === applicants.length - 1 ? '' : ''} border-b  hover:bg-gray-100`}
        >
          <div className="py-[10px] mx-[16px]  flex  flex-wrap items-center w-[16.2%] ">
            <img
              src="images/catherine.png"
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
              <Threedots/>
            </button>          </div>
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

export default Applicants;
