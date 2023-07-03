import React from "react";
import './FavList.css';

const Fav = ({image, deleteFromFavourites, index}) => {
   
    const handleClick = (event) => {
        deleteFromFavourites({index});
      
    }


    if(!image) {
        return null
    }

  return <div className="favList">
    <img src={image.image.links[0].href} className="favImage"></img>
    <br></br>
    <button className="center" onClick={handleClick} value={index}>Delete</button>
  </div>


    // return (
    //     <div>
    //     {image.data[0].nasa_id}
    //     </div>
    //     )
        
  
}

export default Fav;