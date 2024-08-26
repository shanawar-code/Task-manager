import React, { useState } from 'react';

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Button1 from '../../../components/Button1';
import { Attdenence, Calenderhr, Chair, Employs, Threedots } from '../../../assets/svgs/Index';
import { Layout } from '../../../components/Layout/DashboardLayout';
import { Employeessvg } from '../../../assets/svgs/Index';
import RoundedCard from '../../../components/Elements/RoundedCard';


function Dashboard_hr() {
    const [attendance, setAttendance] = useState([
        { name: 'Anna', role: 'Python developer', status: 'Present', time: '10:00AM', img: '/images/(anna).png' },
        { name: 'Catherine', role: 'Web designer', status: 'Present', time: '10:00AM', img: '/images/(catherine5).png' },
        { name: 'Orton', role: 'UI UX designer', status: 'Present', time: '10:00AM', img: '/images/(ortan6).png' },
        { name: 'Jessy', role: 'Web developer', status: 'Present', time: '10:00AM', img: '/images/(jessy7).png' },
        { name: 'Orton', role: 'UI UX designer', status: 'Present', time: '10:00AM', img: '/images/(ortan6).png' },
        
    ]);

    const [taskCompletion, setTaskCompletion] = useState({
        expectedScore: 100,
        achievedScore: 82,
        completedTasks: 46,
    });

    const [meetings, setMeetings] = useState([
        { title: 'Daily meeting', time: '2:30 PM', border: 'border-gray-5', border_b: 'border-b' },
        { title: 'Daily meeting', time: '2:30 PM',  border: 'border-gray-5', border_b: 'border-b'},
        { title: 'Daily meeting', time: '2:30 PM' },

    ]);
   
        const attendanceData = {
          attendancePercentage: 98,
          present: 24,
          onLeave: 0,
          absent: 1,
        };

        const meetingCard=[
            {
                meeting: 'Daily meeting',
                time: '2:30 PM',
                border_b: 'border-b-2'
            },
            {
                meeting: 'Daily meeting',
                time: '2:30 PM',
                border_b: 'border-b-2'
            },
            {
                meeting: 'Daily meeting',
                time: '2:30 PM',
            },
          ]
      
        const circleRadius = 50;
        const circleCircumference = 2 * Math.PI * circleRadius;
        const progress = (attendanceData.attendancePercentage / 100) * circleCircumference;


        const [selectedRole, setSelectedRole] = React.useState('Python developer');
        const roles = ['Python developer', 'Web designer', 'UI UX designer', 'Web developer'];
      
        const overviewData = [
          {
              Employees: 'Total employees',
              totalEmployees: 25,
              newEmployeesnumber: 4,
              newEmployees: 'new employees',
              textcolor: 'text-[#00B037]',
              empolyestextcolor: 'text-[#828282]',
               totalempolyescolor: 'text-[#161617]',
               svg: <Employs/>
      
          },
      
          {
              Employees: 'Total employees',
              totalEmployees: 2,
              newEmployeesnumber: 2,
              newEmployees: 'website designers',
              textcolor: 'text-[#F4A012]',
              empolyestextcolor: 'text-[#F4A012]',
              totalempolyescolor: 'text-[#161617]',
              svg: <Chair/>
          },
      
          {
              Employees: 'Employee Attendance',
              totalEmployees: '98%',
              newEmployeesnumber: 24,
              newEmployees: ' present today',
              textcolor: 'text-[#00B037]',
              empolyestextcolor: 'text-[#828282]',
               totalempolyescolor: 'text-[#161617]',
               svg: <Attdenence/>
      
          },
          {
              Employees: 'My attendance',
              totalEmployees: '100%',
              newEmployeesnumber: 'log in:',
              newEmployees: ' 10:02 AM today',
              textcolor: 'text-[#828282]',
              empolyestextcolor: 'text-[#4F4F4F]',
               totalempolyescolor: 'text-[#00B037]',
               svg: <Attdenence/>
      
          },
      ]
  return (
    <>
    <Layout active={'Dashboard'}> 
          <div className="  bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:px-4  lg:px-0">
            
                {overviewData.map((items,index) => (
                  <RoundedCard>
                    <div key={index} className=" ">
                        <div> <h3 className="text-[12px] font-semibold font-public-sans text-[#828282]">{items.Employees}</h3></div>
                        <div className='flex justify-between items-center text-[20px]'><p className={`${items.totalempolyescolor}  font-semibold font-public-sans`}>{items.totalEmployees}</p>
                        <span>{items.svg}</span> </div>
                        <div className='flex items-center gap-[4px]'><span className={`${items.textcolor}`}>{items.newEmployeesnumber}</span><p className={`${items.empolyestextcolor}`}> {items.newEmployees}</p></div>
                    </div>
                    </RoundedCard>
                ))}
              
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4 sm:px-4  lg:px-0">
            <RoundedCard>
                <div className="">
                    <h3 className="text-lg text-gray-1 text-[16px] font-public-sans font-semibold">Attendance</h3>
                    {/* svg for circle bar */}
                
      <div className="flex  sm:gap-[23px] gap-[10px] items-center p-4 bg-[#f6f6f6] rounded-lg  mt-6 ">
        <div className="relative">
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
        <div className='w-full  '>  
          
        <div className='flex justify-between items-center  border-[#E0E0E0] border-b py-[8px]'><h6 className='font-public-sans text-[12px] text-[#4F4F4F] '>Present</h6> <span><h6 className='font-public-sans text-[14px] text-[#333333]'>24</h6></span>
        
        </div>
        <div className='flex justify-between items-center border-[#E0E0E0] border-b py-[8px]'><h6 className='font-public-sans text-[12px] text-[#4F4F4F] '>On leave</h6> <span><h6 className=' font-public-sans text-[14px] text-[#333333]'>0</h6></span>
        
        </div>
        <div className='flex justify-between items-center  py-[8px]'><h6 className='font-public-sans text-[12px] text-[#4F4F4F] '>Absent</h6> <span><h6 className='font-public-sans text-[14px] text-[#333333]'>1</h6></span>
        
        </div>
        
        </div>
       
      </div>

                    
             <div className='overflow-auto'>
                    
                    {attendance.map((person, index) => (
                        <div key={index} className="flex justify-between   w-full  mt-4  border-gray-5 border-b py-[23px]   overflow-auto items-center min-w-[450px] ">
                            <div className="flex items-center w-full gap-[14px]">
                                <img src={person.img} alt="avatar" className="w-8 h-8 rounded-full mr-2" />
                                <div>
                                    <p className="text-gray-1 text-[14px] font-medium font-public-sans">{person.name}</p>
                                   
                                </div>
                            </div>
                           <div className='w-full '> <p className="text-gray-1  text-[14px] font-medium font-public-sans">{person.role}</p></div>
                            <div className='w-full'><p className='text-gray-1 text-[14px] font-medium font-public-sans'>{person.status}</p></div>
                            <div className=''><p className="text-[#04AA77] text-[14px] font-medium font-public-sans">{person.time}</p></div>
                        </div>
                    ))}
                    </div>
                    <div className='flex justify-center'>
                    <button className="mt-4 text-gray-2 border border-gray-2  font-semibold font-public-sans text-[14px] py-[7px] px-[12px] rounded-lg ">View all</button>
                    </div>
                </div>
                </RoundedCard>
                <div className="  ">
                <RoundedCard>
                <div className="">
                <div className="">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-sm md:text-base font-semibold font-public-sans text-gray-1">
                      Task completion score
                    </h2>
                    <button className=" rounded-lg px-3 py-1 flex items-center gap-3 border">
                      <span className=" hidden sm:block text-base font-normal font-public-sans text-gray-2">
                        Weekly
                      </span>
                      <Calenderhr/>
                    </button>
                  </div>
                   {/* foe seected tG */}
                
      <div className="flex flex-col items-center ">
        <div className="mb-2  py-[4px] px-[4.5px] border border-gray-5 gap-[10px] bg-white rounded-[4px] shadow-sm  focus:ring-red-500 focus:border-red-500">
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className=" focus:outline-none lg:text-[16px] text-[14px] font-public-sans  gap-[10px]"
          >
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
        <div className="text-[#497CFF] cursor-pointer text-[12px] font-public-sans">5 employees</div>
      </div>
    

                  <div className="flex flex-col  lg:flex-row items-center justify-between mx-10 my-10 md:my-12 gap-[18px] ">
                    {/* Expected Score */}
                    <div className="flex flex-col items-center relative">
                      <div className="w-36 h-36">
                        <CircularProgressbar
                          value={100}
                           strokeWidth='12'
                          styles={buildStyles({
                            pathColor: "#3b82f6",
                            textColor: "#000",
                          })}
                        />
                      </div>
                      <div className='absolute inset-0 flex items-center justify-center flex-col '>
                      <span className='text-2xl font-bold text-[#333333] font-public-sans'>100%</span>
                      <p className="text-gray-4 font-public-sans text-[12px] ">
                        Expected score
                      </p>
                      </div>
                    </div>

                    {/* Achieved Score */}
                    <div className="flex flex-col items-center relative">
                      <div className="w-36 h-36">
                        <CircularProgressbar
                          value={82}
                          strokeWidth='12'
                           styles={buildStyles({
                            pathColor: "#f59e0b",
                            textColor: "#000",
                            trailColor: "#f3f4f6",
                          })}
                        />
                      </div>
                      <div className='absolute inset-0 flex items-center justify-center flex-col '>
                      <span className='text-2xl font-bold text-[#333333] font-public-sans'>82%</span>
                      <p className="text-gray-4 font-public-sans text-[12px] ">
                      Achieved score
                      </p>
                      </div>
                      <div className='absolute -bottom-14 flex items-center justify-center flex-col gap-2'>
                      <p className="text-[13px] font-bold text-gray-1 font-epilogue">
                      46
                       </p>
                        <p className="text-[10px] font-bold font-public-sans text-gray-2">
                          Completed Task
                        </p>
                        
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mx-3 lg:mx-10 my-2">
                    <div className="flex items-center space-x-2">
                      {/* <img src="images/playbutton.png" alt="" /> */}
                      
                    </div>
                   
                  </div>
                </div>
              </div>
              </RoundedCard>
              <RoundedCard className={'my-6'}>
           
            <div className="">
                <div className="flex justify-between items-center">
                    <h3 className="md:text-[16px] text-[14px] text-gray-1 font-semibold font-public-sans">Meetings</h3>
                    <Button1
                    
                      text={'Create new meeting'}
                      
                    />
            
                    
                </div>
                <div className="flex items-center justify-between">
                 
                    
            
                  </div>
                  <div className="overflow-auto ">
                  {meetingCard
                    .map((value,index) => {
                      return (
                        <>
                          <div key={index} className={`${value.border_b}  min-w-[450px] flex items-center gap-3  justify-between   pb-3 mt-7   `}>
                            <div className="flex items-center gap-3">
                              <img src="/images/image 39 (1).png" alt="" />
                              <h1 className=" md:text-[14px] text-[12px] md:text-sm font-epilogue font-semibold text-gray-1">
                                {value.meeting}
                              </h1>
                            </div>
                            <div>
                              <h1 className="md:text-[14px] text-[12px] md:text-sm font-epilogue font-semibold text-gray-1">
                                {value.time}
                              </h1>
                            </div>

                            <div className="flex items-center gap-3">
                             <div className='flex items-center'>
                              <img className='-mr-2' src="/images/meeting1.png" alt="" />
                              <img className='-mr-2' src="/images/meeting2.png" alt="" />
                              <img src="/images/meeting3.png" alt="" />
                              </div>
                            <div>  <Threedots/> </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                    </div>
            </div>
            </RoundedCard>
            </div>
         
            </div>
        </div>
    </Layout>
    </>
    
  )
}




export default Dashboard_hr