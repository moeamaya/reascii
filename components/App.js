import React from 'react'
import Reascii from './Reascii'

const App = () => {
  return (
    <div>
      <Reascii border={{top: ":", bottom: ":"}} />
    </div>
  );
}

{/* <div ref={parentContainerRef} style={{ color: textColor, backgroundColor: bgColor, outline: `1px solid #eee` }}>
  <div data-ascii={borderStyle.top.repeat(borderWidth)}>{borderStyle.top.repeat(borderWidth)}</div>
  <Column fillChar="." cols={3} width={borderWidth} characterWidth={characterWidth}>.</Column>
  <Column fillChar="." cols={2} width={borderWidth} characterWidth={characterWidth}>○ NIGHT</Column>
  <Column fillChar="." cols={2} width={borderWidth} characterWidth={characterWidth}>○ ALL CATEGORIES</Column>
  <Column fillChar="." cols={2} width={borderWidth} characterWidth={characterWidth}>.</Column>
  <Column fillChar="." cols={2} width={borderWidth} characterWidth={characterWidth}>↗SUMBIT↗</Column>
  <Column fillChar="." cols={1} width={borderWidth} characterWidth={characterWidth}>.</Column>
  {borderStyle.bottom.repeat(borderWidth)}
</div> */}

export default App;