import {FaStar} from 'react-icons/fa';
//onSelect 가짜 함수
export default function Star({selected = false, onSelect = f => f}){
    return(
        <>
            <FaStar color={selected ? "red" : "gray"} onClick={onSelect}/>
        </>
    )
}