import React,{useState} from 'react'
import { Email, Phone} from '../../../assets/svgs/Index';
import { Layout } from '../../../components/Layout/DashboardLayout'
import Addnewemployee from '../Employees/Addnewemployee';
import ShareGroceryDialog from './ShareGroceryDialog';
import Button from '../../../components/Button';
import Svgs from '../../../assets/svgs/Index.js'
import RoundedCard from '../../../components/Elements/RoundedCard.jsx';

function Employees_hr() {
  const initialEmployees = [
    {
      name: 'Anna',
      role: 'Team member',
      department: 'Web development',
      taskScore: '98%',
      email: 'o.williams@email.com',
      phone: '+1 650 434 5655',
      img: 'images/anna1.png'
    },
    {
      name: 'Catherine',
      role: 'Team member',
      department: 'Web development',
      taskScore: '98%',
      email: 'o.williams@email.com',
      phone: '+1 650 434 5655',
      img: 'images/catherine1.png'
    },
    {
      name: 'Orton',
      role: 'Team member',
      department: 'Web development',
      taskScore: '98%',
      email: 'o.williams@email.com',
      phone: '+1 650 434 5655',
      img: 'images/orton1.png'
    },
    {
      name: 'Moana',
      role: 'Team member',
      department: 'Web development',
      taskScore: '98%',
      email: 'o.williams@email.com',
      phone: '+1 650 434 5655',
      img: 'images/moana.png'
    },
    {
      name: 'Jessy',
      role: 'Team member',
      department: 'Web development',
      taskScore: '98%',
      email: 'o.williams@email.com',
      phone: '+1 650 434 5655',
      img: 'images/jessy 1.png'
    },
    {
      name: 'Anna',
      role: 'Team member',
      department: 'Web development',
      taskScore: '98%',
      email: 'o.williams@email.com',
      phone: '+1 650 434 5655',
      img: 'images/anna1.png'
    },
  ];
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  }

  const [employees, setEmployees] = useState(initialEmployees);
  const [selectedEmployee, setSelectedEmployee] = useState(null);


  const viewDetails = (employee) => {
    setSelectedEmployee(employee);
  };
  
  return (
    <Layout active={'Employees'}>
      <div className="min-h-screen  ">
        <div className="flex gap-[10px] sm:gap-[0px]   flex-wrap  sm:flex-row justify-between items-start sm:items-center mb-4  sm:space-y-0">
          <h2 className="lg:text-2xl sm:text-lg text-base font-bold font-public-sans text-gray-1 ">Employees</h2>
          <div className="flex    flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className='border border-gray-1 rounded-lg px-4 py-3 md:text-sm text-xs font-public-sans font-semibold text-gray-1'>
            <select className="bg-[#fbfbfb]  sm:w-auto">
              <option>Web development</option>
              <option>UI/UX design</option>
              <option>Backend development</option>
              <option>Frontend development</option>
            </select>
            </div>

            <div    className=''>
           
           
            <Button handleClick={handleShowPopup} className={'flex items-center gap-2  py-3 px-4 '} text={<> <Svgs.Plus/> Add new employee</>} />
            {showPopup && (<ShareGroceryDialog show={showPopup} onClose={handleClosePopup}/>)}

            </div>
            
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  py-5  gap-y-4 gap-x-4">
          {employees.map((employee, index) => (
            <RoundedCard>
            <div key={index} className="">
              <div className="flex items-center gap-x-4 gap-y-5 mb-4">
                <img
                  src={employee.img}
                  alt={employee.name}
                  className="rounded-full w-[90px] h-[90px]"
                />
                <div className='flex flex-col gap-x-2 gap-y-2'>
                  <h3 className="lg:text-xl text-base font-semibold text-gray-1 font-public-sans">{employee.name}</h3>
                  <span className="flex justify-center items-center text-[#497CFF] border border-[#ecf1fe] py-[5px] px-[12px] rounded-[100px] bg-[#ecf1fe] 
                  font-public-sans font-medium md:text-sm text-xs">{employee.role}</span>
                </div>
              </div>
              <div className="text-gray-600 mb-4 flex flex-col justify-center 2xl:px-[49px] sm:px-[10px] ">
                <div className="flex justify-between">
                  <p className='font-public-sans text-[12px] text-gray-4'>DEPARTMENT</p>
                  <p className="font-public-sans text-[14px] text-gray-1 font-medium">{employee.department}</p>
                </div>
                <div className="flex justify-between">
                  <p className='font-public-sans text-[12px] text-gray-4'>TASK SCORE</p>
                  <p className="font-medium text-[#00B037] text-[14px] font-public-sans">{employee.taskScore}</p>
                </div>
              </div>
              <div className="bg-[#f5f5f5] p-2 rounded-xl mb-4 px-[18px]">
                <p className="flex items-center space-x-2">
                  <span><Email/></span>
                  <span className='text-gray-2 font-public-sans font-medium text-sm'>{employee.email}</span>
                </p>
                <hr className='flex justify-center items-center mt-2' />
                <p className="flex items-center space-x-2 mt-2">
                  <span><Phone/></span>
                  <span className='text-gray-2 font-public-sans font-medium text-sm'>{employee.phone}</span>
                </p>
              </div>
              <div className='flex justify-center items-center'>    
              <button   onClick={() => setSelectedEmployee(null)}  className="hover:text-white hover:border-none hover:bg-[#555353] 
               py-[7px] px-[12.5px] bg-white border border-gray-2 rounded-lg shadow-sm text-sm font-semibold text-gray-2 font-public-sans">
                View details
              </button>
              </div>
            </div>
            </RoundedCard>
          ))}
        </div>
    
    </div>
    </Layout>
  )
}

export default Employees_hr
