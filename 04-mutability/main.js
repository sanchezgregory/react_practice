import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { inmutabilityPractice } from './inmutability.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Inmutability and Spread Operator practice!</h1>
    <div class="card">
      Open Console to see 
    </div>
  
  </div>
`

inmutabilityPractice(document.querySelector('#counter'))
