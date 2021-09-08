import React, { useState } from 'react';
// import StarRating from './component/StarRating';
// import {colors as colorData}  from './color-data.json';
import ColorList from './ColorList';
import AddColorForm from './component/AddColorForm';
import Checkbox from './component/Checkbox';
import {useWindowSize} from './hook/useWindowSize';
import {useMousePosition} from './hook/useMousePosition'
// import {v4} from 'uuid';
function App() {
  // const [colors, setColors] = useState(colorData);
  const [width, height] = useWindowSize();
  const [x, y] = useMousePosition();
  const [promiseTest, setPromiseTest] = useState();

  new Promise((resolve, reject)=>{
      setTimeout(function(){
        resolve("Success!");
      }, 3000);
  }).then((successMessage)=>{
    console.log(successMessage);
  })
  
  return (
    <div className="App">
      {width} / {height} <br></br>
      {x} / {y}
  {/*     <Checkbox/> */}
      <AddColorForm 
/*         onNewColor={(title, color)=>{
          const newColors = [
            ...colors,
            {
              id: v4(),
              rating: 0,
              title,
              color,
            }
          ]
          setColors(newColors);
        }} */
      />
      <ColorList 
/*         colors={colors} 
        onRateColor={(id, rating)=>{구
          const newColors = colors.map(color => 
            color.id === id? {...color, rating} : color
          )
          setColors(newColors);
        }}
        onRemoveColor={id=>{
          const newColors = colors.filter(color => color.id !== id);
          setColors(newColors);
        }}*/
      />
      {/* <StarRating style={{backgroundColor: "lightblue"}}/> */}
    </div>
  );
}

export default App;
