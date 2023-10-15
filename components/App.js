import React from 'react'
import Reascii from './Reascii'

const App = () => {
  return (
    <>
    <div>
      <Reascii border={{top: " ▚", bottom: "▎"}} />
    </div>

     
    <div style={{marginTop: "2rem"}}>
      <div>Title...................<a href="#" style={{color: "var(--color-brand)"}}>Menu</a>....................Longer text that stretch.........{"{╍}"}</div>
      <div>................................................es over 3 very nice and ............</div>
      <div>................................................clean lines, but also wh............</div>
      <div>................................................at if it's crazy long...............</div>
    </div>
    </>
  );
}

export default App;