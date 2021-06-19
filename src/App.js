import React, { useState } from 'react'
import { hot } from 'react-hot-loader'
import CodeEditor from './components/CodeEditor'
import Header from './components/Header'
import { parseNode } from './utils/utils'
import * as Tone from 'tone'

import './scss/main.scss'
import './App.scss'
import Conductor from './classes/Conductor'
import { exampleCode } from './constants/constants'

function App() {
  const acorn = require('acorn')
  const walk = require('acorn-walk')
  const conductor = new Conductor()
  const [code, setCode] = useState(exampleCode[0])

  const [songTime, setSongTime] = useState(0)
  const [playing, setPlaying] = useState(false)

  function onChange(value) {
    setCode(value.slice())
  }

  async function runCode() {
    console.log(Tone.Transport.state)
    if (playing) {
      setPlaying(false)
      // Tone.Transport.stop()
      return
    }
    await Tone.start()

    await Tone.context.resume()

    console.log('Audio Ready')

    // conductor.play('D4')
    // conductor.play('F#4')
    // conductor.play('A4')
    // conductor.play('C5')
    // conductor.play('E5')
    // synth.triggerRelease(['D4', 'F#4', 'A4', 'C5', 'E5'], now + 4)

    walk.full(acorn.parse(code), (node) => {
      parseNode(node, conductor)
    })

    setPlaying(true)
    setSongTime(conductor.total + conductor.releaseDuration)
    conductor.play()
  }

  return (
    <div className='app container__standard'>
      <Header title='Web Audio API' subtitle='Tariq Saiyad' />
      <CodeEditor code={code} onChange={onChange} />
      <div className='app__info-wrapper'>
        <button className='app__run heading-small' onClick={runCode}>
          <svg viewBox='0 0 512 512'>{getIcon()}</svg>
        </button>
        {songTime} sec
      </div>
    </div>
  )

  function getIcon() {
    return playing ? (
      <path d='M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z'></path>
    ) : (
      <path d='M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z'></path>
    )
  }
}

export default hot(module)(App)
