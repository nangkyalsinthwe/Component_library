import React from 'react'
import "./Cards.css"

const Cards = ({ title, icon, children, className }) => {
  return (
    <div className={`card ${className}`}>
      <div className="card-header">
        {icon}
        <h3 className='card-title'>{title}</h3>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}

export default Cards