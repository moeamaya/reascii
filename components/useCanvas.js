import React, { createContext, useContext, useState } from 'react';

const CanvasContext = createContext();

export function useCanvas() {
  return useContext(CanvasContext);
}

export function CanvasProvider({children}) {
  const [canvas, setCanvas] = useState({
    canvasWidth: 0,
    asciiWidth: 0,
    characterWidth: 0,
  });

  const updateCanvas = (canvas) => {
    setCanvas(canvas);
  }

  return (
    <CanvasContext.Provider value={{ canvas, updateCanvas }}>
      {children}
    </CanvasContext.Provider>
  );
}