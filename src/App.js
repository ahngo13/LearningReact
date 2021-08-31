import React, { useState } from 'react';
// import StarRating from './component/StarRating';
import {colors as colorData}  from './color-data.json';
import ColorList from './ColorList';
function App() {
  const [colors, setColors] = useState(colorData);
  return (
    <div className="App">
      <ColorList 
        colors={colors}
        onRemoveColor={id=>{
          const newColors = colors.filter(color => color.id !== id);
          setColors(newColors);
        }}
      />
      {/* <StarRating style={{backgroundColor: "lightblue"}}/> */}
    </div>
  );
}

export default App;
