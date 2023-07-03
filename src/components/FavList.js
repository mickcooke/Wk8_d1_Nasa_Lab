import React from "react";
import Fav from "./Fav";
import './FavList.css';
import DeleteButton from "./DeleteButton";

const FavList = ({favImages, clearFavList, deleteFromFavourites}) => {
    const favImageListItems = favImages.map((image, index) => {
        return <Fav image={image} index={index} deleteFromFavourites={deleteFromFavourites}/>
      
    })

    

    return (
<>
<section>
<h2>Favourites List</h2>
<div>
    <DeleteButton clearFavList={clearFavList}/>
</div>
</section>

<div className="favContainer">

    {favImageListItems}

</div>


</>

    )
  
}

export default FavList;
