import React from 'react'
import './style.css'

const Banner = () => {
  return (
    <div className='banner_box'>

        <div className="text">
            <div className="first_txt">
                Good food  
            </div>
               
               {/* <div className="msg_img">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/8d4c92c51d32101d6b7ac6ea7ad467cc" alt="" />
               </div> */}

            <div className="sm_txt">
                Good Life 
            </div>
        </div>

        <div className="bnner_img">
            <img src="https://img.freepik.com/premium-photo/kids-with-tacos-enchanted-motorcycle-3d-flat-icon-fast-food-delivery-concept_980716-323586.jpg?ga=GA1.1.2081771147.1717390003&semt=ais_hybrid" alt="" />
        </div>


    </div>
  )
}

export default Banner