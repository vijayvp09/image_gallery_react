const ImageCard = ({children,...props}) => {
    const{image, comments, views, likes, author} = props;
    return (
        <div className="rounded-md m-5 p-0 min-h-52  shadow-xl overflow-hidden bg-gray-50 border-spacing-1 border-gray-100 ">
            <div className="overflow-hidden">
                <img src={image} alt="" className="p-2 shadow-sm rounded-sm transition hover:scale-110 duration-300" />
            </div>
            <ul className="flex space-x-1 min-h-8">
                <li>{author}</li>
                <li>{likes}</li>
                <li>{views}</li>
                <li>{comments}</li>
            </ul>
        </div>
    )
}

export default ImageCard;