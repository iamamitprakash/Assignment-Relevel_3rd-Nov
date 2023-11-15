import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import './App.css';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const handleColorChange = (color) => {
    setBackgroundColor(color.hex);
  };

  return (
    <div className="App" style={{ backgroundColor }}>
      <header className="App-header">
        <h1>Color Picker App</h1>
        <SketchPicker color={backgroundColor} onChange={handleColorChange} />
        <p>Selected Color Code: {backgroundColor}</p>
      </header>
    </div>
  );
}

export default App;
