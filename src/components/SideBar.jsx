import React from 'react'

export const SideBar = () => {
    const data = [{
        label: "Dashboard",
        icon: ""
    }]

    return (
        <div className='flex flex-col relative left-0 px-4 bg-white py-8 border-r-2 w-1/6  h-[89vh] items-center justify-between'>
            <div className='w-full flex flex-col space-y-4'>
                <div
                    className='bg-gradient-to-r from-[#F33F41] to-[#FB6D72] p-4 rounded-lg flex flex-row space-x-4 text-white w-full'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="8" height="8" rx="2" transform="matrix(-1 0 0 1 22.001 1.99927)" stroke="#FEFEFE" stroke-width="1.3" />
                        <rect width="8" height="20" rx="2" transform="matrix(-1 0 0 1 10 2.00073)" stroke="#FEFEFE" stroke-width="1.3" />
                        <rect width="8" height="8" rx="2" transform="matrix(-1 0 0 1 22.0009 13.9993)" stroke="#FEFEFE" stroke-width="1.3" />
                    </svg>
                    <p>
                        Dashboard
                    </p>
                </div>


                <div
                    className='bg-white p-4 rounded-lg flex flex-row space-x-4 text-[#828282] w-full'>
                    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 9L13 9" stroke="#828282" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5 15L11 15" stroke="#828282" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12.3951 2.45044H14.8793C15.9838 2.45044 16.8793 3.34587 16.8793 4.45044V18.9999C16.8793 20.1045 15.9839 20.9999 14.8793 20.9999H3.12012C2.01555 20.9999 1.12012 20.1045 1.12012 18.9999V4.45044C1.12012 3.34587 2.01555 2.45044 3.12012 2.45044L5.61448 2.45044" stroke="#828282" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                        <rect x="5.61487" y="1" width="6.76896" height="2.90098" rx="1" stroke="#828282" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <p>
                        My Tasks
                    </p>
                </div>

            </div>

            <div
                className='bg-white p-4 rounded-lg flex flex-row space-x-4 text-[#828282] w-full'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.7988 2H5C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H11.7988" stroke="#828282" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M17.4931 7.49304L22 11.9862L17.4931 16.493" stroke="#828282" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M22 11.993H8.1485" stroke="#828282" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>


                <p>
                    Logout
                </p>
            </div>


        </div>
    )
}
