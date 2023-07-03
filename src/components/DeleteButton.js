import React from "react";

const DeleteButton = ({clearFavList}) => {

    const handleClick = () => {
       
        clearFavList();
    
    }
    return <button onClick={handleClick}>Clear List</button>
}

export default DeleteButton;