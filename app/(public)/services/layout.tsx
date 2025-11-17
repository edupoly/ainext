import React from 'react'
import ServiceNavbar from './ServiceNavbar'

function ServiceLayout({children}:{children:React.ReactNode}) {
  return (
    <div>
        <ServiceNavbar></ServiceNavbar>
        {children}
    </div>
  )
}

export default ServiceLayout