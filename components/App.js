import React from 'react'
import Reascii from './Reascii'
import { CanvasProvider } from './useCanvas';

const App = () => {
  return (
    <>
    <div>
      <CanvasProvider>
        <Reascii border={{top: " ▚", bottom: "▎"}} />
      </CanvasProvider>
    </div>

     
    <div style={{display: "none", marginTop: "2rem"}}>
      <div>Title...................<a href="#" style={{color: "var(--color-brand)"}}>Menu</a>....................Longer text that stretch.........{"{╍}"}</div>
      <div>................................................es over 3 very nice and ............</div>
      <div>................................................clean lines, but also wh............</div>
      <div>................................................at if it's crazy long...............</div>
    </div>
    </>
  );
}

export default App;