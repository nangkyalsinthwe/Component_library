import React from 'react'
import Badges from './Components/Badges'
import Banners from './Components/Banners'
import Cards from './Components/Cards'
import Testimonials from './Components/Testimonials'
import Tooltip from './Components/Tooltip'
import Toast from './Components/Toast'
import { CloudUpload } from 'lucide-react'
import userPhoto from './assets/christina.jpg'

import mark from './assets/Mark.png'



function App() {

  //Badges 
  const colors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"]
  const renderBadges = (shape) => {
    return colors.map((color) => (
      <div key={color}>
        <Badges color={color} shape={shape}>Badge</Badges>
      </div>
    ))
  }

  //Banners
  const bannersData = [
    {
      status: "success",
      title: "Congratulations!",
      description: "Your application has been approved. You can now access all features of the dashboard."
    },
    {
      status: "warning",
      title: "Attention",
      description: "Your subscription is about to expire in 3 days. Please renew to avoid service interruption."
    },
    {
      status: "error",
      title: "There was a problem with your submission",
      description: "Please check your network connection and try again. Some fields are missing or invalid."
    },
    {
      status: "neutral",
      title: "Update available",
      description: "A new software version is available. See what's new in version 2.0.4."
    },
  ]

  //Tooltip
  const tooltipColors = ['black', "blue", 'purple', 'green']

  // Toast Popups
  const toastData = [
    {
      status: "success",
      title: "Success",
      description: "Your work has been saved"
    },

    {
      status: "warning",
      title: "Warning",
      description: "A network error was detected"
    },

    {
      status: "information",
      title: "Information",
      description: "Please read updated information"
    },
    {
      status: "error",
      title: "Error",
      description: "Please re-save your work again"
    },
  ]

  return (
    <div className='content'>

      <section className='Badges'>
        <h1 id='badges-head'>Badges</h1>
        <div className='badge-square-container'>
          <h1 id='square-intro'>Square</h1>
          {renderBadges('square')}
        </div>

        <div className='badge-pill-container'>
          <h1 id='pill-intro'>Pill</h1>
          {renderBadges('pill')}
        </div>
      </section>

      <section className='Banners'>
        <h1 id='banner-head'>Banners</h1>
        <div className="banner-container">
          <div className='multi-container'>
            <h2 id='multi-head'>Multi Line</h2>
            {bannersData.map((banner) => (
              <Banners
                key={banner.status}
                status={banner.status}
                title={banner.title}
              >
                {banner.description}
              </Banners>
            ))}
          </div>
          <div className='single-container'>
            <h2 id='single-head'>Single Line</h2>
            {bannersData.map((banner) => (
              <Banners
                key={banner.status}
                status={banner.status}
                title={banner.title}
              />
            ))}
          </div>
        </div>
      </section >

      <section className='Cards'>
        <h1 id="cards-head">Cards</h1>
        <div className="cards-container">
          <div className='card-item'>
            <span className='card-label'>Card</span>
            <Cards
              title="Easy Deployment"
              icon={<CloudUpload className='icon' />}>
              Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.            </Cards>
          </div>
          <div className='card-item'>
            <span className='card-label'>Card - hover</span>
            <Cards
              title="Easy Deployment"
              className='card-hover-manual'
              icon={<CloudUpload className='icon' />}>
              Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.            </Cards>
          </div>
        </div>
      </section>

      <section className='Testimonials'>
        <h1 id='testimonial-head'>Testimonials</h1>
        <div className="test-container">
          <div className="test-item">
            <h2 className='label-font'>WITH PIC</h2>
            <Testimonials
              variant='with-pic'
              image={userPhoto}
              name="May Anderson"
              role="Workcation, CTO"
            >
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed urna nulla vitae laoreet augue.
              Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
            </Testimonials>

          </div>
          <div className="text-item">
            <h2 className='label-font'>NO PIC</h2>
            <Testimonials
              variant="no-pic"
              logo={mark}
              name="May Anderson"
              role="Workcation, CTO"
            >
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae.
              Numquam corrupti in laborum sed rerum et corporis.”
            </Testimonials>
          </div>
        </div>
      </section>

      <section className='Tooltips'>
        <h1 id="tooltip-head">Tooltips</h1>
        <div className="tooltip-container">
          <div className="tooltip-column">
            {tooltipColors.map((color) => (
              <Tooltip key={color}
                color={color}
                variant='bold'
                title="Archive notes">
                Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
              </Tooltip>
            ))}
          </div>
          <div className="tooltip-column">
            {tooltipColors.map((color) => (
              <Tooltip key={color}
                color={color}
                variant='light'
                title="Archive notes">
                Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
              </Tooltip>
            ))}
          </div>
        </div>
      </section>
      <section className='Toasts'>
        <h1 id='toast-head'>Toast Popups</h1>
        <div className="toasts-container">
          {toastData.map((toast) => (
            <Toast
              key={toast.status}
              status={toast.status}
              title={toast.title}
            >
              {toast.description}
            </Toast>
          ))}
        </div>
      </section>
    </div >
  )
}

export default App




