import React from "react";
import Fav from "./Fav";
import './FavList.css';

const FavList = ({favImages}) => {
    const favImageListItems = favImages.map((image, index) => {
        return <Fav image={image} key={index}/>
      
    })

    return (
<>
<h2>Favourites List</h2>
<div className="favList">
    {favImageListItems}
</div>

</>

    )
  
}

export default FavList;
