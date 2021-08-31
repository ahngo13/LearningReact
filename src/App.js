import React, { useState } from 'react';
// import StarRating from './component/StarRating';
// import {colors as colorData}  from './color-data.json';
import ColorList from './ColorList';
import AddColorForm from './component/AddColorForm';
// import {v4} from 'uuid';
function App() {
  // const [colors, setColors] = useState(colorData);
  return (
    <div className="App">
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
        onRateColor={(id, rating)=>{
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
