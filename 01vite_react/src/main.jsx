import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// const reactElement={   //REACT does not expect element in this form
//   typeof:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'Click here to visit google'
// }

const anotherElement=(
  <a href='https://google.com'>google</a>
)

const anotherName='sharansh'

const object= React.createElement(  //React expects element in this way
  'a',{href:'https://google.com',target:'_blank'},
  'Click here to visit google',
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
 anotherElement
)
