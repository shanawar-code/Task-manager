import React from 'react'

function UltimateCard({fullname, role, numberoftasks, attendance ,btnText, heading, buttonBtn}) {

    const cardData=[
        {
            textColor: 'text-[#04AA77]',
            name: 'Rudolph ',
            tasks: '14 Tasks'
        },
        {
            textColor: 'text-[#E5CC46]',
            name: 'Anna  ',
            tasks: '12 Tasks'
        },
        {
            textColor: 'text-[#E5CC46]',
            name: 'Marco D',
            tasks: '13 Tasks'
        },
        {
            textColor: 'text-[#E5CC46]',
            name: 'Robert  ',
            tasks: '10 Tasks'
        },
    ]

  return (
    <>
     <div className=''>
        <div className=' border rounded-xl p-4 bg-white'>
            <div className='flex items-center justify-between'>
            <h1 className=' text-base font-semibold font-public-sans text-gray-1'>{heading}</h1>
            {buttonBtn}
            </div>
            <div className='overflow-x-auto'>
            {cardData.map((value,index)=>{
                return(
                    <>
                     <div key={index} className=' min-w-[450px] flex items-center justify-between border-b-2 pb-3 mt-7'>
                <div className='flex items-center gap-3'>
                    <img src='/images/Img.png' width={42} alt="" />
                    <h1 className=' text-sm font-public-sans font-medium text-gray-1'>{value.name}</h1>
                </div>
                <div>
                    <h1 className=' text-sm font-public-sans font-medium text-gray-1'>{role}</h1>
                </div>
                <div>
                    <h1 className=' text-sm font-public-sans font-medium text-gray-1'>{value.tasks}</h1>
                </div>
                <div>
                    <h1 className={` text-sm font-public-sans font-medium ${value.textColor}`}>{attendance}</h1>
                </div>
            </div> 
                    </>
                )
            })}
            </div>
        </div>
    </div>
    </>
  )
}

export default UltimateCard