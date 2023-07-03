import React from "react";
import './FavList.css';

const Fav = ({image, index}) => {
    // return <li>{image ? <img src={image.links[0].href} width="300"></img> : null}</li>
    if(!image) {
        return null
    }

  return <div className="favList">
    <img src={image.image.links[0].href} className="favImage"></img>
    <br></br>
    <button className="center">Delete</button>
  </div>


    // return (
    //     <div>
    //     {image.data[0].nasa_id}
    //     </div>
    //     )
        
  
}

export default Fav;