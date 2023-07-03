import React from "react";

const Fav = ({image, index}) => {
    // return <li>{image ? <img src={image.links[0].href} width="300"></img> : null}</li>
    if(!image) {
        return null
    }

  return <img src={image.image.links[0].href} width="300"></img>


    // return (
    //     <div>
    //     {image.data[0].nasa_id}
    //     </div>
    //     )
        
  
}

export default Fav;