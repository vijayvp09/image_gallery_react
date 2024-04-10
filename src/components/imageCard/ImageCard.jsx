import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";

const ImageCard = ({children,...props}) => {
    const{image, comments, views, likes, author, authorImage} = props;
    const [previewImage, setPreview] = useState("");
    
    const handleImageClick = (image) => {
        setPreview(image)
    }

    const closePreview = () => {
        setPreview(null)
    }
    return (
        <div className="">
        <div className="rounded-md m-3 p-2 min-h-52  shadow-xl overflow-hidden bg-gray-50 border-spacing-1 border-gray-100 ">
            <div className="overflow-hidden">
                <img src={image} onClick={()=> handleImageClick(image)} alt="" className="p-0 shadow-sm rounded-sm lg:hover:scale-125 transform scale-100 transition duration-700 hover:scale-125 " />
            </div>
            <ul className="space-x-1 min-h-8">
                <div className="flex items-center">
                    <img src={authorImage} alt="" className="rounded-full size-8 m-2" />
                    <li>{author}</li>
                </div>
                <div className="flex justify-around items-around">
                    <li className=" my-2 hover:text-blue-400">
                        <div className="flex justify-center ">
                            <AiOutlineLike className="" />
                        </div>
                        {likes > 999 ? (likes/1000).toFixed(1)+`k` : likes}
                    </li>
                    <li className=" my-2 hover:text-blue-400">
                        <div className="flex justify-center  ">
                            <AiOutlineEye />
                        </div>
                        {views > 999 ? (views/1000).toFixed(1)+`k` : views}
                    </li>
                    <li className="my-2 hover:text-blue-400">
                        <div className="flex justify-center ">
                            <BiComment />
                        </div>
                        {comments > 999 ? (comments/1000).toFixed(1)+`k`: comments}
                    </li>
                </div>
            </ul>
            </div>
            {previewImage && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-90 transition duration-700 z-50" onClick={closePreview}>
                    <img src={previewImage} alt="" className="max-w-full max-h-full" />
                </div>)}
        </div>
    )
}

export default ImageCard;