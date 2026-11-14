import React from 'react'
import { Inbox, X } from 'lucide-react'
import './Tooltip.css'

const Tooltip = ({ title, variant, color, children }) => {
  return (
    <div className={`tooltip tooltip-${variant} tooltip-${color}`}>
      <div className='tooltip-top'>
        <Inbox className='tooltip-icon' size={24} />
        <div className="tooltip-content">
          <h1 id='tooltip-title'>{title}</h1>
          <p id="tooltip-desc">{children}</p>
        </div>
        <X className="close-btn" size={24} />
      </div>
      <div className="tooltip-tail"></div>
    </div>
  )
}


export default Tooltip

