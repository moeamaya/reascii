import React from 'react'
import ReactDom from 'react-dom/client'

let Greet = () => <h1>Hello, world!</h1>

const container = document.getElementById('root');
const root = ReactDom.createRoot(container);
root.render(<Greet />);