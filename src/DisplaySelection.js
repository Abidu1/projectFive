import React from 'react';
import ReviewMakeup from './ReviewMakeup';

//Used to display api function by getting the image and name of makeup product
const DisplaySection = (props ) => {
    return(
      <section >
        <div className="imageDisplay">
        {
        // maps runs through and display the different products with name and image
          props.items.map((displayItem) => {
            return(
            <div className="wrapper">
              <div key={displayItem._id} >
                <div className="makeupItems">
                    <img src={displayItem.image_link} alt={displayItem.name}></img> 
                    <p>{displayItem.name}</p>    
                    <a href={displayItem.product_link}>Buy Now</a>     
                </div>
            </div>
            </div>
          );    
        })
      }
      </div> 
    </section> 
  )
}


export default DisplaySection;
