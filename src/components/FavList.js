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
