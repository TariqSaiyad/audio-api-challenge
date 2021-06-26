import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Sketch from 'react-p5'
import Conductor from '../../classes/Conductor'
import './Visualiser.scss'
// http://hughsk.io/moire-1/
// https://github.com/willianjusten/awesome-audio-visualization
Visualiser.propTypes = {
  conductor: PropTypes.instanceOf(Conductor),
}

function Visualiser(props) {
  let x = 50
  let y = 50
  let i = 0

  const setup = (p5, canvasParentRef) => {
    let w = canvasParentRef.clientWidth
    let h = canvasParentRef.clientHeight
    // use parent to render the canvas in this ref
    // (without that p55 will render the canvas outside of your component)
    p5.createCanvas(w, h).parent(canvasParentRef)
    console.log(p5)
  }

  const draw = (p5) => {
    // p5.background(55)
    p5.textAlign(p5.CENTER, p5.BASELINE)

    // p5.ellipse(x, y, 70, 70)
    // // NOTE: Do not use setState in the draw function or in functions that are executed
    // // in the draw function...
    // // please use normal variables or class properties for these purposes
    // x += props.conductor.total

    // x >= p5.width ? (x = 0) : (x = x)

    for (let index = 0; index < props.conductor.words.length; index++) {
      p5.text(props.conductor.words[index], x, y, 60)
      x = p5.random(p5.width)
      y = p5.random(p5.height)
    }
    p5.noLoop()
  }

  return (
    <div className='visualiser'>
      <Sketch className={'react-window'} setup={setup} draw={draw} windowResized={(p) => p.setup()} />
    </div>
  )
}

export default Visualiser
