import React from 'react'

function RoundedCard({className, children, customPadding}) {
  return (
    <>
    <div className={`border bg-white rounded-xl ${className?className: ''} ${customPadding?customPadding:'p-5'}`}>
        {children}
    </div>
    </>
  )
}

export default RoundedCard