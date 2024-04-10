import { useEffect, useState, useContext } from "react"
import Navbar from "./components/navbar/Navbar"
import ImageCard from "./components/imageCard/ImageCard"
import { SearchContext } from "./context/SearchContext"
import './App.css'
const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchContext = useContext(SearchContext);

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${searchContext.searchTerm}&image_type=photo&pretty=true`)
      .then((res)=> res.json())
        .then((data) => {
          setImages(()=>data.hits);
          setLoading(false);
        })
          .catch((err) => console.log(err))
  }, [searchContext.searchTerm])

  return (
    <>
    <div className=" bg-custom-custom-blue h-screen">
      <Navbar />

      {!loading && images.length===0 && <h1 className="text-5xl font-semibold font-sans text-white text-center mt-3 ">Not Found</h1>}

      {loading ? <h1 className="text-5xl font-semibold font-sans text-white flex justify-center align-center">Loading...</h1> 
      :
      <div className="relative flex flex-wrap mx-auto justify-center overflow-hidden w-full bg-custom-custom-blue">
        {images.map((items, index)=>{
          return(
          <div className="w-1/4 sm:w-1/2 sm:h-[90%]" key={index} >
            <ImageCard image={items.largeImageURL} comments={items.comments} likes={items.likes} views={items.views} author={items.user} authorImage={items.userImageURL} />
          </div> 
        )})}
      </div>
      }

      </div>
    </>
  )
}

export default App
