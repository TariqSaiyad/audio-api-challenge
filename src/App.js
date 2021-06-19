import React, { useState } from 'react'
import { hot } from 'react-hot-loader'
import CodeEditor from './components/CodeEditor'
import Header from './components/Header'
import { parseNode } from './utils/utils'
import * as Tone from 'tone'

import './scss/main.scss'
import './App.scss'
import Conductor from './classes/Conductor'

function App() {
  const acorn = require('acorn')
  const walk = require('acorn-walk')
  const conductor = new Conductor()
  const [code, setCode] = useState(
    `for (var i = 1; i < 16; i++) {
  if (i % 15 == 0) console.log('FizzBuzz')
  else if (i % 3 == 0) console.log('Fizz')
  else if (i % 5 == 0) console.log('Buzz')
  else console.log(i)
}`
  )

  function onChange(value) {
    setCode(value.slice())
  }

  async function runCode() {
    await Tone.start()
    console.log('Audio Ready')

    const now = Tone.now()
    conductor.now = now
    // conductor.play('D4')
    // conductor.play('F#4')
    // conductor.play('A4')
    // conductor.play('C5')
    // conductor.play('E5')
    // synth.triggerRelease(['D4', 'F#4', 'A4', 'C5', 'E5'], now + 4)

    walk.full(acorn.parse(code), (node) => {
      parseNode(node, conductor)
    })
  }

  return (
    <div className='app container__standard'>
      <Header title='Web Audio API' subtitle='Tariq Saiyad' />
      <div className='app__code-wrapper'>
        <CodeEditor code={code} onChange={onChange} />
        <button className='app__run text-small' onClick={runCode}>
          Run
        </button>
      </div>
    </div>
  )
}

export default hot(module)(App)
