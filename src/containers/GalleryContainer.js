import React,{useState, useEffect} from 'react';
import ImageSelector from '../components/ImageSelector';
import Image from '../components/Image';
import FavList from '../components/FavList';

const GalleryContainer = () => {
  const [images, setImages] = useState([""]);
  const [selectedImage, setSelectedImage] = useState("");
  const [favImages, setFavImages] = useState([]);

  const getImages = () => {
    fetch("https://images-api.nasa.gov/search?q=galaxies")
    .then(response => response.json())
    .then(imagesData => setImages(imagesData.collection.items));
  }

  const addToFavourites = (image) => {
    console.log(image);
    if (favImages.includes(image)){
        return null
    }else{

    setFavImages([...favImages, image]);
    console.log(favImages);
    }
  }

  const deleteFromFavourites = (index) => {
    console.log(index);
    const temp= favImages.slice(index, 1);
    setFavImages(temp);
  }

useEffect(() => {
  getImages();
},[])

const handleImageSelected = (image) => {
    setSelectedImage(image);
    console.log(image);
}

const clearFavList = () => {
    setFavImages([]);
}

return (
    <>
    
     <ImageSelector images={images} onImageSelected={handleImageSelected}/>
     <Image image={selectedImage} addToFavourites={addToFavourites}></Image>
     <FavList favImages={favImages} clearFavList={clearFavList} deleteFromFavourites={deleteFromFavourites}/>
     
    </>
)

}

export default GalleryContainer;
