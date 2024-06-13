// import React from 'react'
import IMAGES from '../assets/images'
import arrow from "../assets/SVG"

// export const NavBar = () => {
//     return (


//         <nav className="bg-white border-gray-200  border-b-2">
//             <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
//                 <a href="https://flowbite.com/"
//                     className="flex items-center space-x-3 rtl:space-x-reverse">
//                     <img src={IMAGES.logo} className="h-8" alt="MR Logo" />
//                     {/* <span className="self-center text-2xl font-semibold whitespace-nowrap ">Flowbite</span> */}
//                 </a>

//                 <div className="flex md:order-2">
//                     <button type="button"
//                         data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200  rounded-lg text-sm p-2.5 me-1">
//                         <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
//                         </svg>
//                         <span className="sr-only">Search ...</span>
//                     </button>
//                     <div className="relative hidden md:block">
//                         <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//                             <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
//                             </svg>
//                             <span className="sr-only">Search icon</span>
//                         </div>
//                         <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
//                     </div>
//                     <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-search" aria-expanded="false">
//                         <span className="sr-only">Open main menu</span>
//                         <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
//                         </svg>
//                     </button>
//                 </div>
//                 <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
//                     <div className="relative mt-3 md:hidden">
//                         <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//                             <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
//                             </svg>
//                         </div>
//                         <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search..." />
//                     </div>

//                 </div>
//             </div>
//         </nav>

//     )
// }

import React from 'react'

export const NavBar = () => {
    return (
        <nav className='bg-white border-b-2 px-8 py-4'>
            <div className='flex flex-row items-center justify-between'>

                <div className='flex flex-row items-center justify-between w-[12%]'>
                    <a href="">
                        <img src={IMAGES.logo} alt="" className='h-12' />
                    </a>
                    <button>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.9629 17.9297L12.9996 11.9664L18.9658 6.00015" stroke="#333333" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.9626 17.9297L5.99932 11.9664L11.9655 6.00015" stroke="#333333" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>

                </div>

                <div className='flex flex-row items-center space-x-8 w-2/5 justify-end'>


                    <div
                        className='bg-gray-100 rounded-lg flex flex-row space-x-4 items-center py-2 px-4 w-[60%]'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.6805 15.3334C12.3164 15.3334 15.2638 12.386 15.2638 8.75008C15.2638 5.11421 12.3164 2.16675 8.6805 2.16675C5.04463 2.16675 2.09717 5.11421 2.09717 8.75008C2.09717 12.386 5.04463 15.3334 8.6805 15.3334Z" stroke="#828282" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13.3472 13.4167L17.1805 17.2501" stroke="#828282" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <input
                            className='bg-transparent focus:outline-none w-full  text-sm'
                            type="text"
                            name=""
                            id=""
                            placeholder='Search' />

                    </div>

                    <div className='flex flex-row space-x-4 items-center'>


                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#BDBDBD" />
                            <path d="M26.3923 25.4349H13.6074V18.0111C13.6074 14.5072 16.4479 11.6667 19.9518 11.6667V11.6667C23.4557 11.6667 26.2962 14.5072 26.2962 18.0111V25.4349H26.3923Z" stroke="#828282" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.6667 25.4351H28.3334" stroke="#828282" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.2495 28.3342H21.7495" stroke="#828282" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <circle cx="26" cy="14" r="3.5" fill="url(#paint0_linear_36_577)" stroke="#FEFEFE" />
                            <defs>
                                <linearGradient id="paint0_linear_36_577" x1="25.7333" y1="18" x2="25.7333" y2="10.4" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#F33F41" />
                                    <stop offset="1" stop-color="#FB6D72" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <div>
                            <img src={IMAGES.profilePic} alt="" className='h-8' />
                        </div>

                    </div>


                </div>



            </div>

        </nav>
    )
}
