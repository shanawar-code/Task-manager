import React from 'react';
import { Card } from './Card';
import { NavBar } from '../../components/NavBar';
import { SideBar } from '../../components/SideBar';
import IMAGES from '../../assets/images';
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export const Dashboard = () => {
    return (
        <>
            {/* <NavBar /> */}
            <div className="flex flex-row w-full">
                {/* <SideBar /> */}
                <div className='p-6 w-full flex flex-col space-y-8'>
                    <div className='grid grid-cols-4 gap-x-6'>
                        <Card title={"My Task"} value={5} footerText={"4 new tasks"} />
                        <Card title={"My Task"} value={5} footerText={"4 new tasks"} />
                        <Card title={"My Task"} value={5} footerText={"4 new tasks"} />
                        <Card title={"My Task"} value={5} footerText={"4 new tasks"} />
                    </div>


                    <div className='grid grid-cols-2 text-gray-1  gap-x-6 '>
                        <div className='bg-white border-2 rounded-xl px-6 py-4 space-y-4'>
                            <div className=' flex flex-row justify-between items-center'>
                                <p className=' text-lg'>
                                    My Team
                                </p>
                                <button
                                    className='bg-gradient-to-r from-[#F33F41] to-[#FB6D72] text-white rounded-lg px-4 py-1 '>
                                    Collaborate
                                </button>
                            </div>


                            <div className='flex flex-col text-gray-1 text-lg'>
                                <div className='flex flex-row space-x-2 w-full  items-center justify-between py-4 border-b-2 '>
                                    <div className='flex flex-row space-x-4 items-center'>
                                        <img src={IMAGES.teamProfilePic} alt="" className='h-11' />
                                        <p>Rudolsph</p>
                                    </div>
                                    <p>Python Developer</p>
                                    <p>14 Tasks</p>
                                    <p>98%</p>
                                </div>
                                <div className='flex flex-row space-x-2 w-full  items-center justify-between py-4 border-b-2 '>
                                    <div className='flex flex-row space-x-4 items-center'>
                                        <img src={IMAGES.teamProfilePic} alt="" className='h-11' />
                                        <p>Rudolsph</p>
                                    </div>
                                    <p>Python Developer</p>
                                    <p>14 Tasks</p>
                                    <p>98%</p>
                                </div>
                                <div className='flex flex-row space-x-2 w-full  items-center justify-between py-4 border-b-2 '>
                                    <div className='flex flex-row space-x-4 items-center'>
                                        <img src={IMAGES.teamProfilePic} alt="" className='h-11' />
                                        <p>Rudolsph</p>
                                    </div>
                                    <p>Python Developer</p>
                                    <p>14 Tasks</p>
                                    <p>98%</p>
                                </div>
                                <div className='flex flex-row space-x-2 w-full  items-center justify-between py-4 border-b-2 '>
                                    <div className='flex flex-row space-x-4 items-center'>
                                        <img src={IMAGES.teamProfilePic} alt="" className='h-11' />
                                        <p>Rudolsph</p>
                                    </div>
                                    <p>Python Developer</p>
                                    <p>14 Tasks</p>
                                    <p>98%</p>
                                </div>


                            </div>

                        </div>







                        <div className="bg-white border-2 rounded-xl py-4 px-6 text-gray-1 space-y-8">
                            <div className='flex flex-row justify-between items-center'>
                                <div className='text-base'>Task Completion score</div>
                                <div className='border-2 rounded-lg p-1 flex flex-row items-center gap-x-1'>
                                    Weekly
                                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.5 1.5V3.75" stroke="#4F4F4F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.5 1.5V3.75" stroke="#4F4F4F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M3.125 6.81738H15.875" stroke="#4F4F4F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M16.25 6.375V12.75C16.25 15 15.125 16.5 12.5 16.5H6.5C3.875 16.5 2.75 15 2.75 12.75V6.375C2.75 4.125 3.875 2.625 6.5 2.625H12.5C15.125 2.625 16.25 4.125 16.25 6.375Z" stroke="#4F4F4F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.271 10.2749H12.2778" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.271 12.5249H12.2778" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9.49661 10.2749H9.50335" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9.49661 12.5249H9.50335" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.72073 10.2749H6.72747" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.72073 12.5249H6.72747" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>


                            <div className='flex flex-row items-center justify-around'>
                                <CircularProgressbarWithChildren className="h-44" value={100} strokeWidth={12} styles={buildStyles({
                                    pathColor: "#497CFF",
                                })}>
                                    <div className='items-center justify-center flex flex-col'>
                                        <p className='text-3xl text-black'>100%</p>
                                        <p className='text-gray-4 text-base'>Expected Score</p>
                                    </div>
                                </CircularProgressbarWithChildren>
                                <CircularProgressbarWithChildren className="h-44" value={82} strokeWidth={12} styles={buildStyles({
                                    pathColor: "#F4A012",
                                })}>
                                    <div className='items-center justify-center flex flex-col'>
                                        <p className='text-2xl'>82%</p>
                                        <p>Achieved Score</p>
                                    </div>
                                </CircularProgressbarWithChildren>
                            </div>

                            <div className='flex flex-row justify-between items-center'>
                                <div className='flex flex-row gap-x-4'>
                                    <img src={IMAGES.playButtonPic} alt="" className='h-12' />


                                    <div >
                                        <p className='text-sm'>Completed Task</p>
                                        <p className='text-sm'>Development Team</p>
                                    </div>

                                </div>

                                <div>455</div>
                            </div>





                        </div>







                    </div>





                </div>
            </div >
        </>

    );
};

