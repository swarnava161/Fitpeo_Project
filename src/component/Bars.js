import React from 'react'
import "./mainContent.css"

function Bars({ height, width, month, backgroundColor }) {
    
  return (
    <div style={{height:"200px", display:"flex", flexDirection:"column", justifyContent:"flex-end"}}>
    <div className='d-flex flex-column justify-content-center  ' >
      <div className='my-2 bar' style={{ height, backgroundColor, borderRadius: "8px",  }}></div>
      <div className=' text-center' style={{ fontSize: "12px", width }}>{month}</div>
    </div>
    </div>
  )
}

export default Bars
