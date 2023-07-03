import React from "react";
import Fav from "./Fav";
import './FavList.css';

const FavList = ({favImages, clearFavList}) => {
    const favImageListItems = favImages.map((image, index) => {
        return <Fav image={image} key={index}/>
      
    })

    const handleClick = () => {
       
        clearFavList();
    
    }

    return (
<>
<h2>Favourites List</h2>
<div className="favList">
    {favImageListItems}
</div>
<button onClick={handleClick}>Clear List</button>

</>

    )
  
}

export default FavList;
