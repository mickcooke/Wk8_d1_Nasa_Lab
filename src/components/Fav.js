import React from "react";
import './FavList.css';

const Fav = ({image, index}) => {
    // return <li>{image ? <img src={image.links[0].href} width="300"></img> : null}</li>
    if(!image) {
        return null
    }

  return <div><img src={image.image.links[0].href} className="favList"></img></div>


    // return (
    //     <div>
    //     {image.data[0].nasa_id}
    //     </div>
    //     )
        
  
}

export default Fav;