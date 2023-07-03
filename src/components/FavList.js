import React from "react";
import Fav from "./Fav";
import './FavList.css';
import DeleteButton from "./DeleteButton";

const FavList = ({favImages, clearFavList}) => {
    const favImageListItems = favImages.map((image, index) => {
        return <Fav image={image} key={index}/>
      
    })

    

    return (
<>
<h2>Favourites List</h2>
<div>
    <DeleteButton clearFavList={clearFavList}/>
</div>

<div className="favContainer">
<div className="favList">
    {favImageListItems}
</div>
</div>


</>

    )
  
}

export default FavList;
