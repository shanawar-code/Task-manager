import React from 'react'
import MyTeamCard from './MyTeamCard'
import Cards from './Cards'
 export function Dashboard() {
  return (
   <>
   <div className=' p-5'>
    <Cards/>
    <MyTeamCard/>
    <div className=' grid grid-cols-12 my-5'></div>
   </div>
   </>
  )
}

