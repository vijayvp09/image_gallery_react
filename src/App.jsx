import { useEffect, useState } from "react"
import ImageCard from "./components/imageCard/ImageCard";
import './App.css'
const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;

function App() {
  const [images, setImages] = useState([]);

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${API_KEY}&q=cat+smile&image_type=photo&pretty=true`)
    .then((res)=> res.json())
    .then((data) => {

      setImages(()=>data.hits);

    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <div className="flex flex-wrap mx-auto overflow-hidden w-full bg-cyan-600">
        {images.map((items, index)=>{

          return(
          <div className="w-1/4" key={index} >
            <ImageCard image={items.largeImageURL} comments={items.comments} likes={items.likes} views={items.views} author={items.user} />
          </div> 
          
        )})}
      </div>
    </>
  )
}

export default App
