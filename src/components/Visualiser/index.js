import React from 'react'
import PropTypes from 'prop-types'
import Sketch from 'react-p5'
import Conductor from '../../classes/Conductor'

import './Visualiser.scss'
import Particle from '../../classes/Particle'
// http://hughsk.io/moire-1/
// https://github.com/willianjusten/awesome-audio-visualization

export default class Visualiser extends React.Component {
  constructor(props) {
    super(props)
    this.p = null
    this.state = {
      current: 0,
      currentWord: 0,
      count: 10,
      particles: [],
    }

    this.setup = this.setup.bind(this)
    this.draw = this.draw.bind(this)
    this.addParticle = this.addParticle.bind(this)
  }

  setup(p5, canvasParentRef) {
    let w = canvasParentRef.clientWidth
    let h = canvasParentRef.clientHeight
    p5.createCanvas(w, h).parent(canvasParentRef)
    const { conductor } = this.props
    const { particles, count } = this.state

    let x, y, hue
    for (let index = 0; index < conductor.words.length; index++) {
      x = p5.random(p5.width)
      y = p5.random(p5.height)
      hue = p5.round(p5.random(360))
      for (var i = 0; i < count; i++) {
        particles.push(new Particle(x, y, hue, p5.round(p5.random(100)), p5, conductor.words[index]))
      }
    }

    setTimeout(() => this.addParticle(p5), 1000)
  }

  draw(p5) {
    p5.background(0, 0, 10)
    p5.noStroke()

    for (let i = this.state.current; i < this.state.current + this.state.count + 10; i++) {
      this.p = this.state.particles[i]
      this.p.opacity = p5.round((this.p.charge / this.p.lifespan) * 100) / 100
      this.p.draw(p5, this.props.conductor.words[this.state.currentWord])
      this.p.update()
    }
  }

  addParticle(p5) {
    this.setState({ current: this.state.current + this.state.count, currentWord: this.state.currentWord + 1 })

    if (this.state.currentWord < this.props.conductor.words.length - this.state.count) {
      setTimeout(() => this.addParticle(p5), this.props.conductor.attackDuration * 1000)
    }
  }

  render() {
    return (
      <div className='visualiser'>
        <Sketch className={'react-window'} setup={this.setup} draw={this.draw} />
      </div>
    )
  }
}
Visualiser.propTypes = {
  conductor: PropTypes.instanceOf(Conductor),
}
