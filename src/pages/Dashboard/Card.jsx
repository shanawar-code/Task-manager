import React from 'react'

export const Card = ({ title, value, icon, footerText }) => {
    return (
        <div
            className='flex flex-col border bg-white p-4 space-y-2 rounded-lg text-sm text-gray-4'>
            <div className='text-black'>{title}</div>
            <div className="flex items-center justify-between space-x-2">
                <p className="text-black text-xl">{value}</p>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6686 8.87988H17.835" stroke="url(#paint0_linear_38_956)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6.77393 8.87988L7.51198 9.62988L9.72614 7.37988" stroke="url(#paint1_linear_38_956)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12.6686 15.8799H17.835" stroke="url(#paint2_linear_38_956)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6.77393 15.8799L7.51198 16.6299L9.72614 14.3799" stroke="url(#paint3_linear_38_956)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9.35225 22H15.2567C20.177 22 22.1452 20 22.1452 15V9C22.1452 4 20.177 2 15.2567 2H9.35225C4.43189 2 2.46375 4 2.46375 9V15C2.46375 20 4.43189 22 9.35225 22Z" stroke="url(#paint4_linear_38_956)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <defs>
                        <linearGradient id="paint0_linear_38_956" x1="15.0796" y1="9.87988" x2="15.0796" y2="8.92988" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F33F41" />
                            <stop offset="1" stop-color="#FB6D72" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_38_956" x1="8.15163" y1="9.62988" x2="8.15163" y2="7.49238" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F33F41" />
                            <stop offset="1" stop-color="#FB6D72" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_38_956" x1="15.0796" y1="16.8799" x2="15.0796" y2="15.9299" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F33F41" />
                            <stop offset="1" stop-color="#FB6D72" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_38_956" x1="8.15163" y1="16.6299" x2="8.15163" y2="14.4924" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F33F41" />
                            <stop offset="1" stop-color="#FB6D72" />
                        </linearGradient>
                        <linearGradient id="paint4_linear_38_956" x1="11.6484" y1="22" x2="11.6484" y2="3" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F33F41" />
                            <stop offset="1" stop-color="#FB6D72" />
                        </linearGradient>
                    </defs>
                </svg>

            </div>
            <div>{footerText}</div>
        </div>
    )
}

