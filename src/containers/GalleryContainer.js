import React,{useState, useEffect} from 'react';
import ImageSelector from '../components/ImageSelector';

const GalleryContainer = () => {
  const [images, setImages] = useState([""]);
  const [selectedImage, setSelectedImage] = useState("");
//   const [favImages, setFavImages] = useState([""]);

  const getImages = () => {
    fetch("https://images-api.nasa.gov/search?q=galaxies")
    .then(response => response.json())
    .then(imagesData => setImages(imagesData.collection.items));
  }

useEffect(() => {
  getImages();
},[])

const handleImageSelected = (image) => {
    setSelectedImage(image);
    console.log(image);
}

return (
    <>
    <p>I am a gallery container</p>
    {/* {images? <p>{images[0].data[0].nasa_id}</p> : null} */}
    {/* {images ? <img src={images[1].links[0].href}></img> : null}
     */}
     <ImageSelector images={images} onImageSelected={handleImageSelected}/>
    </>
)

}

export default GalleryContainer;
