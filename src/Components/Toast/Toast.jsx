import React from 'react'
import "./Toast.css"
import { CheckCircle, AlertTriangle, XCircle, Info } from 'lucide-react'

const Toast = ({ title, status, children }) => {
  const icons = {
    success: <CheckCircle className="toast-icon" />,
    information: <Info className="toast-icon" />,
    warning: <AlertTriangle className="toast-icon" />,
    error: <XCircle className="toast-icon" />,
  }
  return (
    <div className={`toast toast-${status}`}>
      <div className="toast-header">
        {icons[status]}
        <h4 className="toast-title">{title}</h4>
      </div>
      <div className='toast-content'>{children}</div>
    </div>
  )
}

export default Toast