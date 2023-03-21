import React, { useRef } from "react";
import { motion } from "framer-motion";
import frame from "../Assets/Frame 37143.png";
import cloud from "../Assets/cloud.png";
import dot from "../Assets/dot.png";

const RetouchItem = (props) => {
  let { item } = props;
  console.log({item});
  return (


        <div className='row project-item'>
            <div className='col-6 project-item__image'>

              <img src={frame} alt="My Image" />

              <div className='project_item'>
                <div className='project-item_img'>
                  <div className='project-item_img-detail'>
                    <img src={cloud} alt="My Image" />
                  </div>
                  <div className='project-item_img-text'>
                   <p>{item && item.item}</p>
                  </div>
                </div>
                <div className='project-item_bio'>
                  <p>1200 USD / 150 images</p>
                </div>
              </div>
            </div>
            <div className='col-3 project-item__deadline'>
              <p>24 Aug, 2022 (24 hours)</p>
            </div>
            <div className='col-2 project-item__status'>
              <button class="project_item_status-textfix">FIX REQUESTED</button>
            </div>
            <div className='col-1 project-item__action'>
              <img className='table_content--img1' src={dot} alt="My Image" />
            </div>
          </div>
          
      // <div></div>
  
  )
}

export default RetouchItem;