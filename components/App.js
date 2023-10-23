import React from 'react'
import Reascii from './Reascii'
import { CanvasProvider } from './useCanvas';

const App = () => {
  return (
    <div>
      <CanvasProvider>
        <Reascii border={{top: " ▚", bottom: "▎"}} />
      </CanvasProvider>
    </div>
  );
}

export default App;