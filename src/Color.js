import { FaTrash } from "react-icons/fa";
import { useColors } from "./component/color-hooks";
import StarRating from "./component/StarRating";

export default function Color({
    id, 
    title, 
    color, 
    rating, 
    // onRemove = f => f,
    // onRate = f => f
}){

    const {rateColor, removeColor} = useColors();
    return(
        <section>
            <h1>{title}</h1>
            <button onClick={()=> removeColor(id)}>
                <FaTrash/>
            </button>
            <div style={{height: 50, backgroundColor: color}}/>
            <StarRating 
                selectedStars={rating}
                onRate={rating=>rateColor(id, rating)}    
            />
        </section>
    )
}