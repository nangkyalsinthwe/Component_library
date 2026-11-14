import React from 'react'
import './Banners.css'
import { CheckCircle, AlertTriangle, XCircle, Info } from 'lucide-react'


const Banners = ({ status, title, children }) => {

  const icons = {
    success: <CheckCircle className="banner-icon" />,
    warning: <AlertTriangle className="banner-icon" />,
    error: <XCircle className="banner-icon" />,
    neutral: <Info className="banner-icon" />
  }

  return (
    <div className={`banner banner-${status}`}>
      <div className="banner-header">
        {icons[status]}
        <h4 className="banner-title">{title}</h4>
      </div>
      {
        children &&
        <div className='banner-content'>{children}</div>
      }

    </div>
  )
}
export default Banners;
