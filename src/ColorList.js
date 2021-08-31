import React, {useContext} from "react";
import { useColors } from "./component/color-hooks";
import Color from "./Color";

// export default function ColorList({colors=[], onRemoveColor = f => f, onRateColor = f => f}){
export default function ColorList(){
    const {colors} = useColors();
    if(!colors.length) return <div>표시할 색이 없습니다.</div>;
    return (
        <div>
            {colors.map(color => <Color key={color.id} {...color}/>)}
            {/* {colors.map(color => <Color key={color.id} {...color} onRemove={onRemoveColor} onRate={onRateColor}/>)} */}
        </div>
    )
}