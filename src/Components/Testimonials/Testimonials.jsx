import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import './Testimonials.css'


const Testimonials = ({ image, logo, children, name, role, variant, }) => {
  const isWithPic = variant === 'with-pic'

  return (
    <div className={`testimonial ${isWithPic ? 'tp-with-pic' : 'tp-no-pic'}`}>

      {isWithPic && image && (
        <img src={image} alt='user' className='userPhoto' />
      )}

      {!isWithPic && (
        <div className="tp-logo">
          <img src={logo} alt='mark' className='mark-pic' />
          <h2>Work<span className='logo-text'>cation</span></h2>
        </div>
      )}

      <div className="testimonial-info">
        <div className="tp-body">
          {isWithPic && <FontAwesomeIcon icon={faQuoteLeft} className='icon-quote' />}
          <p className='tp-text '>{children}</p>
        </div>
        <div className="tp-author">
          <span className="name">{name} </span>
          {!isWithPic && <span className="tp-divider"> / </span>}
          <span className="tp-role">{role}</span>
        </div>
      </div>

    </div>


  )
}

export default Testimonials