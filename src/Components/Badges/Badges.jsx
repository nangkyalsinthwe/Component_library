import React from 'react'
import "./Badges.css"

const Badges = ({ children, color, shape }) => {

  const variantClass = `badge-${color}`
  const shapeClass = shape === 'pill' ? 'badge-pill' : 'badge-square'
  return (
    <div className={`badge ${variantClass} ${shapeClass}`}>
      {children}
    </div>
  )
}

export default Badges